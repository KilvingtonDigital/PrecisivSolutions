import { 
  Bot, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  ArrowRight,
  Blocks,
  LineChart
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="bg-glow bg-glow-1"></div>
      <div className="bg-glow bg-glow-2"></div>
      
      <section className="hero">
        <div className="bg-glow bg-glow-3"></div>
        <div className="container">
          <div className="hero-content floating">
            <div className="hero-badge">Next-Gen SaaS for Small Business</div>
            <h1>
              AI-Powered Tools That <span className="gradient-text">Simply Work.</span>
            </h1>
            <p>
              Precisiv Solutions builds intuitive, fully-integrated software services tailored for local small and medium businesses. No contracts, no bloat—just results.
            </p>
            <div className="hero-actions">
              <Link href="/solutions" className="btn btn-primary">
                Explore Tools <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2>Built for <span className="gradient-text">Impact</span></h2>
            <p>We leverage cutting-edge AI to create solutions that are powerful under the hood, yet beautifully simple to use.</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Bot size={28} />
              </div>
              <h3>AI Integration</h3>
              <p>Automate your workflow with state-of-the-art artificial intelligence models, seamlessly integrated into everyday tools.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={28} />
              </div>
              <h3>Easy to Use</h3>
              <p>No steep learning curves. Our interfaces are designed to be intuitive, allowing you to focus on your business, not the software.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <ShieldCheck size={28} />
              </div>
              <h3>Reliable & Secure</h3>
              <p>Enterprise-grade security and reliability built for local businesses. Your data is protected, and your tools are always online.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Blocks size={28} />
              </div>
              <h3>Seamless Sync</h3>
              <p>All Precisiv tools communicate with each other, creating a unified ecosystem that scales with your growing needs.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={28} />
              </div>
              <h3>Modern Aesthetics</h3>
              <p>Experience a platform that looks as good as it performs. Premium design that makes your daily operations a joy.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <LineChart size={28} />
              </div>
              <h3>Data-Driven</h3>
              <p>Gain actionable insights instantly. We distill complex data into clear metrics that help you make better business decisions.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
