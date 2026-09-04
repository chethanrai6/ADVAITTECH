import React from 'react';
import { Tag, Smartphone, TrendingUp, Headphones, Play, ArrowRight, Users, ShieldCheck, BarChart3 } from 'lucide-react';

export default function Hero({ onOpenQuote, onOpenVideo }) {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column Content */}
        <div className="hero-content">
          <div className="hero-tag">
            <span className="hero-tag-dot"></span>
            <span>Websites for Small Businesses</span>
          </div>

          <h1 className="hero-title">
            Big Ideas<br />
            Start with a <span className="blue-highlight">Great Website</span>
          </h1>

          <p className="hero-description">
            At Advait, we create modern, affordable and powerful websites for small businesses — so you can reach more customers and grow faster.
          </p>

          <div className="hero-ctas">
            <button onClick={onOpenQuote} className="btn-primary">
              <span>Get a Free Quote</span>
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Feature Badges Bar */}
          <div className="hero-feature-badges">
            <div className="feature-badge-item">
              <div className="feature-badge-icon">
                <Tag size={16} />
              </div>
              <span>Affordable Pricing</span>
            </div>

            <div className="feature-badge-item">
              <div className="feature-badge-icon">
                <Smartphone size={16} />
              </div>
              <span>Mobile Responsive</span>
            </div>

            <div className="feature-badge-item">
              <div className="feature-badge-icon">
                <TrendingUp size={16} />
              </div>
              <span>SEO Ready</span>
            </div>

            <div className="feature-badge-item">
              <div className="feature-badge-icon">
                <Headphones size={16} />
              </div>
              <span>Ongoing Support</span>
            </div>
          </div>
        </div>

        {/* Right Column Visual Mockup */}
        <div className="hero-visual-wrapper">
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
              alt="Advait Website Showcase Laptop Mockup" 
              className="hero-mockup-img"
            />
          </div>

          {/* Yellow Sticky Note */}
          <div className="yellow-sticky-note">
            A Website Today A Brighter Tomorrow
          </div>

          {/* Floating Right Badges */}
          <div className="floating-badges-column">
            <div className="floating-badge-card">
              <div className="badge-icon-blue">
                <Users size={14} />
              </div>
              <span>More Customers</span>
            </div>

            <div className="floating-badge-card">
              <div className="badge-icon-blue">
                <ShieldCheck size={14} />
              </div>
              <span>Better Brand Image</span>
            </div>

            <div className="floating-badge-card">
              <div className="badge-icon-blue">
                <TrendingUp size={14} />
              </div>
              <span>Higher Sales</span>
            </div>

            <div className="floating-badge-card">
              <div className="badge-icon-blue">
                <BarChart3 size={14} />
              </div>
              <span>Business Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
