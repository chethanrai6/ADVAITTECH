import React from 'react';
import { Palette, Smartphone, Zap, FileText, Heart, MessageSquare, ArrowRight } from 'lucide-react';

export default function AboutAdvait({ onOpenQuote }) {
  const focusAreas = [
    {
      icon: Palette,
      title: 'Modern Design',
      description: 'Clean typography, cohesive color palettes, and contemporary visual layouts that establish immediate credibility for your business.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Development',
      description: '100% mobile-friendly responsive websites built to render smoothly across smartphones, tablets, laptops, and desktop screens.'
    },
    {
      icon: Zap,
      title: 'Fast Performance',
      description: 'Lightweight code structure and optimized web assets for rapid page loading speeds that keep visitors engaged and reduce bounce rates.'
    },
    {
      icon: FileText,
      title: 'Clear Business Information',
      description: 'Structured site content that makes your services, business hours, pricing, and location instantly easy for customers to find.'
    },
    {
      icon: Heart,
      title: 'Customer-Focused Experiences',
      description: 'Intuitive user navigation and clear layouts designed around customer clarity, building trust and encouraging action.'
    },
    {
      icon: MessageSquare,
      title: 'Easy Contact & Conversion',
      description: 'Strategic placement of call-to-action buttons, direct WhatsApp chat options, and quick contact forms so leads reach you effortlessly.'
    }
  ];

  return (
    <section id="about" className="about-advait-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">WHO WE ARE</span>
          <h2 className="section-heading">About Advait Tech</h2>
          <p className="section-subheading" style={{ maxWidth: '820px', margin: '0 auto 16px' }}>
            Advait Tech helps businesses build a strong digital presence through modern, professional websites. We focus on creating websites that look great, work smoothly on every device, and make it easy for customers to discover and contact your business.
          </p>
        </div>

        {/* Detailed Narrative Content Block */}
        <div className="about-content-box reveal-slide-up" style={{ marginBottom: '48px' }}>
          <div className="about-text-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>
                Dedicated to Website Design for Small Businesses
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '14px' }}>
                At <strong>Advait Tech</strong>, we understand that for local businesses, a website is often the first impression a customer has of your brand. Our goal is to make business website development simple, accessible, and effective. Whether you run a bakery, clinic, salon, fitness studio, or service company, we provide tailored website development solutions designed around your specific business goals.
              </p>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
                We combine aesthetic modern business websites with practical functionality. Every project is crafted with clean code, search engine readiness, and responsive design standards so your customers enjoy a frictionless browsing experience.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-dark)', marginBottom: '12px' }}>
                Affordable Website Development & Direct Support
              </h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65, marginBottom: '14px' }}>
                We believe affordable website development should never mean compromising on design quality or mobile responsiveness. That is why Advait Tech builds custom, high-speed, mobile-friendly websites that showcase your work and turn casual online visitors into paying clients.
              </p>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
                From initial planning to final deployment, we maintain clear communication and provide reliable post-launch technical assistance so your online presence remains secure, updated, and effective.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Focus Cards */}
        <div className="about-focus-grid">
          {focusAreas.map((item, idx) => {
            const IconComponent = item.icon;
            const staggerClass = `stagger-${(idx % 3) + 1}`;
            return (
              <div key={item.title} className={`about-focus-card reveal-slide-up ${staggerClass}`}>
                <div className="focus-icon-box">
                  <IconComponent size={22} />
                </div>
                <h3 className="focus-card-title">{item.title}</h3>
                <p className="focus-card-desc">{item.description}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom Call to Action */}
        <div className="about-cta-bar text-center reveal-zoom" style={{ marginTop: '48px' }}>
          <button onClick={onOpenQuote} className="btn-primary">
            <span>Get Your Website Today</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
