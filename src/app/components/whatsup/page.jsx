"use client";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const whatsappNumber = "+1234567890";
  const message = "Hello! I would like to chat.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-20 right-5 z-50">
      <button
        onClick={openWhatsApp}
        className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg shadow-blue-900/50 flex items-center justify-center animate-bounce-custom hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Custom bounce animation */}
      <style jsx>{`
        @keyframes bounce-custom {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-custom {
          animation: bounce-custom 1s infinite;
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;
