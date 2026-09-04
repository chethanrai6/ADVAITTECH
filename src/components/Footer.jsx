import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer({ onOpenQuote }) {
  return (
    <footer id="contact" className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & Description */}
          <div>
            <a href="#" className="brand-logo" style={{ marginBottom: '16px', display: 'inline-flex' }}>
              <div className="logo-mark">
                <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4L36 32H28L20 18L12 32H4L20 4Z" fill="#1E65FF" />
                  <path d="M20 14L28 28H22L20 24.5L18 28H12L20 14Z" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="logo-text-group">
                <span className="brand-name" style={{ color: '#FFFFFF' }}>Advait</span>
                <span className="brand-tagline" style={{ color: '#94A3B8' }}>WE BUILD YOUR NEXT</span>
              </div>
            </a>
            <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: '1.6', marginTop: '12px' }}>
              Modern, affordable and high-converting websites designed specifically for growing small businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Business Websites</a></li>
              <li><a href="#services">E-commerce Websites</a></li>
              <li><a href="#services">Website Redesign</a></li>
              <li><a href="#services">Domain & Hosting</a></li>
              <li><a href="#services">Maintenance</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="footer-col-title">Contact Us</h4>
            <ul className="contact-info-list">
              <li className="contact-info-item">
                <Phone size={16} color="#1E65FF" />
                <a href="tel:+918848389933">+91 88483 89933</a>
              </li>
              <li className="contact-info-item">
                <Mail size={16} color="#1E65FF" />
                <a href="mailto:hello@advait.in">hello@advait.in</a>
              </li>
              <li className="contact-info-item">
                <MapPin size={16} color="#1E65FF" />
                <span>Mangalore, Karnataka, India</span>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon-btn" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="YouTube">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <span>© 2026 Advait. All rights reserved.</span>
          <span>Websites. Growth. Together.</span>
        </div>
      </div>
    </footer>
  );
}
