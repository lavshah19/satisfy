// src/components/Footer.jsx
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white py-6 mt-8 shadow-inner">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Side: Company Information */}
          <div className="mb-4 md:mb-0 text-center">
            <h3 className="text-lg font-bold"> <span className='text-yellow-500'>Satisfy</span> Doha</h3>
            <p className="text-md">Your satisfaction is our priority!</p>
          </div>

          {/* Center: Links */}
          <div className="mb-4 md:mb-0 text-center">
            <h4 className="text-xl font-semibold "><span className='text-yellow-500'>Quick </span>Links</h4>
            <ul className="flex space-x-4 text-lg">
              <li><Link to="/" className="hover:text-yellow-300 hover:underline">Home</Link></li>
              <li><Link to="/services" className="hover:text-yellow-300 hover:underline">Services</Link></li>
              <li><Link to="/about" className="hover:text-yellow-300 hover:underline">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-300 hover:underline">Contact</Link></li>
            </ul>
            <div className="text-center mt-4">
              <p className="text-md">© {new Date().getFullYear()} Satisfy Doha. All rights reserved.</p>
            </div>
          </div>

          {/* Right Side: Social Media */}
          <div>
            <h4 className="text-xl font-semibold"> <span className='text-yellow-500'>Follow </span> Us</h4>
            <div className="flex space-x-4 mt-2">
              <a href="https://facebook.com" aria-label="Follow us on Facebook" className="hover:text-yellow-300">
                <FontAwesomeIcon icon={faFacebook} className='text-xl'/>
              </a>
              <a href="https://twitter.com" aria-label="Follow us on Twitter" className="hover:text-yellow-300">
                <FontAwesomeIcon icon={faTwitter} className='text-xl'/>
              </a>
              <a href="https://instagram.com" aria-label="Follow us on Instagram" className="hover:text-yellow-300">
                <FontAwesomeIcon icon={faInstagram} className='text-xl'/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
