import Link from "next/link"
import { ArrowRight, Shield, Users, TrendingDown } from "lucide-react"
import { AlertCard } from "@/components/ui/alert-card"
import { KPIStat } from "@/components/ui/kpi-stat"

export function Hero() {
  return (
    <section className="section-lg bg-gradient-to-br from-background to-muted/20">
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column - Copy */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero text-balance">
                Healing beyond discharge.
              </h1>
              <p className="text-lead text-balance max-w-2xl">
                Reduce readmissions with automated follow-ups, AI triage, and nurse alerts. 
                Prevent costly readmissions before they happen.
              </p>
            </div>
            
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/demo" className="btn-primary inline-flex items-center justify-center">
                Request a demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                See how it works
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>200+ hospitals</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <TrendingDown className="h-4 w-4" />
                <span>40% avg reduction</span>
              </div>
            </div>
          </div>

          {/* Right Column - Mock UI Panel */}
          <div className="relative">
            <div className="card-elevated p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Alert Queue</h3>
                <div className="text-xs text-muted-foreground">Live</div>
              </div>

              {/* KPI Stats Row */}
              <div className="grid grid-cols-3 gap-4">
                <KPIStat 
                  label="Active Patients" 
                  value="1,247" 
                  change={12} 
                  changeLabel="this week" 
                />
                <KPIStat 
                  label="High Risk" 
                  value="23" 
                  change={-8} 
                  changeLabel="vs last week" 
                />
                <KPIStat 
                  label="Avg Response" 
                  value="2.3h" 
                  change={-15} 
                  changeLabel="faster" 
                />
              </div>

              {/* Alert Cards */}
              <div className="space-y-3">
                <AlertCard
                  patientName="Sarah Chen"
                  riskLevel="red"
                  message="Chest pain and shortness of breath. Patient reports symptoms started 2 hours ago."
                  timestamp="2 min ago"
                  phoneNumber="(555) 123-4567"
                />
                <AlertCard
                  patientName="Michael Rodriguez"
                  riskLevel="amber"
                  message="Feeling dizzy when standing up. Blood pressure medication side effects?"
                  timestamp="15 min ago"
                  phoneNumber="(555) 234-5678"
                />
                <AlertCard
                  patientName="Jennifer Walsh"
                  riskLevel="green"
                  message="Feeling great! No issues with recovery. Walking daily as recommended."
                  timestamp="1 hour ago"
                />
              </div>

              {/* Footer */}
              <div className="text-center pt-2">
                <p className="text-xs text-muted-foreground">
                  AI triage accuracy: 95.2% • Last updated: 2 minutes ago
                </p>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-green-500 animate-pulse" />
            <div className="absolute -bottom-2 -left-2 h-3 w-3 rounded-full bg-primary/20" />
          </div>
        </div>
      </div>
    </section>
  )
}
