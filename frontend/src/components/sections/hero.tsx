"use client"

import Link from "next/link"
import { Logo } from "../Logo"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with healing gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10" />
      
      {/* Floating healing elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/15 rounded-full blur-md animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Arabic-inspired curve accent */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-5">
        <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
          <path
            d="M200 50C300 100 350 200 300 300C250 350 150 300 100 200C50 100 100 50 200 50Z"
            fill="url(#arabicGradient)"
            className="animate-pulse-soft"
          />
          <defs>
            <linearGradient id="arabicGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0D9488" />
              <stop offset="100%" stopColor="#5EEAD4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            {/* Tagline */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse-soft" />
              <span>Care transitions reimagined</span>
            </div>

            {/* Main headline */}
            <h1 className="text-hero font-serif text-text-primary leading-tight">
              Healing beyond discharge —{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                AI-powered care transitions
              </span>{" "}
              that prevent readmissions.
            </h1>

            {/* Subheadline */}
            <p className="text-lead text-text-secondary max-w-2xl leading-relaxed">
              Shifa AI helps care teams catch complications earlier, automate follow-ups, 
              and keep patients on the path to recovery — using only de-identified data 
              in early pilots.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Join the Pilot
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link 
                href="mailto:hello@shifa-ai.com?subject=Pilot Inquiry" 
                className="btn-secondary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-200"
              >
                Talk to Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                <span>Pre-HIPAA Pilot</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span>De-Identified Data</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span>Up to 40% Reduction</span>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative animate-scale-in" style={{ animationDelay: '0.4s' }}>
            {/* Dashboard mockup */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-6 border border-slate-200">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Logo size="sm" />
                  <span className="font-semibold text-text-primary">Care Dashboard</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-primary/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary">127</div>
                  <div className="text-sm text-text-secondary">Active Patients</div>
                </div>
                <div className="bg-accent/5 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-accent">23</div>
                  <div className="text-sm text-text-secondary">Alerts Today</div>
                </div>
              </div>

              {/* Patient list */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border-l-4 border-red-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-text-primary">Patient #001</div>
                      <div className="text-xs text-text-secondary">Chest pain reported</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-red-600">HIGH</span>
                </div>
                
                <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-text-primary">Patient #002</div>
                      <div className="text-xs text-text-secondary">Swelling concerns</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-yellow-600">MED</span>
                </div>

                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg border-l-4 border-green-400">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-green-400 rounded-full" />
                    </div>
                    <div>
                      <div className="font-medium text-sm text-text-primary">Patient #003</div>
                      <div className="text-xs text-text-secondary">Feeling well</div>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-green-600">LOW</span>
                </div>
              </div>

              {/* Healing pulse animation */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse-soft" />
            </div>

            {/* Floating elements around dashboard */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary/20 rounded-full animate-float" />
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
          </div>
        </div>

        {/* Bottom section with patient story */}
        <div className="mt-24 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 border border-slate-200 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Patient Story</h3>
                  <p className="text-text-secondary italic leading-relaxed">
                    "Sarah was discharged after heart surgery. Our automated check-ins caught her medication 
                    confusion early — a nurse called within 2 hours and prevented a potential readmission. 
                    This is the future of care transitions."
                  </p>
                  <div className="mt-3 text-sm text-text-secondary">
                    — Dr. Maria Rodriguez, Chief Medical Officer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
