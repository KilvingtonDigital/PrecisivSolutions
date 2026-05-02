import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <main style={{ paddingTop: '140px', paddingBottom: '80px', minHeight: '100vh' }}>
      <div className="bg-glow bg-glow-3"></div>
      
      <div className="container">
        <div className="section-header" style={{ marginBottom: '4rem' }}>
          <h1>Get in <span className="gradient-text">Touch</span></h1>
          <p>Interested in our upcoming tools or need a custom solution? Reach out to our team.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
          <div>
            <h3 style={{ marginBottom: '2rem', fontSize: '1.8rem' }}>Contact Information</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="feature-icon" style={{ width: '50px', height: '50px', marginBottom: 0 }}><Mail size={20} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4>
                  <p style={{ color: 'var(--text-muted)' }}>hello@precisivsolutions.ai</p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="feature-icon" style={{ width: '50px', height: '50px', marginBottom: 0 }}><Phone size={20} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Call Us</h4>
                  <p style={{ color: 'var(--text-muted)' }}>(864) 567-4355</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div className="feature-icon" style={{ width: '50px', height: '50px', marginBottom: 0 }}><MapPin size={20} /></div>
                <div>
                  <h4 style={{ marginBottom: '0.25rem' }}>Headquarters</h4>
                  <p style={{ color: 'var(--text-muted)' }}>North Carolina, USA</p>
                </div>
              </div>
            </div>
          </div>

          <div style={{ background: 'var(--bg-card)', padding: '3rem', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
            <form action="https://formsubmit.co/ricky@kilvingtondigital.com" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <input type="hidden" name="_subject" value="New Contact Form Submission - Precisiv Solutions" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Name</label>
                <input type="text" name="name" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white' }} placeholder="Your name" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Email</label>
                <input type="email" name="email" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white' }} placeholder="you@company.com" />
              </div>
              <div>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-muted)' }}>Message</label>
                <textarea name="message" required rows={4} style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: '8px', background: 'rgba(0,0,0,0.2)', border: '1px solid var(--glass-border)', color: 'white' }} placeholder="How can we help?"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
