import React from 'react';
import '../styles/clients.css';

const Clients = () => {
  const clients = [
    'BuildCorp Inc.',
    'City Planners LLC',
    'Metro Developments',
    'Apex Structures',
    'GreenLife Builders',
    'Summit Engineering',
    'Urban Solutions',
    'Coastal Engineers',
  ];

  return (
    <section id="clients" className="clients-section">
      <div className="clients-container">
        <div className="clients-header">
          <div className="clients-accent-line"></div>
          <p className="clients-label">Partners</p>
          <h2 className="clients-title">Trusted by Leading Organizations</h2>
          <p className="clients-description">
            We've had the privilege of collaborating with some of the industry's most respected companies to deliver exceptional infrastructure solutions.
          </p>
        </div>

        <div className="clients-grid">
          {clients.map((client, index) => (
            <div key={index} className="client-card" style={{ animationDelay: `${(index % 4) * 0.1}s` }}>
              <div className="client-logo">{client.charAt(0)}</div>
              <p className="client-name">{client}</p>
            </div>
          ))}
        </div>

        <div className="clients-footer">
          <p>Join our network of satisfied clients</p>
          <a href="#contact" className="clients-cta">Get in Touch</a>
        </div>
      </div>
    </section>
  );
};

export default Clients;
