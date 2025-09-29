import { Heart, Users, Target, Lightbulb } from "lucide-react"

export function AboutUs() {
  return (
    <section className="section bg-muted/30">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-section text-balance mb-6">
              About Us
            </h2>
            <p className="text-lead max-w-3xl mx-auto">
              At Shifa AI, we're reimagining what happens after the hospital discharge.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Every year, millions of patients end up back in the hospital — not because their conditions are untreatable, but because our healthcare system struggles to stay connected once they go home.
                </p>
                <p className="text-muted-foreground">
                  We're a small but ambitious team of clinicians, engineers, and builders creating technology that bridges this critical gap. Our platform is designed to empower care teams with automated follow-ups, AI-powered risk detection, and real-time alerts — so they can act before a complication becomes a crisis.
                </p>
                <p className="text-muted-foreground">
                  Our mission is simple: make every transition of care safer, smarter, and more human. And we're inviting innovative hospitals, clinics, and care organizations to join us as early partners to shape the future of post-discharge care.
                </p>
              </div>

              <div className="bg-background rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Target className="h-5 w-5 text-primary mr-2" />
                  Our Approach
                </h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Built with real clinical input and feedback</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Designed to integrate seamlessly with existing workflows</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Focused on measurable impact on patient outcomes</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>Committed to transparency and continuous improvement</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Small Team</h3>
                  <p className="text-sm text-muted-foreground">Focused and agile</p>
                </div>
                <div className="text-center p-6 bg-background rounded-xl">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Clinical Focus</h3>
                  <p className="text-sm text-muted-foreground">Built by healthcare professionals</p>
                </div>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Join Our Journey</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  We're looking for forward-thinking healthcare organizations who want to be part of shaping the future of post-discharge care. If you're passionate about improving patient outcomes and reducing readmissions, we'd love to hear from you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
