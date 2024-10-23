import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import "../styles/contact.css";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000 p-6 lgl:p-8 rounded-lg flex flex-col gap-6 justify-center border border-gray-800 shadow-lg">
      {/* Google Map Embed */}
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <iframe
          title="Google Map"
          className="w-full h-full object-cover"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509119!2d144.9537353156205!3d-37.81720997975102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0d8f15%3A0x5045671212c8c30!2s11%20West%20Town%2C%20PBo%2012345%2C%20United%20States!5e0!3m2!1sen!2sin!4v1631209205731!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h3 className="text-2xl font-semibold text-white">Contact</h3>
        <p className="text-sm text-gray-500">
           <span className="text-neon">11 West Town,12345, United States</span>
        </p>
        <p className="text-sm text-gray-500">
          Phone: 
          <span className="text-neon"> +1 1234 56 789</span>, 
          <span className="text-neon"> +1 1234 56 780</span>
        </p>
        <p className="text-sm text-gray-500">
          Email: 
          <span className="text-neon"> info@example.com</span>, 
          <span className="text-neon"> email@example.com</span>
        </p>
      </div>
      <div className="flex justify-center gap-6 mt-4">
        <FaFacebookF className="text-gray-400 hover:text-neon transition duration-300" />
        <FaTwitter className="text-gray-400 hover:text-neon transition duration-300" />
        <FaLinkedinIn className="text-gray-400 hover:text-neon transition duration-300" />
      </div>
    </div>
  );
}

export default ContactLeft;
