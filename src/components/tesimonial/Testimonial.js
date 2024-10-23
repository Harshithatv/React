import React, { useState } from 'react';
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import Title from '../layouts/Title';

import testimonial1 from "../../assets/images/testmonial/testimonial1.jpg";
import testimonial2 from "../../assets/images/testmonial/testimonial2.jpeg";
import testimonial3 from "../../assets/images/testmonial/testimonial3.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "0px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "40px", // Increased margin-top for the dots
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT CLIENTS SAY" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {/* Testimonial One */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col justify-center items-center bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
              <img
                className="h-24 w-24 rounded-full object-cover mb-4"
                src={testimonial1}
                alt="testimonialOne"
              />
              <h3 className="text-xl font-bold text-white">John Doe</h3>
              <p className="text-sm text-gray-400">CEO, Example Corp.</p>
              <div className="text-yellow-500 flex gap-1 my-2">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <p className="text-base text-gray-400 text-center">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl et enim malesuada, sit amet
                volutpat velit viverra."
              </p>
            </div>
          </div>

          {/* Testimonial Two */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col justify-center items-center bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
              <img
                className="h-24 w-24 rounded-full object-cover mb-4"
                src={testimonial2}
                alt="testimonialTwo"
              />
              <h3 className="text-xl font-bold text-white">Jane Smith</h3>
              <p className="text-sm text-gray-400">Designer, Creative Co.</p>
              <div className="text-yellow-500 flex gap-1 my-2">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <p className="text-base text-gray-400 text-center">
                "Phasellus euismod risus ac velit cursus, at vehicula elit
                facilisis. Nullam nec mauris tincidunt, elementum arcu id,
                imperdiet lectus."
              </p>
            </div>
          </div>

          {/* Testimonial Three */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col justify-center items-center bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
              <img
                className="h-24 w-24 rounded-full object-cover mb-4"
                src={testimonial3}
                alt="testimonialThree"
              />
              <h3 className="text-xl font-bold text-white">Sam Wilson</h3>
              <p className="text-sm text-gray-400">CTO, Tech Solutions</p>
              <div className="text-yellow-500 flex gap-1 my-2">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </div>
              <p className="text-base text-gray-400 text-center">
                "Vestibulum ultricies purus quis felis imperdiet, in auctor
                felis accumsan. Maecenas lobortis turpis nec ipsum fermentum,
                at tincidunt tortor efficitur."
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
