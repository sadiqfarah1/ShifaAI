import { Layout } from "@/components/layout"
import { Hero } from "@/components/sections/hero"
import { ValuePillars } from "@/components/sections/value-pillars"
import { HowItWorks } from "@/components/sections/how-it-works"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { ROITeaser } from "@/components/sections/roi-teaser"
import { TrustSection } from "@/components/sections/trust-section"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ValuePillars />
      <HowItWorks />
      <FeatureGrid />
      <ROITeaser />
      <TrustSection />
      <CTASection />
    </Layout>
  )
}
