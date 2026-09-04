import React from 'react';
import { Tag, Zap, FileCheck, Headphones, Users, Heart, ArrowRight } from 'lucide-react';

export default function WhyChooseUs({ onOpenQuote }) {
  const features = [
    {
      title: 'Affordable Pricing',
      desc: 'High quality websites at budget-friendly prices.',
      icon: Tag
    },
    {
      title: 'Fast Delivery',
      desc: 'Get your website live quickly.',
      icon: Zap
    },
    {
      title: 'Transparent Process',
      desc: 'No hidden costs. Just honest work.',
      icon: FileCheck
    },
    {
      title: 'Dedicated Support',
      desc: "We're here even after your website goes live.",
      icon: Headphones
    },
    {
      title: 'Small Business Focus',
      desc: 'Solutions made for local and small businesses.',
      icon: Users
    },
    {
      title: 'Client Satisfaction',
      desc: 'Your success is our success.',
      icon: Heart
    }
  ];

  return (
    <section id="about" className="why-section">
      <div className="container why-grid">
        {/* Left Content */}
        <div className="reveal-slide-left">
          <span className="section-tag">WHY CHOOSE ADVAIT</span>
          <h2 className="section-heading">A Partner in Your Business Growth</h2>
          <p className="section-subheading" style={{ marginBottom: '24px' }}>
            We believe every small business has a big story. Our mission is to bring your story online with beautiful, functional and affordable websites.
          </p>

          <button onClick={onOpenQuote} className="btn-primary">
            <span>Let's Grow Together</span>
            <ArrowRight size={18} />
          </button>

          {/* 6 Features Grid */}
          <div className="why-features-grid">
            {features.map((feat, idx) => {
              const IconComp = feat.icon;
              const staggerClass = `stagger-${idx + 1}`;
              return (
                <div key={idx} className={`why-feature-box reveal-slide-up ${staggerClass}`}>
                  <div className="why-feature-icon">
                    <IconComp size={20} />
                  </div>
                  <h4 className="why-feature-title">{feat.title}</h4>
                  <p className="why-feature-desc">{feat.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Banner Visual */}
        <div className="why-banner-wrapper reveal-slide-right">
          <img 
            src="/assets/mountain_banner.png" 
            alt="Small Businesses Big Possibilities" 
            className="why-banner-img"
          />
          <div className="why-banner-overlay">
            <span>SMALL BUSINESSES</span>
            <h3>BIG<br />POSSIBILITIES</h3>
          </div>
          <div className="why-banner-logo">
            <img src="/advait_logo.png" alt="Advait Logo" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
            <span>Advait</span>
          </div>
        </div>
      </div>
    </section>
  );
}
