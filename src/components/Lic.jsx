import React from 'react';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';

const LICPage = () => {
  
  const categories = [
    {
      title: "Insurance Plans",
      count: 33,
      icon: "🛡️"
    },
    {
      title: "Pension Schemes",
      count: 3,
      icon: "👴"
    },
    {
      title: "Unit Linked Plans",
      count: 4,
      icon: "📈"
    },
    {
      title: "Micro Insurance Plans",
      count: 3,
      icon: "💰"
    },
    {
      title: "Withdrawal Plans",
      count: 175,
      icon: "💸"
    },
    {
      title: "Health Plans",
      count: 2,
      icon: "🏥"
    }
  ];

  const handleCategoryClick = (categoryTitle) => {
    const message = `Hi, I'm interested in LIC ${categoryTitle}. Please provide more information.`;
    // href="https://wa.me/+919998966544?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20services"
    // const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    const whatsappUrl = `https://wa.me/+919998966544?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
    <Navbar />
    <div className="min-h-screen bg-gray-200">
      {/* Hero Image Section */}
      <div className="w-full h-[400px] relative">
        <img
          src="/Lic.jpg"
          alt="LIC Insurance"
          className="w-full h-full object-cover hidden md:block"
        />
         <img
            src="/Lic2.jpg"
            alt="LIC Insurance"
            className="w-full h-full object-cover md:hidden"
          />
      </div>
          <h1 className=" text-4xl  md:text-5xl  mt-10  color-red font-bold text-center px-4">
            Secure Your Future with LIC
          </h1>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Search by Category</h2>
          <p className="text-gray-600">Choose from our wide range of insurance solutions</p>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              onClick={() => handleCategoryClick(category.title)}
              className="bg-gray-800 text-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300 cursor-pointer border border-gray-100"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl">{category.icon}</div>
                <div className="bg-blue-200 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                  {category.count} Plans
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              
              <div className="flex items-center justify-between mt-4">
                <span className="text-blue-600 font-medium">View Plans</span>
                <ArrowRight className="w-5 h-5 text-blue-600" />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-16 text-center bg-white rounded-lg shadow-md p-8">
          <h3 className="text-2xl font-semibold mb-4">Need Help Choosing?</h3>
          <p className="text-gray-600 mb-6">
            Our insurance experts are here to guide you through the best plans suited for your needs.
            Click on any category above to connect with us on WhatsApp for personalized assistance.
          </p>
          <div className="text-sm text-gray-500">
            * Terms and conditions apply. Please read all scheme related documents carefully.
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default LICPage;
