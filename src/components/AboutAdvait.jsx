import React from 'react';
import { Layout, Rocket, CheckCircle2 } from 'lucide-react';

export default function AboutAdvait() {
  return (
    <section id="about" className="about-advait-section" aria-label="About Advait Tech">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">WHO WE ARE</span>
          <h2 className="section-heading">About Advait Tech</h2>
          <p className="section-subheading about-intro-text">
            Advait Tech helps businesses build a strong digital presence through modern, professional websites. We create fast, responsive websites that make it easier for customers to discover, trust, and contact your business.
          </p>
        </div>

        {/* Two Agency Cards Grid */}
        <div className="about-cards-grid reveal-slide-up">
          {/* CARD 1 */}
          <div className="about-agency-card">
            <div className="about-card-header">
              <div className="about-card-icon-box" aria-hidden="true">
                <Layout size={24} />
              </div>
              <h3 className="about-card-title">Built Around Your Business</h3>
            </div>
            
            <p className="about-card-text">
              At Advait Tech, we understand that a website is often the first impression a customer has of a business. We create tailored websites around your brand, services, customers, and business goals.
            </p>

            <ul className="about-benefit-list" aria-label="Business design benefits">
              <li className="about-benefit-item">
                <CheckCircle2 size={18} className="benefit-check-icon" aria-hidden="true" />
                <span><strong>Custom Website Design</strong> — Tailored visual layouts built for your brand identity.</span>
              </li>
              <li className="about-benefit-item">
                <CheckCircle2 size={18} className="benefit-check-icon" aria-hidden="true" />
                <span><strong>Mobile-First Experience</strong> — 100% mobile-friendly websites for smartphones and tablets.</span>
              </li>
              <li className="about-benefit-item">
                <CheckCircle2 size={18} className="benefit-check-icon" aria-hidden="true" />
                <span><strong>Clear Customer Journey</strong> — Making it easier for local business visitors to become customers.</span>
              </li>
            </ul>
          </div>

          {/* CARD 2 */}
          <div className="about-agency-card">
            <div className="about-card-header">
              <div className="about-card-icon-box" aria-hidden="true">
                <Rocket size={24} />
              </div>
              <h3 className="about-card-title">Reliable From Start to Launch</h3>
            </div>

            <p className="about-card-text">
              We focus on creating modern websites that combine strong visual design with practical functionality. From planning and website development to deployment, we keep the process clear and provide support after launch.
            </p>

            <ul className="about-benefit-list" aria-label="Development benefits">
              <li className="about-benefit-item">
                <CheckCircle2 size={18} className="benefit-check-icon" aria-hidden="true" />
                <span><strong>Fast & Responsive Development</strong> — High-speed code for quick page loads and SEO readiness.</span>
              </li>
              <li className="about-benefit-item">
                <CheckCircle2 size={18} className="benefit-check-icon" aria-hidden="true" />
                <span><strong>Clear Communication</strong> — Transparent project updates and straightforward development workflows.</span>
              </li>
              <li className="about-benefit-item">
                <CheckCircle2 size={18} className="benefit-check-icon" aria-hidden="true" />
                <span><strong>Post-Launch Support</strong> — Ongoing technical assistance for business websites after launch.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
