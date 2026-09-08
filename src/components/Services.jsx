import React from 'react';
import { Globe, ShoppingBag, Target, UserCheck, RefreshCw, Wrench, ArrowRight } from 'lucide-react';

export default function Services({ onOpenQuote }) {
  const services = [
    {
      id: 'business-websites',
      title: 'Business Websites',
      icon: Globe,
      description: 'Custom business website development tailored for local companies, corporate brands, and service providers looking to build credibility online.',
      tag: 'Most Popular'
    },
    {
      id: 'ecommerce-websites',
      title: 'E-commerce Websites',
      icon: ShoppingBag,
      description: 'Online stores engineered with fast product catalogs, direct WhatsApp ordering, secure checkout options, and seamless mobile responsiveness.',
      tag: 'High Conversion'
    },
    {
      id: 'landing-pages',
      title: 'Landing Pages',
      icon: Target,
      description: 'High-converting, ultra-fast landing pages crafted specifically to boost conversion rates on Google Ads, Meta campaigns, and product launches.',
      tag: 'Fast Turnaround'
    },
    {
      id: 'portfolio-websites',
      title: 'Portfolio Websites',
      icon: UserCheck,
      description: 'Sleek portfolio website design showcasing project work, client reviews, certifications, and achievements for individual professionals and agencies.',
      tag: 'Showcase'
    },
    {
      id: 'website-redesign',
      title: 'Website Redesign',
      icon: RefreshCw,
      description: 'Transform outdated or slow websites into modern business websites featuring modern layouts, high-speed code, and mobile-friendly usability.',
      tag: 'Upgrade'
    },
    {
      id: 'maintenance-support',
      title: 'Maintenance & Support',
      icon: Wrench,
      description: 'Reliable ongoing support, technical monitoring, security audits, and quick content updates so your website runs smoothly 24/7.',
      tag: 'Reliable'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">OUR SERVICES</span>
          <h2 className="section-heading">Everything Your Business Needs Online</h2>
          <p className="section-subheading" style={{ maxWidth: '840px', margin: '0 auto' }}>
            At Advait Tech, we specialize in affordable website development and modern website design for small businesses. From single-page landing pages to full corporate portals, we build responsive websites that help local businesses grow online.
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
                    <span>Get a Free Quote</span>
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
