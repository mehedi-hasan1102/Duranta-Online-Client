// // "use client";
// import React from "react";

// export default function TeamSection() {
//   const teamMembers = [
//     { name: "Nazmul Huda Anupam" },
//     { name: "Biplob Majumder" },
//     { name: "David Ive" },
//     { name: "James Moro" },
//   ];

//   return (
//     <section className="py-20 text-white">
//       <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
//         {/* Section Title */}
//         <h2 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
//           {/*  */}
//           <span className="relative z-10 ">THE TEAM</span>
          
//         </h2>

//         {/* Team Members */}
//         <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
//           {teamMembers.map((member, index) => (
//             <div
//               key={index}
//               className="bg-gradient-to-b from-[#001B3D]/80 to-[#012E59]/60 p-6 rounded-2xl shadow-lg border border-blue-900 hover:scale-105 transition-transform duration-300"
//             >
//               <h3 className="font-bold text-lg sm:text-xl tracking-wide">
//                 {member.name.toUpperCase()}
//               </h3>
//               {/* <div className="mt-3 h-[2px] w-12 bg-cyan-400 mx-auto"></div> */}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const teamMembers = [
  {
    name: "Yomi Denzel",
    role: "E-Commerce 2.0",
    image: "/team/yomi.jpg",
  },
  {
    name: "Timothée Moiroux",
    role: "Investissement Immobilier",
    image: "/team/timothee.jpg",
  },
  {
    name: "David Sequiera",
    role: "Closing",
    image: "/team/david.jpg",
  },
  {
    name: "Manuel Ravier",
    role: "Investissement Immobilier",
    image: "/team/manuel.jpg",
  },
];

export default function TeamSection() {
  const settings = {
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
    <section className=" py-20">
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
                <div className="absolute bottom-6 left-6 text-left text-white">
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-cyan-400">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
