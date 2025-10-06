export const COPY = {
  hero: {
    title: "Empowering care beyond discharge with AI.",
    sub: "Shifa AI helps healthcare teams cut preventable readmissions, improve follow-ups, and support patients through recovery — every step of the way.",
    ctaPrimary: "Join Pilot",
    ctaSecondary: "See How It Works",
  },
  features: {
    title: "From discharge to recovery—covered.",
    items: [
      { t: "Automated Check-ins", d: "Day-1, day-3, week-1 SMS/voice follow-ups catch issues early." },
      { t: "Risk Signals & Escalation", d: "Surface medication confusion or symptoms and alert the right clinician." },
      { t: "Scheduling & Reminders", d: "Keep PCP visits, labs, and instructions on track." },
      { t: "Insights Dashboard", d: "Real-time visibility into recovery and outreach status." },
    ],
    note: "EHR-agnostic to start; HL7/FHIR roadmap.",
  },
  mission: {
    title: "Care shouldn't end at discharge.",
    body: "Shifa AI empowers healthcare teams to deliver continuous, personalized care beyond the hospital walls — reducing preventable readmissions, strengthening follow-up, and guiding patients through every step of their recovery journey.",
    bullets: [
      "Human-centered: clear, empathetic communication.",
      "Clinically aligned: built for nurse workflows.",
      "Privacy-first: HIPAA-aligned safeguards.",
    ],
  },
  credibility: {
    title: "Built for outcomes.",
    quote: "We see the same patients readmitted for preventable issues. Catching problems early would make a real difference.",
    byline: "Registered Nurse",
    security: "HIPAA-aligned design, encryption by default, BAA-ready.",
    cta: "Join the Shifa AI Pilot",
  },
  footer: {
    hipaa: "Shifa AI supports HIPAA-aligned workflows; production deployments require a BAA.",
  },
  seo: {
    title: "Shifa AI — AI-powered follow-ups that reduce readmissions",
    description:
      "Shifa AI automates post-discharge outreach, flags risk early, and guides recovery—helping hospitals cut avoidable readmissions.",
    ogImage: "/og-image.png",
  },
} as const;
