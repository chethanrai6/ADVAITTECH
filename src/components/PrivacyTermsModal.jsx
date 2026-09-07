import React from 'react';
import { X, ShieldCheck } from 'lucide-react';

export default function PrivacyTermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card privacy-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div className="modal-header-icon">
          <ShieldCheck size={28} color="var(--primary)" />
        </div>

        <h3 className="modal-title">Privacy Policy & Terms of Service</h3>

        <div className="privacy-body-text" style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '8px', fontSize: '0.9rem', color: 'var(--text-medium)', lineHeight: 1.6 }}>
          <h4 style={{ color: 'var(--text-dark)', fontWeight: 600, marginTop: '12px' }}>1. Privacy Policy</h4>
          <p>
            At Advait Tech, reachable at https://advaittech.vercel.app/, your privacy is very important to us. We collect only necessary contact information (such as your name, business name, phone number, and email address) submitted voluntarily through our project inquiry forms.
          </p>
          <p>
            We use this information solely to communicate regarding project requirements, provide estimates, and deliver web development services. We do not sell or trade client personal data to third parties.
          </p>

          <h4 style={{ color: 'var(--text-dark)', fontWeight: 600, marginTop: '16px' }}>2. Terms & Conditions</h4>
          <p>
            By commissioning a project with Advait Tech, you agree to clear project milestones, timely feedback reviews, and standard intellectual property handovers upon final project payment settlement.
          </p>
          <p>
            All custom graphics, source code, and assets developed specifically for your website belong to your business upon project launch.
          </p>
        </div>

        <div style={{ marginTop: '24px', textAlign: 'right' }}>
          <button onClick={onClose} className="btn-primary">
            Close & Accept
          </button>
        </div>
      </div>
    </div>
  );
}
