import React from 'react';
import "../styles/RightStyles.css"; // Ensure to include any additional CSS styles here

const RightBanner = () => {
  return (
    <div className=" w-full lgl:w-1/2 flex justify-center items-center p-10 bg-black rounded-lg shadow-lg overflow-hidden">
      {/* Animated Circles */}
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="animated-circle"
          style={{
            animationDelay: `${Math.random() * 5}s`, // Random delay for each circle
            left: `${Math.random() * 100}vw`, // Random horizontal position
            backgroundColor: `hsl(${Math.random() * 360}, 100%, 50%)`, // Random color
            width: `${Math.random() * 60 + 60}px`, // Random width between 60px and 120px
            height: `${Math.random() * 60 + 60}px`, // Random height between 60px and 120px
          }}
        />
      ))}
    </div>
  );
};

export default RightBanner;
