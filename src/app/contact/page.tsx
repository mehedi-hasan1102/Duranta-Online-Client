"use client"; // <- ADD THIS AT THE VERY TOP

import React, { FormEvent } from "react";
import Image from "next/image";
import contactImg from "../../assets/contact.jpg";
import axios from "axios";
import Swal from "sweetalert2";

const ContactUs: React.FC = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      messages: (form.elements.namedItem("messages") as HTMLTextAreaElement)
        .value,
    };

    try {
      const result = await axios.post(
        "https://duranta-online-server.vercel.app/contactus",
        formData
      );
      if (result?.data?.success === true) {
        Swal.fire({
          icon: "success",
          title: "Message Received",
          text: "We’ll contact you as soon as possible.",
          showConfirmButton: false,
          timer: 2500,
        });
        form.reset();
      } else {
        Swal.fire({
          icon: "error",
          title: "Message Not Sent",
          text: "Sorry! We couldn’t send your message. Please try again.",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Something went wrong. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section className="mx-auto px-4 py-16">
      <div className="flex flex-col md:flex-row items-stretch gap-8 max-w-7xl mx-auto md:px-9">
        {/* Left Side Image */}
        <div className="md:w-1/2 w-full rounded-lg overflow-hidden shadow-lg">
          <div className="relative w-full h-full min-h-[400px] md:min-h-[500px]">
            <Image
              src={contactImg}
              alt="Contact Us"
              className="object-cover w-full h-full"
              fill
            />
          </div>
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 w-full bg-gradient-to-br from-blue-900/70 via-slate-800/60 to-blue-950/70 backdrop-blur-md border border-blue-400/20 p-4 sm:p-5 rounded-lg shadow-md flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 text-white">
            Contact Us
          </h2>

          <form
            className="flex flex-col gap-3 sm:gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Name"
              className="bg-transparent border border-blue-400/40 text-white placeholder-gray-300 rounded-md px-3 py-2 sm:py-2.5 focus:ring-2 focus:ring-cyan-400 outline-none transition text-sm"
            />
            <input
              type="text"
              name="address"
              required
              placeholder="Address"
              className="bg-transparent border border-blue-400/40 text-white placeholder-gray-300 rounded-md px-3 py-2 sm:py-2.5 focus:ring-2 focus:ring-cyan-400 outline-none transition text-sm"
            />
            <input
              type="tel"
              name="phone"
              required
              placeholder="Phone"
              className="bg-transparent border border-blue-400/40 text-white placeholder-gray-300 rounded-md px-3 py-2 sm:py-2.5 focus:ring-2 focus:ring-cyan-400 outline-none transition text-sm"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="bg-transparent border border-blue-400/40 text-white placeholder-gray-300 rounded-md px-3 py-2 sm:py-2.5 focus:ring-2 focus:ring-cyan-400 outline-none transition text-sm"
            />
            <textarea
              placeholder="Tell Us"
              name="messages"
              required
              rows={4}
              className="bg-transparent border border-blue-400/40 text-white placeholder-gray-300 rounded-md px-3 py-2 sm:py-2.5 focus:ring-2 focus:ring-cyan-400 outline-none transition text-sm resize-none"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-semibold py-2.5 sm:py-3 rounded-md transition shadow-md shadow-blue-900/40 text-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
