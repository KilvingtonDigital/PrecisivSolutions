import { Bot, LineChart, Code2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Solutions() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="bg-glow bg-glow-1"></div>
      
      <div className="container">
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <h1>Our <span className="gradient-text">Solutions</span></h1>
          <p>The Precisiv ecosystem is growing. Explore our current and upcoming suite of AI-integrated tools designed specifically for small and medium businesses.</p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon"><Bot size={28} /></div>
            <h3>AI Automation Engine</h3>
            <p style={{ marginBottom: '1.5rem' }}>Streamline your daily workflows by automating repetitive tasks, customer follow-ups, and data entry using our custom-tuned LLMs.</p>
            <span className="hero-badge" style={{ marginBottom: 0 }}>Coming Soon</span>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon"><LineChart size={28} /></div>
            <h3>Data Analytics Dashboard</h3>
            <p style={{ marginBottom: '1.5rem' }}>A centralized hub that aggregates your business data, providing real-time insights and predictive forecasting without the complexity.</p>
            <span className="hero-badge" style={{ marginBottom: 0 }}>In Development</span>
          </div>

          <div className="feature-card">
            <div className="feature-icon"><Code2 size={28} /></div>
            <h3>Customer Sync Protocol</h3>
            <p style={{ marginBottom: '1.5rem' }}>Keep your CRM, accounting software, and communication tools perfectly aligned with zero manual intervention.</p>
            <span className="hero-badge" style={{ marginBottom: 0 }}>Planned</span>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '6rem', padding: '4rem', background: 'var(--bg-card)', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
          <h2 style={{ marginBottom: '1rem' }}>Need a Custom Solution?</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>We work with select partners to build bespoke internal tools. If your business has a unique bottleneck, we can help.</p>
          <Link href="/contact" className="btn btn-primary">
            Contact Our Team <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </main>
  );
}
