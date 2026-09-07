import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    businessType: 'Local Business',
    websiteType: 'Business Website',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // WhatsApp direct fallback link creation
    const text = encodeURIComponent(
      `*New Project Inquiry - Advait Tech*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Business Name:* ${formData.businessName}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Business Type:* ${formData.businessType}\n` +
      `*Website Needed:* ${formData.websiteType}\n` +
      `*Message:* ${formData.message}`
    );
    window.open(`https://wa.me/918848389933?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-header text-center reveal-slide-up">
          <span className="section-tag">GET IN TOUCH</span>
          <h2 className="section-heading">Let's Build Your Website</h2>
          <p className="section-subheading">
            Fill out the form below or reach out directly to discuss your website project. We respond within 2 hours!
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Info Column */}
          <div className="contact-info-card reveal-slide-left">
            <h3 className="info-card-title">Contact Advait Tech</h3>
            <p className="info-card-desc">
              Have a project in mind? We'd love to help your business build trust and grow online.
            </p>

            <div className="info-items-list">
              <a href="tel:+918848389933" className="contact-info-item">
                <div className="info-icon-box">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="info-label">Call or WhatsApp</span>
                  <span className="info-value">+91 88483 89933</span>
                </div>
              </a>

              <a href="mailto:contact@advaittech.com" className="contact-info-item">
                <div className="info-icon-box">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="info-label">Email Us</span>
                  <span className="info-value">contact@advaittech.com</span>
                </div>
              </a>

              <div className="contact-info-item">
                <div className="info-icon-box">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="info-label">Office Location</span>
                  <span className="info-value">Mangalore, Karnataka, India</span>
                </div>
              </div>
            </div>

            <div className="contact-quick-whatsapp-box" style={{ marginTop: '24px' }}>
              <a 
                href="https://wa.me/918848389933?text=Hi%20Advait%20Tech!%20I%20want%20to%20discuss%20a%20website%20project." 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-whatsapp-full"
              >
                <MessageSquare size={18} />
                <span>Chat Instantly on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="contact-form-wrapper reveal-slide-right">
            {isSubmitted ? (
              <div className="form-success-message text-center">
                <CheckCircle2 size={48} color="var(--primary)" style={{ margin: '0 auto 16px' }} />
                <h3>Thank You!</h3>
                <p>Your inquiry has been submitted. We are opening WhatsApp to connect with you directly.</p>
                <button 
                  onClick={() => setIsSubmitted(false)} 
                  className="btn-outline-pill" 
                  style={{ marginTop: '20px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="name">Your Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="businessName">Business Name *</label>
                    <input 
                      type="text" 
                      id="businessName" 
                      name="businessName" 
                      required 
                      placeholder="e.g. Royal Bakery & Cafe"
                      value={formData.businessName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      required 
                      placeholder="name@business.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone / WhatsApp Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-row-2col">
                  <div className="form-group">
                    <label htmlFor="businessType">Business Type *</label>
                    <select 
                      id="businessType" 
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                    >
                      <option value="Beauty Salon & Spa">Beauty Salon & Spa</option>
                      <option value="Bakery & Cafe">Bakery & Cafe</option>
                      <option value="Restaurant & Hotel">Restaurant & Hotel</option>
                      <option value="Real Estate">Real Estate</option>
                      <option value="Clinic & Healthcare">Clinic & Healthcare</option>
                      <option value="Automobile & Services">Automobile & Services</option>
                      <option value="Travel & Tourism">Travel & Tourism</option>
                      <option value="Fitness & Gym">Fitness & Gym</option>
                      <option value="Retail & Shopping">Retail & Shopping</option>
                      <option value="Other Business">Other Business</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="websiteType">What website do you need? *</label>
                    <select 
                      id="websiteType" 
                      name="websiteType"
                      value={formData.websiteType}
                      onChange={handleChange}
                    >
                      <option value="Business Website">Business Website</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="Landing Page">Landing Page</option>
                      <option value="Portfolio Website">Portfolio Website</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="Maintenance & Support">Maintenance & Support</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Details / Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Tell us about your goals, features you need, or design preferences..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <span>Let's Build Your Website</span>
                  <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
