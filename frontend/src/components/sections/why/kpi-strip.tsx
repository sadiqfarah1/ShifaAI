import { TrendingDown, Users, Rocket } from "lucide-react"

export function KPIStrip() {
  const items = [
    { icon: TrendingDown, label: "Modeled reduction", value: "Up to 40%" },
    { icon: Users, label: "Patient engagement", value: "High" },
    { icon: Rocket, label: "Time to pilot", value: "< 2 weeks" },
  ]

  return (
    <section className="section-sm bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 animate-stagger">
          {items.map((item, i) => {
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
      </div>
    </section>
  )
}
