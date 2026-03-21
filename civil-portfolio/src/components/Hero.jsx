import React from 'react';
import heroBg from '../assets/hero.png';
import '../styles/hero.css';

const Hero = () => {
  return (
    <>
      {/* Orange top stripe */}
      <div className="top-stripe"></div>

      <section id="hero" className="hero-section">
        {/* Background image with overlay */}
        <div className="hero-background">
          <img src={heroBg} alt="Construction background" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>

        {/* Content Container */}
        <div className="hero-wrapper">
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-text-section">
              {/* Badge/Eyebrow */}
              <div className="hero-badge">
                <svg className="badge-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L15.09 8.26H22L17.55 12.5L19.64 18.76L12 14.5L4.36 18.76L6.45 12.5L2 8.26H8.91L12 2Z"/>
                </svg>
                <span>Leading Civil Engineer</span>
              </div>

              {/* Main Heading */}
              <h1 className="hero-title">
                Building<br/>Tomorrow's<br/><span className="title-gold">Infrastructure</span>
              </h1>

              {/* Description */}
              <p className="hero-description">
                Delivering excellence in structural design, sustainable infrastructure projects, and comprehensive site management with precision and innovation.
              </p>

              {/* Primary CTA Button */}
              <a href="#works" className="btn-cta">
                View Our Projects
              </a>
            </div>

            {/* Right Image Section */}
            <div className="hero-image-section">
              <div className="image-frame">
                <img src={heroBg} alt="Professional Civil Engineer" className="engineer-image" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Info Cards */}
        <div className="hero-bottom">
          <div className="info-grid">
            <div className="info-card">
              <h3 className="info-card-title">Professional Solutions</h3>
              <p className="info-card-text">Expert civil engineering solutions tailored to your project requirements.</p>
              <a href="#works" className="info-link">Explore Projects →</a>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Project Management</h3>
              <p className="info-card-text">End-to-end project management ensuring timely delivery and quality results.</p>
              <a href="#works" className="info-link">Learn More →</a>
            </div>
            <div className="info-card">
              <h3 className="info-card-title">Quality Assurance</h3>
              <p className="info-card-text">Rigorous quality standards and compliance checks on every project phase.</p>
              <a href="#contact" className="info-link">Get Started →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
