import React from 'react';
import { Eye, ShieldCheck, Clock, TrendingUp } from 'lucide-react';

export default function BusinessNeed() {
  const cards = [
    {
      icon: Eye,
      title: 'FIRST IMPRESSION',
      description: 'Your website is often one of the first things customers see. Make that first impression count with modern aesthetics and smooth user experiences.',
      accentColor: '#3b82f6'
    },
    {
      icon: ShieldCheck,
      title: 'BUILD TRUST',
      description: 'A professional website makes your business look established, credible and trustworthy, instantly reassuring potential customers.',
      accentColor: '#10b981'
    },
    {
      icon: Clock,
      title: 'AVAILABLE 24/7',
      description: 'Customers can discover your business, services and contact information even when you are closed — earning leads around the clock.',
      accentColor: '#8b5cf6'
    },
    {
      icon: TrendingUp,
      title: 'GROW YOUR BUSINESS',
      description: 'Turn online visitors into enquiries, calls and paying customers with strategic conversion elements designed into every page.',
      accentColor: '#f59e0b'
    }
  ];

  return (
    <section className="business-need-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">WHY YOUR BUSINESS NEEDS A WEBSITE</span>
          <h2 className="section-heading">
            Your Customers Are Already Searching. <span className="gradient-text">Can They Find You?</span>
          </h2>
          <p className="section-subheading">
            In today's digital marketplace, your website is your digital storefront. Without a strong web presence, you risk losing potential clients directly to competitors.
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
