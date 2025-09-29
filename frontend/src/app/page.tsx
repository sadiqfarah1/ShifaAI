import { Layout } from "@/components/layout"
import { Hero } from "@/components/sections/hero"
import { ValuePillars } from "@/components/sections/value-pillars"
import { WhyBuilding } from "@/components/sections/why-building"
import { HowItWorks } from "@/components/sections/how-it-works"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { WhoItsFor } from "@/components/sections/who-its-for"
import { CaseStudy } from "@/components/sections/case-study"
import { ROITeaser } from "@/components/sections/roi-teaser"
import { TrustSection } from "@/components/sections/trust-section"
import { AboutUs } from "@/components/sections/about-us"
import { PilotForm } from "@/components/sections/pilot-form"
import { CTASection } from "@/components/sections/cta-section"

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <ValuePillars />
      <WhyBuilding />
      <HowItWorks />
      <FeatureGrid />
      <WhoItsFor />
      <CaseStudy />
      <ROITeaser />
      <TrustSection />
      <AboutUs />
      <PilotForm />
      <CTASection />
    </Layout>
  )
}
