
"use client";
import { useState } from "react";
import Link from "next/link";
import {
  FiHome,
  FiUser,
  FiSettings,
  FiChevronLeft,
  FiChevronRight,
  FiMenu,
  FiX,
  FiArrowLeft,
} from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Image from "next/image";

export default function Sidebar({ user }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* 📱 Mobile Menu Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-cyan-500/20 p-2 rounded-lg text-cyan-300 hover:bg-cyan-500/30 transition"
      >
        <FiMenu size={22} />
      </button>

      {/* 🔳 Overlay when sidebar open on mobile */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`${
          collapsed ? "w-20" : "w-64"
        } ${
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } fixed md:static top-0 left-0 h-screen bg-gradient-to-b from-[#0f172a]/95 to-[#1e293b]/95 backdrop-blur-xl text-gray-200 flex flex-col justify-between p-4 transition-all duration-300 rounded-r-3xl shadow-2xl z-50`}
      >
        {/* 🔝 Top Section */}
        <div>
          {/* Logo + Controls */}
          <div className="flex items-center justify-between mb-6">
            {!collapsed && <Image
                        src="/logo.png"
                        alt="Duranta Online Logo"
                        width={200}
                        height={60}
                      />}
            <div className="flex gap-2">
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/60 transition"
              >
                {collapsed ? <FiChevronRight /> : <FiChevronLeft />}
              </button>

              {/* Close button for mobile */}
              <button
                onClick={() => setMobileOpen(false)}
                className="md:hidden p-2 rounded-lg bg-gray-700/30 hover:bg-gray-700/60 transition"
              >
                <FiX />
              </button>
            </div>
          </div>

          {/* 🔙 Back to Home Button (Here!) */}
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3 mb-6 px-3 py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/30 hover:text-white transition group"
          >
            <FiArrowLeft className="text-cyan-400" size={18} />
            {!collapsed && (
              <span className="font-medium text-gray-100 group-hover:text-white">
                Back to Home
              </span>
            )}
            {collapsed && (
              <span className="absolute left-16 bg-gray-800 text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
                Back to Home
              </span>
            )}
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-3">
            <SidebarLink icon={<FiHome size={20} />} label="Dashboard" collapsed={collapsed} />
            <SidebarLink icon={<FiUser size={20} />} label="Profile" collapsed={collapsed} />
            {user === "admin@example.com" && (
              <SidebarLink
                icon={<FiSettings size={20} />}
                label="Admin Panel"
                collapsed={collapsed}
              />
            )}
          </nav>
        </div>

        {/* ⚙️ Bottom Social Icons */}
        <div className="flex flex-col items-center gap-4 mt-8">
          <div className="flex items-center justify-center gap-4">
             <SocialIcon href="https://facebook.com" icon={<FaFacebookF />} color="#1877F2" />
          <SocialIcon href="https://instagram.com" icon={<FaInstagram />} color="#E1306C" />
          <SocialIcon href="https://linkedin.com" icon={<FaLinkedinIn />} color="#0077B5" />
          <SocialIcon href="https://youtube.com" icon={<FaYoutube />} color="#FF0000" />
          </div>






          {!collapsed && (
            <p className="text-xs text-gray-500 mt-4">Collapse Sidebar</p>
          )}
        </div>
      </aside>
    </>
  );
}

/* 📌 Sidebar Link Component */
function SidebarLink({ icon, label, collapsed }) {
  return (
    <Link
      href="#"
      className="relative flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-cyan-500/20 transition group"
    >
      <span className="text-cyan-400">{icon}</span>
      {!collapsed && (
        <span className="font-medium text-gray-100 group-hover:text-white">
          {label}
        </span>
      )}
      {collapsed && (
        <span className="absolute left-16 bg-gray-800 text-sm px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
          {label}
        </span>
      )}
    </Link>
  );
}

/* 📌 Social Icon Component */
function SocialIcon({ icon }) {
  return (
    <button className="bg-gray-700/40 p-3 rounded-full hover:bg-cyan-500/20 transition text-cyan-400">
      {icon}
    </button>
  );
}
