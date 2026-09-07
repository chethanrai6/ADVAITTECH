import React, { useState } from 'react';
import { Sparkles, Cake, Utensils, Hotel, Home, Car, Compass, Stethoscope, ShoppingBag, Dumbbell, ArrowRight, X, CheckCircle2 } from 'lucide-react';

export default function IndustryCategories({ selectedCategory, onSelectCategory, onOpenQuote }) {
  const [activeModalIndustry, setActiveModalIndustry] = useState(null);

  const industries = [
    {
      id: 'beauty-salons',
      slug: '/industries/beauty-salons',
      name: 'Beauty Salons',
      categoryTag: 'Salon',
      icon: Sparkles,
      tagline: 'Appointment Bookings & Service Showcases',
      description: 'Stunning websites for hair salons, nail spas, and aesthetic clinics with automated appointment requests, service pricing menus, and client review highlights.',
      features: ['Online Appointment Booking', 'Service Price Catalog', 'Before & After Gallery', 'Google Maps Integration']
    },
    {
      id: 'bakeries',
      slug: '/industries/bakeries',
      name: 'Bakeries',
      categoryTag: 'Bakery',
      icon: Cake,
      tagline: 'Mouthwatering Cake Catalogs & Orders',
      description: 'Custom bakery web portals showcasing custom cake designs, daily fresh menus, flavor options, and instant WhatsApp ordering for celebrations.',
      features: ['Custom Cake Customizer', 'WhatsApp Direct Order', 'Seasonal Menu Catalog', 'Customer Testimonials']
    },
    {
      id: 'restaurants',
      slug: '/industries/restaurants',
      name: 'Restaurants',
      categoryTag: 'Bakery',
      icon: Utensils,
      tagline: 'Digital Menus & Table Reservations',
      description: 'Interactive restaurant websites featuring digital food menus, table reservation requests, chef specials, and online ordering integrations.',
      features: ['Interactive Digital Menu', 'Table Reservation System', 'Delivery Partner Links', 'Ambience Photo Gallery']
    },
    {
      id: 'hotels',
      slug: '/industries/hotels',
      name: 'Hotels',
      categoryTag: 'Travel',
      icon: Hotel,
      tagline: 'Room Booking & Resort Showcases',
      description: 'High-converting accommodation websites designed to showcase luxury rooms, amenities, location advantages, and direct booking inquiries.',
      features: ['Room Suite Gallery', 'Amenity Lists & Virtual Tours', 'Direct Booking Inquiry', 'Local Attractions Guide']
    },
    {
      id: 'real-estate',
      slug: '/industries/real-estate',
      name: 'Real Estate',
      categoryTag: 'Real Estate',
      icon: Home,
      tagline: 'Property Listings & Agent Portals',
      description: 'Comprehensive property listing platforms featuring high-res photo carousels, location maps, price filters, and buyer lead capture forms.',
      features: ['Filterable Property Listings', 'Virtual Property Tours', 'Lead Capture Forms', 'Agent Profile Cards']
    },
    {
      id: 'automobile',
      slug: '/industries/automobile',
      name: 'Automobile',
      categoryTag: 'Other',
      icon: Car,
      tagline: 'Showrooms & Test Drive Scheduling',
      description: 'Modern automotive websites for car dealerships, detailing studios, and repair garages to display vehicle inventory and schedule service appointments.',
      features: ['Vehicle Catalog & Specs', 'Test Drive Booking', 'Service Request Form', 'Customer Reviews']
    },
    {
      id: 'travel-agencies',
      slug: '/industries/travel-agencies',
      name: 'Travel Agencies',
      categoryTag: 'Travel',
      icon: Compass,
      tagline: 'Tour Packages & Itinerary Builders',
      description: 'Captivating travel agency portals showcasing holiday tour packages, itinerary details, pricing tiers, and customized trip inquiry forms.',
      features: ['Destination Guides', 'Custom Itinerary Builder', 'Tour Package Pricing', 'WhatsApp Consultation']
    },
    {
      id: 'clinics',
      slug: '/industries/clinics',
      name: 'Clinics',
      categoryTag: 'Clinic',
      icon: Stethoscope,
      tagline: 'Doctor Directories & Patient Scheduling',
      description: 'Trustworthy medical & diagnostic clinic websites offering specialist profiles, clinic hours, patient care guidelines, and online appointment booking.',
      features: ['Doctor & Specialist Directory', 'Patient Consultation Booking', 'Diagnostic Services List', 'Emergency Contact Bar']
    },
    {
      id: 'retail',
      slug: '/industries/retail',
      name: 'Retail',
      categoryTag: 'Other',
      icon: ShoppingBag,
      tagline: 'Product Displays & Local Store Guides',
      description: 'Engaging retail shop websites designed to showcase featured products, promotional offers, store locations, and drive foot traffic.',
      features: ['Featured Product Catalog', 'Store Locator & Hours', 'Discount Promotion Banners', 'Inquiry Callback Form']
    },
    {
      id: 'fitness',
      slug: '/industries/fitness',
      name: 'Fitness',
      categoryTag: 'Gym',
      icon: Dumbbell,
      tagline: 'Gym Memberships & Trainer Profiles',
      description: 'Dynamic fitness center websites showcasing workout equipment, class schedules, personal trainer credentials, and membership plans.',
      features: ['Membership Tier Pricing', 'Workout Class Schedule', 'Trainer Bio Cards', 'Free Trial Registration']
    }
  ];

  const handleSelectIndustry = (ind) => {
    onSelectCategory(ind.categoryTag);
    setActiveModalIndustry(ind);
  };

  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">INDUSTRIES WE SERVE</span>
          <h2 className="section-heading">Websites Built for Your Industry</h2>
          <p className="section-subheading">
            Every business sector has unique customer expectations. We build custom websites designed specifically for your industry's workflows and goals.
          </p>
        </div>

        {/* 10 Industry Cards Grid */}
        <div className="industry-cards-grid">
          {industries.map((ind, idx) => {
            const IconComponent = ind.icon;
            const staggerClass = `stagger-${(idx % 5) + 1}`;
            return (
              <div 
                key={ind.id}
                className={`industry-card reveal-zoom ${staggerClass}`}
                onClick={() => handleSelectIndustry(ind)}
              >
                <div className="industry-card-header">
                  <div className="industry-icon-wrapper">
                    <IconComponent size={24} />
                  </div>
                  <span className="industry-route-slug">{ind.slug}</span>
                </div>

                <h3 className="industry-card-name">{ind.name}</h3>
                <p className="industry-card-tagline">{ind.tagline}</p>
                <p className="industry-card-desc">{ind.description}</p>

                <div className="industry-card-action">
                  <span>Explore Industry Solutions</span>
                  <ArrowRight size={16} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Industry Detail Modal */}
      {activeModalIndustry && (
        <div className="modal-backdrop" onClick={() => setActiveModalIndustry(null)}>
          <div className="modal-card industry-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setActiveModalIndustry(null)}>
              <X size={20} />
            </button>

            <div className="modal-header-badge">
              <span className="slug-chip">{activeModalIndustry.slug}</span>
            </div>

            <h3 className="modal-title" style={{ marginTop: '8px' }}>
              Custom Websites for {activeModalIndustry.name}
            </h3>

            <p className="modal-description">
              {activeModalIndustry.description}
            </p>

            <div className="modal-feature-list">
              <h4 style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-dark)', marginBottom: '12px' }}>
                Key Features Included:
              </h4>
              <div className="feature-checklist-grid">
                {activeModalIndustry.features.map((feat) => (
                  <div key={feat} className="feature-check-item">
                    <CheckCircle2 size={16} color="var(--primary)" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-actions" style={{ marginTop: '24px', display: 'flex', gap: '12px' }}>
              <button 
                onClick={() => {
                  const targetCat = activeModalIndustry.categoryTag;
                  setActiveModalIndustry(null);
                  onSelectCategory(targetCat);
                  const portfolioSec = document.getElementById('portfolio');
                  if (portfolioSec) portfolioSec.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-outline-pill"
              >
                View {activeModalIndustry.name} Portfolio
              </button>
              <button 
                onClick={() => {
                  setActiveModalIndustry(null);
                  onOpenQuote();
                }}
                className="btn-primary"
              >
                Build {activeModalIndustry.name} Website
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
