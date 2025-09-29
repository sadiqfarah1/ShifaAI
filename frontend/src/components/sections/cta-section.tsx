import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

export function CTASection() {
  return (
    <section className="section bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-section text-balance">
              Ready to reduce readmissions?
            </h2>
            <p className="text-lead max-w-3xl mx-auto opacity-90">
              See a 15-minute walkthrough of how Shifa AI can help your organization 
              improve patient outcomes and reduce costs.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/demo" className="btn-secondary bg-background text-foreground hover:bg-muted inline-flex items-center justify-center">
              Request a demo
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/product" className="btn-ghost text-primary-foreground hover:bg-primary-foreground/10 inline-flex items-center justify-center">
              <Play className="mr-2 h-4 w-4" />
              Watch overview
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <span>✓ No setup fees</span>
            <span>✓ 30-day pilot</span>
            <span>✓ HIPAA compliant</span>
          </div>
        </div>
      </div>
    </section>
  )
}
