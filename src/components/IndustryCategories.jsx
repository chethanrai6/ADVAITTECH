import React, { useRef } from 'react';
import { 
  Cake, Utensils, Scissors, Stethoscope, Dumbbell, 
  ShoppingBag, Home, Plane, GraduationCap, LayoutGrid,
  ChevronLeft, ChevronRight 
} from 'lucide-react';

export default function IndustryCategories({ selectedCategory, onSelectCategory }) {
  const carouselRef = useRef(null);

  const categories = [
    { id: 'Bakery', name: 'Bakery & Cake Shop', icon: Cake },
    { id: 'Restaurant', name: 'Restaurant & Café', icon: Utensils },
    { id: 'Salon', name: 'Salon & Beauty', icon: Scissors },
    { id: 'Clinic', name: 'Clinic & Healthcare', icon: Stethoscope },
    { id: 'Gym', name: 'Gym & Fitness', icon: Dumbbell },
    { id: 'Retail', name: 'Retail Shop', icon: ShoppingBag },
    { id: 'Real Estate', name: 'Real Estate', icon: Home },
    { id: 'Travel', name: 'Travel Agency', icon: Plane },
    { id: 'Education', name: 'Education / Tuition', icon: GraduationCap },
    { id: 'Other', name: 'Other Businesses', icon: LayoutGrid }
  ];

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="industries" className="categories-section">
      <div className="container">
        {/* Section Header with Carousel Controls */}
        <div className="categories-header">
          <div>
            <span className="section-tag">WE SERVE</span>
            <h2 className="section-heading">Websites for Every Business</h2>
            <p className="section-subheading">No matter what you do, we have the right solution for you.</p>
          </div>

          <div className="carousel-controls">
            <button className="control-btn" onClick={() => scroll('left')} aria-label="Scroll left">
              <ChevronLeft size={20} />
            </button>
            <button className="control-btn" onClick={() => scroll('right')} aria-label="Scroll right">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Categories Grid / Horizontal Scroll */}
        <div className="categories-grid" ref={carouselRef}>
          {categories.map((cat) => {
            const IconComp = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <div 
                key={cat.id} 
                className={`category-card ${isSelected ? 'active' : ''}`}
                onClick={() => onSelectCategory(cat.id)}
              >
                <div className="category-icon">
                  <IconComp size={22} />
                </div>
                <span className="category-name">{cat.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
