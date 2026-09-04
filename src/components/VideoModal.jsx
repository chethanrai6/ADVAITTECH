import React from 'react';
import { X, Play, CheckCircle } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content-box" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        <div style={{ marginBottom: '20px' }}>
          <span className="section-tag">ADVAIT SHOWCASE</span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-dark)' }}>
            How We Build High-Converting Websites
          </h2>
        </div>

        {/* Video Player Container / Mockup */}
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          background: '#090F1E',
          boxShadow: 'var(--shadow-lg)'
        }}>
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0
            }}
            src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1"
            title="Advait Web Design Workflow Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginTop: '24px',
          paddingTop: '20px',
          borderTop: '1px solid var(--border-light)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' }}>
            <CheckCircle size={18} color="#10B981" />
            <span>1. Discovery & Design</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' }}>
            <CheckCircle size={18} color="#10B981" />
            <span>2. Fast Development</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', fontWeight: '600' }}>
            <CheckCircle size={18} color="#10B981" />
            <span>3. Launch & SEO Setup</span>
          </div>
        </div>
      </div>
    </div>
  );
}
