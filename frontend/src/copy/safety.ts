export const SAFETY = {
  title: "Safety & Ethics",
  intro: "Shifa AI is designed to support, never replace, clinical judgment.",
  sections: [
    {
      id: "promise",
      title: "Our Safety Promise",
      summary: "Augment teams, keep clinicians in control, and default to caution.",
      bullets: [
        "Supports clinical judgment — alerts, not decisions.",
        "Clinician-in-the-loop by design — human review required.",
        "Built for coordination, not diagnosis.",
        "Conservative approach — when unsure, escalate."
      ]
    },
    {
      id: "pilot-readiness",
      title: "Pre-HIPAA, Pilot-Ready",
      summary: "No PHI in pilots; controls in place; HIPAA path defined.",
      bullets: [
        "No PHI during pilots — de-identified/simulated data only.",
        "Technical controls — encryption, access control, audit logging.",
        "HIPAA path planned — BAA and enhanced controls at enterprise."
      ]
    },
    {
      id: "clinician-loop",
      title: "Clinician-in-the-Loop Safeguards",
      summary: "Human oversight with conservative triage and clear SLAs.",
      bullets: [
        "Conservative triage — escalate to humans when uncertain.",
        "Manual override — clinicians can reassess and resolve.",
        "Time-bound alert SLAs — tracked and auditable."
      ]
    },
    {
      id: "transparency",
      title: "Transparency & Limits",
      summary: "Clear about what the platform does—and doesn't—do.",
      bullets: [
        "No diagnostic claims — not a medical device.",
        "Explainable alerts — show why a flag was raised.",
        "Human interpretation required — clinicians decide."
      ]
    },
    {
      id: "privacy",
      title: "Data Privacy & Governance",
      summary: "Least-privilege design with redaction and retention controls.",
      bullets: [
        "De-identified data only in pilots.",
        "Logging with redaction; least-privilege access.",
        "Secure key handling and defined retention."
      ]
    },
    {
      id: "compliance",
      title: "Roadmap to Compliance",
      summary: "Steps toward full HIPAA alignment and enterprise readiness.",
      bullets: [
        "BAA with cloud providers.",
        "KMS-backed encryption at rest.",
        "RBAC + audit log exports; periodic risk reviews."
      ]
    }
  ],
  contact: {
    title: "Contact & Reporting",
    summary: "Questions or concerns? We're here to help.",
    emailLabel: "safety@shifa-ai.com",
    notes: [
      "We reply to safety reports within 24 hours.",
      "Technical issues are addressed within 2 business days."
    ]
  }
} as const;
