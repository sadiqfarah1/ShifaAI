import Link from "next/link"
import { Calculator, ArrowRight } from "lucide-react"

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
                  <Calculator className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-section">Calculate your savings</h2>
              </div>
              
              <p className="text-lead">
                See how much Shifa AI can save your organization. Most hospitals see 
                a positive ROI within the first month.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">Average 40% reduction in readmissions</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">$2.3M average annual savings</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <span className="text-sm">Positive ROI in 30 days</span>
                </div>
              </div>

              <Link href="/roi" className="btn-primary inline-flex items-center">
                Calculate your ROI
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Right Column - Quick Calculator */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Quick estimate</h3>
              
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

              <div className="card p-4 bg-green-50 border-green-200">
                <div className="space-y-2">
                  <div className="text-2xl font-bold text-green-800">$1.8M</div>
                  <div className="text-sm text-green-700">Estimated annual savings</div>
                  <div className="text-xs text-green-600">Based on 40% reduction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
