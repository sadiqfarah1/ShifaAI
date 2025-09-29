import { Layout } from "@/components/layout"

export default function AboutPage() {
  return (
    <Layout>
      <section className="section bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-section text-balance mb-6">Our mission: make every transition of care safer, smarter, and more human.</h1>
            <p className="text-lead text-muted-foreground mb-8">
              We’re a small but ambitious team of clinicians, engineers, and builders creating technology to bridge the gap after discharge. Most readmissions happen not because patients are untreatable — but because follow-up care is missed. Shifa AI exists to change that.
            </p>
            <p className="text-muted-foreground">
              We’re partnering with health systems and care teams who share this vision. If you’d like to help shape the product and join our pilot, we’d love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
} 