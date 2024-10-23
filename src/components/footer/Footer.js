import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";
import { logo } from "../../assets/index";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start p-6 rounded-lg shadow-lg space-y-8 md:space-y-0">
        
        {/* Left Side: Techno IT and Description */}
        <div className="flex flex-col md:w-1/3 animate-fade-in">
          <h2 className="text-5xl font-bold mb-2">Techno IT</h2>
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
              <FaTwitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Middle Section: Services */}
        <div className="md:w-1/7 flex flex-col items-center md:items-start animate-fade-in">
          <h3 className="text-lg font-semibold mb-2">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#web-development" className="text-gray-400 hover:text-pink-500 transition duration-300">Web Development</a>
            </li>
            <li>
              <a href="#mobile-apps" className="text-gray-400 hover:text-pink-500 transition duration-300">Mobile Applications</a>
            </li>
            <li>
              <a href="#cloud-services" className="text-gray-400 hover:text-pink-500 transition duration-300">Cloud Services</a>
            </li>
            <li>
              <a href="#consulting" className="text-gray-400 hover:text-pink-500 transition duration-300">IT Consulting</a>
            </li>
          </ul>
        </div>

        {/* Right Side: Contact Details and Newsletter Subscription */}
        <div className="md:w-1/3 flex flex-col items-center md:items-end animate-fade-in">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <p className="mb-2">contact@technoit.com</p>
          <p className="mb-4">+1 (234) 567-890</p>
          
          {/* Newsletter Subscription Form */}
          <form className="flex space-x-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l-md border border-gray-700 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <button
              type="submit"
              className="flex items-center p-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white rounded-r-md hover:opacity-80 transition duration-300"
            >
              <FaPaperPlane className="mr-1" /> {/* Send icon */}
             
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
