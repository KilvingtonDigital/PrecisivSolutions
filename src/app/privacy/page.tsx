export default function Privacy() {
  return (
    <main style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="bg-glow bg-glow-1"></div>
      
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Privacy <span className="gradient-text">Policy</span></h1>
        
        <div style={{ color: 'var(--text-muted)' }}>
          <p style={{ marginBottom: '1.5rem' }}>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h3 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>1. Information We Collect</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            At Precisiv Solutions, we collect information that you provide directly to us when using our tools or contacting our team. This may include contact information, business details, and usage metrics generated through our platform.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>2. How We Use Your Information</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            We use the information we collect to provide, maintain, and improve our services, to develop new tools, and to protect Precisiv Solutions and our users. We do not sell your personal data to third parties.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>3. Data Security</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            We implement appropriate technical and organizational measures to maintain the security of your personal information and protect it against accidental or unlawful destruction, loss, alteration, or unauthorized disclosure.
          </p>

          <h3 style={{ color: 'var(--text-main)', marginTop: '2.5rem', marginBottom: '1rem', fontSize: '1.5rem' }}>4. Contact Us</h3>
          <p style={{ marginBottom: '1.5rem', lineHeight: 1.8 }}>
            If you have any questions about this Privacy Policy, please contact us at privacy@precisivsolutions.ai.
          </p>
        </div>
      </div>
    </main>
  );
}
