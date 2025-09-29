export default function SecurityPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Security & Compliance
          </h1>
          <p className="text-xl text-slate-600">
            HIPAA-aligned practices, enterprise-grade security, and transparent data handling.
          </p>
        </div>
        
        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Data Protection</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Encryption</h3>
                <p className="text-slate-600">
                  TLS 1.2+ in transit, AES-256 at rest. All sensitive data encrypted using industry-standard protocols.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Access Control</h3>
                <p className="text-slate-600">
                  Role-based access control, principle of least privilege, comprehensive audit logs for all PHI access.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">HIPAA Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Business Associate Agreements</h3>
                <p className="text-slate-600">
                  BAAs available for enterprise customers. Clear data handling responsibilities and liability protection.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Local Mode</h3>
                <p className="text-slate-600">
                  Optional PHI redaction after triage. Configurable data retention policies. Minimum necessary data collection.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Certifications</h2>
            <div className="bg-slate-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">SOC2 Type I</h3>
                  <p className="text-slate-600">In progress. Expected completion Q2 2024.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">SSO/SAML</h3>
                  <p className="text-slate-600">Roadmap item for enterprise customers. Integration with major identity providers.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
