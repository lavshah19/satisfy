// src/components/ConstructionServices.jsx
import React from 'react';

const ConstructionServices = () => {
  // Array of services with their titles and descriptions
  const services = [
    {
      title: "General Construction",
      description: "We undertake contracts of any size across the entire construction sector. Much of our work is with clients who return to us because of our commitment to exceptional project management, craftsmanship, and aftercare.",
    },
    {
      title: "Building Maintenance Works",
      description: "Safety is our priority. We offer maintenance and restoration services to ensure buildings retain their structure and appearance, providing clients with reliable solutions for property upkeep.",
    },
    {
      title: "Civil & MEP Services",
      description: "Our Mechanical, Electrical, and Plumbing (MEP) services are delivered by an experienced team of engineers and project managers, ensuring time, cost, and quality standards are met.",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-5 md:p-10">
      <h1 className="text-4xl font-bold text-center text-indigo-700 mb-10">Construction & Engineering Services</h1>
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute border-l-4 border-indigo-600 left-0 md:left-1/2 h-full top-0 transform -translate-x-1/2"></div>

        {/* Loop through services and create boxes */}
        {services.map((service, index) => (
          <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-5`} key={index}>
            <div
              className="shadow-lg rounded-lg p-6 w-full md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-105"
              style={{
                backgroundColor: index % 2 === 0 ? '#e2e8f0' : '#d9f8e7', // Light gray for even boxes, light green for odd boxes
              }}
            >
              <h2
                className="text-2xl font-semibold"
                style={{
                  color: index % 2 === 0 ? '#2d3748' : '#2c5282', // Dark gray and darker teal text
                }}
              >
                {service.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        ))}

        {/* Additional Services List */}
        <div className="flex justify-start mb-5">
          <div className="bg-[#d9f8e7] shadow-lg rounded-lg p-6 w-full md:w-1/2 transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Additional Services:</h3>
            <ul className="list-disc list-inside text-gray-800">
              <li>General Construction</li>
              <li>Building Maintenance Works</li>
              <li>Civil & MEP Services</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionServices;
