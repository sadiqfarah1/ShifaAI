import { Building2, Users, Navigation, Heart, TrendingDown, Rocket, Sparkles } from "lucide-react"

export function WhoItsFor() {
  const audiences = [
    {
      icon: Building2,
      title: "Hospitals & Health Systems",
      description: "Reduce penalties and costs while improving quality metrics with proactive patient follow-up.",
      benefits: ["Reduce readmission penalties", "Improve quality metrics", "Meet value-based care goals"]
    },
    {
      icon: Users,
      title: "Nurses & Care Teams",
      description: "Catch risks early with AI-powered triage and real-time alerts, so you can focus where it matters most.",
      benefits: ["Catch early warning signs", "AI-powered risk triage", "Real-time alerts"]
    },
    {
      icon: Navigation,
      title: "Care Coordinators",
      description: "Automate outreach and streamline communication while maintaining a personal, human touch.",
      benefits: ["Automate patient outreach", "Streamline communication", "Maintain human touch"]
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
          <h2 className="text-section text-text-primary">
            Who We Help
          </h2>
          <p className="text-lead text-text-secondary">
            Shifa AI is designed for healthcare organizations that want to improve outcomes after discharge — 
            without adding more work to already stretched teams.
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
                  <h3 className="text-xl font-semibold text-text-primary">{audience.title}</h3>
                </div>
                <p className="text-text-secondary">{audience.description}</p>
                <ul className="space-y-2">
                  {audience.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
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
                  <div className="text-sm text-text-secondary">{item.label}</div>
                </div>
                <div className="text-base font-semibold text-text-primary">{item.value}</div>
              </div>
            )
          })}
        </div>

        {/* Forward-looking outcomes */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-sm border border-slate-200">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Heart className="h-6 w-6 text-primary" />
              <h3 className="text-lg font-semibold text-text-primary">Forward-Looking Modeled Outcomes</h3>
            </div>
            <p className="text-text-secondary mb-6">
              Based on early pilot data and industry research, we model significant improvements in care transition outcomes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">40%</div>
                <div className="text-sm text-text-secondary">Reduction in preventable readmissions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">60%</div>
                <div className="text-sm text-text-secondary">Faster response to patient concerns</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">25%</div>
                <div className="text-sm text-text-secondary">Reduction in care team workload</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
