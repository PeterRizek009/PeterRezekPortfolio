import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
  
        <div className='md:max-w-[80%] mx-auto'>
            <div className='title'>Contact Me</div>

      <div className="flex flex-col justify-center items-center mx-auto text-center my-6">
        

        <p className="text-gray-300 mb-8 w-[90%]">
          I would like to hear about your project and how I could help you.  
          Feel free to reach out to me directly through WhatsApp or LinkedIn 👇
        </p>

  
        <div className="flex flex-wrap gap-6 justify-center">
  
          <a
            href="https://wa.me/+971504858376" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-500 transition-all"
          >
            <FaWhatsapp size={22} />
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/peter-reazik-a84408123/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          >
            <FaLinkedin size={22} />
            LinkedIn
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="md:max-w-[1800px] h-[2px] bg-violet-800 mx-auto mt-16"></div>
    </div>
  );
}
