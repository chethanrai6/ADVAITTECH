import React from 'react';
import { ArrowRight, Eye, MessageSquare } from 'lucide-react';

export default function CTABanner({ onOpenQuote, onOpenWhatsApp }) {
  const handleScrollToPortfolio = () => {
    const portfolioSec = document.getElementById('portfolio');
    if (portfolioSec) {
      portfolioSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-banner-section">
      <div className="container">
        <div className="cta-card-wrapper reveal-zoom">
          <div className="cta-content-box">
            <span className="cta-badge">GET STARTED TODAY</span>
            <h2 className="cta-title">Ready to Take Your Business Online?</h2>
            <p className="cta-subtitle">
              Let's build a website your customers remember.
            </p>

            <div className="cta-button-group">
              <button onClick={onOpenQuote} className="btn-primary-white">
                <span>Start Your Project</span>
                <ArrowRight size={18} />
              </button>

              <button onClick={handleScrollToPortfolio} className="btn-outline-white">
                <Eye size={18} />
                <span>View Our Work</span>
              </button>

              {onOpenWhatsApp && (
                <button onClick={onOpenWhatsApp} className="btn-whatsapp-cta">
                  <MessageSquare size={18} />
                  <span>WhatsApp Us Direct</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
