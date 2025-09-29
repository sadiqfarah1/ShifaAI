"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Logo } from "./Logo"

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
          <Link href="/" className="flex items-center space-x-2 hover:scale-105 transition-transform duration-200">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLink("/", "Platform")}
            {navLink("/why", "Why It Matters")}
            {navLink("/who", "Who We Help")}
            {navLink("/about", "Our Mission")}
            {navLink("/safety", "Safety & Ethics")}
            <Link href="/contact" className="btn-primary">
              Join Pilot
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-100 bg-surface/95 backdrop-blur">
            <nav className="px-4 py-4 space-y-4">
              {navLink("/", "Platform")}
              {navLink("/why", "Why It Matters")}
              {navLink("/who", "Who We Help")}
              {navLink("/about", "Our Mission")}
              {navLink("/safety", "Safety & Ethics")}
              <Link href="/contact" className="btn-primary w-full text-center block">
                Join Pilot
              </Link>
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
      <div className="container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-sm text-text-secondary max-w-xs">
              AI-powered care transitions that prevent readmissions and improve patient outcomes.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Platform</Link></li>
              <li><Link href="/why" className="hover:text-primary transition-colors">Why It Matters</Link></li>
              <li><Link href="/who" className="hover:text-primary transition-colors">Who We Help</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Join Pilot</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">Our Mission</Link></li>
              <li><Link href="/safety" className="hover:text-primary transition-colors">Safety & Ethics</Link></li>
              <li><a href="mailto:hello@shifa-ai.com" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@shifa-ai.com" className="hover:text-primary transition-colors">
                  hello@shifa-ai.com
                </a>
              </li>
              <li>
                <a href="tel:+1-555-0123" className="hover:text-primary transition-colors">
                  +1 (555) 012-3456
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-text-secondary">
              © 2024 Shifa AI. All rights reserved.
            </p>
            <div className="bg-amber-50 text-amber-900 border border-amber-200 rounded-md px-3 py-1 text-xs">
              🛡️ Compliance Notice: Shifa AI is currently in pre-HIPAA pilot development and does not process protected health information (PHI).
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
