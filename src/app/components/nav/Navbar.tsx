"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useAuth } from "@/src/context/AuthProvider";

const Navbar: React.FC = () => {
  const [email, setEmail] = useState<string | null>(null);
  const [showLogout, setShowLogout] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const pathname = usePathname();

  const { user, loading, signOutUser } = useAuth();
  console.log("user", user);

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    setEmail(userEmail);
  }, []);

  const handleLogout = async () => {
    signOutUser();
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

          {email ? (
            <>
              <li>
                <Link href="/dashboard" className={linkClass("/dashboard")}>
                  DASHBOARD
                </Link>
              </li>

              <li className="relative text-cyan-400 font-medium cursor-pointer">
                <span onClick={() => setShowLogout(!showLogout)}>{email}</span>
                {showLogout && (
                  <div className="absolute top-full left-0 mt-1 bg-[#1f2937] text-white text-xs px-3 py-2 rounded shadow-md w-max">
                    <button
                      onClick={handleLogout}
                      className="hover:bg-red-600 bg-red-500 px-3 py-1 rounded transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </li>
            </>
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

          {email ? (
            <>
              <Link
                href="/dashboard"
                className="block hover:text-white transition"
                onClick={() => setMobileMenu(false)}
              >
                DASHBOARD
              </Link>

              <div className="block">
                <span
                  onClick={() => setShowLogout(!showLogout)}
                  className="cursor-pointer text-cyan-400"
                >
                  {email}
                </span>
                {showLogout && (
                  <div className="mt-2 bg-[#1f2937] text-white text-xs px-3 py-2 rounded shadow-md w-max">
                    <button
                      onClick={handleLogout}
                      className="hover:bg-red-600 bg-red-500 px-3 py-1 rounded transition"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
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
