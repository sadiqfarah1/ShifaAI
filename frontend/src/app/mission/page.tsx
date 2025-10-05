import { Layout } from "@/components/layout"
import { Heart, Users, Shield, ArrowRight } from "lucide-react"
import { COPY } from "@/copy/shifa"
import Link from "next/link"

export default function MissionPage() {
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-hero font-serif text-text-primary leading-tight mb-6">
                {COPY.mission.title}
              </h1>
              <p className="text-lead text-text-secondary max-w-3xl mx-auto leading-relaxed">
                {COPY.mission.body}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-16">
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Human-centered</h3>
                <p className="text-muted-foreground">Clear, empathetic communication.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Clinically aligned</h3>
                <p className="text-muted-foreground">Built for nurse workflows.</p>
              </div>
              <div className="text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Privacy-first</h3>
                <p className="text-muted-foreground">HIPAA-aligned safeguards.</p>
              </div>
            </div>

            <div className="text-center">
              <Link 
                href="#pilot" 
                className="btn-primary inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Join the Shifa AI Pilot
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
