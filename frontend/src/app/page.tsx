import { Layout } from "@/components/layout"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Credibility } from "@/components/sections/credibility"

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Credibility />
    </Layout>
  )
}
