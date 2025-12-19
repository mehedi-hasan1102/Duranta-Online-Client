"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FiUsers,
  FiCheckCircle,
  FiXCircle,
  FiHelpCircle,
} from "react-icons/fi";
import Swal from "sweetalert2";
import Link from "next/link";

interface Ticket {
  id: number;
  _id?: string;
  name: string;
  email: string;
  type: string;
  message: string;
  status: "Open" | "Resolved" | "Closed";
}

const AdminDashboard: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [activeView, setActiveView] = useState<"stats" | "tickets">("stats");
  const [openActionId, setOpenActionId] = useState<number | null>(null);

  console.log("tickets",tickets);

  /* Fetch tickets */
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await axios.get(
          "https://duranta-online-server.vercel.app/supporttickets"
        );
        setTickets(res.data);
      } catch {
        Swal.fire({
          icon: "error",
          title: "Failed to Load Tickets",
          timer: 2000,
          showConfirmButton: false,
        });
      }
    };
    fetchTickets();
  }, []);

  /* Update ticket status */
  const handleStatusChange = async (
    ticket: Ticket,
    newStatus: "Open" | "Resolved" | "Closed"
  ) => {
    try {
     await axios.put(`http://duranta-online-server.vercel.app/supporttickets/${ticket._id}`, {
        status: newStatus,
      });

      

      setTickets((prev) =>
        prev.map((t) => (t.id === ticket.id ? { ...t, status: newStatus } : t))
      );

      Swal.fire({
        icon: "success",
        title: `Marked as ${newStatus}`,
        timer: 1200,
        showConfirmButton: false,
      });
    } catch {
      Swal.fire({
        icon: "error",
        title: "Update failed",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "Open").length,
    resolved: tickets.filter((t) => t.status === "Resolved").length,
    closed: tickets.filter((t) => t.status === "Closed").length,
  };

  return (
    <div className="flex min-h-screen text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-black/30 backdrop-blur-md p-6">
        <h2 className="text-2xl font-bold mb-10 text-cyan-400">
          Admin Dashboard
        </h2>

        <nav className="flex flex-col gap-4">
          <button onClick={() => setActiveView("stats")}>Dashboard</button>
          <button onClick={() => setActiveView("tickets")}>
            Support Tickets
          </button>
          <Link href="/">Back to Home</Link>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-8">
        {/* STATS VIEW */}
        {activeView === "stats" && (
          <>
            <h1 className="text-2xl mb-6">Welcome to Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <StatCard
                title="Total Tickets"
                value={stats.total}
                icon={<FiUsers />}
              />
              <StatCard
                title="Open"
                value={stats.open}
                icon={<FiHelpCircle />}
              />
              <StatCard
                title="Resolved"
                value={stats.resolved}
                icon={<FiCheckCircle />}
              />
              <StatCard
                title="Closed"
                value={stats.closed}
                icon={<FiXCircle />}
              />
            </div>
          </>
        )}

        {/* TICKETS VIEW */}
        {activeView === "tickets" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/20"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-2 relative">
                  <h3 className="font-bold text-lg">
                    {ticket.name.toUpperCase()}
                  </h3>

                  <div className="relative">
                    <button
                      onClick={() =>
                        setOpenActionId(
                          openActionId === ticket.id ? null : ticket.id
                        )
                      }
                      className="text-xs px-3 py-1 rounded bg-white/10"
                    >
                      Action
                    </button>

                    {openActionId === ticket.id && (
                      <div className="absolute right-0 mt-2 w-32 bg-black/90 border border-white/20 rounded-xl z-10">
                        {["Open", "Resolved", "Closed"].map((status) => (
                          <button
                            key={status}
                            onClick={() => {
                              handleStatusChange(ticket, status as any);
                              setOpenActionId(null);
                            }}
                            className="block w-full px-4 py-2 text-left hover:bg-white/10"
                          >
                            {status}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <p className="text-sm text-gray-300 break-words">
                  {ticket.email}
                </p>
                <p className="text-gray-300 mt-3 break-words">
                  {ticket.message}
                </p>

                <span className="inline-block mt-3 text-xs px-3 py-1 bg-white/10 rounded">
                  {ticket.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

/* Reusable Stat Card */
const StatCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) => (
  <div className="bg-black/30 p-6 rounded-xl flex justify-between items-center border border-cyan-400">
    <div>
      <p className="text-sm text-gray-200">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    {icon}
  </div>
);

export default AdminDashboard;
