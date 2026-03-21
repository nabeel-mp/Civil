import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-engineer-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-100 p-8 rounded-xl border-l-4 border-engineer-blue shadow-sm">
            <h3 className="text-2xl font-bold mb-4">My Philosophy</h3>
            <p className="text-gray-600 leading-relaxed">
              With over a decade of experience in civil engineering, I believe that every structure must harmonize with its environment while providing uncompromising safety and functionality. I bridge the gap between architectural vision and structural reality.
            </p>
          </div>
          <div>
            <div className="space-y-6">
              {[
                { label: 'Structural Design', value: '95%' },
                { label: 'Project Management', value: '90%' },
                { label: 'AutoCAD & Revit', value: '98%' },
                { label: 'Site Supervision', value: '85%' },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">{skill.label}</span>
                    <span className="text-gray-500">{skill.value}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-engineer-blue h-2 rounded-full" style={{ width: skill.value }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;