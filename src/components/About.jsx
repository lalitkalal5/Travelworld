import react from 'react'
import Navbar from './Navbar';

const About = ()=>{
    return (<>
        <Navbar />
        <div className="py-16 px-8 text-center">
      {/* Introduction */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-4">About Travel Explorer</h1>
        <p className="text-lg text-gray-700">Your partner in finding amazing travel experiences around the globe.</p>
      </section>

      {/* Mission Statement */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="max-w-2xl mx-auto text-gray-700">We are passionate about providing unforgettable travel experiences and helping travelers explore the world with ease and confidence.</p>
      </section>

      {/* Team Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-8">
          <div className="text-center">
            <img src="/Rk.jpg" alt="CEO" className="rounded-full mx-auto w-40 h-40 mb-4" />
            <h3 className="text-2xl font-semibold">Ramesh Kalal</h3>
            <p className="text-gray-600">CEO</p>
          </div>
          {/* Add more team members */}
        </div>
      </section>

      {/* Journey Timeline */}
      <section>
        <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
        <p className="max-w-2xl mx-auto text-gray-700">Founded in 2020, we have helped thousands of travelers find their perfect destinations.</p>
      </section>
    </div>
    
        </>
    )
}
export default About;
