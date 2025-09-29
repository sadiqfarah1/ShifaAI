import { TrendingDown, Users, BarChart3 } from "lucide-react"

export function ValuePillars() {
  const pillars = [
    {
      icon: TrendingDown,
      title: "Reduce readmissions",
      description: "Catch risk early with AI triage and nurse alerts. Modeled to prevent costly readmissions before they happen.",
      metric: "Modeled to reduce by 40%"
    },
    {
      icon: Users,
      title: "Empower care teams", 
      description: "One-click actions. No complex EHR integration to start. Simple workflows designed with clinical input.",
      metric: "Built with clinicians"
    },
    {
      icon: BarChart3,
      title: "Prove impact fast",
      description: "Pilot in 30 days. Transparent metrics. Clear evidence of impact on patient outcomes and costs.",
      metric: "Pilot-ready platform"
    }
  ]

  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-balance mb-6">
            Why we're building this
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Every year, over 3.8 million patients in the U.S. are readmitted to the hospital within 30 days — costing the healthcare system more than $26 billion annually. Most of these readmissions aren't caused by new conditions — they happen because patients don't get the right follow-up care after leaving the hospital.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 animate-stagger">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon
            return (
              <div key={index} className="card p-8 text-center space-y-4 hover-lift hover-glow">
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
