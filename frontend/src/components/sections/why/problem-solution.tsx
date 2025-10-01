import { TriangleAlert, Target, TrendingDown, DollarSign } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-section text-text-primary">Why It Matters</h2>
          <p className="text-lead text-text-secondary mt-4">
            Every readmission is more than a cost — it's a story interrupted.
          </p>
        </div>

        {/* Crisis Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="card-elevated p-8 text-center bg-red-50/40 border-red-200/60">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <TrendingDown className="h-8 w-8 text-red-600" />
              <h3 className="text-2xl font-bold text-red-600">1 in 5</h3>
            </div>
            <p className="text-lg font-semibold text-text-primary mb-2">Patients Readmitted</p>
            <p className="text-text-secondary">within 30 days — nearly 3.8M lives disrupted annually</p>
          </div>
          
          <div className="card-elevated p-8 text-center bg-amber-50/40 border-amber-200/60">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <DollarSign className="h-8 w-8 text-amber-600" />
              <h3 className="text-2xl font-bold text-amber-600">$26B+</h3>
            </div>
            <p className="text-lg font-semibold text-text-primary mb-2">Annual Cost</p>
            <p className="text-text-secondary">and countless families under stress</p>
          </div>
        </div>

        {/* Current vs Modeled Reduction */}
        <div className="card-elevated p-8 mb-12 bg-white">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-text-primary mb-4">The Human Impact</h3>
            <p className="text-text-secondary">When a patient returns within weeks, it's not just a data point — it's a disrupted life and a family under stress.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-red-600">15%</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">Current Readmission Rate</h4>
              <p className="text-sm text-text-secondary">Follow-up is often manual and inconsistent</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-green-600">9%</span>
              </div>
              <h4 className="font-semibold text-text-primary mb-2">With Shifa AI</h4>
              <p className="text-sm text-text-secondary">Gentle, consistent care that catches early warning signs</p>
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
              <h3 className="text-xl font-semibold text-text-primary">The Challenge</h3>
            </div>
            <div className="space-y-4 text-text-secondary">
              <p>
                When a patient returns within weeks, it's not just a data point — it's a disrupted life and a family under stress.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                  <span>Nurses juggle too many patients to catch every early warning sign</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                  <span>Subtle symptoms go unnoticed until they become emergencies</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-red-400 rounded-full flex-shrink-0 mt-2" />
                  <span>Follow-up is often manual and inconsistent</span>
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
              <h3 className="text-xl font-semibold text-text-primary">Our Mission</h3>
            </div>
            <div className="space-y-4 text-text-secondary">
              <p>
                Help care teams stay connected when patients need them most — after they leave the hospital.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span>Gentle, human-sounding check-ins (24h, 3d, 7d, 14d)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span>Clear risk classification (Green / Yellow / Red)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0 mt-2" />
                  <span>Real-time alerts that fit existing workflows</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary">
                  The result: fewer readmissions, stronger patient relationships, and safer recoveries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
