import React from 'react';
import { Eye, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export default function BusinessNeed() {
  const cards = [
    {
      icon: Eye,
      title: 'FIRST IMPRESSION',
      description: 'Your website is often one of the first things customers see when discovering websites for local businesses. Make that first impression count with modern website design, sleek typography, and smooth mobile-friendly user experiences.',
      accentColor: '#3b82f6'
    },
    {
      icon: ShieldCheck,
      title: 'BUILD TRUST',
      description: 'A professional website makes your business look established, credible, and trustworthy. Investing in professional websites signals quality to clients comparing you with local competitors.',
      accentColor: '#10b981'
    },
    {
      icon: Clock,
      title: 'AVAILABLE 24/7',
      description: 'Customers can discover your business, services, prices, and contact details even when your physical storefront is closed — generating continuous leads around the clock through responsive websites.',
      accentColor: '#8b5cf6'
    },
    {
      icon: TrendingUp,
      title: 'GROW YOUR BUSINESS',
      description: 'Turn casual online visitors into inquiries, phone calls, and paying customers with business website development designed specifically for high conversion rates.',
      accentColor: '#f59e0b'
    }
  ];

  return (
    <section className="business-need-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">WHY YOUR BUSINESS NEEDS A WEBSITE</span>
          <h2 className="section-heading">
            Your Customers Are Already Searching. <span className="blue-highlight">Can They Find You?</span>
          </h2>
          <p className="section-subheading" style={{ maxWidth: '840px', margin: '0 auto' }}>
            In today's digital marketplace, local consumers rely on search engines to find nearby shops, salons, clinics, bakeries, and service providers. Without a modern business website created by an experienced web development partner like Advait Tech, your business risks remaining invisible to potential customers.
          </p>
        </div>

        <div className="business-need-grid">
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            const staggerClass = `stagger-${idx + 1}`;
            return (
              <div 
                key={card.title} 
                className={`business-need-card reveal-slide-up ${staggerClass}`}
              >
                <div className="need-card-icon-wrapper" style={{ backgroundColor: `${card.accentColor}15`, color: card.accentColor }}>
                  <IconComponent size={28} />
                </div>
                <h3 className="need-card-title">{card.title}</h3>
                <p className="need-card-description">{card.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
