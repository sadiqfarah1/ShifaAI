import { CheckCircle, MessageSquare, Brain, Bell } from "lucide-react"

export function FlowSteps() {
  const steps = [
    { n: 1, title: "Enroll", description: "Patient is enrolled at discharge.", icon: CheckCircle },
    { n: 2, title: "Automated Check-Ins", description: "Personalized SMS follow-ups begin.", icon: MessageSquare },
    { n: 3, title: "AI Triage", description: "Responses classified Green/Amber/Red.", icon: Brain },
    { n: 4, title: "Nurse Action", description: "Real-time alerts route to care team.", icon: Bell },
  ]

  return (
    <section className="section bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h3 className="text-section text-balance">How it works</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-stagger">
          {steps.map((s) => {
            const Icon = s.icon
            return (
              <div key={s.n} className="card p-6 text-center hover-lift hover-glow">
                <div className="mx-auto w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="inline-flex items-center justify-center mb-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary mr-2">
                    {s.n}
                  </span>
                  <span className="text-sm font-semibold">{s.title}</span>
                </div>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
