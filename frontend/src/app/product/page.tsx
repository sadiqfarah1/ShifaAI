export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Product Features
          </h1>
          <p className="text-xl text-slate-600">
            Everything you need to reduce readmissions and improve patient outcomes.
          </p>
        </div>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Automated Follow-ups</h2>
            <p className="text-lg text-slate-600 mb-4">
              Scheduled SMS messages at 1, 3, 7, 14, and 30 days post-discharge. 
              Personalized templates based on patient condition and preferences.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">AI Triage</h2>
            <p className="text-lg text-slate-600 mb-4">
              Intelligent risk assessment using natural language processing. 
              Green/Yellow/Red classification with detailed rationale and recommended actions.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Real-time Alerts</h2>
            <p className="text-lg text-slate-600 mb-4">
              Instant notifications for high-risk patients. One-click actions for nurses. 
              Telephony integration for immediate response.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
