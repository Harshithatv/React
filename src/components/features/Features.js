import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import { FaBusinessTime } from "react-icons/fa";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section id="features" className="w-full py-20">
      {/* Centered Title */}
      <div className="text-center mb-10">
        <Title title="Features" des="What We Do" />
      </div>

      {/* Grid Layout with an additional row */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-10">
        <Card
          title="Business Strategy"
          des="I provide innovative strategies tailored to help your business grow, stay ahead of competitors, and improve overall efficiency."
          icon={<FaBusinessTime />}
        />
        <Card
          title="App Development"
          des="Developing custom, high-performance mobile and web applications that are scalable, secure, and tailored to your business."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Optimizing your website's SEO to improve visibility, ranking, and drive more targeted traffic for business growth."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="Building feature-rich and responsive mobile apps for both Android and iOS platforms to boost your digital presence."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Creating user-centered designs that enhance the user experience and engagement by focusing on usability and aesthetics."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Offering secure, reliable, and scalable website hosting services to ensure optimal performance and uptime for your business."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
