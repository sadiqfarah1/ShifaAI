import { Layout } from "@/components/layout"
import { Heart, Target, Shield, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <Layout>
      <section className="section bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-section text-text-primary">Our Mission: Closing the Post-Discharge Gap</h1>
              <p className="text-lead text-text-secondary">
                We're building the future of care transitions — where no patient falls through the cracks.
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
                  Make every transition of care safer, smarter, and more human. We're creating technology to bridge the gap after discharge, 
                  ensuring patients get the support they need when they need it most.
                </p>
                <p className="text-text-secondary">
                  Most readmissions happen not because patients are untreatable — but because follow-up care is missed. 
                  Shifa AI exists to change that.
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
                  <h3 className="text-xl font-semibold text-text-primary mb-4">Founder's Note</h3>
                  <blockquote className="text-lg text-text-primary italic mb-4">
                    "No patient should return to the hospital simply because they weren't checked on. Shifa AI helps care teams 
                    catch warning signs early, intervene faster, and deliver better outcomes — while reducing the burden on staff."
                  </blockquote>
                  <p className="text-text-secondary">
                    We're partnering with health systems and care teams who share this vision. If you'd like to help shape the product 
                    and join our pilot, we'd love to hear from you.
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
