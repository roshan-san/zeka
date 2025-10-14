import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/careers')({
  component: CareersPage,
})

function FloatingElement({
  children,
  delay = 0,
  duration = 3000
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
}) {
  return (
    <div
      className="absolute animate-pulse"
      style={{
        animation: `float ${duration}ms ease-in-out infinite`,
        animationDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

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
      className={`transform transition-all duration-1000 ${isVisible
          ? 'translate-y-0 opacity-100'
          : 'translate-y-8 opacity-0'
        }`}
    >
      {children}
    </div>
  )
}


function CareersPage() {
  useEffect(() => { }, [])

  return (
    <div className="min-h-screen p-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <FloatingElement delay={0} duration={4000}>
          <div className="w-32 h-32 rounded-full bg-primary/5 absolute top-20 left-10"></div>
        </FloatingElement>
        <FloatingElement delay={1000} duration={5000}>
          <div className="w-24 h-24 rounded-full bg-primary/10 absolute top-40 right-20"></div>
        </FloatingElement>
        <FloatingElement delay={2000} duration={3500}>
          <div className="w-16 h-16 rounded-full bg-primary/5 absolute bottom-40 left-1/4"></div>
        </FloatingElement>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Hero section */}
        <div className="mb-20">
          <AnimatedCard delay={200}>
            <h1 className="text-5xl md:text-7xl font-light mb-8 text-foreground">
              Careers
            </h1>
          </AnimatedCard>
          <AnimatedCard delay={400}>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We're just getting started. We don't have formal openings yet, but if you're excited about what we're building, get in touch.
            </p>
          </AnimatedCard>
        </div>

        {/* Why work with us */}
        <div className="mb-20">
          <AnimatedCard delay={600}>
            <div className="space-y-12">
              <h2 className="text-2xl font-medium text-foreground">Why work with us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">Growth</h3>
                  <p className="text-muted-foreground">Work on cutting-edge products and grow with a fast-moving company.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">Flexibility</h3>
                  <p className="text-muted-foreground">Remote-first culture with flexible hours and work arrangements.</p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-foreground">Impact</h3>
                  <p className="text-muted-foreground">Make a real difference in how businesses operate and grow.</p>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>

        {/* Get in touch */}
        <div className="mb-20">
          <AnimatedCard delay={800}>
            <div className="space-y-6">
              <h2 className="text-2xl font-medium text-foreground">Get in touch</h2>
              <p className="text-muted-foreground max-w-2xl">
                If you'd like to collaborate or join us early, send a short note about yourself and how you'd like to contribute.
              </p>
              <a
                href="mailto:hello@zekasolutions.com"
                className="text-foreground hover:text-primary transition-colors duration-200 text-lg font-medium underline decoration-1 underline-offset-4 hover:decoration-primary"
              >
                Say hello →
              </a>
            </div>
          </AnimatedCard>
        </div>
      </div>

      {/* Custom CSS for floating animation */}
      <style>
        {`@keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }`}
      </style>
    </div>
  )
}

