import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { createFileRoute, Link } from '@tanstack/react-router'
import { useState } from 'react'
import {
  Mail,
  MapPin,
  Clock,
  Linkedin,
  ArrowRight,
  CheckCircle2,
  Users,
  Package
} from 'lucide-react'

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
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="max-w-2xl text-center px-4">
          <div className="w-20 h-20 bg-foreground/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 className="w-10 h-10 text-foreground" />
          </div>
          <h1 className="text-6xl md:text-8xl font-light mb-6 text-foreground leading-tight">
            Thank you!
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            We've received your message and will get back to you within 24 hours. 
            We're excited to learn more about your project.
          </p>
          <Button asChild>
            <Link to="/">
              Back to home
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
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
                      <Label htmlFor="name" className="mb-2">Name</Label>
                      <Input 
                        id="name"
                        className="w-full"
                        placeholder="Your name"
                        required 
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="mb-2">Email</Label>
                      <Input 
                        id="email"
                        type="email"
                        className="w-full"
                        placeholder="your@email.com"
                        required 
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="mb-2">Subject</Label>
                    <Input 
                      id="subject"
                      className="w-full"
                      placeholder="What's this about?"
                      required 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="mb-2">Message</Label>
                    <Textarea 
                      id="message"
                      rows={6} 
                      className="w-full resize-none"
                      placeholder="Tell us about your project..."
                      required 
                    />
                  </div>
                  <Button
                    type="submit" 
                    className="group inline-flex items-center gap-2 px-8 py-4 text-lg font-medium"
                  >
                    Send message
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </form>
              </div>

              {/* Contact info */}
              <div className="space-y-8">
                <div className="p-6 border border-border rounded-lg flex items-center gap-4">
                  <Mail className="w-6 h-6 text-foreground" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-1">Email us</h3>
                    <Badge variant= "secondary"className="text-lg transition-colors duration-200">
                      <a href="mailto:info@zekasolutions.com" className="hover:underline">
                        info@zekasolutions.com
                      </a>
                    </Badge>
                  </div>
                </div>

                <div className="p-6 border border-border rounded-lg flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-foreground" />
                  <div>
                    <h3 className="text-xl font-medium mb-1">Our locations</h3>
                    <div className="flex gap-4 text-muted-foreground">
                      <Badge variant="secondary" className="font-medium">Chennai, India</Badge>
                      <Badge variant="secondary" className="font-medium">Remote</Badge>
                    </div>
                  </div>
                </div>

                <div className="p-6 border border-border rounded-lg flex items-center gap-4">
                  <Clock className="w-6 h-6 text-foreground" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-1">Response time</h3>
                    <p className="text-muted-foreground">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="p-6 border border-border rounded-lg flex items-center gap-4">
                  <Users className="w-6 h-6 text-foreground" />
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-1">Follow us</h3>
                    <div className="flex gap-6">
                      <a 
                        href="https://www.linkedin.com/company/zeka-solutions/" 
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-lg"
                      >
                        <Linkedin className="w-5 h-5" /> LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-6 flex items-center justify-center gap-2">
              <Package className="w-7 h-7" />
              Ready to get started?
            </h2>
            <p className="text-xl text-background/80 mb-12 max-w-2xl mx-auto">
              Let's discuss your project and see how we can help bring your vision to life.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button asChild variant="secondary" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium">
                <Link to="/products">
                  Explore our products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium border-background/20">
                <Link to="/careers">
                  <Users className="w-5 h-5" />
                  Join our team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}