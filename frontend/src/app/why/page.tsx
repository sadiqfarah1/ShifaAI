import { Layout } from "@/components/layout"
import { ProblemSolution } from "@/components/sections/why/problem-solution"
import { KPIStrip } from "@/components/sections/why/kpi-strip"
import { FlowSteps } from "@/components/sections/why/flow-steps"
import { MissionCTA } from "@/components/sections/why/mission-cta"

export default function WhyPage() {
  return (
    <Layout>
      <ProblemSolution />
      <KPIStrip />
      <FlowSteps />
      <MissionCTA />
    </Layout>
  )
}
