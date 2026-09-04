import React, { useState } from 'react';
import { Send, Star, Crown, ShoppingBag, Check } from 'lucide-react';

export default function Pricing({ onSelectPlan }) {
  const [billingCycle, setBillingCycle] = useState('one-time'); // 'monthly' | 'one-time'

  const plans = [
    {
      id: 'starter',
      name: 'Starter',
      subtitle: 'Perfect for small businesses',
      icon: Send,
      priceOneTime: '4,999',
      priceMonthly: '499',
      featured: false,
      features: [
        'Up to 5 pages',
        'Mobile responsive',
        'Contact form',
        'WhatsApp integration',
        'Basic SEO setup',
        '1 year free hosting'
      ]
    },
    {
      id: 'business',
      name: 'Business',
      subtitle: 'Great for growing businesses',
      icon: Star,
      priceOneTime: '7,999',
      priceMonthly: '799',
      featured: true,
      popularTag: 'Most Popular',
      features: [
        'Up to 8 pages',
        'Mobile responsive',
        'WhatsApp + Call button',
        'Google Maps integration',
        'Basic SEO setup',
        '1 year free hosting',
        'Free business email'
      ]
    },
    {
      id: 'professional',
      name: 'Professional',
      subtitle: 'For established businesses',
      icon: Crown,
      priceOneTime: '11,999',
      priceMonthly: '1,199',
      featured: false,
      features: [
        'Up to 12 pages',
        'Advanced design',
        'WhatsApp + Call button',
        'Google Maps integration',
        'On-page SEO',
        '1 year free hosting',
        'Free business email',
        'Support for 3 months'
      ]
    },
    {
      id: 'ecommerce',
      name: 'E-commerce',
      subtitle: 'Start your online store',
      icon: ShoppingBag,
      priceOneTime: '14,999',
      priceMonthly: '1,499',
      featured: false,
      features: [
        'Unlimited products',
        'Secure payment gateway',
        'Order management panel',
        'Invoice & shipping setup',
        'WhatsApp Integration',
        'Basic SEO setup',
        '1 year free hosting',
        'Support for 3 months'
      ]
    }
  ];

  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        {/* Header & Toggle */}
        <div className="pricing-header-row">
          <div>
            <span className="section-tag">SIMPLE PRICING</span>
            <h2 className="section-heading">Choose the Right Plan for Your Business</h2>
            <p className="section-subheading">Transparent pricing. No hidden charges.</p>
          </div>

          <div className="pricing-toggle">
            <button 
              className={`toggle-option ${billingCycle === 'monthly' ? 'active' : ''}`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`toggle-option ${billingCycle === 'one-time' ? 'active' : ''}`}
              onClick={() => setBillingCycle('one-time')}
            >
              One Time
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          {plans.map((plan) => {
            const IconComp = plan.icon;
            const price = billingCycle === 'one-time' ? plan.priceOneTime : plan.priceMonthly;

            return (
              <div 
                key={plan.id} 
                className={`pricing-card ${plan.featured ? 'featured' : ''}`}
              >
                {plan.featured && (
                  <div className="popular-badge">{plan.popularTag}</div>
                )}

                <div>
                  <div className="plan-icon-header">
                    <div className="plan-icon-box">
                      <IconComp size={20} />
                    </div>
                    <h3 className="plan-name">{plan.name}</h3>
                  </div>

                  <p className="plan-subtitle">{plan.subtitle}</p>

                  <div className="plan-price-row">
                    <span className="price-currency">₹</span>
                    <span className="price-amount">{price}</span>
                    <span className="price-gst">+ GST {billingCycle === 'monthly' ? '/mo' : ''}</span>
                  </div>

                  <ul className="plan-features-list">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="plan-feature-item">
                        <Check className="check-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => onSelectPlan(plan)} 
                  className="btn-plan"
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
