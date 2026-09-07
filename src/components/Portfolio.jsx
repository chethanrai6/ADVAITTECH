import React, { useEffect } from 'react';
import { ArrowRight, Eye, ExternalLink } from 'lucide-react';

export default function Portfolio({ selectedCategory, onSelectCategory, onSelectProject }) {
  const tabs = ['All', 'Bakery', 'Clinic', 'Salon', 'Gym', 'Real Estate', 'Travel', 'Other'];

  const projects = [
    {
      id: 'cakesy',
      title: 'Cakesy',
      category: 'Bakery Website',
      categoryType: 'Bakery',
      img: '/assets/project_cakesy.png',
      headline: 'Delicious Cakes For Every Celebration',
      description: 'Enjoy our wide range of premium delicious cakes, handcrafted fresh every day with organic ingredients and tons of love.',
      features: ['Online Bakery Menu', 'Custom Cake Builder', 'Same Day Delivery', 'Secure Payments'],
      liveUrl: 'https://cakeshop-navy.vercel.app/'
    },
    {
      id: 'advait-hospital',
      title: 'Advait Hospital',
      category: 'Healthcare & Hospital',
      categoryType: 'Clinic',
      img: '/assets/project_advait_hospital.png',
      headline: 'Your Health, Our Priority',
      description: 'At Advait Hospital, we combine advanced medical technology with compassionate care to ensure the best outcomes for you and your loved ones.',
      features: ['24/7 Emergency Care', 'Doctor Appointment Booking', 'Diagnostic Center', 'Expert Doctors'],
      liveUrl: 'https://advaithospital.vercel.app/'
    },
    {
      id: 'glamme',
      title: 'Glammé',
      category: 'Salon & Spa',
      categoryType: 'Salon',
      img: '/assets/project_glamme.png',
      headline: 'More Than A Salon, A Feeling',
      description: 'Beauty, care & confidence. Expert care with premium products for a more glamorous you. Book online appointment instantly.',
      features: ['Book Your Look', 'Service Packages', 'Watch Story Showcase', 'Premium Hair & Skin Care'],
      liveUrl: 'https://glamme.vercel.app/'
    },
    {
      id: 'fitzone',
      title: 'FitZone',
      category: 'Gym & Fitness',
      categoryType: 'Gym',
      img: '/assets/project_fitzone.png',
      headline: 'Build Your Body, Build Your Confidence',
      description: 'Join FITZONE and start your journey towards a stronger, healthier, and better you with modern equipment and certified trainers.',
      features: ['Modern Equipment', 'Certified Expert Trainers', 'Personalized Diet Plans', 'Flexible Membership'],
      liveUrl: 'https://gym-seven-sable.vercel.app/'
    },
    {
      id: 'homenest',
      title: 'HomeNest',
      category: 'Real Estate Marketplace',
      categoryType: 'Real Estate',
      img: '/assets/project_homenest_real.png',
      headline: "Find a Place You'll Love to Call Home 🏠",
      description: "India's premier real estate marketplace. Discover a better way to buy, sell or rent properties with trusted agents and modern tools.",
      features: ['Property Location Search', 'Buy / Rent / Projects', 'Post Property Portal', 'Verified Agents'],
      liveUrl: 'https://homenest-pi.vercel.app/'
    },
    {
      id: 'travelmate',
      title: 'TravelMate',
      category: 'AI Travel Companion',
      categoryType: 'Travel',
      img: '/assets/project_travelmate.png',
      headline: 'Plan Smarter. Travel Better.',
      description: 'Your AI travel companion that creates perfect itineraries, personalized for your destination, dates, and budget.',
      features: ['AI Itinerary Generator', 'Explore Destination Places', 'Budget Calculator', 'Solo & Group Trip Planner'],
      liveUrl: 'https://travelmate-rose-psi.vercel.app/'
    },
    {
      id: 'arya-labs',
      title: 'Arya Labs',
      category: 'Diagnostic Laboratory',
      categoryType: 'Clinic',
      img: '/assets/project_arya_labs.png',
      headline: 'Precision You Can Trust. Care You Deserve.',
      description: 'NABL Accredited Laboratory providing advanced diagnostics, accurate results, and complete range of medical testing facilities.',
      features: ['NABL Accredited', 'Home Sample Collection', '10,000+ Happy Patients', 'Online Test Reports'],
      liveUrl: 'https://arya-lab.vercel.app/'
    },
    {
      id: 'flappy-wings',
      title: 'Flappy Wings',
      category: 'Gaming Web App',
      categoryType: 'Other',
      img: '/assets/project_flappy_wings.png',
      headline: 'Fly High. Be Legendary.',
      description: 'Tap or press SPACE to help the bird fly and dodge through the pipes in this addictive HTML5 canvas arcade web game.',
      features: ['HTML5 Canvas Engine', 'Best Score Leaderboard', 'Keyboard & Touch Control', 'Light/Dark Theme'],
      liveUrl: 'https://flappybird-three-beta.vercel.app/'
    }
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.categoryType.toLowerCase() === selectedCategory.toLowerCase());

  // Ensure newly rendered project cards are instantly animated in when switching tabs
  useEffect(() => {
    const timer = setTimeout(() => {
      const cards = document.querySelectorAll('.project-card');
      cards.forEach((card) => card.classList.add('animate-in'));
    }, 50);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  return (
    <section id="portfolio" className="projects-section">
      <div className="container">
        {/* Header & Filter Tabs */}
        <div className="reveal-slide-up">
          <span className="section-tag">OUR WORK</span>
          <h2 className="section-heading">Recent Projects</h2>
          <p className="section-subheading" style={{ marginBottom: '24px' }}>
            Real businesses. Real deployed web applications.
          </p>
        </div>

        <div className="projects-header reveal-slide-up">
          <div className="project-tabs">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`tab-btn ${selectedCategory === tab ? 'active' : ''}`}
                onClick={() => onSelectCategory(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <button onClick={() => onSelectCategory('All')} className="btn-outline-pill">
            <span>View All ({projects.length})</span>
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => {
            const staggerClass = `stagger-${(idx % 6) + 1}`;
            return (
              <div 
                key={project.id} 
                className={`project-card reveal-zoom animate-in ${staggerClass}`}
                onClick={() => onSelectProject(project)}
              >
                <div className="project-thumb">
                  <img src={project.img} alt={project.title} />
                  <div className="project-overlay">
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <span className="btn-primary" style={{ padding: '8px 14px', fontSize: '0.8rem' }}>
                        <Eye size={14} /> Preview
                      </span>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="btn-white"
                        style={{ padding: '8px 14px', fontSize: '0.8rem', color: 'var(--text-dark)' }}
                      >
                        <ExternalLink size={14} /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="project-info">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <h3 className="project-title">{project.title}</h3>
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="Open live project"
                      style={{ color: 'var(--primary)', padding: '2px' }}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <span className="project-category">{project.category}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
