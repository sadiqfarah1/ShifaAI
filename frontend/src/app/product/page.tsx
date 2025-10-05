import { Layout } from "@/components/layout"
import { MessageSquare, Brain, Bell, BarChart3, TrendingDown, Users, Clock } from "lucide-react"
import { COPY } from "@/copy/shifa"

export default function ProductPage() {
  const features = [
    {
      icon: MessageSquare,
      title: "Automated Check-ins",
      description: "Personalized day-1, day-3, and week-1 follow-ups. Patients reply by SMS; issues triaged automatically."
    },
    {
      icon: Brain,
      title: "Risk Signals & Escalation", 
      description: "Medication confusion? Worsening symptoms? We flag risk and route to the right nurse or care manager."
    },
    {
      icon: Bell,
      title: "Scheduling & Reminders",
      description: "Proactive reminders for PCP/specialist visits, labs, and instructions."
    },
    {
      icon: BarChart3,
      title: "Insights Dashboard",
      description: "Real-time visibility for nurses and care managers; save time and improve decisions."
    }
  ]

  const outcomes = [
    {
      icon: TrendingDown,
      title: "↓ Readmissions",
      description: "Designed to reduce preventable 30-day readmissions for targeted conditions."
    },
    {
      icon: Users,
      title: "↑ Follow-up completion", 
      description: "More patients make it to PCP/specialist on time."
    },
    {
      icon: Clock,
      title: "Time back to nurses",
      description: "Automations reduce manual outreach."
    }
  ]

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-hero font-serif text-text-primary leading-tight mb-6">
              {COPY.features.title}
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={index} className="card p-6 space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="bg-muted/30 rounded-xl p-8 mb-16">
            <div className="text-center">
              <p className="text-muted-foreground">
                <strong>Note:</strong> {COPY.features.note}
              </p>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-section text-balance mb-6">
              What success looks like
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon
              return (
                <div key={index} className="card p-8 text-center space-y-4 hover-lift hover-glow">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{outcome.title}</h3>
                  <p className="text-muted-foreground">{outcome.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}
