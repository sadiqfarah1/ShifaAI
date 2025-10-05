"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold text-teal-600">Shifa AI</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/mission" className="transition-colors hover:text-teal-600">
            Mission
          </Link>
          <Link href="/product" className="transition-colors hover:text-teal-600">
            Product
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-teal-600">
            Pricing
          </Link>
          <Link href="/security" className="transition-colors hover:text-teal-600">
            Security
          </Link>
          <Link href="/about" className="transition-colors hover:text-teal-600">
            About
          </Link>
        </nav>
        
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild>
            <Link href="/demo">Request Demo</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
