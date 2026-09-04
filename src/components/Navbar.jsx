import React, { useState } from 'react';
import { Phone, Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar({ onOpenQuote }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#" className="brand-logo">
          <div className="logo-mark">
            <svg width="34" height="34" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4L36 32H28L20 18L12 32H4L20 4Z" fill="#1E65FF" />
              <path d="M20 14L28 28H22L20 24.5L18 28H12L20 14Z" fill="#0B132B" />
            </svg>
          </div>
          <div className="logo-text-group">
            <span className="brand-name">Advait</span>
            <span className="brand-tagline">WE BUILD YOUR NEXT</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="main-nav">
          <a href="#home" className="nav-link active">Home</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#industries" className="nav-link">Industries</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>

        {/* Right CTA Area */}
        <div className="header-actions">
          <a href="tel:+918848389933" className="phone-link">
            <Phone size={16} className="phone-icon" />
            <span>+91 88483 89933</span>
          </a>
          <button onClick={onOpenQuote} className="btn-primary">
            <span>Get a Free Quote</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-menu container">
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#industries" onClick={() => setMobileMenuOpen(false)}>Industries</a>
          <a href="#portfolio" onClick={() => setMobileMenuOpen(false)}>Portfolio</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button onClick={() => { setMobileMenuOpen(false); onOpenQuote(); }} className="btn-primary" style={{ width: '100%' }}>
            Get a Free Quote <ChevronRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}
