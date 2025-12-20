
"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Swal from "sweetalert2";

import {
  FiUsers,
  FiCheckCircle,
  FiXCircle,
  FiHelpCircle,
} from "react-icons/fi";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
  Legend,
  LineChart,
  Line,
} from "recharts";

/* ================= TYPES ================= */
interface Ticket {
  _id: string;
  name: string;
  email: string;
  message: string;
  status: "Open" | "Resolved" | "Closed";
}

/* ================= COMPONENT ================= */
const AdminDashboard = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [activeView, setActiveView] = useState<"stats" | "tickets">("stats");
  const [openActionId, setOpenActionId] = useState<string | null>(null);

  /* ===== Fetch Tickets ===== */
  useEffect(() => {
    axios
      .get("https://duranta-online-server.vercel.app/supporttickets")
      .then((res) => setTickets(res.data))
      .catch(() =>
        Swal.fire({
          icon: "error",
          title: "Failed to load tickets",
          timer: 1500,
          showConfirmButton: false,
        })
      );
  }, []);

  /* ===== Update Ticket Status ===== */
  const handleStatusChange = async (
    ticket: Ticket,
    newStatus: "Open" | "Resolved" | "Closed"
  ) => {
    try {
      await axios.put(
        `https://duranta-online-server.vercel.app/supporttickets/${ticket._id}`,
        { status: newStatus }
      );

      setTickets((prev) =>
        prev.map((t) =>
          t._id === ticket._id ? { ...t, status: newStatus } : t
        )
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

  /* ===== STATS ===== */
  const stats = {
    total: tickets.length,
    open: tickets.filter((t) => t.status === "Open").length,
    resolved: tickets.filter((t) => t.status === "Resolved").length,
    closed: tickets.filter((t) => t.status === "Closed").length,
  };

  /* ===== CHART DATA ===== */
  const barData = [
    { name: "Open", value: stats.open },
    { name: "Resolved", value: stats.resolved },
    { name: "Closed", value: stats.closed },
  ];

  const pieData = barData;
  const COLORS = ["#22d3ee", "#4ade80", "#f87171"];

  // Mock weekly trend (replace with real API later)
  const trendData = [
    { day: "Mon", tickets: 3 },
    { day: "Tue", tickets: 6 },
    { day: "Wed", tickets: 4 },
    { day: "Thu", tickets: 9 },
    { day: "Fri", tickets: 5 },
  ];

  return (
    <div className="flex min-h-screen text-white">
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-black/30 backdrop-blur-md p-6">
        <h2 className="text-2xl font-bold mb-10 text-cyan-400">
          Admin Dashboard
        </h2>

        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setActiveView("stats")}
            className={`p-2 rounded-lg text-left transition ${
              activeView === "stats"
                ? "text-cyan-400 bg-cyan-400/10"
                : "hover:bg-cyan-400 hover:text-black"
            }`}
          >
            Dashboard
          </button>

          <button
            onClick={() => setActiveView("tickets")}
            className={`p-2 rounded-lg text-left transition ${
              activeView === "tickets"
                ? "text-cyan-400 bg-cyan-400/10"
                : "hover:bg-cyan-400 hover:text-black"
            }`}
          >
            Support Tickets
          </button>

          <Link
            href="/"
            className="p-2 rounded-lg hover:bg-cyan-400 hover:text-black transition"
          >
            Back to Home
          </Link>
        </nav>
      </aside>

      {/* ================= MAIN ================= */}
      <main className="flex-1 p-8">
        {/* ================= DASHBOARD ================= */}
        {activeView === "stats" && (
          <>
            <h1 className="text-2xl font-semibold mb-8">
              Welcome to Admin Dashboard
            </h1>

            {/* ===== KPI CARDS ===== */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
              <StatCard title="Total Tickets" value={stats.total} icon={<FiUsers />} />
              <StatCard title="Open" value={stats.open} icon={<FiHelpCircle />} />
              <StatCard title="Resolved" value={stats.resolved} icon={<FiCheckCircle />} />
              <StatCard title="Closed" value={stats.closed} icon={<FiXCircle />} />
            </div>

            {/* ===== CHART GRID ===== */}
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              {/* Bar Chart */}
              <ChartBox title="Ticket Status (Bar)">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Bar dataKey="value" fill="#22d3ee" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ChartBox>

              {/* Pie Chart */}
              <ChartBox title="Ticket Distribution">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                  >
                    {pieData.map((_, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ChartBox>

              {/* Line Chart */}
              <ChartBox title="Weekly Ticket Trend" full>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="day" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="tickets"
                    stroke="#22d3ee"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ChartBox>
            </div>
          </>
        )}

        {/* ================= TICKETS ================= */}
        {activeView === "tickets" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tickets.map((ticket) => (
              <div
                key={ticket._id}
                className="bg-black/20 p-6 rounded-2xl border border-white/20"
              >
                <div className="flex justify-between mb-2">
                  <h3 className="font-bold">{ticket.name}</h3>

                  <button
                    onClick={() =>
                      setOpenActionId(
                        openActionId === ticket._id ? null : ticket._id
                      )
                    }
                    className="text-xs px-3 py-1 bg-white/10 rounded"
                  >
                    Action
                  </button>
                </div>

                {openActionId === ticket._id && (
                  <div className="mb-3 space-y-1">
                    {["Open", "Resolved", "Closed"].map((s) => (
                      <button
                        key={s}
                        onClick={() =>
                          handleStatusChange(ticket, s as any)
                        }
                        className="block w-full text-left px-3 py-1 hover:bg-white/10 rounded"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                )}

                <p className="text-sm text-gray-300">{ticket.email}</p>
                <p className="mt-3 text-gray-300">{ticket.message}</p>

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

/* ================= REUSABLE UI ================= */
const StatCard = ({
  title,
  value,
  icon,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
}) => (
  <div className="bg-black/30 p-6 rounded-xl border border-cyan-400 flex justify-between items-center">
    <div>
      <p className="text-sm text-gray-300">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    <div className="text-cyan-400 text-2xl">{icon}</div>
  </div>
);

const ChartBox = ({
  title,
  children,
  full,
}: {
  title: string;
  children: React.ReactNode;
  full?: boolean;
}) => (
  <div
    className={`bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10 ${
      full ? "xl:col-span-2" : ""
    }`}
  >
    <h2 className="text-lg font-medium mb-4">{title}</h2>
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        {children as any}
      </ResponsiveContainer>
    </div>
  </div>
);

export default AdminDashboard;
