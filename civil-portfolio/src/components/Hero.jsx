import React from 'react';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          {/* Left Content */}
          <div className="hero-text-section">
            {/* Accent */}
            <div className="hero-accent-line"></div>

            {/* Label */}
            <p className="hero-label">Welcome to Dream Space</p>

            {/* Main Heading */}
            <h1 className="hero-title">
              Building <span className="title-accent">Tomorrow's</span><br />
              Infrastructure Today
            </h1>

            {/* Description */}
            <p className="hero-description">
              Expert civil engineering solutions with a focus on sustainable infrastructure, structural integrity, and innovative design. Transforming visions into remarkable structures.
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons">
              <a href="#works" className="btn btn-primary">
                Explore Work
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-value">15+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat">
                <div className="stat-value">50+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat">
                <div className="stat-value">98%</div>
                <div className="stat-label">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="hero-image-section">
            <div className="image-wrapper">
              <img src="/profile-engineer.jpg" alt="Professional Civil Engineer" className="profile-image" />
              <div className="image-shape"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-hint">
        <p>Scroll to explore</p>
        <svg className="scroll-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
