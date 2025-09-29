import { TrendingDown, Users, BarChart3 } from "lucide-react"

export function ValuePillars() {
  const pillars = [
    {
      icon: TrendingDown,
      title: "Reduce readmissions",
      description: "Catch risk early with AI triage and nurse alerts. Prevent costly readmissions before they happen.",
      metric: "40% avg reduction"
    },
    {
      icon: Users,
      title: "Delight care teams", 
      description: "One-click actions. No EHR integration to start. Simple workflows that nurses actually want to use.",
      metric: "95% user satisfaction"
    },
    {
      icon: BarChart3,
      title: "Prove ROI fast",
      description: "Pilot in 30 days. Transparent metrics. Clear evidence of impact on patient outcomes and costs.",
      metric: "$2.3M avg savings"
    }
  ]

  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-balance mb-4">
            Why healthcare teams choose Shifa AI
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Built by healthcare professionals, for healthcare professionals. 
            Simple, secure, and proven to reduce readmissions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div key={index} className="card p-8 text-center space-y-4 hover:shadow-lg transition-shadow">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.description}</p>
                <div className="text-sm font-medium text-primary">{pillar.metric}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
