import { Shield, CheckCircle, Users } from "lucide-react"

export function TrustSection() {
  const trustItems = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "End-to-end encryption, audit logs, and business associate agreements."
    },
    {
      icon: CheckCircle,
      title: "Built with Clinicians",
      description: "Designed in collaboration with healthcare professionals and care teams."
    },
    {
      icon: Users,
      title: "Pilot Partners",
      description: "Working with forward-thinking hospitals to validate our approach."
    }
  ]

  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-balance mb-4">
            Built for healthcare, by healthcare
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Our platform is designed with healthcare-grade security and clinical input from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            )
          })}
        </div>

        {/* Logo cloud placeholder */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-8">Early pilot partners</p>
          <div className="flex items-center justify-center space-x-8 opacity-60">
            <div className="text-2xl font-bold text-muted-foreground">Coming Soon</div>
            <div className="text-2xl font-bold text-muted-foreground">Pilot Partners</div>
            <div className="text-2xl font-bold text-muted-foreground">Will Be</div>
            <div className="text-2xl font-bold text-muted-foreground">Announced</div>
          </div>
        </div>
      </div>
    </section>
  )
}
