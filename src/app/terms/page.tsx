export default function Terms() {
  return (
    <main style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="bg-glow bg-glow-2"></div>
      
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Terms of <span className="gradient-text">Service</span></h1>
        
        <div style={{ color: 'var(--text-muted)' }}>
          <p style={{ marginBottom: '1.5rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Acceptance of Terms</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            By accessing or using the services provided by Precisiv Solutions, you agree to be bound by these Terms of Service. If you do not agree to all of the terms and conditions, you may not access the services.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. Description of Services</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            Precisiv Solutions provides a suite of AI-integrated tools for small and medium businesses. Our services are continually evolving, and we may update, suspend, or discontinue any part of the service at any time.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. User Responsibilities</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            You are responsible for safeguarding the password or credentials that you use to access our tools. You agree not to disclose your password to any third party and to take sole responsibility for any activities or actions under your account.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Limitation of Liability</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            In no event shall Precisiv Solutions, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
          </p>
        </div>
      </div>
    </main>
  );
}
