import React from 'react';
import { MessageCircle, MapPin, Palette, Code, CheckCircle, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      title: 'Tell Us About Your Business',
      icon: MessageCircle,
      description: 'Share your business goals, target audience, preferred styles, and key feature requirements during our brief onboarding conversation.'
    },
    {
      number: '02',
      title: 'Plan Your Website',
      icon: MapPin,
      description: 'We structure the website layout, content hierarchy, page navigation, and conversion pathways tailored specifically for your target customers.'
    },
    {
      number: '03',
      title: 'Design',
      icon: Palette,
      description: 'Our design team crafts visual mockups featuring modern typography, brand colors, glassmorphic elements, and intuitive user interfaces.'
    },
    {
      number: '04',
      title: 'Development',
      icon: Code,
      description: 'We translate approved designs into clean, responsive HTML, CSS, and React code optimized for lightning-fast speeds and search engine SEO.'
    },
    {
      number: '05',
      title: 'Review',
      icon: CheckCircle,
      description: 'We test your website across all major mobile devices, tablets, and browsers, refining details based on your feedback until it is perfect.'
    },
    {
      number: '06',
      title: 'Launch',
      icon: Rocket,
      description: 'We connect your domain, deploy your website to high-speed cloud servers, configure security certificates, and hand over your live project.'
    }
  ];

  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">OUR METHODOLOGY</span>
          <h2 className="section-heading">From Idea to Launch</h2>
          <p className="section-subheading">
            A simple, transparent 6-step process designed to take your website from concept to live deployment without friction.
          </p>
        </div>

        <div className="process-timeline-grid">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            const staggerClass = `stagger-${idx + 1}`;
            return (
              <div 
                key={step.number}
                className={`process-step-card reveal-slide-up ${staggerClass}`}
              >
                <div className="step-card-top">
                  <span className="step-number">{step.number}</span>
                  <div className="step-icon-badge">
                    <IconComponent size={22} />
                  </div>
                </div>

                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.description}</p>

                {idx < steps.length - 1 && (
                  <div className="step-connector-line" aria-hidden="true" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
