// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="border-t border-border/50 bg-background p-4">
        <div className="container mx-auto px-4 py-12">
          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-muted/30 rounded-lg flex items-center justify-center">
                  <span className="text-foreground text-sm font-medium">Z</span>
                </div>
                <span className="font-medium text-lg text-foreground">
                  Zeka Solutions
                </span>
              </div>
              <p className="text-sm text-muted-foreground max-w-xs">
                To Innovation and Beyond
              </p>
            </div>

            {/* Products */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Products</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="/products" className="hover:text-foreground transition-colors duration-200">
                    Engin
                  </a>
                </li>
                <li>
                  <a href="/products" className="hover:text-foreground transition-colors duration-200">
                    Marcus Intelligence
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Company</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="/careers" className="hover:text-foreground transition-colors duration-200">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-foreground transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-4">
              <h3 className="font-medium text-foreground">Legal</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © 2025 Zeka Solutions Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
  