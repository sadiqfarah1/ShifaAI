import { Heart } from "lucide-react"
import { COPY } from "@/copy/shifa"
import Link from "next/link"

export function Credibility() {
  return (
    <section className="section bg-primary text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="h-6 w-6 text-white" />
              <h2 className="text-section text-white">
                {COPY.credibility.title}
              </h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-3xl mx-auto">
              <p className="text-lg text-white/90 italic leading-relaxed mb-4">
                "{COPY.credibility.quote}"
              </p>
              <div className="text-sm text-white/80">
                — {COPY.credibility.byline}
              </div>
            </div>

            <div className="text-white/90">
              <p className="text-sm">
                <strong>Security:</strong> {COPY.credibility.security}
              </p>
            </div>
          </div>

          <div id="pilot" className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4 text-center">
              Join the Shifa AI Pilot
            </h3>
            <p className="text-white/90 text-center mb-6">
              We're partnering with hospitals and care teams to validate impact on readmissions and follow-ups.
            </p>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <input
                type="text"
                placeholder="Organization"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <textarea
                placeholder="Tell us about your current care transition challenges..."
                rows={3}
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-white text-primary hover:bg-white/90 py-3 px-6 rounded-lg font-semibold transition-colors duration-200"
              >
                Request Pilot Access
              </button>
            </form>
            <p className="text-xs text-white/70 text-center mt-4">
              We respect your privacy. No PHI should be submitted in this form.
            </p>
          </div>

          <div className="text-center">
            <Link href="/mission" className="text-white hover:text-white/80 font-medium">
              Learn more about our mission →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
