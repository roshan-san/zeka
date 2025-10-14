import { createFileRoute, Link } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import MarcusLogo from '../components/MarcusLogo'
import EnginLogo from '../components/EnginLogo'

export const Route = createFileRoute('/')({
  component: App,
})

function AnimatedCard({ 
  children, 
  delay = 0 
}: { 
  children: React.ReactNode
  delay?: number
}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`transform transition-all duration-1000 ${
        isVisible 
          ? 'translate-y-0 opacity-100' 
          : 'translate-y-8 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

function App() {

  return (
    <div className="min-h-screen">
      {/* Hero section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <AnimatedCard delay={200}>
              <h1 className="text-6xl md:text-8xl font-light mb-6 text-foreground leading-tight">
                We build software that matters
              </h1>
            </AnimatedCard>
            <AnimatedCard delay={400}>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12">
                Zeka Solutions is the parent company behind a growing family of practical, 
                intelligent software products that help businesses thrive.
              </p>
            </AnimatedCard>
            <AnimatedCard delay={600}>
              <div className="flex flex-wrap gap-6">
                <Link 
                  to="/products" 
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 text-lg font-medium"
                >
                  Explore our products
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border hover:bg-muted/50 transition-all duration-200 text-lg font-medium"
                >
                  Start a conversation
                </Link>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* About section */}
      <section className="py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Visual content */}
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl flex items-center justify-center">
                  <div className="text-8xl font-light text-foreground/20">Z</div>
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-12">
                <div>
                  <h2 className="text-4xl font-light mb-6 text-foreground">
                    Building the future, one product at a time
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We're not just another software company. We're builders, creators, and innovators 
                    who believe technology should solve real problems and create lasting value.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-foreground">Our Vision</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      A world where intelligent software empowers every business to reach its full potential.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-medium text-foreground">Our Mission</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      To build software that matters—products that solve real problems and create lasting impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-light mb-6 text-foreground">
                Our products
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="group p-8 border border-border hover:border-foreground/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center">
                    <EnginLogo className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground">Engin</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A comprehensive platform connecting investors, founders, contributors, and mentors. 
                  Streamline fundraising, find the right talent, and build successful partnerships.
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              <div className="group p-8 border border-border hover:border-foreground/20 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-foreground text-background rounded-lg flex items-center justify-center">
                    <MarcusLogo className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="text-2xl font-medium text-foreground">Marcus Intelligence</h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  QA testing for your APIs using AI. Automate testing, monitor performance, and ensure reliability
                </p>
                <Link 
                  to="/products" 
                  className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6">
              Ready to build something amazing?
            </h2>
            <p className="text-xl text-background/80 mb-12 max-w-2xl mx-auto">
              Let's talk about how our products can help your business reach its full potential.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link 
                to="/products" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground hover:bg-background/90 transition-all duration-200 text-lg font-medium"
              >
                Explore products
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 border border-background/20 hover:bg-background/10 transition-all duration-200 text-lg font-medium"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
