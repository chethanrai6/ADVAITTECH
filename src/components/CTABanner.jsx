import React from 'react';
import { Send, ArrowRight, MessageSquare } from 'lucide-react';

export default function CTABanner({ onOpenQuote, onOpenWhatsApp }) {
  return (
    <div className="container" style={{ paddingBottom: '80px' }}>
      <div className="cta-banner">
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Send size={28} color="#FFFFFF" />
          </div>

          <div className="cta-banner-content">
            <h2>Ready to Take Your Business Online?</h2>
            <p>Get a free consultation and the best website solution for your business.</p>
          </div>
        </div>

        <div className="cta-buttons">
          <button onClick={onOpenQuote} className="btn-white">
            <span>Get a Free Quote</span>
            <ArrowRight size={18} />
          </button>

          <button onClick={onOpenWhatsApp} className="btn-whatsapp">
            <MessageSquare size={18} />
            <span>Chat on WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
}
