import { Heart, Users, AlertTriangle, Target } from "lucide-react"

export function WhyBuilding() {
  return (
    <section className="section bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section text-balance mb-6">
              Why we're building this
            </h2>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold">The Problem</h3>
                </div>
                <p className="text-muted-foreground">
                  Every year, over 3.8 million patients in the U.S. are readmitted to the hospital within 30 days — costing the healthcare system more than $26 billion annually. Most of these readmissions aren't caused by new conditions — they happen because patients don't get the right follow-up care after leaving the hospital.
                </p>
                <p className="text-muted-foreground">
                  Nurses are overextended, care teams are understaffed, and follow-up processes are still largely manual. As a result, early warning signs are missed, and patients return to the hospital with complications that could have been prevented.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Our Solution</h3>
                </div>
                <p className="text-muted-foreground">
                  We believe there's a better way. Shifa AI is built to close this critical gap in care. By combining automated post-discharge follow-ups, AI-powered risk triage, and real-time alerts, we help care teams catch problems earlier, intervene faster, and keep patients on the path to recovery.
                </p>
                <p className="text-muted-foreground">
                  We're starting by partnering with forward-thinking hospitals and care organizations to pilot our platform, gather real-world feedback, and prove that smarter care transitions can significantly reduce readmissions — while giving clinicians more time to focus on what matters most: their patients.
                </p>
              </div>
            </div>

            <div className="bg-muted/30 rounded-xl p-8 text-center">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Heart className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Make every transition of care safer, smarter, and more human. We're inviting innovative hospitals, clinics, and care organizations to join us as early partners to shape the future of post-discharge care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
