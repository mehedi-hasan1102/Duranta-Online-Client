"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useAuth } from "@/src/context/AuthProvider";

const Navbar: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showMobileProfile, setShowMobileProfile] = useState(false);
  const pathname = usePathname();

  const { user, loading, signOutUser } = useAuth();
console.log(user)
  const handleLogout = async () => {
    signOutUser();
    setShowMobileProfile(false);
    setMobileMenu(false);
  };

  const linkClass = (path: string) =>
    pathname === path
      ? "text-cyan-400"
      : "text-gray-300 hover:text-white transition";

  const links = [
    { href: "/", label: "HOME" },
    { href: "/about", label: "ABOUT US" },
    { href: "/support", label: "SUPPORT" },
    { href: "/packages", label: "PACKAGES" },
    { href: "/contact", label: "CONTACTS" },
  ];

  if (loading) return <span>Please wait...</span>;

  return (
    <nav className="bg-[#101828]/90 shadow-md py-3 fixed z-50 w-full">
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
            // Desktop hover dropdown
            <li className="relative cursor-pointer group">
              <Image
                src="/profile.png"
                alt="Profile"
                width={36}
                height={36}
                className="rounded-full border-2 border-cyan-400"
              />
              <div className="absolute right-0 mt-3 w-48 bg-[#1f2937] border border-gray-700 rounded-lg shadow-lg text-white text-sm overflow-hidden opacity-0 invisible group-hover:visible group-hover:opacity-100 transition-all duration-200 ease-out z-50">
                <div className="px-4 py-3 border-b border-gray-600">
                  <p className="font-medium truncate">
                    {user.name || user.email || "User"}
                  </p>
                </div>

                <div className="px-4 py-3 border-b border-gray-600">
                  <Link href="/dashboard" className="font-medium truncate">
                    Dashboard
                  </Link>
                </div>

                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 hover:bg-red-600 bg-red-500 transition-colors duration-200"
                >
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
            <div className="block">
              {/* Mobile click dropdown */}
              <div
                className="flex items-center gap-2 cursor-pointer select-none max-w-2xs"
                onClick={() => setShowMobileProfile(!showMobileProfile)}
              >
                <Image
                  src="/profile.png"
                  alt="Profile"
                  width={36}
                  height={36}
                  className="rounded-full border-2 border-cyan-400"
                />
                <span className="text-cyan-400 font-semibold">Profile</span>
              </div>

              {showMobileProfile && (
                <div className="mt-2 bg-[#1f2937] text-white text-sm px-3 py-2 rounded shadow-md w-full transition-all duration-200">
                  <p className="mb-2 font-medium truncate">
                    {user.name || user.email || "User"}
                  </p>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-red-600 bg-red-500 rounded transition-colors duration-200"
                  >
                    Logout
                  </button>
                </div>
              )}
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
