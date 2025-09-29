import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CTABannerProps {
  headline: string
  subtext: string
  buttonText?: string
  buttonHref?: string
  className?: string
}

export function CTABanner({ 
  headline, 
  subtext, 
  buttonText = "Join the Pilot",
  buttonHref = "/contact",
  className = '' 
}: CTABannerProps) {
  return (
    <section className={`bg-gradient-to-br from-primary/5 via-background to-accent/10 py-16 md:py-20 ${className}`}>
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-section text-balance mb-6 font-serif text-text-primary">
            {headline}
          </h2>
          <p className="text-lead text-text-secondary mb-8 max-w-2xl mx-auto">
            {subtext}
          </p>
          <Link 
            href={buttonHref}
            className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {buttonText}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
