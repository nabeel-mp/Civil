import React from 'react';
import heroBg from '../assets/hero.png';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      {/* Background image with overlay */}
      <div className="hero-background">
        <img src={heroBg} alt="Construction background" className="hero-image" />
        <div className="hero-overlay"></div>
      </div>

      {/* Content */}
      <div className="hero-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="hero-text-wrapper">
          {/* Accent line */}
          <div className="accent-line"></div>

          {/* Eyebrow text */}
          <p className="hero-eyebrow">Lead Civil Engineer</p>

          {/* Main heading */}
          <h1 className="hero-title">
            Building The <span className="highlight-future">Future</span>,<br /> Today.
          </h1>

          {/* Description */}
          <p className="hero-description">
            Specializing in sustainable infrastructure, commercial development, and structural integrity. Turning blueprints into reality with precision and excellence.
          </p>

          {/* CTA Buttons */}
          <div className="hero-buttons">
            <a href="#works" className="btn btn-primary">
              <span>View Projects</span>
              <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              Get in Touch
            </a>
          </div>

          {/* Stats */}
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
};

export default Hero;
