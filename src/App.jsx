import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BusinessNeed from './components/BusinessNeed';
import Services from './components/Services';
import IndustryCategories from './components/IndustryCategories';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTABanner from './components/CTABanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import QuoteModal from './components/QuoteModal';
import ProjectModal from './components/ProjectModal';
import PrivacyTermsModal from './components/PrivacyTermsModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(
      '.reveal-slide-up, .reveal-slide-left, .reveal-slide-right, .reveal-zoom, .reveal-fade'
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleOpenQuoteWithPlan = (plan) => {
    setSelectedPlan(plan);
    setIsQuoteOpen(true);
  };

  const handleOpenWhatsApp = () => {
    const text = encodeURIComponent("Hi Advait Tech! I'd like a website for my business.");
    window.open(`https://wa.me/918848389933?text=${text}`, '_blank');
  };

  return (
    <div className="app-container">
      {/* 1. Navbar */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 2. Hero Section (Single H1) */}
      <Hero 
        onOpenQuote={() => setIsQuoteOpen(true)} 
      />

      {/* 3. Business Need Section */}
      <BusinessNeed />

      {/* 4. Services Section */}
      <Services 
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 5. Industry Categories */}
      <IndustryCategories 
        selectedCategory={selectedCategory} 
        onSelectCategory={(cat) => setSelectedCategory(cat)}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* 6. Portfolio / Work Showcase */}
      <Portfolio 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSelectProject={(project) => setActiveProject(project)}
      />

      {/* 7. Why Choose Advait */}
      <WhyChooseUs onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 8. Process Timeline */}
      <Process />

      {/* 9. Pricing Plans */}
      <Pricing onSelectPlan={handleOpenQuoteWithPlan} />

      {/* 10. Testimonials */}
      <Testimonials />

      {/* 11. FAQ Section */}
      <FAQ onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* 12. Final CTA Banner */}
      <CTABanner 
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* 13. Contact Section */}
      <ContactSection />

      {/* 15. Footer */}
      <Footer 
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenPrivacyModal={() => setIsPrivacyOpen(true)}
      />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppWidget />

      {/* Modals */}
      <QuoteModal 
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedPlan={selectedPlan}
      />

      <ProjectModal 
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestSimilar={() => {
          setActiveProject(null);
          setIsQuoteOpen(true);
        }}
      />

      <PrivacyTermsModal 
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
