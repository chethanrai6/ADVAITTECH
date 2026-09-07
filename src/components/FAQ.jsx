import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

export default function FAQ({ onOpenQuote }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How much does a website cost?',
      answer: 'Our website packages start from ₹4,999 for essential business websites up to ₹8,999 for full-featured professional platforms. For complex custom applications or e-commerce stores with custom gateways, we provide custom project quotes tailored to your scope.'
    },
    {
      question: 'How long does a website take to build?',
      answer: 'Standard business websites are typically designed, developed, and deployed within 3 to 7 business days. Custom e-commerce web portals or advanced web applications generally take between 10 to 21 days depending on feature complexity.'
    },
    {
      question: 'Will my website work on mobile?',
      answer: 'Yes! Every website we build is 100% mobile-first and responsive. Your site will automatically adapt seamlessly to all device screen sizes including smartphones, tablets, laptops, and large desktop monitors.'
    },
    {
      question: 'Can you redesign my existing website?',
      answer: 'Absolutely. We specialize in transforming outdated, slow, or poorly converting websites into modern, high-speed, visually stunning digital experiences that attract and retain customers.'
    },
    {
      question: 'Can you provide domain and hosting?',
      answer: 'Yes. We assist with registering your custom domain (.com, .in, etc.), setting up SSL security certificates, and deploying your website on high-speed global cloud hosting platforms like Vercel and AWS.'
    },
    {
      question: 'Will my website be SEO friendly?',
      answer: 'Yes! We follow search engine optimization best practices on every project — including proper H1/H2 heading hierarchy, Meta descriptions, Open Graph cards, fast load speeds, schema markup, and Google Search Console indexing readiness.'
    },
    {
      question: 'Can I update my website later?',
      answer: 'Yes. We build clean, modular components and provide easy content update options so you or your team can update photos, prices, text, or products effortlessly without technical friction.'
    },
    {
      question: 'Do you provide maintenance and support?',
      answer: 'Yes. We provide 7 to 60 days of complimentary post-launch support depending on your plan. We also offer ongoing monthly maintenance packages to manage updates, security checks, and content edits.'
    },
    {
      question: 'Can you build an e-commerce website?',
      answer: 'Yes! We design high-converting e-commerce web portals with product catalogs, shopping cart flows, payment gateway integrations (Razorpay, UPI, Stripe), and direct WhatsApp order notifications.'
    },
    {
      question: 'How do I start a project?',
      answer: 'Starting is quick and simple! Click the "Start Your Project" or "Build My Website" button on our page, fill out our quick requirement form, or message us directly on WhatsApp at +91 88483 89933. We will guide you through the rest!'
    }
  ];

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">GOT QUESTIONS?</span>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="section-subheading">
            Everything you need to know about working with Advait Tech to create your modern business website.
          </p>
        </div>

        <div className="faq-accordion-container reveal-zoom">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={faq.question}
                className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
              >
                <button 
                  className="faq-question-btn"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={isOpen}
                >
                  <span className="question-text">{faq.question}</span>
                  <ChevronDown className={`chevron-icon ${isOpen ? 'rotate' : ''}`} size={20} />
                </button>

                {isOpen && (
                  <div className="faq-answer-content">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner inside FAQ */}
        <div className="faq-help-box text-center reveal-slide-up" style={{ marginTop: '40px' }}>
          <p style={{ fontSize: '1rem', color: 'var(--text-dark)', fontWeight: 500, marginBottom: '12px' }}>
            Have a question that is not listed here?
          </p>
          <button onClick={onOpenQuote} className="btn-primary">
            <span>Ask Our Web Experts</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
