import { MessageSquare, Brain, Bell, BarChart3 } from "lucide-react"
import { COPY } from "@/copy/shifa"
import Link from "next/link"

export function Features() {
  const features = [
    { icon: MessageSquare, title: "Automated Check-ins", description: "Day-1, day-3, week-1 SMS/voice follow-ups catch issues early." },
    { icon: Brain, title: "Risk Signals & Escalation", description: "Surface medication confusion or symptoms and alert the right clinician." },
    { icon: Bell, title: "Scheduling & Reminders", description: "Keep PCP visits, labs, and instructions on track." },
    { icon: BarChart3, title: "Insights Dashboard", description: "Real-time visibility into recovery and outreach status." }
  ]

  return (
    <section id="features" className="section">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-balance mb-4">
            {COPY.features.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
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

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            <strong>Note:</strong> {COPY.features.note}
          </p>
          <Link href="/product" className="text-primary hover:text-primary/80 font-medium">
            Learn more →
          </Link>
        </div>
      </div>
    </section>
  )
}
