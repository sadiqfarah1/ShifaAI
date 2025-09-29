import { UserPlus, MessageSquare, Brain, Bell } from "lucide-react"

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Enroll patients",
      description: "Upload discharge list or integrate with EHR. Patients receive opt-in SMS within 24 hours.",
      detail: "Simple CSV upload or API integration. No complex setup required."
    },
    {
      number: "02", 
      icon: MessageSquare,
      title: "Automated check-ins",
      description: "AI sends personalized follow-up messages at optimal intervals based on patient risk profile.",
      detail: "Messages adapt to patient responses and clinical guidelines."
    },
    {
      number: "03",
      icon: Brain,
      title: "AI triage & alert",
      description: "Real-time analysis classifies responses as Green, Amber, or Red risk with 95% accuracy.",
      detail: "Instant alerts sent to care team with actionable recommendations."
    }
  ]

  return (
    <section id="how-it-works" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-balance mb-4">
            How it works
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Three simple steps to reduce readmissions and improve patient outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-border transform translate-x-4" />
                )}
                
                <div className="card p-8 space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{step.number}</div>
                  </div>
                  
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                  <p className="text-sm text-muted-foreground italic">{step.detail}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
