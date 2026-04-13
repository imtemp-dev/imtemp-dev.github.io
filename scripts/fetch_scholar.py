#!/usr/bin/env python3
"""
Fetch Google Scholar citation data for imtemp-dev and write to src/data/scholar.json.
Run weekly via GitHub Actions.
"""

import json
import sys
import tempfile
import os
from datetime import date
from pathlib import Path

SCHOLAR_USER_ID = "bz4JE30AAAAJ"
SCHOLAR_PROFILE_URL = f"https://scholar.google.com/citations?user={SCHOLAR_USER_ID}&hl=en"
OUTPUT_PATH = Path(__file__).parent.parent / "src" / "data" / "scholar.json"


def fetch_with_scholarly():
    from scholarly import scholarly, ProxyGenerator

    try:
        author = scholarly.search_author_id(SCHOLAR_USER_ID)
        author = scholarly.fill(author, sections=["basics", "indices", "counts"])
    except Exception as e:
        print(f"Warning: direct fetch failed ({e!r}), retrying with free proxy...", file=sys.stderr)
        pg = ProxyGenerator()
        pg.FreeProxies()
        scholarly.use_proxy(pg)
        author = scholarly.search_author_id(SCHOLAR_USER_ID)
        author = scholarly.fill(author, sections=["basics", "indices", "counts"])

    all_citations = author.get("citedby")
    if all_citations is None:
        raise ValueError("scholarly returned no 'citedby' field — fetch may be incomplete")

    h_index = author.get("hindex")
    i10_index = author.get("i10index")
    if h_index is None or i10_index is None:
        raise ValueError("scholarly returned incomplete index fields")

    # hindex5y / i10index5y are rolling 5-year windows (current_year - 4 to current_year)
    h_index_5y = author.get("hindex5y", h_index)
    i10_index_5y = author.get("i10index5y", i10_index)

    cites_per_year: dict = author.get("cites_per_year", {})

    # Sort by integer year to avoid lexicographic ordering issues with string keys
    citations_by_year = [
        {"year": str(y), "count": c}
        for y, c in sorted(cites_per_year.items(), key=lambda x: int(x[0]))
    ]

    # Compute since2021 citations from per-year data
    since2021_citations = sum(
        c for y, c in cites_per_year.items() if int(y) >= 2021
    )

    # Derive partial (current) year from data rather than assuming today's year
    all_years = [int(e["year"]) for e in citations_by_year]
    partial_year = str(max(all_years)) if all_years else str(date.today().year)

    # Dynamic "since YYYY" label matches what hindex5y actually represents
    since_year = str(date.today().year - 5)

    stats = [
        {"label": "Citations", "all": all_citations, "since2021": since2021_citations},
        {"label": "h-index", "all": h_index, "since2021": h_index_5y},
        {"label": "i10-index", "all": i10_index, "since2021": i10_index_5y},
    ]

    return stats, citations_by_year, partial_year, since_year


def main():
    print("Fetching Google Scholar data...")
    try:
        stats, citations_by_year, partial_year, since_year = fetch_with_scholarly()
    except Exception as e:
        print(f"ERROR: {e}", file=sys.stderr)
        sys.exit(1)

    payload = {
        "stats": stats,
        "citationsByYear": citations_by_year,
        "updatedAt": date.today().isoformat(),
        "partialYear": partial_year,
        "since5yLabel": f"Since {since_year}",
        "profileUrl": SCHOLAR_PROFILE_URL,
    }

    # Write atomically to avoid partial-write corruption
    tmp = OUTPUT_PATH.with_suffix(".json.tmp")
    try:
        tmp.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n")
        tmp.replace(OUTPUT_PATH)
    finally:
        if tmp.exists():
            tmp.unlink(missing_ok=True)

    print(f"Written to {OUTPUT_PATH}")
    print(f"Citations: {stats[0]['all']} | h-index: {stats[1]['all']} | since_year: {since_year}")


if __name__ == "__main__":
    main()
