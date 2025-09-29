import { TriangleAlert, Target } from "lucide-react"

export function ProblemSolution() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-section text-balance">Why we're building this</h2>
          <p className="text-lead max-w-3xl mx-auto text-muted-foreground mt-4">
            3.8 million patients are readmitted within 30 days each year — costing the U.S. healthcare system over $26 billion annually.
          </p>
        </div>

        {/* Patient story */}
        <div className="card-elevated p-8 mb-12 bg-surface">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-text-primary">
              “Fatima was discharged on a Friday… A week later, she was readmitted. With Shifa AI, an automated SMS caught warning signs in 48 hours — triggering a nurse intervention that prevented the readmission.”
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-stagger">
          {/* Problem */}
          <div className="card p-8 bg-red-50/40 border-red-200/60 hover-lift hover-glow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <TriangleAlert className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold">The Problem</h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Every year, over 3.8 million patients in the U.S. are readmitted to the hospital within 30 days — costing the healthcare system more than $26 billion annually. Most of these readmissions aren't caused by new conditions — they happen because patients don't get the right follow-up care after leaving the hospital.
              </p>
              <p>
                Nurses are overextended, care teams are understaffed, and follow-up processes are still largely manual. As a result, early warning signs are missed, and patients return to the hospital with complications that could have been prevented.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="card p-8 bg-primary/5 border-primary/20 hover-lift hover-glow">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Solution</h3>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We believe there's a better way. Shifa AI is built to close this critical gap in care. By combining automated post-discharge follow-ups, AI-powered risk triage, and real-time alerts, we help care teams catch problems earlier, intervene faster, and keep patients on the path to recovery.
              </p>
              <p>
                We're starting by partnering with forward-thinking hospitals and care organizations to pilot our platform, gather real-world feedback, and prove that smarter care transitions can significantly reduce readmissions — while giving clinicians more time to focus on what matters most: their patients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
