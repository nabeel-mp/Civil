import React from 'react';
import '../styles/works.css';

const Works = () => {
  const projects = [
    {
      id: 1,
      title: 'Skyline Commercial Complex',
      category: 'Commercial Development',
      img: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      id: 2,
      title: 'Riverfront Bridge Project',
      category: 'Infrastructure',
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2022'
    },
    {
      id: 3,
      title: 'Eco-Living Residences',
      category: 'Sustainable Housing',
      img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      id: 4,
      title: 'Urban Transit Center',
      category: 'Transportation',
      img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2023'
    },
    {
      id: 5,
      title: 'Water Treatment Facility',
      category: 'Municipal',
      img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2022'
    },
    {
      id: 6,
      title: 'Tech Park Development',
      category: 'Commercial',
      img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      year: '2021'
    },
  ];

  return (
    <section id="works" className="works-section">
      <div className="works-container">
        <div className="works-header">
          <div className="works-accent-line"></div>
          <p className="works-label">Portfolio</p>
          <h2 className="works-title">Featured Projects</h2>
          <p className="works-description">
            A selection of our most impactful projects showcasing excellence in design, execution, and innovation.
          </p>
        </div>

        <div className="works-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image-wrapper">
                <img src={project.img} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <span className="project-year">{project.year}</span>
                </div>
              </div>
              <div className="project-content">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <a href="#contact" className="project-link">View Project →</a>
              </div>
            </div>
          ))}
        </div>

        <div className="works-footer">
          <p>Interested in working together? </p>
          <a href="#contact" className="works-cta">Start Your Project</a>
        </div>
      </div>
    </section>
  );
};

export default Works;
