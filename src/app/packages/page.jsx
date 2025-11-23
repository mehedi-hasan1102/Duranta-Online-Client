
// "use client";
// // import Image from "next/image";
// // import photo from "../../assets/hero (1).jpeg";

// const plans = [
//   {
//     title: "Basic Package",
//     speed: "30 Mbps",
//     price: "$24",
//     desc: "Price excludes 11% VAT",
//     features: [
//       "Speed Up to 30 Mbps",
//       "Internet Unlimited",
//       "Free installation",
//       "Home Broadband",
//       "Ideal for 1–3 devices",
//     ],
//   },
//   {
//     title: "Standart Package",
//     speed: "50 Mbps",
//     price: "$35",
//     desc: "Price excludes 11% VAT",
//     features: [
//       "Speed Up to 50 Mbps",
//       "Internet Unlimited",
//       "Free installation",
//       "Home Broadband",
//       "Ideal for 1–5 devices",
//     ],
//   },
//   {
//     title: "Premium Package",
//     speed: "100 Mbps",
//     price: "$45",
//     desc: "Price excludes 11% VAT",
//     features: [
//       "Speed Up to 100 Mbps",
//       "Internet Unlimited",
//       "Free installation",
//       "Home Broadband",
//       "Ideal for 1–10 devices",
//     ],
//   },
//   {
//     title: "Hyper Package",
//     speed: "250 Mbps",
//     price: "$50",
//     desc: "Price excludes 11% VAT",
//     features: [
//       "Speed Up to 200 Mbps",
//       "Internet Unlimited",
//       "Free installation",
//       "Home Broadband",
//       "Ideal for 1–15 devices",
//     ],
//   },
// ];

// export default function Packages() {
//   return (
//     <section className="relative py-16 sm:py-20 text-white">
//       {/* Background Image */}
//       <div className="absolute inset-0 -z-10">
//         {/* <Image
//           src={photo}
//           alt="Banner Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         /> */}
//         {/* <div className="absolute inset-0 bg-black/70" /> */}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Title */}
//         <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 leading-snug">
//           Browse Our Best Internet Plans
//         </h2>
//         <p className="text-center text-gray-300 mb-10 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
//           Find the perfect internet plan tailored to your needs!
//         </p>

//         {/* Plans Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               className="relative bg-gradient-to-b from-[#001B3D]/80 to-[#012E59]/60 p-5 sm:p-6 rounded-2xl shadow-lg border border-blue-900 hover:scale-105 transition-transform duration-300"
//             >
//               {/* Plan Header */}
//               <h3 className="text-lg sm:text-xl font-bold mb-1">{plan.title}</h3>
//               <p className="text-sm text-gray-300 mb-3">{plan.speed}</p>
//               <div className="text-3xl sm:text-4xl font-extrabold mb-2">
//                 {plan.price}
//               </div>
//               <p className="text-xs sm:text-sm text-gray-400 mb-5">
//                 {plan.desc}
//               </p>

             

//               {/* <button className="w-full border border-gray-400 text-gray-300 py-2 sm:py-3 rounded-full hover:bg-white/10 transition">
//                 Buy Now
//               </button> */}

//               {/* Features */}
//               <ul className="mt-5 mb-5 sm:mt-6 space-y-2 text-xs sm:text-sm text-gray-200">
//                 {plan.features.map((feat, i) => (
//                   <li key={i} className="flex items-start gap-2">
//                     <span className="text-cyan-400 text-base">✓</span>
//                     <span>{feat}</span>
//                   </li>
//                 ))}
//               </ul>
              

//  {/* Buttons */}
//               <button className="w-full bg-cyan-400 text-black font-semibold py-2 sm:py-3 rounded-full mb-3 hover:bg-cyan-300 transition">
//           Get Now
//               </button>

//             </div>
            
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import React, { useState } from "react";

const plans = [
  {
    title: "Basic Package",
    speed: "30 Mbps",
    price: "$24",
    desc: "Price excludes 11% VAT",
    features: [
      "Speed Up to 30 Mbps",
      "Internet Unlimited",
      "Free installation",
      "Home Broadband",
      "Ideal for 1–3 devices",
    ],
  },
  {
    title: "Standard Package",
    speed: "50 Mbps",
    price: "$35",
    desc: "Price excludes 11% VAT",
    features: [
      "Speed Up to 50 Mbps",
      "Internet Unlimited",
      "Free installation",
      "Home Broadband",
      "Ideal for 1–5 devices",
    ],
  },
  {
    title: "Premium Package",
    speed: "100 Mbps",
    price: "$45",
    desc: "Price excludes 11% VAT",
    features: [
      "Speed Up to 100 Mbps",
      "Internet Unlimited",
      "Free installation",
      "Home Broadband",
      "Ideal for 1–10 devices",
    ],
  },
  {
    title: "Hyper Package",
    speed: "250 Mbps",
    price: "$50",
    desc: "Price excludes 11% VAT",
    features: [
      "Speed Up to 200 Mbps",
      "Internet Unlimited",
      "Free installation",
      "Home Broadband",
      "Ideal for 1–15 devices",
    ],
  },
];

export default function Packages() {
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  return (
    <section className="relative py-16 sm:py-20 text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 leading-snug">
          Browse Our Best Internet Plans
        </h2>
        <p className="text-center text-gray-300 mb-10 sm:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
          Find the perfect internet plan tailored to your needs!
        </p>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-b from-[#001B3D]/80 to-[#012E59]/60 p-6 rounded-2xl shadow-lg border border-blue-900 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-1">{plan.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{plan.speed}</p>
              <div className="text-3xl sm:text-4xl font-extrabold mb-2">
                {plan.price}
              </div>
              <p className="text-xs sm:text-sm text-gray-400 mb-5">{plan.desc}</p>

              <ul className="mt-5 mb-5 sm:mt-6 space-y-2 text-xs sm:text-sm text-gray-200">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-cyan-400 text-base">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openModal(plan)}
                className="w-full bg-gradient-to-r from-cyan-400 to-blue-400 text-black font-semibold py-2 sm:py-3 rounded-full mb-3 hover:opacity-90 transition"
              >
                Get Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedPlan && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-3 sm:px-4"
          onClick={closeModal}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-br from-blue-900/70 via-slate-800/60 to-blue-950/70 backdrop-blur-xl text-white rounded-2xl shadow-2xl max-w-3xl w-full flex flex-col sm:flex-row overflow-hidden border border-blue-400/20 animate-zoom-in"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl"
            >
              &times;
            </button>

            {/* Left - Plan Info */}
            <div className="flex-1 p-6 sm:p-8 border-r border-blue-400/30">
              <h2 className="text-2xl font-bold mb-2 text-cyan-300">
                {selectedPlan.title}
              </h2>
              <p className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 mb-4">
                {selectedPlan.speed}
              </p>
              <p className="text-2xl font-semibold text-white mb-2">
                {selectedPlan.price} <span className="text-sm">/mo</span>
              </p>
              <p className="text-gray-300 mb-3">Installation Charge: 3,000 Tk</p>
              <div className="h-[3px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full w-3/4 mt-4"></div>
            </div>

            {/* Right - Form */}
            <div className="flex-1 p-6 sm:p-8">
              <h3 className="text-lg font-semibold mb-4 text-cyan-300">
                Request a Callback
              </h3>
              <form className="space-y-3">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent border border-blue-400/40 text-white placeholder-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="w-full bg-transparent border border-blue-400/40 text-white placeholder-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none transition"
                />
                <input
                  type="text"
                  placeholder="Your address"
                  className="w-full bg-transparent border border-blue-400/40 text-white placeholder-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none transition"
                />
                <textarea
                  placeholder="Write your message"
                  rows="3"
                  className="w-full bg-transparent border border-blue-400/40 text-white placeholder-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-cyan-400 outline-none transition resize-none"
                ></textarea>

                {/* Mock reCAPTCHA */}
                <div className="flex items-center gap-2 border border-blue-400/40 rounded-md px-3 py-2 bg-transparent">
                  <input type="checkbox" id="robot" className="accent-cyan-400" />
                  <label htmlFor="robot" className="text-sm text-gray-300">
                    I'm not a robot
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-semibold py-2 rounded-md transition"
                >
                  Call Me Back
                </button>
              </form>
            </div>
          </div>

          {/* Animation */}
          <style jsx>{`
            @keyframes zoom-in {
              from {
                opacity: 0;
                transform: scale(0.9);
              }
              to {
                opacity: 1;
                transform: scale(1);
              }
            }
            .animate-zoom-in {
              animation: zoom-in 0.35s ease-out forwards;
            }
          `}</style>
        </div>
      )}
    </section>
  );
}
