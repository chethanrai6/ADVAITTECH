import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const testimonials = [
    {
      quote: "Advait created an amazing website for my bakery. The process was smooth and the team was very supportive. Highly recommended!",
      name: "Priya Nair",
      role: "The Cake Corner",
      avatar: "/assets/priya_nair_avatar.png",
      stars: 5
    },
    {
      quote: "Our restaurant bookings doubled within 2 weeks of launching our new website with Advait. Their fast turnaround and custom menu system are outstanding!",
      name: "Rahul Sharma",
      role: "SpiceHub Restaurant",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      stars: 5
    },
    {
      quote: "Very professional team. They helped us set up online appointment booking for our clinic seamlessly. Extremely satisfied!",
      name: "Dr. Ananya Rao",
      role: "LifeCare Clinic",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      stars: 5
    }
  ];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIdx];

  return (
    <section className="testimonials-section">
      <div className="container">
        {/* Section Header with Carousel Arrows */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '40px' }}>
          <div>
            <span className="section-tag">TESTIMONIALS</span>
            <h2 className="section-heading">What Our Clients Say</h2>
          </div>

          <div className="carousel-controls">
            <button className="control-btn" onClick={handlePrev} aria-label="Previous Testimonial">
              <ChevronLeft size={20} />
            </button>
            <button className="control-btn" onClick={handleNext} aria-label="Next Testimonial">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="testimonial-card">
          <div className="quote-mark">“</div>
          <p className="testimonial-text">{activeTestimonial.quote}</p>

          <div className="testimonial-user">
            <img 
              src={activeTestimonial.avatar} 
              alt={activeTestimonial.name} 
              className="user-avatar"
            />
            <div>
              <h4 className="user-name">{activeTestimonial.name}</h4>
              <span className="user-title">{activeTestimonial.role}</span>
              <div className="star-rating">
                {[...Array(activeTestimonial.stars)].map((_, i) => (
                  <Star key={i} size={14} fill="#F59E0B" stroke="none" />
                ))}
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '24px' }}>
            {testimonials.map((_, idx) => (
              <span 
                key={idx}
                onClick={() => setActiveIdx(idx)}
                style={{
                  width: idx === activeIdx ? '20px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  backgroundColor: idx === activeIdx ? 'var(--primary)' : '#CBD5E1',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
