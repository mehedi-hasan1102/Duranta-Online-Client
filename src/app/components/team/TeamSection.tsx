'use client';
import React from "react";
import Slider, { Settings } from "react-slick";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Yomi Denzel",
    role: "E-Commerce 2.0",
    image: "/team/team1.jpg",
  },
  {
    name: "Timothée Moiroux",
    role: "Investissement Immobilier",
    image: "/team/team2.jpg",
  },
  {
    name: "David Sequiera",
    role: "Closing",
    image: "/team/team3.jpg",
  },
  {
    name: "Manuel Ravier",
    role: "Investissement Immobilier",
    image: "/team/team5.jpg",
  },
];

const TeamSection: React.FC = () => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          arrows: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-4xl font-bold mb-8">THE TEAM</h2>
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Our expert team at Duranta Online Ltd. delivers reliable IT and internet solutions, committed to quality and customer satisfaction.
        </p>

        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div key={index} className="px-4">
              <div className="bg-gradient-to-b from-[#101a3a] to-[#162452] rounded-xl shadow-lg overflow-hidden relative cursor-pointer hover:shadow-cyan-500/50 transition-shadow duration-300">
                <div className="relative w-full h-[400px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-xl"
                  />
                </div>
                <div className="absolute bottom-6 left-6 text-left text-white  bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 p-2 rounded-2xl ">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-white">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TeamSection;
