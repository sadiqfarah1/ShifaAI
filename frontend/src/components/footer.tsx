import Link from "next/link"
import { COPY } from "@/copy/shifa"

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-600">Shifa AI</h3>
            <p className="text-sm text-slate-600">
              Healing beyond discharge. Reducing readmissions through AI-powered care transitions.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/solutions/care-transitions" className="text-slate-600 hover:text-teal-600">Care Transitions</Link></li>
              <li><Link href="/product" className="text-slate-600 hover:text-teal-600">Features</Link></li>
              <li><Link href="/pricing" className="text-slate-600 hover:text-teal-600">Pricing</Link></li>
              <li><Link href="/security" className="text-slate-600 hover:text-teal-600">Security</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-600 hover:text-teal-600">About</Link></li>
              <li><Link href="/careers" className="text-slate-600 hover:text-teal-600">Careers</Link></li>
              <li><Link href="/blog" className="text-slate-600 hover:text-teal-600">Blog</Link></li>
              <li><Link href="/contact" className="text-slate-600 hover:text-teal-600">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal/privacy" className="text-slate-600 hover:text-teal-600">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="text-slate-600 hover:text-teal-600">Terms of Service</Link></li>
              <li><Link href="/trust" className="text-slate-600 hover:text-teal-600">Trust Center</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200">
          <div className="text-sm text-slate-600 text-center space-y-2">
            <p>© 2024 Shifa AI. All rights reserved.</p>
            <p className="text-xs text-slate-500">
              {COPY.footer.hipaa}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
