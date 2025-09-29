import { Building2, Users, Navigation, Heart, TrendingDown, Rocket, Sparkles } from "lucide-react"

export function WhoItsFor() {
  const audiences = [
    {
      icon: Building2,
      title: "Hospitals & Health Systems",
      description: "Reduce costly readmissions, improve quality metrics, and meet value-based care goals with proactive patient follow-up.",
      benefits: ["Reduce readmissions", "Improve quality metrics", "Meet value-based care goals"]
    },
    {
      icon: Users,
      title: "Nursing & Care Teams",
      description: "Catch early warning signs faster with AI-powered triage and real-time alerts, so you can focus your time where it matters most.",
      benefits: ["Catch early warning signs", "AI-powered triage", "Real-time alerts"]
    },
    {
      icon: Navigation,
      title: "Care Coordinators & Navigators",
      description: "Automate outreach and streamline communication with patients while maintaining a personal, human touch.",
      benefits: ["Automate outreach", "Streamline communication", "Maintain human touch"]
    }
  ]

  const kpis = [
    { icon: TrendingDown, label: "Modeled reduction", value: "Up to 40%" },
    { icon: Rocket, label: "Time to pilot", value: "< 2 weeks" },
    { icon: Sparkles, label: "Built with", value: "clinician input" },
  ]

  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-balance mb-4">
            Built for the teams on the frontlines of patient care
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Shifa AI is designed for hospitals, clinics, and healthcare organizations that want to improve outcomes after discharge — without adding more work to already stretched teams.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {audiences.map((audience, index) => {
            const Icon = audience.icon
            return (
              <div key={index} className="card p-8 space-y-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{audience.title}</h3>
                </div>
                <p className="text-muted-foreground">{audience.description}</p>
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* KPI strip */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-12">
          {kpis.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="card p-4 flex items-center justify-between hover-lift">
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
                <div className="text-base font-semibold">{item.value}</div>
              </div>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-background rounded-xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold">For Every Care Setting</h3>
            </div>
            <p className="text-muted-foreground">
              Whether you're a large health system or a community clinic, Shifa AI gives you the tools to make every transition of care safer and more effective.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
