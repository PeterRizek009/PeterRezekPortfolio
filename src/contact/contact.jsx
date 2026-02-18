import { FaWhatsapp, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section className="flex justify-center bg-[#f4f6fb] px-6 py-10">

      {/* OUTER CARD SAME STYLE */}
      <div className="relative w-full max-w-[1300px] rounded-2xl bg-white shadow-xl overflow-hidden">

        {/* RIGHT GRADIENT SHAPE */}
        <div className="absolute right-0 top-0 h-full w-[45%]">
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-600 to-purple-600" />
          <div className="absolute left-[-120px] top-0 h-full w-[280px] bg-white rounded-r-[200px]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 p-14 max-w-[600px]">

          {/* TITLE */}
          <h2 className="text-4xl font-bold text-gray-900">
            Contact Me
          </h2>

          <div className="w-24 h-[3px] bg-gradient-to-r from-indigo-600 to-purple-600 mt-3 rounded-full" />

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-6 leading-relaxed">
            I would love to hear about your project and how I can help.
            Feel free to reach out directly through WhatsApp, LinkedIn,
            or Email.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-10">

            <a
              href="https://wa.me/+971504858376"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-green-500 transition-all duration-300"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/peter-reazik-a84408123/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-blue-600 transition-all duration-300"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href="mailto:peter.s.rezik@gmail.com"
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-indigo-500 transition-all duration-300"
            >
              <FaEnvelope />
              Email
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}
