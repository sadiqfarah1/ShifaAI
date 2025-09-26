import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="px-4 py-24 md:py-32">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
                  Healing beyond discharge.
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl">
                  Shifa AI reduces costly hospital readmissions with automated follow-ups, AI triage, and real-time care team alerts.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/demo">Request a Demo</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/product">See How It Works</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Badge variant="green">Green</Badge>
                    <span className="text-sm">Feeling great, no issues</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="yellow">Yellow</Badge>
                    <span className="text-sm">A little dizzy but otherwise ok</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="red">Red</Badge>
                    <span className="text-sm">Chest pain and shortness of breath</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Why healthcare teams choose Shifa AI
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Reduce readmissions</CardTitle>
                <CardDescription>
                  Catch risk early with AI triage and nurse alerts. Prevent costly readmissions before they happen.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Delight staff</CardTitle>
                <CardDescription>
                  One-click actions. No EHR integration to start. Simple workflows that nurses actually want to use.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Prove ROI fast</CardTitle>
                <CardDescription>
                  Pilot in 30 days. Transparent metrics. Clear evidence of impact on patient outcomes and costs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-slate-900">
              Ready to reduce readmissions?
            </h2>
            <p className="text-lg text-slate-600">
              See a 15-minute walkthrough of how Shifa AI can help your organization improve patient outcomes and reduce costs.
            </p>
            <Button size="lg" asChild>
              <Link href="/demo">Request a Demo</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
