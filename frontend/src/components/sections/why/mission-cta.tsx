import Link from "next/link"
import { Heart } from "lucide-react"

export function MissionCTA() {
  return (
    <section className="section bg-gradient-to-br from-primary/5 to-background">
      <div className="container">
        <div className="card-elevated p-8 lg:p-12 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Heart className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Make every transition of care safer, smarter, and more human. We're inviting innovative hospitals, clinics, and care organizations to join us as early partners to shape the future of post-discharge care.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary inline-flex items-center">Join Pilot</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
