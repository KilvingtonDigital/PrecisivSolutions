import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Precisiv Solutions | AI-Powered Tools for Small Business",
  description: "Precisiv Solutions builds intuitive, fully-integrated software services tailored for local small and medium businesses. No contracts, pay-per-use.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="logo">
              <img src="/logo.svg" alt="Precisiv Solutions" style={{ height: '36px', width: 'auto' }} />
            </Link>
            <div className="nav-links">
              <Link href="/solutions" className="btn btn-primary">Our Solutions</Link>
            </div>
          </div>
        </nav>
        
        {children}

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-brand">
                <Link href="/" className="logo">
                  <img src="/logo.svg" alt="Precisiv Solutions" style={{ height: '32px', width: 'auto' }} />
                </Link>
                <p>Empowering local small and medium businesses with integrated, AI-driven software solutions.</p>
              </div>
              
              <div className="footer-links">
                <div className="link-group">
                  <h4>Solutions</h4>
                  <ul>
                    <li><Link href="/solutions">AI Automation</Link></li>
                    <li><Link href="/solutions">Data Analytics</Link></li>
                    <li><Link href="/solutions">Customer Sync</Link></li>
                  </ul>
                </div>
                
                <div className="link-group">
                  <h4>Company</h4>
                  <ul>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                  </ul>
                </div>
                
                <div className="link-group">
                  <h4>Legal</h4>
                  <ul>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                    <li><Link href="/terms">Terms of Service</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              &copy; {new Date().getFullYear()} Precisiv Solutions. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
