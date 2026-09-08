import React from 'react';
import { ArrowRight, Eye, ShieldCheck, Smartphone, Zap, Search, MessageSquare } from 'lucide-react';

export default function Hero({ onOpenQuote }) {
  const handleScrollToPortfolio = () => {
    const portfolioSec = document.getElementById('portfolio');
    if (portfolioSec) {
      portfolioSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent("Hi Advait Tech! I'd like to get a modern website for my business.");
    window.open(`https://wa.me/918848389933?text=${text}`, '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column Content */}
        <div className="hero-content reveal-slide-up">
          <div className="hero-tag">
            <span className="hero-tag-dot"></span>
            <span>Advait Tech — Modern Business Web Development</span>
          </div>

          <h1 className="hero-title">
            Modern Websites That Help <span className="blue-highlight">Local Businesses Grow</span>
          </h1>

          <p className="hero-description">
            We design fast, modern, mobile-friendly websites that help local businesses build trust, attract customers, and grow online.
          </p>

          <div className="hero-ctas">
            <button onClick={onOpenQuote} className="btn-primary">
              <span>Get Your Website</span>
              <ArrowRight size={18} />
            </button>

            <button onClick={handleScrollToPortfolio} className="btn-outline-pill">
              <Eye size={18} />
              <span>View Our Work</span>
            </button>

            <button onClick={handleOpenWhatsApp} className="btn-whatsapp-pill" aria-label="Chat on WhatsApp">
              <MessageSquare size={16} />
              <span>WhatsApp Us</span>
            </button>
          </div>

          {/* Value / Trust Indicators */}
          <div className="hero-feature-badges">
            <div className="feature-badge-item">
              <div className="feature-badge-icon">
                <ShieldCheck size={16} />
              </div>
              <span>Modern Design</span>
            </div>

            <div className="feature-badge-item">
              <div className="feature-badge-icon">
                <Smartphone size={16} />
              </div>
              <span>Mobile Friendly</span>
            </div>

            <div className="feature-badge-item">
              <div className="feature-badge-icon">
                <Zap size={16} />
              </div>
              <span>Fast Performance</span>
            </div>

            <div className="feature-badge-item">
              <div className="feature-badge-icon">
                <Search size={16} />
              </div>
              <span>SEO Ready</span>
            </div>
          </div>
        </div>

        {/* Right Column Visual Mockup */}
        <div className="hero-visual-wrapper reveal-zoom">
          {/* Cursive handwritten annotation with SVG arrow */}
          <div className="hero-handwritten-note">
            <span>Your Business Online Anywhere</span>
            <svg width="60" height="30" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5C20 15 35 25 52 15M52 15L42 10M52 15L45 22" stroke="#334155" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Laptop & Phone Showcase Frame */}
          <div className="hero-mockup-frame">
            <img 
              src="/assets/hero_laptop_mockup.png" 
              alt="Modern website design showcase for local businesses by Advait Tech" 
              className="hero-mockup-img"
            />
          </div>

          {/* Yellow Sticky Note */}
          <div className="yellow-sticky-note">
            A Website Today. A Brighter Tomorrow.
          </div>

          {/* Floating Right Badges */}
          <div className="floating-badges-column">
            <div className="floating-badge-card">
              <div className="badge-icon-blue">
                <ShieldCheck size={14} />
              </div>
              <span>Trust & Credibility</span>
            </div>

            <div className="floating-badge-card">
              <div className="badge-icon-blue">
                <Smartphone size={14} />
              </div>
              <span>100% Mobile Ready</span>
            </div>

            <div className="floating-badge-card">
              <div className="badge-icon-blue">
                <Zap size={14} />
              </div>
              <span>Ultra Fast Loading</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
