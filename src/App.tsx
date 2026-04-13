import { lazy, Suspense, Component, ReactNode } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import FeaturedProject from '@/components/sections/FeaturedProject'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Kaggle from '@/components/sections/Kaggle'
import Contact from '@/components/sections/Contact'

const Scholar = lazy(() => import('@/components/sections/Scholar'))

class ScholarErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError() {
    return { hasError: true }
  }
  render() {
    if (this.state.hasError) {
      return <div className="py-24 text-center text-sm text-muted-foreground">Scholar data unavailable</div>
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
        <ScholarErrorBoundary>
          <Suspense fallback={<div className="py-24" />}>
            <Scholar />
          </Suspense>
        </ScholarErrorBoundary>
        <Kaggle />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
