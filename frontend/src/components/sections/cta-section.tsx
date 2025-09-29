import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"

export function CTASection() {
  return (
    <section id="talk-to-us" className="section bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-section text-balance">
              Ready to shape the future of post-discharge care?
            </h2>
            <p className="text-lead max-w-3xl mx-auto opacity-90">
              Join us as an early partner in building technology that reduces readmissions and empowers care teams. Let's start a conversation about how we can work together.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="#pilot" className="btn-secondary bg-background text-foreground hover:bg-muted inline-flex items-center justify-center">
              Join Pilot Program
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="#talk-to-us" className="btn-ghost text-primary-foreground hover:bg-primary-foreground/10 inline-flex items-center justify-center">
              <MessageCircle className="mr-2 h-4 w-4" />
              Talk to Us
            </Link>
          </div>

          <div className="flex items-center justify-center space-x-6 text-sm opacity-80">
            <span>✓ No commitment required</span>
            <span>✓ 15-minute discovery call</span>
            <span>✓ HIPAA compliant</span>
          </div>
        </div>
      </div>
    </section>
  )
}
