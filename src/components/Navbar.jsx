import React, { useState } from 'react';
import { Phone, Menu, X, ChevronRight, ArrowRight } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Process', href: '#process' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'About', href: '#why-advait' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#home" className="brand-logo" aria-label="Advait Tech Homepage">
          <div className="logo-mark">
            <img 
              src="/advait_logo.png" 
              alt="Advait Tech Logo" 
              style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
            />
          </div>
          <div className="logo-text-group">
            <span className="brand-name">Advait Tech</span>
            <span className="brand-tagline">WE BUILD YOUR NEXT</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="main-nav" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Area */}
        <div className="header-actions">
          <a href="tel:+918848389933" className="phone-link" aria-label="Call Advait Tech at +91 88483 89933">
            <Phone size={16} className="phone-icon" />
            <span>+91 88483 89933</span>
          </a>
          <button onClick={onOpenQuote} className="btn-primary">
            <span>Start Your Project</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu container">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }} 
            className="btn-primary" 
            style={{ width: '100%', marginTop: '12px' }}
          >
            <span>Start Your Project</span>
            <ChevronRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
