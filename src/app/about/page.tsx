export default function About() {
  return (
    <main style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="bg-glow bg-glow-2"></div>
      
      <div className="container">
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>Empowering <span className="gradient-text">Local Business</span></h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            Precisiv Solutions was founded with a singular focus: to bridge the gap between complex enterprise AI technology and the everyday needs of local small and medium businesses.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
            We believe that powerful software shouldn't require a dedicated IT department to manage, nor should it lock you into expensive, long-term contracts.
          </p>
          
          <div style={{ margin: '4rem 0', padding: '3rem', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>Our Philosophy</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <li><strong style={{ color: 'var(--accent-primary)' }}>1. Integration First:</strong> Tools should talk to each other. Silos kill productivity.</li>
              <li><strong style={{ color: 'var(--accent-primary)' }}>2. Pay for Use:</strong> You only pay for what you actually use. No dormant subscription fees.</li>
              <li><strong style={{ color: 'var(--accent-primary)' }}>3. Keep it Simple:</strong> If a tool requires a week of training, we designed it wrong.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
