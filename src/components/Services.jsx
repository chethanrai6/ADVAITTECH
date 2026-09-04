import React from 'react';
import { Monitor, ShoppingCart, RefreshCw, Wrench, Globe, ArrowRight } from 'lucide-react';

export default function Services({ onOpenServiceDetail, onOpenQuote }) {
  const services = [
    {
      id: 'business',
      title: 'Business Websites',
      desc: 'Professional websites tailored to your business needs.',
      icon: Monitor
    },
    {
      id: 'ecommerce',
      title: 'E-commerce Websites',
      desc: 'Sell your products online with secure payment integration.',
      icon: ShoppingCart
    },
    {
      id: 'redesign',
      title: 'Website Redesign',
      desc: 'Give your old website a modern and fresh new look.',
      icon: RefreshCw
    },
    {
      id: 'maintenance',
      title: 'Website Maintenance',
      desc: 'Keep your website updated, secure and running smoothly.',
      icon: Wrench
    },
    {
      id: 'hosting',
      title: 'Domain & Hosting',
      desc: 'Get domain, hosting, SSL and business email at the best price.',
      icon: Globe
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container services-layout">
        {/* Intro Block */}
        <div className="services-intro-card">
          <span className="section-tag">OUR SERVICES</span>
          <h2 className="section-heading">Everything You Need to Grow Online</h2>
          <p className="section-subheading" style={{ marginBottom: '24px' }}>
            From domain to design, we provide complete web solutions for your business.
          </p>
          <button onClick={onOpenQuote} className="btn-primary" style={{ alignSelf: 'flex-start' }}>
            <span>Explore All Services</span>
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Services Cards Grid */}
        <div className="services-grid">
          {services.map((srv) => {
            const IconComp = srv.icon;
            return (
              <div key={srv.id} className="service-card">
                <div>
                  <div className="service-icon-box">
                    <IconComp size={26} />
                  </div>
                  <h3 className="service-title">{srv.title}</h3>
                  <p className="service-desc">{srv.desc}</p>
                </div>
                <button 
                  onClick={() => onOpenServiceDetail(srv)} 
                  className="service-link"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
