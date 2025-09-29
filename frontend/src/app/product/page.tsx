import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageSquare, 
  Brain, 
  Bell, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  Clock,
  CheckCircle,
  ArrowRight,
  Heart,
  Smartphone,
  Mail,
  Phone
} from "lucide-react"

export default function ProductPage() {
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
              <Link href="/product" className="text-teal-600 font-medium">How It Works</Link>
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
      <section className="px-4 py-20 bg-gradient-to-br from-slate-50 to-teal-50">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="outline" className="text-teal-600 border-teal-200">
              <Zap className="h-4 w-4 mr-2" />
              AI-Powered Platform
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900">
              How Shifa AI Works
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our three-step process automates post-discharge care, 
              identifies at-risk patients, and alerts your care team in real-time.
            </p>
            <Button size="lg" className="text-lg px-8 py-4" asChild>
              <Link href="/demo">
                See It In Action
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="h-8 w-8 text-teal-600" />
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="text-teal-600">Step 1</Badge>
                <h3 className="text-2xl font-bold text-slate-900">Automated Follow-ups</h3>
                <p className="text-slate-600">
                  Send personalized SMS messages to discharged patients at optimal intervals. 
                  No manual work required.
                </p>
              </div>
              <Card className="border-teal-200 bg-teal-50">
                <CardContent className="p-4">
                  <div className="text-sm text-slate-700">
                    <div className="font-medium mb-2">Sample Message:</div>
                    <div className="bg-white p-3 rounded-lg text-left">
                      "Hi Sarah, this is Mercy Hospital. How are you feeling today? 
                      Please reply with any concerns or questions."
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <Brain className="h-8 w-8 text-teal-600" />
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="text-teal-600">Step 2</Badge>
                <h3 className="text-2xl font-bold text-slate-900">AI Risk Triage</h3>
                <p className="text-slate-600">
                  Our AI analyzes patient responses in real-time, classifying risk levels 
                  as Green, Yellow, or Red with 95% accuracy.
                </p>
              </div>
              <Card className="border-teal-200 bg-teal-50">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="green" className="text-xs">GREEN</Badge>
                      <span className="text-xs text-slate-600">95% confidence</span>
                    </div>
                    <div className="text-sm text-slate-700">
                      "Feeling great, no issues"
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="text-center space-y-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <Bell className="h-8 w-8 text-teal-600" />
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="text-teal-600">Step 3</Badge>
                <h3 className="text-2xl font-bold text-slate-900">Smart Alerts</h3>
                <p className="text-slate-600">
                  Instantly notify care teams of high-risk patients with actionable 
                  recommendations and patient context.
                </p>
              </div>
              <Card className="border-teal-200 bg-teal-50">
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge variant="red" className="text-xs">URGENT</Badge>
                      <Clock className="h-4 w-4 text-red-500" />
                    </div>
                    <div className="text-sm text-slate-700">
                      "Patient reports chest pain - immediate follow-up needed"
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Deep Dive */}
      <section className="px-4 py-20 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Powerful Features for Healthcare Teams
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Everything you need to reduce readmissions and improve patient outcomes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* AI Triage */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-2xl">Advanced AI Triage</CardTitle>
                <CardDescription className="text-base">
                  Our proprietary AI model analyzes patient responses with medical-grade accuracy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    95% accuracy in risk classification
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Real-time processing in under 2 seconds
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Continuous learning from your data
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    HIPAA-compliant data processing
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Multi-Channel Communication */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-2xl">Multi-Channel Messaging</CardTitle>
                <CardDescription className="text-base">
                  Reach patients through their preferred communication channels.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    SMS messaging with 98% delivery rate
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Voice calls for high-risk patients
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Email follow-ups and summaries
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Multi-language support
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Analytics Dashboard */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-2xl">Real-Time Analytics</CardTitle>
                <CardDescription className="text-base">
                  Track performance and ROI with comprehensive dashboards.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Readmission rate tracking
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Cost savings calculations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Patient engagement metrics
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Custom reporting and exports
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Security & Compliance */}
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-2xl">Enterprise Security</CardTitle>
                <CardDescription className="text-base">
                  Bank-level security with healthcare compliance built-in.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    HIPAA compliant infrastructure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    SOC 2 Type II certified
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    End-to-end encryption
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-teal-600 mr-3" />
                    Audit logs and compliance reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="px-4 py-20 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Seamless Integration
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Works with your existing systems. No complex setup required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Quick Setup</h3>
                <p className="text-slate-600 mb-6">
                  Get started in 15 minutes. Upload your patient list and begin sending follow-ups immediately.
                </p>
                <Badge variant="outline" className="text-teal-600">15 minutes</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">No EHR Required</h3>
                <p className="text-slate-600 mb-6">
                  Works independently or integrates with Epic, Cerner, and other major EHR systems.
                </p>
                <Badge variant="outline" className="text-teal-600">Optional</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Compliance Ready</h3>
                <p className="text-slate-600 mb-6">
                  Built-in HIPAA compliance, audit trails, and security controls from day one.
                </p>
                <Badge variant="outline" className="text-teal-600">HIPAA Ready</Badge>
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
              Ready to see Shifa AI in action?
            </h2>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Schedule a personalized demo and see how Shifa AI can reduce your readmission rates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                <Link href="/demo">
                  Schedule Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-teal-600" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
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
