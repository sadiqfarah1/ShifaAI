import Link from "next/link"
import { Calculator, ArrowRight, Target } from "lucide-react"

export function ROITeaser() {
  return (
    <section className="section">
      <div className="container">
        <div className="card-elevated p-8 lg:p-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Copy */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-section">Modeled impact potential</h2>
              </div>
              
              <p className="text-lead">
                Based on clinical research and industry benchmarks, we're modeling significant impact potential for hospitals that implement proactive post-discharge follow-up.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">Modeled to reduce readmissions by up to 40%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">Potential annual savings of $2M+ for mid-size hospitals</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">Pilot program to validate real-world impact</span>
                </div>
              </div>

              <Link href="#pilot" className="btn-primary inline-flex items-center">
                Join Pilot to Validate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Right Column - Quick Calculator */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Potential impact estimate</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Monthly discharges
                  </label>
                  <input 
                    type="number" 
                    defaultValue="1000"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Current readmission rate
                  </label>
                  <input 
                    type="number" 
                    defaultValue="15"
                    className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              </div>

              <div className="card p-4 bg-blue-50 border-blue-200">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-blue-800">$1.8M</div>
                  <div className="text-sm text-blue-700">Modeled annual savings potential</div>
                  <div className="text-xs text-blue-600">Based on 40% reduction model</div>
                </div>
              </div>

              <div className="text-xs text-muted-foreground">
                * These are modeled projections based on clinical research. Actual results will be validated through our pilot program.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
