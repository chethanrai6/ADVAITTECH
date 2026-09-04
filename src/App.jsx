import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IndustryCategories from './components/IndustryCategories';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import QuoteModal from './components/QuoteModal';
import VideoModal from './components/VideoModal';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
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
    const text = encodeURIComponent("Hi Advait team! I'd like a website for my business.");
    window.open(`https://wa.me/918848389933?text=${text}`, '_blank');
  };

  return (
    <div className="app-container">
      {/* Navbar */}
      <Navbar onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Hero Section */}
      <Hero 
        onOpenQuote={() => setIsQuoteOpen(true)} 
        onOpenVideo={() => setIsVideoOpen(true)} 
      />

      {/* Industry Categories Carousel */}
      <IndustryCategories 
        selectedCategory={selectedCategory} 
        onSelectCategory={(cat) => {
          setSelectedCategory(cat);
          const portfolioSec = document.getElementById('portfolio');
          if (portfolioSec) {
            portfolioSec.scrollIntoView({ behavior: 'smooth' });
          }
        }} 
      />

      {/* Services Section */}
      <Services 
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenServiceDetail={(srv) => {
          setIsQuoteOpen(true);
        }}
      />

      {/* Recent Projects / Portfolio */}
      <Portfolio 
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onSelectProject={(project) => setActiveProject(project)}
      />

      {/* Why Choose Advait */}
      <WhyChooseUs onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Pricing Plans */}
      <Pricing onSelectPlan={handleOpenQuoteWithPlan} />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Banner */}
      <CTABanner 
        onOpenQuote={() => setIsQuoteOpen(true)}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Footer */}
      <Footer onOpenQuote={() => setIsQuoteOpen(true)} />

      {/* Floating WhatsApp Chat Widget */}
      <WhatsAppWidget />

      {/* Modals */}
      <QuoteModal 
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        selectedPlan={selectedPlan}
      />

      <VideoModal 
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      <ProjectModal 
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onRequestSimilar={(p) => {
          setIsQuoteOpen(true);
        }}
      />
    </div>
  );
}
