import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
})

function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-2xl text-center px-4">
          <div className="w-20 h-20 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <svg className="w-10 h-10 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-6xl md:text-8xl font-light mb-6 text-foreground leading-tight">
            Thank you!
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            We've received your message and will get back to you within 24 hours. 
            We're excited to learn more about your project.
          </p>
          <a 
            href="/" 
            className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 text-lg font-medium"
          >
            Back to home
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Contact form hero section */}
      <section className="py-24 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <div>
                <h1 className="text-6xl md:text-8xl font-light mb-6 text-foreground leading-tight">
                  Let's talk
                </h1>
                <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                  Ready to build something amazing together? We'd love to hear about your project 
                  and explore how we can help bring your vision to life.
                </p>
                <form onSubmit={onSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <input 
                        className="w-full px-4 py-3 border border-border bg-background focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all duration-200 text-lg" 
                        placeholder="Your name"
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 border border-border bg-background focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all duration-200 text-lg" 
                        placeholder="your@email.com"
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                    <input 
                      className="w-full px-4 py-3 border border-border bg-background focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all duration-200 text-lg" 
                      placeholder="What's this about?"
                      required 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea 
                      rows={6} 
                      className="w-full px-4 py-3 border border-border bg-background focus:ring-2 focus:ring-foreground/20 focus:border-foreground transition-all duration-200 resize-none text-lg" 
                      placeholder="Tell us about your project..."
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    className="group inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 text-lg font-medium"
                  >
                    Send message
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Contact info */}
              <div className="space-y-8">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-medium text-foreground mb-3">Email us</h3>
                  <a href="mailto:hello@zekasolutions.com" className="text-lg text-muted-foreground hover:text-foreground transition-colors duration-200">
                    hello@zekasolutions.com
                  </a>
                </div>

                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-medium text-foreground mb-3">Our locations</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-foreground">Chennai, India</div>
                      <div className="text-muted-foreground">No. 6A, S. V Egambaram Street, Sholinganallur</div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground">Remote</div>
                      <div className="text-muted-foreground">Distributed team across timezones</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-medium text-foreground mb-3">Response time</h3>
                  <p className="text-muted-foreground">We typically respond within 24 hours</p>
                </div>

                <div className="p-6 border border-border rounded-lg">
                  <h3 className="text-xl font-medium text-foreground mb-3">Follow us</h3>
                  <div className="flex gap-6">
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
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
              Ready to get started?
            </h2>
            <p className="text-xl text-background/80 mb-12 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <a 
                href="/products" 
                className="group inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground hover:bg-background/90 transition-all duration-200 text-lg font-medium"
              >
                Explore our products
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a 
                href="/careers" 
                className="inline-flex items-center gap-2 px-8 py-4 border border-background/20 hover:bg-background/10 transition-all duration-200 text-lg font-medium"
              >
                Join our team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}