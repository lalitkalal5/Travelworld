// src/components/Contact.js
import React from 'react';
import Navbar from './Navbar';
const Contact = () => {
  return (
    <>
    <Navbar />
    <div className="py-16 px-8 text-center">
      {/* Contact Information */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700">Have questions? We’d love to hear from you!</p>
        <p className="text-gray-700 mt-4">📍2nd FLOOR, SURDHARA COMPLEX, 10, Nikol Gam Rd, nr. SARDAR PATEL MALL, Soni ni chali, Mirapark, Thakkarbapanagar, Khodiar Nagar, Ahmedabad, Gujarat 382350</p>
        <p className="text-gray-700">📞 9998966544</p>
        <p className="text-gray-700">📧 contact@travelworld.com</p>
      </section>

      {/* Contact Form */}
      <section className="max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md" required />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-md" required />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-md" rows="4" required></textarea>
          <button className="w-full bg-red-500 hover:bg-red-600 text-white p-3 rounded-md font-semibold">Submit</button>
        </form>
      </section>

            {/* Google Map Section */}
            <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Find Us Here</h2>
        <p className="mb-4 text-gray-700">Visit our office or get directions below:</p>
        <div className="flex justify-center">
        <div className="w-full max-w-[700px] h-[500px]">
          <iframe
            title="Travel-World "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14687.016100858571!2d72.6227050871582!3d23.032802000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e87007d4c38f7%3A0x640ef2a0cf20aab!2sTravel%20world!5e0!3m2!1sen!2sin!4v1729835834277!5m2!1sen!2sin" 
            className="w-full h-full border-10"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;

