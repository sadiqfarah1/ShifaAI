"use client"

import { useState } from "react"
import { ArrowRight, Building2, User, Mail, Phone, MessageSquare } from "lucide-react"

export function PilotForm() {
  const [formData, setFormData] = useState({
    organization: '',
    name: '',
    email: '',
    phone: '',
    challenge: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="pilot" className="section bg-primary text-primary-foreground">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section text-balance mb-4">
              Join Our Pilot Program
            </h2>
            <p className="text-lead max-w-3xl mx-auto opacity-90">
              We're partnering with a small group of hospitals, care teams, and clinical innovators to shape the future of post-discharge care. If you're passionate about reducing readmissions and improving patient outcomes, we'd love to collaborate.
            </p>
            <p className="text-lg mt-4 opacity-80">
              Fill out the form below, and our team will reach out to schedule a conversation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-background/10 backdrop-blur-sm rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium mb-2">
                      <Building2 className="inline h-4 w-4 mr-2" />
                      Organization / Hospital Name *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background/20 border border-background/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/50"
                      placeholder="Your organization name"
                    />
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Your Name & Role *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background/20 border border-background/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/50"
                      placeholder="John Smith, Chief Nursing Officer"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      <Mail className="inline h-4 w-4 mr-2" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background/20 border border-background/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/50"
                      placeholder="john@hospital.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      <Phone className="inline h-4 w-4 mr-2" />
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background/20 border border-background/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/50"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="challenge" className="block text-sm font-medium mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-2" />
                      What's your biggest challenge with post-discharge follow-up?
                    </label>
                    <textarea
                      id="challenge"
                      name="challenge"
                      rows={4}
                      value={formData.challenge}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-background/20 border border-background/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-background/50 resize-none"
                      placeholder="Tell us about your current challenges..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-background text-primary hover:bg-background/90 inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Request Pilot Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What to expect</h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>15-minute discovery call to understand your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Custom pilot proposal tailored to your organization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>30-day pilot with full support and training</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span>Regular check-ins and feedback sessions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-background/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold mb-2">No commitment required</h4>
                <p className="text-sm opacity-80">
                  This is a discovery conversation. We'll only move forward if there's mutual interest and a good fit for both parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
