import { Layout } from "@/components/layout"
import { Heart, Target, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <Layout>
      <section className="section bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-section text-text-primary">Healing doesn't end at discharge — and neither should care.</h1>
              <p className="text-lead text-text-secondary">
                Shifa — meaning healing, cure, and relief in Arabic — embodies our mission to extend care beyond hospital walls. Technology should amplify the human touch, not replace it.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="card-elevated p-8 mb-12 bg-white">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-3 mb-6">
                  <Heart className="h-8 w-8 text-primary" />
                  <h2 className="text-2xl font-semibold text-text-primary">Our Mission</h2>
                </div>
                <p className="text-lg text-text-primary mb-6">
                  We help care teams stay connected when patients need them most, combining empathetic communication with intelligent automation to catch complications early and guide recovery at home.
                </p>
                <p className="text-text-secondary">
                  Built with care, for those who give it: Shifa AI was designed with input from clinicians, nurses, and health leaders. Every feature reflects real-world needs — from personal follow-ups to intuitive alerting — so no patient falls through the cracks.
                </p>
              </div>
            </div>

            {/* Founder's Note */}
            <div className="card p-8 mb-12 bg-primary/5 border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Built with care, for those who give it</h3>
                  <blockquote className="text-lg text-text-primary italic mb-4">
                    "Every readmission is more than a statistic — it's a life interrupted. We're building technology that helps care teams stay connected when patients need them most, combining empathy with intelligence to catch complications early and guide recovery at home."
                  </blockquote>
                  <p className="text-text-secondary">
                    Shifa AI was designed with input from clinicians, nurses, and health leaders. Every feature reflects real-world needs — from personal follow-ups to intuitive alerting — so no patient falls through the cracks.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Our Vision</h3>
                </div>
                <p className="text-text-secondary">
                  We're evolving into a fully HIPAA-compliant enterprise platform that transforms how healthcare organizations 
                  manage care transitions. Our goal is to become the standard for post-discharge follow-up care.
                </p>
              </div>

              <div className="card p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-text-primary">Our Approach</h3>
                </div>
                <p className="text-text-secondary">
                  We start with de-identified data in early pilots, building trust and proving value before moving to 
                  full HIPAA compliance. This approach ensures we get it right from day one.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <div className="card-elevated p-8 bg-gradient-to-r from-primary/5 to-accent/5">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Ready to Shape the Future?</h3>
                <p className="text-text-secondary mb-6">
                  Join us as we build the next generation of care transition technology.
                </p>
                <a href="/contact" className="btn-primary inline-flex items-center">
                  Join the Pilot
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
