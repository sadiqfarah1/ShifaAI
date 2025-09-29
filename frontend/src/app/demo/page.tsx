"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function DemoPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h1 className="text-3xl font-bold text-slate-900">Demo Request Received</h1>
          <p className="text-lg text-slate-600">
            Thank you for your interest in Shifa AI. Our team will contact you within 24 hours.
          </p>
          <Button asChild>
            <a href="/">Return to Home</a>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Request a Demo
          </h1>
          <p className="text-lg text-slate-600">
            See how Shifa AI can help your organization reduce readmissions.
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Schedule Your Demo</CardTitle>
            <CardDescription>
              Get a personalized 15-minute walkthrough of Shifa AI.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-slate-700 mb-2">
                  Organization *
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  required
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>

              <Button type="submit" className="w-full">
                Request Demo
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
