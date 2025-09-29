"use client"

import Link from "next/link"
import { Heart, Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-text-primary antialiased">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navLink = (href: string, label: string) => {
    const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href)
    return (
      <Link
        href={href}
        className={
          `relative text-sm font-medium transition-colors ${isActive ? "text-primary underline underline-offset-4" : "text-text-primary hover:text-primary"} ` +
          "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
        }
      >
        {label}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-text-primary">Shifa AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLink("/", "Platform")}
            {navLink("/why", "Why It Matters")}
            {navLink("/who", "Who We Help")}
            {navLink("/about", "Our Mission")}
            <Link href="/contact" className="btn-primary">Join the Pilot</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-primary hover:text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 py-4">
            <nav className="flex flex-col space-y-4">
              {navLink("/", "Platform")}
              {navLink("/why", "Why It Matters")}
              {navLink("/who", "Who We Help")}
              {navLink("/about", "Our Mission")}
              <Link href="/contact" className="btn-primary w-fit">Join the Pilot</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-surface text-text-secondary">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Company */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-text-primary">Shifa AI</span>
            </div>
            <p className="text-sm text-text-secondary">
              Healing beyond discharge. AI-powered care transition platform reducing hospital readmissions.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions/care-transitions" className="text-text-secondary hover:text-primary transition-colors">Care Transitions</Link></li>
              <li><Link href="/product" className="text-text-secondary hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/roi" className="text-text-secondary hover:text-primary transition-colors">ROI Calculator</Link></li>
              <li><Link href="/pricing" className="text-text-secondary hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-text-secondary hover:text-primary transition-colors">Our Mission</Link></li>
              <li><Link href="/careers" className="text-text-secondary hover:text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-text-secondary hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">Join the Pilot</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-text-primary">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/security" className="text-text-secondary hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="/legal/privacy" className="text-text-secondary hover:text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/legal/terms" className="text-text-secondary hover:text-primary transition-colors">Terms</Link></li>
              <li><Link href="/trust" className="text-text-secondary hover:text-primary transition-colors">Trust Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-200 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-text-secondary">
              © 2024 Shifa AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <span>Pre-HIPAA Pilot</span>
              <span>•</span>
              <span>De-Identified Data Only</span>
              <span>•</span>
              <span>Enterprise Security</span>
            </div>
          </div>
          
          {/* Compliance Notice */}
          <div className="mt-6 p-4 bg-amber-50 text-amber-900 border border-amber-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-amber-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-amber-900">🛡️ Compliance Notice</h4>
                <p className="text-xs text-amber-800 mt-1">
                  Shifa AI is currently in pre-HIPAA pilot development and does not process protected health information (PHI). 
                  Our platform is designed with enterprise-grade security and HIPAA alignment in mind, and we work exclusively 
                  with de-identified or simulated data during early pilots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
