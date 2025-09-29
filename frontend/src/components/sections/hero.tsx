import Link from "next/link"
import { ArrowRight, Shield, Users, TrendingDown, CheckCircle, MessageSquare, Brain, Bell } from "lucide-react"
import { AlertCard } from "@/components/ui/alert-card"
import { KPIStat } from "@/components/ui/kpi-stat"

export function Hero() {
  const steps = [
    { n: 1, title: "Enroll", description: "Patient is enrolled at discharge.", icon: CheckCircle },
    { n: 2, title: "Check-Ins", description: "Automated SMS follow-ups begin.", icon: MessageSquare },
    { n: 3, title: "AI Triage", description: "Responses classified Green/Amber/Red.", icon: Brain },
    { n: 4, title: "Nurse Action", description: "Real-time alerts route to care team.", icon: Bell },
  ]

  return (
    <section className="section-lg bg-gradient-to-br from-primary/5 via-background to-muted/20">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero text-text-primary">
                Healing beyond discharge — powered by intelligent follow-up.
              </h1>
              <p className="text-lead text-text-secondary">
                Shifa AI helps care teams reduce preventable readmissions with automated check-ins, AI-powered triage, and real-time nurse alerts — using only de-identified data in early pilots.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary inline-flex items-center justify-center">
                Join the Pilot
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to Us
              </Link>
            </div>

            <p className="text-sm text-text-secondary">
              Built with input from nurses, care coordinators, and health system leaders.
            </p>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-2">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Shield className="h-4 w-4" />
                <span>Pre-HIPAA Pilot</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Users className="h-4 w-4" />
                <span>De-Identified Data</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <TrendingDown className="h-4 w-4" />
                <span>Up to 40% Reduction</span>
              </div>
            </div>
          </div>

          {/* Right Column - 3-Step Visualization */}
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-text-primary">How It Works</h3>
            </div>
            
            <div className="space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.n} className="flex items-center space-x-4 p-4 rounded-lg bg-white/95 text-text-secondary hover:bg-white transition-colors shadow-sm">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                          {step.n}
                        </span>
                        <span className="text-sm font-semibold text-text-primary">{step.title}</span>
                      </div>
                      <p className="text-sm text-text-secondary">{step.description}</p>
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden sm:block w-8 h-0.5 bg-primary/20" />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Patient Story */}
            <div className="mt-8 p-6 bg-white/95 text-text-secondary rounded-lg border border-slate-200 shadow-sm">
              <h4 className="font-semibold text-text-primary mb-3">Patient Story</h4>
              <p className="text-sm text-text-secondary italic">
                "Sarah was discharged after heart surgery. Our automated check-ins caught her medication confusion early — 
                a nurse called within 2 hours and prevented a potential readmission. This is the future of care transitions."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
