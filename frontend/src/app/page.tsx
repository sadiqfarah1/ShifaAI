import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Shield, 
  Users, 
  TrendingDown, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Heart,
  Zap,
  BarChart3
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-teal-600" />
              <span className="text-2xl font-bold text-slate-900">Shifa AI</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/product" className="text-slate-600 hover:text-teal-600 transition-colors">How It Works</Link>
              <Link href="/pricing" className="text-slate-600 hover:text-teal-600 transition-colors">Pricing</Link>
              <Link href="/security" className="text-slate-600 hover:text-teal-600 transition-colors">Security</Link>
              <Button asChild>
                <Link href="/demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 py-24 md:py-32 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-sm font-medium">
                  <Zap className="h-4 w-4 mr-2" />
                  AI-Powered Care Transition
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight">
                  Healing beyond
                  <span className="text-teal-600"> discharge.</span>
                </h1>
                <p className="text-xl text-slate-600 max-w-2xl leading-relaxed">
                  Reduce costly hospital readmissions by 40% with automated follow-ups, 
                  AI-powered risk triage, and real-time care team alerts.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4" asChild>
                  <Link href="/demo">
                    Request Free Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4" asChild>
                  <Link href="/product">See How It Works</Link>
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="text-sm text-slate-600 ml-2">4.9/5 from 200+ hospitals</span>
                </div>
              </div>
            </div>
            
            {/* Interactive Demo */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 space-y-6 border border-slate-200">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">AI Triage in Action</h3>
                  <p className="text-slate-600">See how we classify patient responses</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-green-50 border border-green-200">
                    <div className="flex items-center space-x-3">
                      <Badge variant="green" className="text-xs">GREEN</Badge>
                      <span className="text-sm font-medium text-slate-900">Feeling great, no issues</span>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-amber-50 border border-amber-200">
                    <div className="flex items-center space-x-3">
                      <Badge variant="yellow" className="text-xs">YELLOW</Badge>
                      <span className="text-sm font-medium text-slate-900">A little dizzy but otherwise ok</span>
                    </div>
                    <Clock className="h-5 w-5 text-amber-600" />
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-red-50 border border-red-200">
                    <div className="flex items-center space-x-3">
                      <Badge variant="red" className="text-xs">RED</Badge>
                      <span className="text-sm font-medium text-slate-900">Chest pain and shortness of breath</span>
                    </div>
                    <Shield className="h-5 w-5 text-red-600" />
                  </div>
                </div>

                <div className="text-center pt-4">
                  <p className="text-xs text-slate-500">Real-time alerts sent to care team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-teal-600">40%</div>
              <div className="text-sm text-slate-600">Reduction in Readmissions</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-teal-600">$2.3M</div>
              <div className="text-sm text-slate-600">Average Annual Savings</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-teal-600">15min</div>
              <div className="text-sm text-slate-600">Setup Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-teal-600">99.9%</div>
              <div className="text-sm text-slate-600">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="px-4 py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Why healthcare teams choose Shifa AI
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Built by healthcare professionals, for healthcare professionals. 
              Simple, secure, and proven to reduce readmissions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Reduce readmissions</CardTitle>
                <CardDescription className="text-base">
                  Catch risk early with AI triage and nurse alerts. Prevent costly readmissions before they happen.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Delight staff</CardTitle>
                <CardDescription className="text-base">
                  One-click actions. No EHR integration to start. Simple workflows that nurses actually want to use.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Prove ROI fast</CardTitle>
                <CardDescription className="text-base">
                  Pilot in 30 days. Transparent metrics. Clear evidence of impact on patient outcomes and costs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Trusted by healthcare leaders
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  &ldquo;Shifa AI reduced our readmission rate by 45% in just 3 months. 
                  The AI triage is incredibly accurate and our nurses love the simplicity.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-teal-600 font-semibold">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Sarah Mitchell</div>
                    <div className="text-sm text-slate-600">Chief Nursing Officer, Mercy Hospital</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  &ldquo;The ROI was immediate. We saved $1.8M in the first year while 
                  improving patient satisfaction scores. Implementation was seamless.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-teal-600 font-semibold">DR</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Dr. Robert Chen</div>
                    <div className="text-sm text-slate-600">Medical Director, Regional Medical Center</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-700 mb-4 italic">
                  &ldquo;Finally, a solution that works with our existing workflow. 
                  The AI catches things we might miss, and the alerts are perfectly timed.&rdquo;
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-teal-600 font-semibold">MJ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900">Maria Johnson</div>
                    <div className="text-sm text-slate-600">Care Coordinator, St. Mary&apos;s Health</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to reduce readmissions?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Join 200+ healthcare organizations already using Shifa AI to improve 
              patient outcomes and reduce costs. See a personalized demo in 15 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <Link href="/demo">
                  Request Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-teal-600" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
            <p className="text-teal-200 text-sm">
              ✓ No setup fees ✓ 30-day pilot ✓ HIPAA compliant
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
