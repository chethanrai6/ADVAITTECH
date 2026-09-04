import React, { useState } from 'react';
import { X, Monitor, Smartphone, Check, ExternalLink, ArrowRight } from 'lucide-react';

export default function ProjectModal({ project, onClose, onRequestSimilar }) {
  const [deviceMode, setDeviceMode] = useState('desktop'); // 'desktop' | 'mobile'

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div 
        className="modal-content-box" 
        style={{ maxWidth: deviceMode === 'desktop' ? '920px' : '480px', transition: 'all 0.3s ease' }} 
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={onClose}>
          <X size={20} />
        </button>

        {/* Modal Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px', paddingRight: '40px', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <span className="section-tag">{project.category}</span>
            <h2 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--text-dark)' }}>
              {project.title}
            </h2>
          </div>

          {/* Device Switcher & Live Link */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              display: 'flex',
              background: '#F1F5F9',
              padding: '3px',
              borderRadius: '99px',
              gap: '4px'
            }}>
              <button 
                className={`toggle-option ${deviceMode === 'desktop' ? 'active' : ''}`}
                onClick={() => setDeviceMode('desktop')}
                style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Monitor size={14} /> Desktop
              </button>
              <button 
                className={`toggle-option ${deviceMode === 'mobile' ? 'active' : ''}`}
                onClick={() => setDeviceMode('mobile')}
                style={{ padding: '6px 12px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <Smartphone size={14} /> Mobile
              </button>
            </div>

            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ padding: '6px 16px', fontSize: '0.82rem' }}
            >
              <span>Visit Live</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Preview Frame */}
        <div style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-md)',
          marginBottom: '20px',
          background: '#0F172A'
        }}>
          <div style={{
            background: '#1E293B',
            padding: '8px 16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }}></span>
              <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10B981' }}></span>
              <span style={{
                fontSize: '0.75rem',
                color: '#94A3B8',
                background: '#0F172A',
                padding: '2px 12px',
                borderRadius: '4px',
                marginLeft: '12px'
              }}>
                {project.liveUrl}
              </span>
            </div>

            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#3B82F6', fontSize: '0.75rem', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              Open in new tab ↗
            </a>
          </div>

          <div style={{
            aspectRatio: deviceMode === 'desktop' ? '16 / 10' : '9 / 16',
            maxHeight: deviceMode === 'mobile' ? '500px' : '480px',
            overflow: 'hidden',
            position: 'relative'
          }}>
            <iframe
              src={project.liveUrl}
              title={project.title}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                background: '#FFFFFF'
              }}
            />
          </div>
        </div>

        {/* Details & CTA */}
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-dark)', marginBottom: '6px' }}>
            "{project.headline}"
          </h4>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: '1.5', marginBottom: '16px' }}>
            {project.description}
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '20px'
          }}>
            {project.features.map((feat, idx) => (
              <span key={idx} style={{
                fontSize: '0.78rem',
                fontWeight: '600',
                background: 'var(--primary-light)',
                color: 'var(--primary)',
                padding: '4px 12px',
                borderRadius: '99px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}>
                <Check size={14} /> {feat}
              </span>
            ))}
          </div>

          <button 
            onClick={() => {
              onClose();
              onRequestSimilar(project);
            }} 
            className="btn-primary" 
            style={{ width: '100%', padding: '14px' }}
          >
            <span>Get a Website Like This For Your Business</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
