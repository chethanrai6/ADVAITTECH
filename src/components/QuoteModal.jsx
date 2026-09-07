import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles, Send, MessageSquare } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, selectedPlan }) {
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: 'Beauty Salon & Spa',
    plan: selectedPlan ? selectedPlan.name : 'PROFESSIONAL',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: selectedPlan.name }));
    }
  }, [selectedPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const text = encodeURIComponent(
      `*New Project Request - Advait Tech*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Business:* ${formData.businessName}\n` +
      `*Package Selected:* ${formData.plan}\n` +
      `*Industry:* ${formData.businessType}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email}`
    );
    window.open(`https://wa.me/918848389933?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div className="modal-badge-pill">
                <Sparkles size={14} /> Instant Free Proposal
              </div>
              <h2 className="modal-heading-title">
                Start Your Website Project
              </h2>
              <p className="modal-subtext">
                Fill out the details below and get a free custom proposal and scope breakdown within 2 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-group">
                <label className="form-label">Your Business Name *</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. Royal Bakery & Cafe"
                  required
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Industry Category</label>
                  <select 
                    className="form-select"
                    value={formData.businessType}
                    onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
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
                    <option value="Other">Other Business</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Selected Package</label>
                  <select 
                    className="form-select"
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  >
                    <option value="STARTER">STARTER (₹ 4,999)</option>
                    <option value="PROFESSIONAL">PROFESSIONAL (₹ 8,999) - Recommended</option>
                    <option value="CUSTOM">CUSTOM Project Scope</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Your Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="e.g. Rahul Sharma"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input 
                    type="tel" 
                    className="form-input"
                    placeholder="+91 88483 89933"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input 
                  type="email" 
                  className="form-input"
                  placeholder="name@business.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '12px', padding: '14px', justifyContent: 'center' }}>
                <span>Submit & Get Free Quote</span>
                <Send size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#D1FAE5',
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 20px'
            }}>
              <CheckCircle size={36} />
            </div>

            <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-dark)', marginBottom: '8px' }}>
              Project Request Received!
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.6' }}>
              Thank you <strong>{formData.name}</strong>! Our team at Advait Tech will prepare a detailed scope proposal for <strong>{formData.businessName}</strong> and connect with you on WhatsApp/Phone shortly.
            </p>

            <button onClick={handleReset} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
