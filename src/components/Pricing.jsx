import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('oneTime');

  const plans = [
    {
      id: 'starter',
      name: 'STARTER',
      tagline: 'For simple business websites',
      price: billingCycle === 'oneTime' ? '₹4,999' : '₹999/mo',
      period: billingCycle === 'oneTime' ? 'one-time investment' : 'billed monthly',
      description: 'Ideal for local shops, individuals, and small businesses getting started online.',
      highlight: false,
      badge: null,
      features: [
        '1-3 Custom Designed Pages',
        '100% Mobile Responsive Layout',
        'Basic SEO & Meta Configuration',
        'Contact Form & Direct Phone Links',
        'WhatsApp Chat Integration',
        'High Speed Cloud Hosting Setup',
        '7 Days Post-Launch Support'
      ],
      ctaText: 'Start Your Project'
    },
    {
      id: 'professional',
      name: 'PROFESSIONAL',
      tagline: 'For businesses that want a complete online presence',
      price: billingCycle === 'oneTime' ? '₹8,999' : '₹1,999/mo',
      period: billingCycle === 'oneTime' ? 'one-time investment' : 'billed monthly',
      description: 'Our most popular package for established companies looking to generate leads.',
      highlight: true,
      badge: 'MOST POPULAR',
      features: [
        'Up to 6-8 Custom Designed Pages',
        'Premium Custom UI/UX & Animations',
        'Full On-Page SEO & Schema Markup',
        'Interactive Service & Industry Modals',
        'Google Maps & Business Setup',
        'Speed Optimization (90+ Score)',
        'Custom Domain Integration',
        '30 Days Dedicated Support'
      ],
      ctaText: 'Start Your Project'
    },
    {
      id: 'custom',
      name: 'CUSTOM',
      tagline: 'For e-commerce & custom applications',
      price: 'Let’s Talk',
      period: 'tailored project scope',
      description: 'Custom e-commerce stores, appointment portals, and complex web applications.',
      highlight: false,
      badge: null,
      features: [
        'Unlimited Custom Pages & Routing',
        'E-commerce & Shopping Cart Setup',
        'Payment Gateway Integration',
        'Custom Database & API Features',
        'Advanced Analytics & Tracking',
        'Priority Technical Maintenance',
        '60 Days Ongoing Support'
      ],
      ctaText: 'Start Your Project'
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up" style={{ marginBottom: '32px' }}>
          <span className="section-tag">TRANSPARENT PRICING</span>
          <h2 className="section-heading">Choose the Right Website for Your Business</h2>
          <p className="section-subheading">
            Transparent packages designed for businesses of all sizes. No hidden costs, no surprises.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="pricing-toggle-bar">
            <button 
              className={`toggle-option-btn ${billingCycle === 'oneTime' ? 'active' : ''}`}
              onClick={() => setBillingCycle('oneTime')}
            >
              One-Time Project
            </button>
            <button 
              className={`toggle-option-btn ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Managed Monthly
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-cards-grid">
          {plans.map((plan, idx) => {
            const staggerClass = `stagger-${idx + 1}`;
            return (
              <div 
                key={plan.id}
                className={`pricing-card-box ${plan.highlight ? 'featured-card' : ''} reveal-zoom ${staggerClass}`}
              >
                {plan.badge && (
                  <div className="card-top-badge">
                    <Sparkles size={13} /> {plan.badge}
                  </div>
                )}

                <div className="pricing-card-header">
                  <h3 className="plan-title">{plan.name}</h3>
                  <p className="plan-subtitle-tag">{plan.tagline}</p>

                  <div className="plan-price-row">
                    <span className="plan-price-val">{plan.price}</span>
                    <span className="plan-price-period">{plan.period}</span>
                  </div>

                  <p className="plan-desc-text">{plan.description}</p>
                </div>

                <div className="plan-features-block">
                  <span className="features-block-label">Includes:</span>
                  <div className="features-list-group">
                    {plan.features.map((feat) => (
                      <div key={feat} className="feature-item-row">
                        <Check size={16} className="check-icon-blue" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pricing-card-footer">
                  <button 
                    onClick={() => onSelectPlan(plan)}
                    className={plan.highlight ? 'btn-primary' : 'btn-outline-pill'}
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{plan.ctaText}</span>
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
