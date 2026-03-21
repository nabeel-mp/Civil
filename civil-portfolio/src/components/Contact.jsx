import React from 'react';
import '../styles/contact.css';

const Contact = () => {
  const phone = "+1234567890";
  const whatsappMsg = "Hello! I saw your portfolio and would like to discuss a project.";
  const email = "engineer@example.com";
  const location = "123 Engineering Blvd, New York, NY 10001";

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      description: 'Send me a message',
      link: `mailto:${email}`,
      value: email,
    },
    {
      icon: '💬',
      title: 'WhatsApp',
      description: 'Quick chat',
      link: `https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(whatsappMsg)}`,
      value: phone,
      external: true,
    },
    {
      icon: '📞',
      title: 'Phone',
      description: 'Call me directly',
      link: `tel:${phone}`,
      value: phone,
    },
    {
      icon: '📍',
      title: 'Location',
      description: 'Visit in person',
      link: '#',
      value: location,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="contact-accent-line"></div>
          <p className="contact-label">Get In Touch</p>
          <h2 className="contact-title">Let's Build Something Great</h2>
          <p className="contact-description">
            Ready to start your next project? I'd love to hear about your vision and how I can help bring it to life.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="contact-methods">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              target={method.external ? '_blank' : '_self'}
              rel={method.external ? 'noreferrer' : ''}
              className="contact-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="contact-icon">{method.icon}</div>
              <h3 className="contact-method-title">{method.title}</h3>
              <p className="contact-method-desc">{method.description}</p>
              <div className="contact-value">{method.value}</div>
              <span className="contact-arrow">→</span>
            </a>
          ))}
        </div>

        {/* Form Section */}
        <div className="contact-form-section">
          <h3 className="form-title">Or Fill Out This Form</h3>
          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="text" placeholder="Project Title" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Tell me about your project..." rows="5" required></textarea>
            </div>
            <button type="submit" className="form-submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="contact-footer">
        <p>&copy; {new Date().getFullYear()} Dream Space. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Contact;
