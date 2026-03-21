import React from 'react';

const Clients = () => {
  const clients = ['BuildCorp Inc.', 'City Planners LLC', 'Metro Developments', 'Apex Structures', 'GreenLife Builders', 'Summit Engineering'];

  return (
    <section id="clients" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Trusted By</h2>
          <div className="w-20 h-1 bg-engineer-gold mx-auto"></div>
          <p className="mt-4 text-gray-600">Collaborating with industry leaders to build better communities.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div key={index} className="px-4 py-8 bg-gray-50 rounded-lg text-center shadow-sm border border-gray-100 hover:border-engineer-blue transition-colors duration-300">
              <span className="font-bold text-gray-400 hover:text-engineer-blue transition-colors">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;