import React from 'react';
import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react';

const Contact = () => {
  // Replace these with your actual details
  const phone = "+1234567890";
  const whatsappMsg = "Hello! I saw your portfolio and would like to discuss a project.";
  const email = "engineer@example.com";
  
  return (
    <section id="contact" className="py-24 bg-engineer-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <div className="w-20 h-1 bg-engineer-gold mx-auto mb-6"></div>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg">
            Ready to start your next infrastructure project? Reach out directly via the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* WhatsApp Direct */}
          <a href={`https://wa.me/${phone.replace('+', '')}?text=${encodeURIComponent(whatsappMsg)}`} target="_blank" rel="noreferrer" 
             className="flex flex-col items-center p-8 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/20 group">
            <MessageCircle className="w-12 h-12 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-blue-200 text-center text-sm">Direct message me</p>
          </a>

          {/* Email Direct */}
          <a href={`mailto:${email}`} 
             className="flex flex-col items-center p-8 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/20 group">
            <Mail className="w-12 h-12 text-engineer-gold mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-blue-200 text-center text-sm">{email}</p>
          </a>

          {/* Phone */}
          <a href={`tel:${phone}`} 
             className="flex flex-col items-center p-8 bg-white/10 rounded-xl hover:bg-white/20 transition-all border border-white/20 group">
            <Phone className="w-12 h-12 text-blue-300 mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-bold mb-2">Call Me</h3>
            <p className="text-blue-200 text-center text-sm">{phone}</p>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center p-8 bg-white/10 rounded-xl border border-white/20">
            <MapPin className="w-12 h-12 text-red-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">Location</h3>
            <p className="text-blue-200 text-center text-sm">123 Engineering Blvd,<br/>New York, NY 10001</p>
          </div>
        </div>
      </div>
      <div className="text-center mt-20 text-blue-300 text-sm">
        &copy; {new Date().getFullYear()} Structure Engineering. All rights reserved.
      </div>
    </section>  
  );
};

export default Contact;