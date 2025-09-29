"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle, 
  Star, 
  ArrowRight, 
  Heart,
  Calculator,
  TrendingUp,
  DollarSign,
  Users,
  Zap
} from "lucide-react"

export default function PricingPage() {
  const [patients, setPatients] = useState(1000)
  const [readmissionRate, setReadmissionRate] = useState(15)
  const [avgCostPerReadmission, setAvgCostPerReadmission] = useState(15000)

  const annualReadmissions = Math.round((patients * readmissionRate) / 100)
  const annualReadmissionCost = annualReadmissions * avgCostPerReadmission
  const reductionRate = 0.4 // 40% reduction
  const savings = Math.round(annualReadmissionCost * reductionRate)
  const monthlySavings = Math.round(savings / 12)
  const shifaCost = Math.round(patients * 2.5) // $2.50 per patient per month
  const monthlyROI = Math.round((monthlySavings - shifaCost) / shifaCost * 100)

  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold text-slate-900">Shifa AI</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/product" className="text-slate-600 hover:text-teal-600 transition-colors">How It Works</Link>
              <Link href="/pricing" className="text-teal-600 font-medium">Pricing</Link>
              <Link href="/security" className="text-slate-600 hover:text-teal-600 transition-colors">Security</Link>
              <Button asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="outline" className="text-teal-600 border-teal-200">
              <Calculator className="h-4 w-4 mr-2" />
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Pay only for what you use. No setup fees, no long-term contracts. 
              Start with a 30-day pilot and see the ROI immediately.
            </p>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Calculate Your Savings
              </h2>
              <p className="text-xl text-slate-600">
                See how much Shifa AI can save your organization
              </p>
            </div>

            <Card className="border-0 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Calculator className="h-6 w-6 mr-3 text-teal-600" />
                  ROI Calculator
                </CardTitle>
                <CardDescription>
                  Adjust the values below to see your potential savings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Monthly Discharges
                    </label>
                    <input
                      type="number"
                      value={patients}
                      onChange={(e) => setPatients(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Current Readmission Rate (%)
                    </label>
                    <input
                      type="number"
                      value={readmissionRate}
                      onChange={(e) => setReadmissionRate(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Avg Cost per Readmission ($)
                    </label>
                    <input
                      type="number"
                      value={avgCostPerReadmission}
                      onChange={(e) => setAvgCostPerReadmission(Number(e.target.value))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-slate-900">{annualReadmissions}</div>
                      <div className="text-sm text-slate-600">Annual Readmissions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">${annualReadmissionCost.toLocaleString()}</div>
                      <div className="text-sm text-slate-600">Current Annual Cost</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">${savings.toLocaleString()}</div>
                      <div className="text-sm text-slate-600">Annual Savings</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-teal-600">{monthlyROI}%</div>
                      <div className="text-sm text-slate-600">Monthly ROI</div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-slate-600 mb-4">
                    Shifa AI typically reduces readmissions by 40% at $2.50 per patient per month
                  </p>
                  <Button size="lg" asChild>
                    <Link href="/demo">
                      Start Your Pilot
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="px-4 py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Start with a pilot, scale as you grow. All plans include our core features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Pilot Plan */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <Badge variant="outline" className="text-teal-600 mb-4">30-Day Pilot</Badge>
                <CardTitle className="text-3xl font-bold">Pilot</CardTitle>
                <CardDescription className="text-lg">
                  Perfect for testing and validation
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">Free</span>
                  <span className="text-slate-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Up to 100 patients
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    AI triage & alerts
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Basic analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Email support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    HIPAA compliant
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/demo">Start Pilot</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Professional Plan */}
            <Card className="border-2 border-teal-500 shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-teal-600 text-white px-4 py-1">Most Popular</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Professional</CardTitle>
                <CardDescription className="text-lg">
                  For growing healthcare organizations
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">$2.50</span>
                  <span className="text-slate-600">/patient/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Up to 5,000 patients
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Advanced AI triage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Real-time analytics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    API access
                  </li>
                </ul>
                <Button className="w-full" asChild>
                  <Link href="/demo">Get Started</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-bold">Enterprise</CardTitle>
                <CardDescription className="text-lg">
                  For large health systems
                </CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-slate-900">Custom</span>
                  <span className="text-slate-600">/month</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Unlimited patients
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Custom AI models
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Advanced reporting
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    On-premise deployment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    SLA guarantees
                  </li>
                </ul>
                <Button className="w-full" variant="outline" asChild>
                  <Link href="/demo">Contact Sales</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    How quickly can we see results?
                  </h3>
                  <p className="text-slate-600">
                    Most organizations see a 20-30% reduction in readmissions within the first month, 
                    with full 40% reduction typically achieved by month 3.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Do you integrate with our EHR?
                  </h3>
                  <p className="text-slate-600">
                    Shifa AI works independently and can integrate with Epic, Cerner, Allscripts, 
                    and other major EHR systems. Integration is optional and can be completed in 2-4 weeks.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    What's included in the pilot?
                  </h3>
                  <p className="text-slate-600">
                    The 30-day pilot includes full access to all features, setup assistance, 
                    training for your team, and a detailed ROI report at the end.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Is there a setup fee or long-term contract?
                  </h3>
                  <p className="text-slate-600">
                    No setup fees and no long-term contracts. You can cancel anytime with 30 days notice. 
                    We're confident you'll see the value immediately.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to reduce your readmission costs?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Start your free 30-day pilot today. No setup fees, no long-term contracts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <Link href="/demo">
                  Start Free Pilot
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-teal-600" asChild>
                <Link href="/product">Learn More</Link>
              </Button>
            </div>
            <p className="text-teal-200 text-sm">
              ✓ Free 30-day pilot ✓ No setup fees ✓ Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-teal-400" />
                <span className="text-xl font-bold">Shifa AI</span>
              </div>
              <p className="text-slate-400">
                AI-powered care transition platform reducing hospital readmissions.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/product" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/demo" className="hover:text-white transition-colors">Demo</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/security" className="hover:text-white transition-colors">Security</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Compliance</h3>
              <ul className="space-y-2 text-slate-400">
                <li>HIPAA Compliant</li>
                <li>SOC 2 Type II</li>
                <li>HITRUST Certified</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Shifa AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
