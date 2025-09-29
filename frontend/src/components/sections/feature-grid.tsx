import { 
  MessageSquare, 
  Brain, 
  Bell, 
  Shield, 
  BarChart3, 
  Database,
  CheckCircle
} from "lucide-react"

export function FeatureGrid() {
  const features = [
    {
      icon: MessageSquare,
      title: "Automated follow-ups",
      description: "Personalized SMS messages sent at optimal intervals based on patient risk profile and clinical guidelines.",
      benefits: ["98% delivery rate", "Multi-language support", "Customizable templates"]
    },
    {
      icon: Brain,
      title: "AI triage",
      description: "Real-time analysis of patient responses with Green, Amber, Red risk classification and confidence scores.",
      benefits: ["95% accuracy", "2-second processing", "Continuous learning"]
    },
    {
      icon: Bell,
      title: "Alert queue",
      description: "Prioritized notifications for care teams with patient context, risk level, and recommended actions.",
      benefits: ["Real-time alerts", "Mobile notifications", "Escalation rules"]
    },
    {
      icon: Shield,
      title: "Privacy & local mode",
      description: "HIPAA-compliant infrastructure with optional on-premise deployment for maximum data control.",
      benefits: ["HIPAA compliant", "SOC 2 Type II", "On-premise option"]
    },
    {
      icon: BarChart3,
      title: "Metrics & audit",
      description: "Comprehensive dashboards showing readmission rates, cost savings, and patient engagement metrics.",
      benefits: ["Real-time dashboards", "Custom reports", "Audit trails"]
    },
    {
      icon: Database,
      title: "EHR/FHIR ready",
      description: "Seamless integration with Epic, Cerner, Allscripts, and other major EHR systems via FHIR APIs.",
      benefits: ["FHIR compliant", "2-week integration", "Bidirectional sync"]
    }
  ]

  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-section text-balance mb-4">
            Everything you need to reduce readmissions
          </h2>
          <p className="text-lead max-w-3xl mx-auto">
            Comprehensive features designed specifically for post-discharge care management.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                
                <ul className="space-y-1">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="h-3 w-3 text-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
