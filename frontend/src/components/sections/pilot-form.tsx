"use client"

import { useState } from "react"
import { ArrowRight, Building2, User, Mail, MessageSquare, HelpCircle } from "lucide-react"

export function PilotForm() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    email: '',
    message: ''
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

  const faqs = [
    {
      question: "What data do you use in pilots?",
      answer: "We work exclusively with de-identified or simulated data during early pilots. No protected health information (PHI) is processed."
    },
    {
      question: "How long does a pilot last?",
      answer: "Pilots typically run for 30-60 days, giving us time to demonstrate value and gather feedback."
    },
    {
      question: "What's required from our organization?",
      answer: "Minimal setup required. We provide training and support throughout the pilot process."
    },
    {
      question: "When will you be HIPAA compliant?",
      answer: "We're building toward full HIPAA compliance and expect to achieve it within 6-12 months."
    }
  ]

  return (
    <section id="pilot" className="section bg-primary text-white">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section text-white mb-4">
              Partner With Us to Shape the Future of Post-Discharge Care
            </h2>
            <p className="text-lead text-white/90">
              We're seeking pilot partners to test Shifa AI with de-identified data while we build toward full HIPAA compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white/95 backdrop-blur-sm rounded-xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-surface text-text-primary placeholder:text-slate-400 border border-slate-200 focus:border-primary focus:ring-primary/30 focus:outline-none"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-text-primary mb-2">
                      <Building2 className="inline h-4 w-4 mr-2" />
                      Organization *
                    </label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-surface text-text-primary placeholder:text-slate-400 border border-slate-200 focus:border-primary focus:ring-primary/30 focus:outline-none"
                      placeholder="Your hospital or health system"
                    />
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-text-primary mb-2">
                      <User className="inline h-4 w-4 mr-2" />
                      Role *
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-surface text-text-primary placeholder:text-slate-400 border border-slate-200 focus:border-primary focus:ring-primary/30 focus:outline-none"
                      placeholder="Chief Nursing Officer, Care Coordinator, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
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
                      className="w-full px-4 py-3 rounded-lg bg-surface text-text-primary placeholder:text-slate-400 border border-slate-200 focus:border-primary focus:ring-primary/30 focus:outline-none"
                      placeholder="john@hospital.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      <MessageSquare className="inline h-4 w-4 mr-2" />
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-surface text-text-primary placeholder:text-slate-400 border border-slate-200 focus:border-primary focus:ring-primary/30 focus:outline-none resize-none"
                      placeholder="Tell us about your current challenges with post-discharge care..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white hover:bg-primaryDark inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  Request Pilot Access
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
            </div>

            {/* FAQ and Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Pilot FAQ</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <HelpCircle className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-white mb-2">{faq.question}</h4>
                          <p className="text-sm text-white/90">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-semibold text-white mb-4">What to Expect</h4>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sm text-white/90">15-minute discovery call to understand your needs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sm text-white/90">Custom pilot proposal tailored to your organization</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sm text-white/90">30-60 day pilot with full support and training</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <span className="text-sm text-white/90">Regular check-ins and feedback sessions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-amber-50/20 border border-amber-200/30 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 mb-2">No commitment required</h4>
                <p className="text-sm text-amber-700">
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
