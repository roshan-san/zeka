import { Link, useLocation } from '@tanstack/react-router'

export default function Header() {
  const location = useLocation()

  return (
    <header className="sticky backdrop-blur-lg w-full top-0 z-50 p-8">
      <div className='flex justify-between items-center'>

        {/* Logo and brand */}
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity duration-200"
        >
          <p className="text-3xl font-light">
            Zeka Solutions
          </p>
        </Link>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-8">
          <Link
            to="/"
            className={`text-sm font-medium transition-colors duration-200 ${location.pathname === '/'
                ? 'text-foreground underline decoration-1 underline-offset-4'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            Home
          </Link>
          <Link
            to="/products"
            className={`text-sm font-medium transition-colors duration-200 ${location.pathname === '/products'
                ? 'text-foreground underline decoration-1 underline-offset-4'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            Products
          </Link>
          <Link
            to="/careers"
            className={`text-sm font-medium transition-colors duration-200 ${location.pathname === '/careers'
                ? 'text-foreground underline decoration-1 underline-offset-4'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            Careers
          </Link>
          <Link
            to="/contact"
            className={`text-sm font-medium transition-colors duration-200 ${location.pathname === '/contact'
                ? 'text-foreground underline decoration-1 underline-offset-4'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            Contact
          </Link>
        </nav>
      </div>

    </header>
  )
}
