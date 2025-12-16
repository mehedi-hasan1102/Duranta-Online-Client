"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Ticket {
  id: number;
  name: string;
  email: string;
  type: string;
  message: string;
  status: "Open" | "Resolved" | "Closed";
}

const SupportPage: React.FC = () => {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Technical Issue",
    message: "",
  });

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(
          "https://duranta-online-server.vercel.app/supporttickets"
        );
        setTickets(res?.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Failed to Load Tickets",
          text: "Unable to fetch support tickets at this time. Please try again later.",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    };

    fetchTickets();
  }, []);

  console.log("tickets", tickets);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newTicket: Ticket = {
      id: Date.now(),
      name: form.name,
      email: form.email,
      type: form.type,
      message: form.message,
      status: "Open",
    };

    try {
      const response = await axios.post(
        "https://duranta-online-server.vercel.app/supporttickets",
        newTicket
      );

      console.log("response", response);

      if (response?.data?.success === true) {
        Swal.fire({
          icon: "success",
          title: "We Got Your Message",
          text: "Our support team has received your request and will contact you soon.",
          showConfirmButton: false,
          timer: 2500,
        });
      } else {
        Swal.fire({
          icon: "warning",
          title: "Unable to Complete Request",
          text: "We couldn’t process your request. Please try again later.",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Something Went Wrong",
        text: "Oops! Something unexpected happened. Please try again.",
        showConfirmButton: false,
        timer: 2500,
      });
    }

    setTickets([newTicket, ...tickets]);
    setForm({ name: "", email: "", type: "Technical Issue", message: "" });
  };

  return (
    <section className="py-20 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title */}
        <div className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Support Center
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Submit a support request and our team will respond as quickly as
            possible.
          </p>
        </div>

        {/* Support Form */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto mb-20 bg-gradient-to-b from-[#001B3D]/80 to-[#012E59]/60 p-8 rounded-2xl shadow-lg border border-blue-900"
        >
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Create Support Ticket
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="bg-[#0f172a] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
            />

            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="bg-[#0f172a] px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <select
            name="type"
            value={form.type}
            onChange={handleChange}
            className="w-full bg-[#0f172a] px-4 py-3 rounded-lg outline-none mb-6 focus:ring-2 focus:ring-cyan-500"
          >
            <option>Technical Issue</option>
            <option>Billing</option>
            <option>Account</option>
            <option>Feedback</option>
          </select>

          <textarea
            name="message"
            required
            rows={4}
            placeholder="Describe your issue..."
            value={form.message}
            onChange={handleChange}
            className="w-full bg-[#0f172a] px-4 py-3 rounded-lg outline-none mb-6 focus:ring-2 focus:ring-cyan-500"
          />

          <button
            type="submit"
            className="w-full bg-cyan-600 hover:bg-cyan-700 transition py-3 rounded-lg font-semibold"
          >
            Submit Ticket
          </button>
        </form>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="bg-gradient-to-b from-[#001B3D]/80 to-[#012E59]/60 p-6 rounded-2xl shadow-lg border border-blue-900 hover:scale-105 transition-transform"
            >
              <h3 className="font-bold text-lg mb-1">
                {ticket.name.toUpperCase()}
              </h3>
              <p className="text-gray-400 text-sm mb-2 break-words">
                {ticket.email}
              </p>
              <span className="bg-cyan-700 inline-block px-3 py-1 text-xs rounded mb-3">
                {ticket.type}
              </span>
              <p className="text-gray-300 mb-4 break-words">{ticket.message}</p>
              <span
                className={`inline-block px-3 py-1 rounded text-xs font-semibold ${
                  ticket.status === "Open"
                    ? "bg-green-500"
                    : ticket.status === "Resolved"
                    ? "bg-yellow-500"
                    : "bg-gray-500"
                }`}
              >
                {ticket.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportPage;
