import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { MdClose } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { navLinksdata } from '../../constants';
import { logo } from "../../assets/index";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-black flex justify-between items-center font-titleFont ">
      {/* Logo */}
      <div>
       
      </div>

      {/* Hamburger Icon */}
      <div
        onClick={() => setShowMenu(true)}
        className="text-3xl flex flex-col justify-between h-6 cursor-pointer"
      >
        {/* 3 Bars for Hamburger */}
        <div className="w-8 h-1 bg-white"></div>
        <div className="w-8 h-1 bg-white"></div>
        <div className="w-8 h-1 bg-white"></div>
      </div>

      {/* Side Menu - Slide in from right */}
      <div
        className={`fixed top-0 right-0 w-[60%] max-w-[400px] h-screen bg-gray-900 p-6 transform duration-500 ease-in-out z-50 ${
          showMenu ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-8 py-4 relative">
          {/* Close Button */}
          <span
            onClick={() => setShowMenu(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
          >
            <MdClose />
          </span>

          {/* Logo */}
         

          {/* Nav Links */}
          <ul className="flex flex-col gap-4">
            {navLinksdata.map((item) => (
              <li
                key={item._id}
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              >
                <Link
                  onClick={() => setShowMenu(false)}
                  activeClass="active"
                  to={item.link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex flex-col gap-4">
            <h2 className="text-base uppercase font-titleFont mb-4"></h2>
            <div className="flex gap-4">
              <span className="bannerIcon">
                <FaFacebookF />
              </span>
              <span className="bannerIcon">
                <FaTwitter />
              </span>
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
