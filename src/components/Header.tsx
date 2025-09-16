import { Link, useLocation } from '@tanstack/react-router'

export default function Header() {
  const location = useLocation()
  
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <Link 
            to="/" 
            className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
          >
            <span className="font-medium text-lg text-foreground">
              Zeka Solutions
            </span>
          </Link>
          
          {/* Navigation */}
          <nav className="hidden sm:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/' 
                  ? 'text-foreground underline decoration-1 underline-offset-4' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/products' 
                  ? 'text-foreground underline decoration-1 underline-offset-4' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Products
            </Link>
            <Link 
              to="/careers" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/careers' 
                  ? 'text-foreground underline decoration-1 underline-offset-4' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors duration-200 ${
                location.pathname === '/contact' 
                  ? 'text-foreground underline decoration-1 underline-offset-4' 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button className="sm:hidden p-2 text-muted-foreground hover:text-foreground transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
