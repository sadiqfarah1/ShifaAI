import { UserPlus, MessageSquare, Brain, Bell, Shield, Lock } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Empathetic Follow-Ups",
      description: "Automated, human-sounding SMS check-ins at critical milestones (24h, 3d, 7d, 14d, 30d) keep patients connected without adding workload for staff.",
      detail: "Gentle check-ins that feel personal, not robotic."
    },
    {
      number: "02", 
      icon: Brain,
      title: "AI-Powered Triage",
      description: "Advanced risk classification (Green / Yellow / Red) surfaces early warning signs from patient messages and prioritizes urgent cases.",
      detail: "Intelligent analysis that catches what humans might miss."
    },
    {
      number: "03",
      icon: Bell,
      title: "Real-Time Alerts",
      description: "Nurses receive immediate alerts with context, helping them focus on the patients who need attention most — before complications escalate.",
      detail: "Smart notifications that fit seamlessly into existing workflows."
    },
    {
      number: "04",
      icon: Shield,
      title: "Seamless Integration",
      description: "Easily fits into existing workflows with minimal setup, designed to complement EHR systems and clinical operations.",
      detail: "Built for your team, not against your processes."
    },
    {
      number: "05",
      icon: Lock,
      title: "Privacy-First Design",
      description: "Built for early pilots with de-identified data and ready to evolve toward full HIPAA compliance as partnerships grow.",
      detail: "Security and compliance built in from day one."
    }
  ]

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-balance mb-4">
            A gentle check-in that changes outcomes.
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Shifa AI is a care-transition companion that automates follow-ups, flags early risk, and empowers clinicians to act before small concerns become emergencies.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border transform translate-x-4" />
                )}
                
                <div className="card p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div className="text-xl font-bold text-primary">{step.number}</div>
                  </div>
                  
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  <p className="text-xs text-muted-foreground italic">{step.detail}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Outcome statement */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-sm border border-slate-200">
            <h3 className="text-xl font-semibold text-text-primary mb-4">The Result</h3>
            <p className="text-lg text-text-secondary">
              Shifa AI transforms discharge from a one-time event into a continuum of care — improving outcomes, reducing readmissions, and strengthening trust between patients and providers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
