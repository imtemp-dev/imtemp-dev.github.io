import { lazy, Suspense, Component, ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import FeaturedProject from '@/components/sections/FeaturedProject'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Kaggle from '@/components/sections/Kaggle'
import Contact from '@/components/sections/Contact'

const FeaturedResearch = lazy(() => import('@/components/sections/FeaturedResearch'))
const Scholar = lazy(() => import('@/components/sections/Scholar'))

class SectionErrorBoundary extends Component<{ children: ReactNode; name: string }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; name: string }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return <div className="py-24 text-center text-sm text-muted-foreground">{this.props.name} unavailable</div>
    }
    return this.props.children
  }
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <FeaturedProject />
        <Projects />
        <Skills />
        <SectionErrorBoundary name="Research">
          <Suspense fallback={<div className="py-24" />}>
            <FeaturedResearch />
          </Suspense>
        </SectionErrorBoundary>
        <SectionErrorBoundary name="Scholar">
          <Suspense fallback={<div className="py-24" />}>
            <Scholar />
          </Suspense>
        </SectionErrorBoundary>
        <Kaggle />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
