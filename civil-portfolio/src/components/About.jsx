import React from 'react';
import '../styles/about.css';

const About = () => {
  const skills = [
    { label: 'Structural Design', value: 95 },
    { label: 'Project Management', value: 90 },
    { label: 'CAD & BIM Tools', value: 98 },
    { label: 'Site Supervision', value: 92 },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Left Column */}
        <div className="about-content">
          <div className="about-accent-line"></div>
          <h2 className="about-label">About Me</h2>
          <h3 className="about-title">Transforming Visions Into Structures</h3>

          <div className="about-philosophy">
            <p>
              With over 15 years of experience in civil engineering, I've developed a deep commitment to creating sustainable, innovative infrastructure solutions. My approach combines structural excellence with environmental responsibility.
            </p>
            <p>
              I believe that great engineering is about more than calculations—it's about understanding how structures serve communities and impact lives.
            </p>
          </div>

          <div className="about-highlight">
            <h4>Core Values</h4>
            <ul>
              <li>Structural Excellence</li>
              <li>Sustainable Design</li>
              <li>Client-Centric Approach</li>
              <li>Innovation & Precision</li>
            </ul>
          </div>
        </div>

        {/* Right Column - Skills */}
        <div className="about-skills">
          <h3 className="skills-title">Expertise</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <span className="skill-label">{skill.label}</span>
                  <span className="skill-percent">{skill.value}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${skill.value}%` }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Grid */}
          <div className="about-stats">
            <div className="stat-box">
              <div className="stat-number">15+</div>
              <div className="stat-text">Years Active</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50+</div>
              <div className="stat-text">Projects</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100%</div>
              <div className="stat-text">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
