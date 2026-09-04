import React, { useState } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    const encoded = encodeURIComponent(message || "Hi Advait team, I'd like to get a quote for a website!");
    window.open(`https://wa.me/918848389933?text=${encoded}`, '_blank');
    setMessage('');
    setIsOpen(false);
  };

  return (
    <div className="floating-whatsapp-widget">
      {/* Floating Button */}
      <button 
        className="whatsapp-float-btn" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="WhatsApp Chat"
      >
        <span className="whatsapp-pulse-ring"></span>
        {isOpen ? <X size={26} /> : <MessageSquare size={26} />}
      </button>

      {/* WhatsApp Mini Chat Window */}
      {isOpen && (
        <div className="whatsapp-chat-popup">
          <div className="whatsapp-header">
            <div className="whatsapp-agent">
              <div style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: '#FFFFFF',
                color: '#075E54',
                fontWeight: '800',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                A
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', fontWeight: '700', margin: 0 }}>Advait Support</h4>
                <span className="agent-status">Online • Replies instantly</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ color: '#FFFFFF', opacity: 0.8 }}>
              <X size={18} />
            </button>
          </div>

          <div className="whatsapp-body">
            <div className="chat-bubble">
              Hi there! 👋 Welcome to Advait. How can we help your business get a stunning website today?
            </div>
          </div>

          <form onSubmit={handleSendMessage} className="whatsapp-footer">
            <input 
              type="text" 
              className="whatsapp-input"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="whatsapp-send-btn">
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
