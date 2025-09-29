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
    <div className="min-h-screen bg-background">
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
          `relative text-sm font-medium transition-colors ${isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"} ` +
          "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
        }
      >
        {label}
      </Link>
    )
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-surface/95 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <div className="container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-text-primary">Shifa AI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLink("/", "Home")}
            {navLink("/why", "Why")}
            {navLink("/who", "Who")}
            {navLink("/about", "About")}
            <Link href="/contact" className="btn-primary">Join Pilot</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <nav className="flex flex-col space-y-4">
              {navLink("/", "Home")}
              {navLink("/why", "Why")}
              {navLink("/who", "Who")}
              {navLink("/about", "About")}
              <Link href="/contact" className="btn-primary w-fit">Join Pilot</Link>
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
              <span className="text-lg font-bold">Shifa AI</span>
            </div>
            <p className="text-sm text-text-secondary">
              Healing beyond discharge. AI-powered care transition platform reducing hospital readmissions.
            </p>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions/care-transitions" className="text-text-secondary hover:text-text-primary transition-colors">Care Transitions</Link></li>
              <li><Link href="/product" className="text-text-secondary hover:text-text-primary transition-colors">Features</Link></li>
              <li><Link href="/roi" className="text-text-secondary hover:text-text-primary transition-colors">ROI Calculator</Link></li>
              <li><Link href="/pricing" className="text-text-secondary hover:text-text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-text-secondary hover:text-text-primary transition-colors">About</Link></li>
              <li><Link href="/careers" className="text-text-secondary hover:text-text-primary transition-colors">Careers</Link></li>
              <li><Link href="/blog" className="text-text-secondary hover:text-text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="text-text-secondary hover:text-text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/security" className="text-text-secondary hover:text-text-primary transition-colors">Security</Link></li>
              <li><Link href="/legal/privacy" className="text-text-secondary hover:text-text-primary transition-colors">Privacy</Link></li>
              <li><Link href="/legal/terms" className="text-text-secondary hover:text-text-primary transition-colors">Terms</Link></li>
              <li><Link href="/trust" className="text-text-secondary hover:text-text-primary transition-colors">Trust Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-text-secondary">
              © 2024 Shifa AI. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <span>HIPAA Compliant</span>
              <span>•</span>
              <span>SOC 2 Type II</span>
              <span>•</span>
              <span>HITRUST Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
