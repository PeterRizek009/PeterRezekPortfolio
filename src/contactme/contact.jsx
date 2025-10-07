import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "YOUR_SERVICE_ID", 
      "YOUR_TEMPLATE_ID", 
      form.current, 
      "YOUR_PUBLIC_KEY"
    ).then(
      (result) => {
        alert("Message sent successfully!");
      }, 
      (error) => {
        alert("Failed to send message, try again.");
      }
    );
  };

  return (
    <div className="max-w-full p-1 bg-gray-900 text-center">
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          className="w-full p-3 mb-4 rounded-md border border-gray-700 bg-gray-800 text-white"
          required
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          className="w-full p-3 mb-4 rounded-md border border-gray-700 bg-gray-800 text-white"
          required
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          rows="5" 
          className="w-full p-3 mb-4 rounded-md border border-gray-700 bg-gray-800 text-white"
          required
        />
        <button 
          type="submit" 
          className="w-full bg-violet-700 text-white py-3 rounded-lg hover:bg-violet-500 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
