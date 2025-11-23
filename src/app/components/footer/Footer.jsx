"use client";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";


export default function Footer() {
  return (
    <footer
      className="bg-cover bg-center bg-black/90 text-white py-16 px-6 md:px-16"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }} // change this to your actual background image path
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo and Description */}
        <div>
          {/* <h2 className="text-3xl font-bold mb-4 tracking-wide">Duranta Online</h2>
          <p className="text-cyan-400 leading-relaxed">
            The Faster Network.
          </p> */}
           <Image
                src="/logo.png"
                alt="Duranta Online Logo"
                width={200}
                height={60}
              />

          <div className="flex items-center gap-4 mt-8">
            <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
              <FaFacebookF size={16} />
            </Link>
            <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
              <FaXTwitter size={16} />
            </Link>
            <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
              <FaInstagram size={16} />
            </Link>
            <Link href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20">
              <FaYoutube size={16} />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Packages</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Team</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><Link href="#">Privacy Policy</Link></li>
            <li><Link href="#">Terms and Conditions</Link></li>
            <li><Link href="#">Disclaimer</Link></li>
            <li><Link href="#">Support</Link></li>
            <li><Link href="#">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Mon–Sat : 8:00AM–5:00PM</li>
            <li>contact@domain.com</li>
            <li>+62 800–567–8990</li>
            <li>
              268 Sunset Road Street,<br />
              Kuta – Bali, DU 1199
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Duranta. All rights reserved.
      </div>
    </footer>
  );
}
