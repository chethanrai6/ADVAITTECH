import React from 'react';
import { Globe, ShoppingBag, Target, UserCheck, RefreshCw, Wrench, ArrowRight } from 'lucide-react';

export default function Services({ onOpenQuote, onOpenServiceDetail }) {
  const services = [
    {
      id: 'business-websites',
      title: 'Business Websites',
      icon: Globe,
      description: 'Professional websites tailored for local businesses, corporate companies, and service providers looking to build online authority.',
      tag: 'Most Popular'
    },
    {
      id: 'ecommerce-websites',
      title: 'E-commerce Websites',
      icon: ShoppingBag,
      description: 'Custom online stores equipped with product catalogs, shopping carts, secure checkout gateways, and automated inventory tools.',
      tag: 'High Conversion'
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      icon: Target,
      description: 'Focused, ultra-fast landing pages engineered specifically to boost ROI on Google Ads, Meta campaigns, and promotional launches.',
      tag: 'Fast Turnaround'
    },
    {
      id: 'portfolio-websites',
      title: 'Portfolio Websites',
      icon: UserCheck,
      description: 'Sleek, interactive portfolio showcases that highlight your projects, client feedback, skills, and professional accomplishments.',
      tag: 'Showcase'
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign',
      icon: RefreshCw,
      description: 'Modernize outdated websites into high-speed, mobile-responsive, visually stunning web experiences that outshine competitors.',
      tag: 'Upgrade'
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance & Support',
      icon: Wrench,
      description: 'Continuous technical monitoring, regular backups, security audits, and quick content updates so your website runs glitch-free.',
      tag: 'Reliable'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">OUR SERVICES</span>
          <h2 className="section-heading">Everything Your Business Needs Online</h2>
          <p className="section-subheading">
            From single-page landing pages to full e-commerce ecosystems, we deliver tailored web development solutions that drive measurable business growth.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv, idx) => {
            const IconComponent = srv.icon;
            const staggerClass = `stagger-${(idx % 6) + 1}`;
            return (
              <div 
                key={srv.id} 
                className={`service-card reveal-slide-up ${staggerClass}`}
                onClick={() => onOpenQuote()}
              >
                <div className="service-header">
                  <div className="service-icon-box">
                    <IconComponent size={24} />
                  </div>
                  {srv.tag && <span className="service-badge">{srv.tag}</span>}
                </div>

                <h3 className="service-title">{srv.title}</h3>
                <p className="service-description">{srv.description}</p>

                <div className="service-footer">
                  <button 
                    className="service-link-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenQuote();
                    }}
                  >
                    <span>Learn More & Quote</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
