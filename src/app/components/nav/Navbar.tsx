"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useAuth } from "@/src/context/AuthProvider";
import Spinner from "../spinner/page";

const Navbar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMobileProfile, setShowMobileProfile] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const { user, loading, signOutUser } = useAuth();
  console.log(user);
  const handleLogout = async () => {
    signOutUser();
    router.push("/login");
    setShowMobileProfile(false);
    setMobileMenu(false);
  };

  const linkClass = (path: string) =>
    pathname === path
      ? "text-cyan-400 font-semibold"
      : "text-gray-300 hover:text-white transition-colors";

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/support", label: "SUPPORT" },
    { href: "/packages", label: "PACKAGES" },
    { href: "/contact", label: "CONTACTS" },
  ];


  
  if (loading)
  return (
  <div className="fixed inset-0 flex justify-center items-center bg-black/50 backdrop-blur-md z-50">
  <Spinner size={60} />
</div>
  );


  return (
    <nav className="bg-[#101828]/90 shadow-md py-3 fixed z-50 w-full backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Duranta Online Logo"
            width={200}
            height={60}
            priority
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-semibold relative">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            </li>
          ))}

          {user ? (
            // Desktop profile dropdown
            <li className="relative cursor-pointer group">
              <div className="flex items-center justify-center">
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={38}
                  height={38}
                  className="rounded-full border-2 border-cyan-400 hover:scale-105 transition-transform duration-200"
                />
              </div>

              <div className="absolute right-0 mt-4 w-52 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl text-white text-sm opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                {/* User Info */}
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="font-semibold truncate">{user.name || "User"}</p>
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                </div>

                {user.role === "admin" && (
                  <div className="px-4 py-3 border-b border-gray-600">
                    <Link href="/dashboard" className="font-medium truncate">
                      Dashboard
                    </Link>
                  </div>
                )}

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7"
                    />
                  </svg>
                  Logout
                </button>
              </div>
            </li>
          ) : (
            <li>
              <Link href="/login" className={linkClass("/login")}>
                SELF CARE
              </Link>
            </li>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="text-gray-300 hover:text-white text-2xl"
          >
            {mobileMenu ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#101828]/95 text-gray-300 px-6 py-4 space-y-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block hover:text-white transition"
              onClick={() => setMobileMenu(false)}
            >
              {link.label}
            </Link>
          ))}

          {user ? (
            <div className="block relative">
              {/* Mobile Profile Dropdown */}
              <div
                className="flex items-center gap-2 cursor-pointer select-none max-w-xs p-2 rounded-lg hover:bg-gray-800 transition-colors"
                onClick={() => setShowMobileProfile(!showMobileProfile)}
              >
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-cyan-400 hover:scale-105 transition-transform duration-200"
                />
                <span className="text-cyan-400 font-semibold truncate">Profile</span>
                <svg
                  className={`w-4 h-4 text-cyan-400 transition-transform duration-200 ${
                    showMobileProfile ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>

              <div
                className={`absolute right-0 mt-2 w-52 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl text-white text-sm overflow-hidden transition-all duration-250 ease-out z-50 ${
                  showMobileProfile
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                }`}
              >
                <div className="px-4 py-3 border-b border-gray-700">
                  <p className="font-semibold truncate">{user.name || "User"}</p>
                  <p className="text-xs text-gray-400 truncate">{user.email}</p>
                </div>

                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-cyan-400/10 hover:text-cyan-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-cyan-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"
                    />
                  </svg>
                  Dashboard
                </Link>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-red-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 16l4-4m0 0l-4-4m4 4H7"
                    />
                  </svg>
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <Link
              href="/login"
              className="block hover:text-white transition"
              onClick={() => setMobileMenu(false)}
            >
              SELF CARE
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
