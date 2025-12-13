'use client';
import React, { useState } from "react";

interface Ticket {
  id: number;
  name: string;
  email: string;
  type: string;
  message: string;
  status: "Open" | "Resolved" | "Closed";
}

const staticTickets: Ticket[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    type: "Technical Issue",
    message: "My internet keeps disconnecting.",
    status: "Open",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    type: "Billing",
    message: "I was charged twice this month.",
    status: "Resolved",
  },
  {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    type: "Feedback",
    message: "Your service is excellent!",
    status: "Closed",
  },
  {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    type: "Technical Issue",
    message: "Internet speed is slow.",
    status: "Open",
  },
];

const SupportPage: React.FC = () => {
  const [tickets] = useState<Ticket[]>(staticTickets);

  return (
    <section className="py-20 min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 relative inline-block">
          Support Center
        </h1>

        {/* Description */}
        <p className="text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          OUR SUPPORT TEAM IS HERE TO HELP YOU WITH TECHNICAL ISSUES, BILLING, OR FEEDBACK. 
          SUBMIT A TICKET AND WE WILL RESPOND PROMPTLY.
        </p>

        {/* Tickets Grid Centered */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-[1400px]">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-gradient-to-b from-[#001B3D]/80 to-[#012E59]/60 p-6 rounded-2xl shadow-lg border border-blue-900 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-bold text-lg sm:text-xl tracking-wide mb-1">
                  {ticket.name.toUpperCase()}
                </h3>
                <p className="text-gray-400 text-sm mb-2 break-words">{ticket.email}</p>
                <p className="bg-cyan-700 inline-block px-3 py-1 text-xs rounded mb-3">
                  {ticket.type}
                </p>
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
      </div>
    </section>
  );
};

export default SupportPage;
