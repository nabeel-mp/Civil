import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaLock, FaCopy, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  // IMPORTANT: WhatsApp requires the country code (91) but NO plus sign (+)
  const phoneNumber = "919745282011"; 
  const whatsappMsg = "Hello DreamSpace, I'm interested in your engineering services.";

  const emailAddress = "nabeelmp698@gmail.com";
  const emailSubject = "New Project Enquiry - DreamSpace";
  // \n creates a line break in the email!
  const emailBody = "Hello DreamSpace Engineering Team,\n\nI am interested in discussing a potential project with you. Please let me know when you are available for a consultation.\n\nBest regards,\n[Your Name]";

  const handleCopyEmail = (e) => {
    e.preventDefault(); // Stop default navigation just in case
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <section className="pt-32 pb-10 bg-slate-950 text-white relative overflow-hidden border-t border-white/10">
      
      {/* Architectural Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="flex items-center gap-6">
              <span className="w-16 h-[1px] bg-amber-500"></span>
              <span className="text-amber-500 text-xs font-bold tracking-[0.3em] uppercase">Inquiries</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.05]">
              Let's Build <br />
              <span className="font-serif font-light italic text-amber-500 pr-2">Together.</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-400 text-lg max-w-md font-light border-l border-white/20 pl-6"
          >
            Ready to start your next construction project? Our team of expert engineers is here to turn your vision into reality.
          </motion.p>
        </div>
        
        {/* Contact Box with Offset Framing */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full group mb-24"
        >
          {/* Offset Wireframe Accent */}
          <div className="absolute inset-0 border border-amber-500/30 translate-x-3 translate-y-3 transition-transform duration-700 group-hover:translate-x-5 group-hover:translate-y-5 pointer-events-none z-0"></div>
          
          {/* Main Content Container */}
          <div className="relative bg-slate-900 border border-white/10 z-10 flex flex-col md:flex-row">
            
            {/* Contact Details (Left) */}
            <div className="flex-1 p-10 md:p-16 space-y-12 border-b md:border-b-0 md:border-r border-white/10">
              <div className="flex items-start gap-6 group/item">
                <div className="bg-slate-950 border border-white/10 p-5 text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-slate-900 transition-colors duration-500">
                  <FaMapMarkerAlt className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">Location</h4>
                  <p className="font-light text-xl text-white">Chengara , Kavanur<br/>Malappuram, Kerala</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group/item">
                <div className="bg-slate-950 border border-white/10 p-5 text-amber-500 group-hover/item:bg-amber-500 group-hover/item:text-slate-900 transition-colors duration-500">
                  <FaPhone className="text-xl" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-amber-500 uppercase tracking-[0.2em] mb-2">Phone</h4>
                  {/* You can still display the + visually, just don't use it in the link */}
                  <p className="font-light text-xl text-white">+91 97452 82011</p>
                </div>
              </div>
            </div>

            {/* Actions (Right) */}
            <div className="flex-1 p-10 md:p-16 flex flex-col justify-center gap-6 bg-slate-900/50">
              
              {/* WhatsApp Ghost Button */}
              <a 
                href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="group/btn relative overflow-hidden border border-[#25D366] px-8 py-5 text-[#25D366] uppercase tracking-[0.2em] text-xs font-bold transition-all"
              >
                <span className="absolute inset-0 w-full h-full bg-[#25D366] origin-bottom scale-y-0 group-hover/btn:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>
                <span className="relative z-10 flex items-center justify-center gap-4 group-hover/btn:text-slate-900 transition-colors duration-500">
                  <FaWhatsapp className="text-xl" /> Message on WhatsApp
                </span>
              </a>

              {/* Email Container */}
              <div className="flex flex-col gap-2">
                {/* Primary Email Button */}
                <a 
                   href={`mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`} 
                   className="group/btn relative overflow-hidden border border-white px-8 py-5 text-white uppercase tracking-[0.2em] text-xs font-bold transition-all"
                >
                  <span className="absolute inset-0 w-full h-full bg-white origin-bottom scale-y-0 group-hover/btn:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] z-0"></span>
                  <span className="relative z-10 flex items-center justify-center gap-4 group-hover/btn:text-slate-900 transition-colors duration-500">
                    <FaEnvelope className="text-xl" /> Send an Email
                  </span>
                </a>
                
                {/* Fallback Copy Button */}
                <button 
                  onClick={handleCopyEmail}
                  className="text-[10px] text-slate-400 hover:text-amber-500 flex items-center justify-center gap-2 uppercase tracking-widest transition-colors py-2"
                >
                  {copied ? (
                    <><FaCheck className="text-green-500" /> Copied to clipboard</>
                  ) : (
                    <><FaCopy /> or copy email address</>
                  )}
                </button>
              </div>
              
            </div>

          </div>
        </motion.div>

        {/* Subtle Admin Login Link */}
        <div className="text-center mt-10">
          <Link 
            to="/admin/login" 
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-700 hover:text-amber-500 transition-colors duration-300"
            title="Admin Access"
          >
            <FaLock className="text-[10px]" />
            
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Contact;