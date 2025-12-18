"use client";

import { useAuth } from "@/src/context/AuthProvider";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  color: string;
}

// Reusable SocialIcon component
const SocialIcon: React.FC<SocialIconProps> = ({ href, icon, color }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:opacity-90"
    style={{
      background: "linear-gradient(to right, #06b6d4, #3b82f6)", // cyan to blue gradient
      color: "white",
      boxShadow: `0 0 10px ${color}33`,
    }}
  >
    <div className="text-xl">{icon}</div>
  </Link>
);

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[90vh] sm:h-screen overflow-hidden flex items-center justify-center text-center">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animate-gradient-xy"></div>

      {/* Animated Overlay Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-4 sm:px-6">
        <h1 className="text-white font-extrabold text-4xl sm:text-6xl md:text-7xl mb-4 animate-slide-down tracking-tight">
          Duranta Online Limited
        </h1>

        <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-xl md:max-w-2xl animate-fade-in">
          Empowering connectivity with high-speed, reliable internet and cable
          services — bringing the world closer to your home.
        </p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-8 animate-float ">
          <SocialIcon
            href="https://facebook.com"
            icon={<FaFacebookF />}
            color="#1877F2"
          />
          <SocialIcon
            href="https://instagram.com"
            icon={<FaInstagram />}
            color="#E1306C"
          />
          <SocialIcon
            href="https://linkedin.com"
            icon={<FaLinkedinIn />}
            color="#0077B5"
          />
          <SocialIcon
            href="https://youtube.com"
            icon={<FaYoutube />}
            color="#FF0000"
          />
        </div>
      </div>

      {/* Animations & Styles */}
      <style jsx>{`
        /* Gradient Background Animation */
        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
        }
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 10s ease infinite;
        }

        /* Slide Down Text Animation */
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 1s ease-out forwards;
        }

        /* Fade In Paragraph */
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-in forwards;
          animation-delay: 0.4s;
        }

        /* Floating Social Icons */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-6px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;
