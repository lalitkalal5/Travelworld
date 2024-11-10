// src/components/Home.js
import React from 'react';
import Navbar from './Navbar'

const Home = () => {
  return (
   <>
   <div className='relative z-20'>
   <Navbar />
   </div>
    <div>
      <div>
      <a
      href="https://wa.me/+919998966544?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
      target="_blank"
      rel="noopener noreferrer"
      className='absolute bottom-0 right-0'
      // className="absoulute end-0 bottom-0  text-black font-bold py-2 px-4 rounded-full shadow-lg"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
        alt="WhatsApp"  
        className="relative z-20 w-20 h-20 mr-2"
      />
      Chat with Us
    </a>
      </div>
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen flex flex-col items-center justify-center text-center text-white" 
      // style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")' }}
      >
         <video 
            autoPlay 
            loop 
            muted 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src='/bgvideo_Trim_Trim.mp4' type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for darkening video */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className='relative z-10'>
        <h1 className=" text-white text-4xl md:text-6xl font-bold mb-4">Explore the World with Travel World</h1>
        <p className=" text-white  text-lg md:text-4xl mb-8">Uncover hidden gems and popular destinations.</p>
        <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full text-lg">Start Your Journey</button>
        </div>
      </section>
    
      {/* Popular Destinations */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Popular Destinations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="rounded-lg  shadow-xl overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Paris" className="w-full h-65 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-semibold">Paris</h3>
              <p className="text-gray-700">The city of lights awaits you.</p>
            </div>
          </div>
          <div className="rounded-lg  shadow-xl overflow-hidden">
            <img src="https://plus.unsplash.com/premium_photo-1680806491784-6d3d0d406562?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="London" className="w-full h-65 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-semibold">London</h3>
              <p className="text-gray-700">The city of lights awaits you.</p>
            </div>  
            </div>
          <div className="rounded-lg shadow-xl overflow-hidden">
            <img src="https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bali" className="w-full h-65 object-cover" />
            <div className="p-4">
              <h3 className="text-3xl font-semibold">Bali</h3>
              <p className="text-gray-700">Find paradise on the beautiful beaches of Bali.</p>
            </div>
          </div>
          {/* Add more destinations as needed */}
        </div>
      </section>
      {/* whasapp icon */}
     

      {/* Testimonials */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
        <p className="max-w-2xl mx-auto text-lg italic">"The best travel experience ever!" - Anna</p>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-sky-900 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Sign up for travel deals and inspiration.</p>
        <div className="flex flex-col items-center">
          <input type="email" placeholder="Enter your email" className="mb-4 p-3 rounded-md text-gray-700 w-72" />
          <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-full text-lg">Subscribe</button>
        </div>
      </section>
    </div>
    
    </>
  );
};

export default Home;

