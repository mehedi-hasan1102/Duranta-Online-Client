'use client';
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

const socialLinks = [
  { href: "#", icon: <FaFacebookF size={16} /> },
  { href: "#", icon: <FaXTwitter size={16} /> },
  { href: "#", icon: <FaInstagram size={16} /> },
  { href: "#", icon: <FaYoutube size={16} /> },
];

const quickLinks = ["About Us", "Packages", "Services", "Team", "Contact"];
const usefulLinks = ["Privacy Policy", "Terms and Conditions", "Disclaimer", "Support", "FAQ"];

const Footer: React.FC = () => {
  return (
    <footer
      className="bg-cover bg-center bg-black/90 text-white py-16 px-6 md:px-16"
      style={{ backgroundImage: "url('/footer-bg.jpg')" }} // replace with your image
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo and Social Icons */}
        <div className="flex flex-col items-start">
          <Image
            src="/logo.png"
            alt="Duranta Online Logo"
            width={200}
            height={60}
            className="object-contain"
          />
          <div className="flex items-center gap-4 mt-8 flex-wrap">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-white transition">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-gray-300">
            {usefulLinks.map((link, index) => (
              <li key={index}>
                <Link href="#" className="hover:text-white transition">
                  {link}
                </Link>
              </li>
            ))}
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

      {/* Footer Bottom */}
      <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Duranta. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
