import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles } from 'lucide-react';

export default function QuoteModal({ isOpen, onClose, selectedPlan }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: 'Bakery & Food',
    plan: selectedPlan ? selectedPlan.name : 'Business (₹ 7,999)',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPlan) {
      setFormData(prev => ({ ...prev, plan: `${selectedPlan.name} (₹ ${selectedPlan.priceOneTime})` }));
    }
  }, [selectedPlan]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {!submitted ? (
          <div>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                padding: '4px 12px',
                borderRadius: '99px',
                fontSize: '0.8rem',
                fontWeight: '700',
                marginBottom: '8px'
              }}>
                <Sparkles size={14} /> Instant Free Quote
              </div>
              <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-dark)' }}>
                Get Your Website Quote
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Fill out the details below and get a free custom proposal within 2 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Business Name</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder="e.g. The Cake Corner"
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
                    <option value="Bakery & Food">Bakery & Food</option>
                    <option value="Restaurant & Cafe">Restaurant & Cafe</option>
                    <option value="Salon & Beauty">Salon & Beauty</option>
                    <option value="Clinic & Healthcare">Clinic & Healthcare</option>
                    <option value="Gym & Fitness">Gym & Fitness</option>
                    <option value="Retail & Shopping">Retail & Shopping</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Other">Other Business</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Package</label>
                  <select 
                    className="form-select"
                    value={formData.plan}
                    onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                  >
                    <option value="Starter (₹ 4,999)">Starter (₹ 4,999)</option>
                    <option value="Business (₹ 7,999)">Business (₹ 7,999) - Popular</option>
                    <option value="Professional (₹ 11,999)">Professional (₹ 11,999)</option>
                    <option value="E-commerce (₹ 14,999)">E-commerce (₹ 14,999)</option>
                    <option value="Custom Project">Custom Website Solution</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input 
                    type="text" 
                    className="form-input"
                    placeholder="Full Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number (WhatsApp)</label>
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
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input"
                  placeholder="name@business.com"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '12px', padding: '14px' }}>
                Submit & Get Free Quote
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
              Quote Request Received!
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>
              Thank you <strong>{formData.name}</strong>! Our team at Advait will prepare a detailed proposal for <strong>{formData.businessName}</strong> and contact you on WhatsApp/Phone shortly.
            </p>

            <button onClick={handleReset} className="btn-primary" style={{ width: '100%' }}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
