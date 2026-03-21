import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const phoneNumber = "+91 9745282011"; // Replace with client's number
  const whatsappMsg = "Hello DreamSpace, I'm interested in your engineering services.";

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white border-b border-gray-800 pb-4">Let's Build Together</h2>
      
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8 text-gray-400">
          <p className="text-lg">Ready to start your next construction project? Reach out directly.</p>
          
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-2xl text-white" />
            <span>123 Engineering Blvd, Design District, City</span>
          </div>
          
          <div className="flex items-center gap-4">
            <FaPhone className="text-2xl text-white" />
            <span>+91 9745282011</span>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {/* Direct WhatsApp Link */}
          <a 
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMsg)}`}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] text-white p-4 rounded-lg font-bold hover:bg-[#1ebe5d] transition-colors"
          >
            <FaWhatsapp className="text-2xl" /> Message on WhatsApp
          </a>

          {/* Direct Email Link */}
          <a 
            href="mailto:contact@dreamspace.com?subject=Project Inquiry"
            className="flex items-center justify-center gap-3 bg-neutral-800 text-white p-4 rounded-lg font-bold hover:bg-neutral-700 transition-colors"
          >
            <FaEnvelope className="text-2xl" /> Send an Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;