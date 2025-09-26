export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Pricing
          </h1>
          <p className="text-xl text-slate-600">
            Simple, transparent pricing designed for healthcare organizations of all sizes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-slate-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Essentials</h3>
            <p className="text-3xl font-bold text-teal-600 mb-4">Contact Us</p>
            <p className="text-slate-600 mb-6">Perfect for pilot programs</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Up to 1 unit
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                SMS follow-ups
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                AI triage
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Alert queue
              </li>
            </ul>
            <a href="/demo" className="block w-full bg-teal-600 text-white text-center py-3 rounded-md hover:bg-teal-700">
              Request Demo
            </a>
          </div>
          
          <div className="border border-slate-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Professional</h3>
            <p className="text-3xl font-bold text-teal-600 mb-4">Contact Us</p>
            <p className="text-slate-600 mb-6">For multi-unit organizations</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Multiple units
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Advanced analytics
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Custom templates
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Email alerts
              </li>
            </ul>
            <a href="/demo" className="block w-full bg-teal-600 text-white text-center py-3 rounded-md hover:bg-teal-700">
              Request Demo
            </a>
          </div>
          
          <div className="border border-slate-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Enterprise</h3>
            <p className="text-3xl font-bold text-teal-600 mb-4">Contact Us</p>
            <p className="text-slate-600 mb-6">For large health systems</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                SSO/SAML
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                BAAs available
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Dedicated support
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                Custom integrations
              </li>
            </ul>
            <a href="/demo" className="block w-full bg-teal-600 text-white text-center py-3 rounded-md hover:bg-teal-700">
              Request Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
