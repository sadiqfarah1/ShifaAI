import { TriangleAlert, Target, TrendingDown, DollarSign } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-section text-text-primary">Why It Matters</h2>
          <p className="text-lead text-text-secondary mt-4">
            The readmission crisis is costing hospitals billions and putting patients at risk.
          </p>
        </div>

        {/* Crisis Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card-elevated p-8 text-center bg-red-50/40 border-red-200/60">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TrendingDown className="h-8 w-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-600">3.8M+</h3>
            </div>
            <p className="text-lg font-semibold text-text-primary mb-2">Patients Readmitted</p>
            <p className="text-text-secondary">within 30 days each year</p>
          </div>
          
          <div className="card-elevated p-8 text-center bg-amber-50/40 border-amber-200/60">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <DollarSign className="h-8 w-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-amber-600">$26B+</h3>
            </div>
            <p className="text-lg font-semibold text-text-primary mb-2">Annual Cost</p>
            <p className="text-text-secondary">to the U.S. healthcare system</p>
          </div>
        </div>

        {/* Current vs Modeled Reduction */}
        <div className="card-elevated p-8 mb-12 bg-white">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-4">Current vs. Modeled Reduction</h3>
            <p className="text-text-secondary">How automation can transform follow-up care</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-red-600">15%</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Current Readmission Rate</h4>
              <p className="text-sm text-text-secondary">Industry average for 30-day readmissions</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">9%</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">With Shifa AI</h4>
              <p className="text-sm text-text-secondary">Modeled 40% reduction in preventable readmissions</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger">
          {/* Problem */}
          <div className="card p-8 bg-red-50/40 border-red-200/60 hover-lift hover-glow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <TriangleAlert className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">The Problem</h3>
            </div>
            <div className="space-y-4 text-text-secondary">
              <p>
                Most readmissions aren't caused by new conditions — they happen because patients don't get the right follow-up care after leaving the hospital.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                  <span>Missed follow-ups due to manual processes</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                  <span>Overextended nurses and care teams</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                  <span>Early warning signs go unnoticed</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Solution */}
          <div className="card p-8 bg-primary/5 border-primary/20 hover-lift hover-glow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-text-primary">Our Solution</h3>
            </div>
            <div className="space-y-4 text-text-secondary">
              <p>
                Shifa AI automates post-discharge follow-ups with AI-powered triage, helping care teams catch problems earlier and intervene faster.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span>Automated patient check-ins via SMS</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span>AI-powered risk triage and alerts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span>Real-time nurse notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
