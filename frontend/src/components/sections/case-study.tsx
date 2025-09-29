import { Clock, MessageSquare, AlertTriangle, CheckCircle, ArrowRight } from "lucide-react"

export function CaseStudy() {
  const steps = [
    {
      icon: Clock,
      title: "48 hours post-discharge",
      description: "A patient with heart failure is discharged after a five-day stay.",
      details: "Patient returns home with discharge instructions and medication schedule."
    },
    {
      icon: MessageSquare,
      title: "Automated check-in",
      description: "Shifa AI automatically checks in via SMS: 'Are you experiencing increased swelling, shortness of breath, or weight gain?'",
      details: "Patient responds 'yes' to swelling."
    },
    {
      icon: AlertTriangle,
      title: "AI triage alert",
      description: "The system flags this as a 'Yellow – Concerning' alert and notifies the assigned nurse.",
      details: "Risk assessment completed in under 2 seconds."
    },
    {
      icon: CheckCircle,
      title: "Proactive intervention",
      description: "Within 2 hours, the care team contacts the patient, adjusts medications, and schedules an urgent follow-up visit.",
      details: "Prevents deterioration that could lead to ER visit or readmission."
    }
  ]

  return (
    <section className="section bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section text-balance mb-4">
              Case Example: Preventing a Heart Failure Readmission
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              Here's how Shifa AI could help prevent a readmission in real-world scenarios.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-lg font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                    <p className="text-sm text-muted-foreground italic">{step.details}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="flex-shrink-0 mt-6">
                      <ArrowRight className="h-5 w-5 text-muted-foreground" />
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <div className="mt-16 bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-800 mb-4">
                The Impact
              </h3>
              <p className="text-green-700 max-w-2xl mx-auto">
                In many cases, this type of proactive intervention prevents deterioration that would otherwise lead to an ER visit or readmission — reducing costs and improving outcomes without additional burden on staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
