import { Metadata } from 'next'
import { Layout } from '@/components/layout'
import { SectionHeader } from '@/components/SectionHeader'
import { Callout } from '@/components/Callout'
import { CTABanner } from '@/components/CTABanner'
import { Shield, HeartPulse, AlertTriangle, Info, CheckCircle, Users, Eye, Lock, FileText, Target, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shifa AI – Safety & Ethics',
  description: 'How Shifa AI supports clinicians with safe, transparent, pre-HIPAA pilots using de-identified data. Learn about our safety safeguards and responsible AI practices.',
  keywords: 'healthcare AI safety, clinical safety, medical AI ethics, HIPAA compliance, patient safety, AI transparency',
}

export default function SafetyPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-lg bg-gradient-to-br from-primary/5 via-background to-accent/10">
        <div className="container">
          <SectionHeader
            eyebrow="Safety & Ethics"
            title="Keeping patients safe with responsible AI"
            subtitle="Transparent safeguards, clinician oversight, and privacy-first design for post-discharge care coordination"
          />
        </div>
      </section>

      {/* Table of Contents */}
      <section className="section bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
              <h3 className="text-xl font-semibold text-text-primary mb-4">On this page</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                <a href="#safety-promise" className="text-text-secondary hover:text-primary transition-colors">Our Safety Promise</a>
                <a href="#pre-hipaa" className="text-text-secondary hover:text-primary transition-colors">Pre-HIPAA, Pilot-Ready</a>
                <a href="#clinician-safeguards" className="text-text-secondary hover:text-primary transition-colors">Clinician-in-the-Loop Safeguards</a>
                <a href="#transparency" className="text-text-secondary hover:text-primary transition-colors">Transparency & Limits</a>
                <a href="#bias-fairness" className="text-text-secondary hover:text-primary transition-colors">Bias & Fairness</a>
                <a href="#emergencies" className="text-text-secondary hover:text-primary transition-colors">Escalation & Emergencies</a>
                <a href="#privacy" className="text-text-secondary hover:text-primary transition-colors">Data Privacy & Governance</a>
                <a href="#roadmap" className="text-text-secondary hover:text-primary transition-colors">Roadmap to Compliance</a>
                <a href="#contact" className="text-text-secondary hover:text-primary transition-colors">Contact & Reporting</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Safety Promise */}
      <section id="safety-promise" className="section bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Our Safety Promise"
              subtitle="Shifa AI is designed to support, never replace, clinical judgment"
            />
            <div className="mt-12 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Supports clinical judgment</h3>
                  <p className="text-text-secondary">Shifa AI augments care teams by flagging potential concerns, but all clinical decisions remain with licensed healthcare providers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Clinician-in-the-loop by design</h3>
                  <p className="text-text-secondary">Every alert requires human review and action. No automated clinical decisions are made without provider oversight.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Built for coordination, not diagnosis</h3>
                  <p className="text-text-secondary">Our platform focuses on post-discharge follow-up and care coordination, not medical diagnosis or treatment recommendations.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Conservative approach</h3>
                  <p className="text-text-secondary">When in doubt, we escalate. Better to over-flag than miss a potential concern that could impact patient safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-HIPAA, Pilot-Ready */}
      <section id="pre-hipaa" className="section bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Pre-HIPAA, Pilot-Ready"
              subtitle="Transparent about our current compliance status and pilot approach"
            />
            <div className="mt-12 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Lock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">No PHI during pilots</h3>
                  <p className="text-text-secondary">We do not process protected health information (PHI) during our pilot phase. All data is de-identified or simulated.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Technical controls in place</h3>
                  <p className="text-text-secondary">Encryption in transit, access controls, and audit logging are already implemented to prepare for future HIPAA compliance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">HIPAA path planned</h3>
                  <p className="text-text-secondary">We have a clear roadmap to full HIPAA compliance for enterprise deployments, including BAA agreements and enhanced security controls.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinician-in-the-Loop Safeguards */}
      <section id="clinician-safeguards" className="section bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Clinician-in-the-Loop Safeguards"
              subtitle="Multiple layers of human oversight and control"
            />
            <div className="mt-12 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Conservative triage approach</h3>
                  <p className="text-text-secondary">When the system is uncertain about risk level, it defaults to escalating to human review rather than making assumptions.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Manual override capabilities</h3>
                  <p className="text-text-secondary">Clinicians can override any system recommendation, reassess risk levels, and resolve alerts based on their clinical judgment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Time-bound alert SLAs</h3>
                  <p className="text-text-secondary">All alerts have defined response timeframes, and audit trails track every action taken by care team members.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency & Limits */}
      <section id="transparency" className="section bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Transparency & Limits"
              subtitle="Clear about what our platform does and doesn't do"
            />
            <div className="mt-12 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Info className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">No diagnostic claims</h3>
                  <p className="text-text-secondary">Shifa AI is not a medical device and does not provide diagnostic information. It flags potential concerns for human review.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Eye className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Explainable alerts</h3>
                  <p className="text-text-secondary">When an alert is triggered, we show exactly why (specific keywords, patterns, or risk factors) to help clinicians understand the reasoning.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-slate-100 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-slate-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Human interpretation required</h3>
                  <p className="text-text-secondary">Patient messages may be incomplete or ambiguous. Clinicians must interpret and act on the information based on their expertise.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bias & Fairness */}
      <section id="bias-fairness" className="section bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Bias & Fairness"
              subtitle="Committed to equitable AI that serves all patients"
            />
            <div className="mt-12 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Rules-first approach</h3>
                  <p className="text-text-secondary">We start with explicit clinical rules and guidelines. AI adjudication is feature-flagged and subject to ongoing audit and review.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Diverse clinical input</h3>
                  <p className="text-text-secondary">Our development process includes ongoing review with diverse clinicians to identify and address potential bias in our algorithms.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Documented failure modes</h3>
                  <p className="text-text-secondary">We maintain detailed records of system limitations and failure modes to continuously improve and reduce disparities in care.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Feedback loops</h3>
                  <p className="text-text-secondary">Continuous feedback from care teams helps us identify and reduce false negatives and ensure equitable care across all patient populations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Escalation & Emergencies */}
      <section id="emergencies" className="section bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Callout type="warning" title="Important: Medical Emergencies">
              <p className="font-semibold mb-3">If you are experiencing a medical emergency, call 911 or your local emergency number immediately.</p>
              <p className="mb-3">Shifa AI is designed for routine post-discharge follow-up and care coordination, not emergency triage.</p>
              <p>The platform must not be used for urgent medical situations without immediate human review and appropriate escalation to emergency services.</p>
            </Callout>
          </div>
        </div>
      </section>

      {/* Data Privacy & Governance */}
      <section id="privacy" className="section bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Data Privacy & Governance"
              subtitle="How we protect data during our pilot phase"
            />
            <div className="mt-12 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Lock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">De-identified data only</h3>
                  <p className="text-text-secondary">Pilot data contains no names, MRNs, phone numbers, or other direct identifiers. All personal information is removed or simulated.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Logging with redaction</h3>
                  <p className="text-text-secondary">All system logs are automatically redacted to remove any potential identifiers, following the principle of least privilege.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Secure key handling</h3>
                  <p className="text-text-secondary">Encryption keys are managed securely with proper access controls and rotation policies in place.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Clock className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Data retention policy</h3>
                  <p className="text-text-secondary">Pilot artifacts are retained only as long as necessary for evaluation and are securely deleted according to our retention schedule.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap to Compliance */}
      <section id="roadmap" className="section bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Roadmap to Compliance"
              subtitle="Our path to full HIPAA compliance and enterprise readiness"
            />
            <div className="mt-12 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">HIPAA Compliance (Planned)</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Business Associate Agreements (BAA) with cloud providers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Encryption at rest using Key Management Service (KMS)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Fine-grained Role-Based Access Control (RBAC)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Comprehensive audit log export capabilities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Periodic security risk assessments</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Future Considerations</h3>
                <ul className="space-y-3 text-text-secondary">
                  <li className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span>Optional FDA SaMD evaluation if product evolves toward clinical decision support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Info className="h-5 w-5 text-slate-600 flex-shrink-0 mt-0.5" />
                    <span>Third-party security review before processing PHI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Reporting */}
      <section id="contact" className="section bg-muted/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <SectionHeader
              title="Contact & Reporting"
              subtitle="Questions, concerns, or issues? We're here to help"
            />
            <div className="mt-12 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Safety & Privacy Questions</h3>
                <p className="text-text-secondary mb-4">
                  For questions about our safety practices, privacy policies, or compliance roadmap:
                </p>
                <div className="flex items-center space-x-3">
                  <HeartPulse className="h-5 w-5 text-primary" />
                  <a href="mailto:safety@shifa-ai.com" className="text-primary hover:text-primaryDark transition-colors font-medium">
                    safety@shifa-ai.com
                  </a>
                </div>
              </div>
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-8">
                <h3 className="text-xl font-semibold text-text-primary mb-4">Report an Issue</h3>
                <p className="text-text-secondary mb-4">
                  If you encounter a safety concern or technical issue:
                </p>
                <ul className="space-y-2 text-text-secondary">
                  <li>• Email us at <a href="mailto:safety@shifa-ai.com" className="text-primary hover:text-primaryDark transition-colors">safety@shifa-ai.com</a></li>
                  <li>• Include as much detail as possible about the issue</li>
                  <li>• We respond to safety reports within 24 hours</li>
                  <li>• Technical issues are addressed within 2 business days</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner
        headline="Ready to pilot Shifa AI?"
        subtext="Join forward-thinking healthcare organizations in testing our safe, transparent approach to post-discharge care coordination."
      />

      {/* Compliance Notice */}
      <section className="bg-amber-50 border-t border-amber-200 py-8">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <h3 className="font-semibold text-amber-900">Compliance Notice</h3>
            </div>
            <p className="text-amber-800 text-sm">
              Shifa AI is in pre-HIPAA pilot development and does not process protected health information (PHI). 
              Pilots use de-identified or simulated data. Shifa AI supports care coordination and does not diagnose or treat conditions.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
