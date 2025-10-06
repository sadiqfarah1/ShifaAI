import { Metadata } from "next";
import { Layout } from "@/components/layout";
import { SAFETY } from "@/copy/safety";
import { SafetyCard } from "@/components/sections/SafetyCard";
import { ShieldCheck, Users, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Safety & Ethics — Shifa AI",
  description: "Shifa AI supports clinical judgment with human-in-the-loop safeguards, privacy-by-design, and a clear path to compliance.",
  robots: { index: true, follow: true },
};

export default function SafetyPage() {
  return (
    <Layout>
      <main className="relative">
        {/* Heading */}
        <section className="mx-auto max-w-4xl px-6 pt-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Safety &amp; Ethics</h1>
          <p className="mt-3 text-base md:text-lg text-muted-foreground">
            {SAFETY.intro}
          </p>
        </section>

        {/* KPI / At-a-glance strip */}
        <section className="mx-auto mt-8 max-w-5xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="rounded-2xl border bg-white/70 p-4">
              <div className="flex items-center gap-2 text-emerald-700"><Users className="h-4 w-4" /><span className="text-sm font-medium">Human-in-the-loop</span></div>
              <p className="mt-1 text-sm text-muted-foreground">No automated clinical decisions; provider oversight required.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-4">
              <div className="flex items-center gap-2 text-emerald-700"><Lock className="h-4 w-4" /><span className="text-sm font-medium">No PHI in pilots</span></div>
              <p className="mt-1 text-sm text-muted-foreground">Pilot data is de-identified or simulated.</p>
            </div>
            <div className="rounded-2xl border bg-white/70 p-4">
              <div className="flex items-center gap-2 text-emerald-700"><ShieldCheck className="h-4 w-4" /><span className="text-sm font-medium">HIPAA path planned</span></div>
              <p className="mt-1 text-sm text-muted-foreground">BAA &amp; enhanced controls for enterprise deployments.</p>
            </div>
          </div>
        </section>

        {/* Cards grid */}
        <section className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {SAFETY.sections.map((s) => (
              <SafetyCard
                key={s.id}
                icon={
                  s.id === "promise" ? "shield" :
                  s.id === "pilot-readiness" ? "lock" :
                  s.id === "clinician-loop" ? "users" :
                  s.id === "transparency" ? "eye" :
                  s.id === "privacy" ? "key" :
                  s.id === "compliance" ? "file" :
                  "shield"
                }
                title={s.title}
                summary={s.summary}
                bullets={s.bullets}
              />
            ))}
          </div>
        </section>

        {/* Contact block */}
        <section className="mx-auto max-w-4xl px-6 pb-16">
          <div className="rounded-2xl border bg-white/70 p-6">
            <h2 className="text-2xl font-semibold">{SAFETY.contact.title}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{SAFETY.contact.summary}</p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <a href={`mailto:${SAFETY.contact.emailLabel}`} className="btn-primary inline-flex w-fit items-center justify-center rounded-xl px-4 py-2">
                {SAFETY.contact.emailLabel}
              </a>
              <ul className="list-disc pl-5 text-sm">
                {SAFETY.contact.notes.map((n) => (<li key={n}>{n}</li>))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
