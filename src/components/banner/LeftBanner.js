import React, { useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../styles/styles.css"

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Software Development.", "Branding.", "Digital Marketing.", "Internet Marketing"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  useEffect(() => {
    const headingLeft = document.querySelector('.techno-left');
    const headingRight = document.querySelector('.techno-right');

    const animateHeadings = () => {
      headingLeft.classList.remove('animate');
      headingRight.classList.remove('animate');
      // Trigger reflow to restart animation
      void headingLeft.offsetWidth;
      void headingRight.offsetWidth;
      headingLeft.classList.add('animate');
      headingRight.classList.add('animate');
    };

    // Start the animation when the component mounts
    animateHeadings();

    // Repeat the animation every few seconds
    const interval = setInterval(animateHeadings, 5000); // Repeat every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-10">
      {/* Animated Techno IT Solutions Heading */}
      <div className="techno-heading">
        <span className="techno-left">Techno IT</span>
        <span className="techno-right"></span>
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-lg font-normal">Delivering Superior Services in</h3>

        <h2 className="text-4xl font-bold text-yellow-500">
          <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>

        <p className="text-base font-bodyFont leading-6 tracking-wide">
          We provide top-quality services in Software Development, SEO, and Digital Marketing. Whether you need custom software, better search engine rankings, or effective online marketing, we have the right solutions for your business.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex gap-4">
        <button className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-pink-500 hover:to-yellow-500 transition duration-300">
          Get Quotes
        </button>
        <button className="px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 hover:from-indigo-500 hover:to-blue-500 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default LeftBanner;
