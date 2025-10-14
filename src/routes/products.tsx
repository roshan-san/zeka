import { createFileRoute } from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import MarcusLogo from '../components/MarcusLogo'
import EnginLogo from '../components/EnginLogo'

export const Route = createFileRoute('/products')({
  component: ProductsPage,
})

function ProductCard({ 
  title, 
  description, 
  icon, 
  features, 
  delay = 0 
}: { 
  title: string
  description: string
  icon: string
  features: string[]
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
      <div className="space-y-8">
        <div className="flex items-start gap-6">
          <div className="w-12 h-12 bg-muted/30 rounded-lg flex items-center justify-center flex-shrink-0">
            {icon === 'Marcus' ? (
              <MarcusLogo className="w-7 h-7 text-foreground" />
            ) : icon === 'Engin' ? (
              <EnginLogo className="w-7 h-7" />
            ) : (
              <span className="text-lg font-medium text-foreground">{icon}</span>
            )}
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-foreground">
              {title}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <ul className="space-y-3 ml-18">
          {features.map((feature, index) => (
            <li 
              key={index}
              className="flex items-start gap-3 text-sm"
            >
              <div className="w-1 h-1 rounded-full bg-muted-foreground mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

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

function ProductsPage() {
  const enginFeatures = [
    "Connect investors with promising startups",
    "AI Based matchmaking",
    "Comprehensive profiles for founders and contributors",
    "Real-time collaboration tools and management dashboard",
  ]

  const marcusFeatures = [
    "AI-powered test automation",
    "Multi-agent testing workforce",
    "Intelligent bug detection",
    "Continuous integration support",
    "Performance optimization insights"
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
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
          <h1 className="text-5xl md:text-7xl font-light mb-8 text-foreground">
            Our Products
          </h1>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <ProductCard
            title="Engin"
            description="A comprehensive platform connecting investors, founders, contributors, and mentors. Streamline fundraising, find the right talent, and build successful partnerships."
            icon="Engin"
            features={enginFeatures}
            delay={200}
          />
          
          <ProductCard
            title="Marcus Intelligence"
            description="AI-first software development platform focused on testing with a multi-agent workforce. Automate testing processes and ensure code quality at scale."
            icon="Marcus"
            features={marcusFeatures}
            delay={600}
          />
        </div>

      </div>
    </div>
  )
}