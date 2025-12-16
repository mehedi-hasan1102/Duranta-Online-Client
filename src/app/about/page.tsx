'use client';
import { BorderBeam } from "@/components/ui/border-beam";
import React from "react";
import { FaUsers, FaBolt, FaCode } from "react-icons/fa";


interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <FaUsers className="text-red-500 w-8 h-8" />,
    title: "Value",
    description:
      "Always driven by excellent customer service and a sense of responsibility towards our customers. We respect our customers above all else.",
  },
  {
    icon: <FaBolt className="text-yellow-400 w-8 h-8" />,
    title: "Performance",
    description:
      "Encourage teamwork and innovation among staff, provide them with continuous training and development as well as recognize and reward their good performance.",
  },
  {
    icon: <FaCode className="text-cyan-400 w-8 h-8" />,
    title: "Development",
    description:
      "Practice integrity, continuous development and high business ethics. Foster relationships with customers, suppliers and the general community.",
  },
];

const AboutUs: React.FC = () => {
  return (
    <section className="text-white py-20">
      <div className="container mx-auto px-4 max-w-7xl text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
          ABOUT US
          <span className="absolute left-0 bottom-0 w-full h-1 rounded-full"></span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed text-sm sm:text-base md:text-lg">
          Duranta Online Ltd. is a trusted full-service IT solutions provider with over six years of experience in the Bangladesh market. We specialize in delivering high-quality, reliable internet services tailored to meet the needs of both home and corporate users, ensuring exceptional customer satisfaction.
        </p>

        {/* Feature Cards */}
        <div className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className=" relative  bg-gray-800/50 p-6 rounded-xl space-y-5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >


              <div className="flex items-center gap-3 justify-star rounded-2xl">
                <BorderBeam size={100} duration={10}  colorFrom="#3b82f6" colorTo="#0ea5e9"   />

                <div>{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-300 text-start text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
