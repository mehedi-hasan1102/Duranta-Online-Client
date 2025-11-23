// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";

// function Navbar() {
//   const [email, setEmail] = useState("");
//   const [showLogout, setShowLogout] = useState(false);

//   const loadEmail = () => {
//     const userEmail = localStorage.getItem("userEmail");
//     setEmail(userEmail || "");
//   };

//   useEffect(() => {
//     // eslint-disable-next-line react-hooks/set-state-in-effect
//     loadEmail();
//     window.addEventListener("userLogin", loadEmail);
//     window.addEventListener("userLogout", loadEmail);

//     return () => {
//       window.removeEventListener("userLogin", loadEmail);
//       window.removeEventListener("userLogout", loadEmail);
//     };
//   }, []);

//   const handleLogout = async () => {
//     await fetch("http://localhost:8000/api/logout", {
//       method: "POST",
//       credentials: "include",
//     });

//     localStorage.removeItem("userEmail");
//     window.dispatchEvent(new Event("userLogout"));
//     setShowLogout(false);
//   };

//   return (
//     <nav className="bg-[#101828]/90 shadow-md py-3 fixed z-50 w-full">
//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
//         {/* Logo */}
//         <div className="flex items-center ">
//            <Image
//       src="/logo.png"
//       alt="Duranta Online Logo"
//       width={200}
//       height={60}
//     />
//           {/* <span className="text-white font-semibold text-sm tracking-wide">
//             DURANTA ONLINE LTD.
//             <br />
//             <span className="text-[10px] text-cyan-400">The Fastest Network</span>
//           </span> */}
//         </div>

//         {/* Navigation Links */}
//         <ul className="flex items-center space-x-8 text-sm font-semibold relative">
//           <li><Link href="/" className="text-cyan-400 hover:text-white transition">HOME</Link></li>
//           <li><Link href="/about" className="text-gray-300 hover:text-white transition">ABOUT US</Link></li>
//           <li><Link href="/support" className="text-gray-300 hover:text-white transition">SUPPORT</Link></li>
//           <li><Link href="/services" className="text-gray-300 hover:text-white transition">OUR SERVICE</Link></li>
//           <li><Link href="/bill-payment" className="text-gray-300 hover:text-white transition">BILL PAYMENT</Link></li>
//           <li><Link href="/packages" className="text-gray-300 hover:text-white transition">PACKAGES</Link></li>
//           <li><Link href="/contact" className="text-gray-300 hover:text-white transition">CONTACTS</Link></li>

//           {/* User Email + Click Logout */}
//           {email ? (
//             <li className="text-cyan-400 font-medium relative cursor-pointer">
//               <span onClick={() => setShowLogout(!showLogout)}>
//                 {email}
//               </span>
//               {showLogout && (
//                 <button
//                   onClick={handleLogout}
//                   className="absolute top-full left-0 mt-1 bg-red-500 text-white text-xs px-2 py-1 rounded shadow-md hover:bg-red-600 transition"
//                 >
//                   Logout
//                 </button>
//               )}
//             </li>
//           ) : (
//             <>
//               <li><Link href="/login" className="text-gray-300 hover:text-white transition">LOGIN</Link></li>
//               <li><Link href="/register" className="text-gray-300 hover:text-white transition">REGISTER</Link></li>
//             </>
//           )}
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

function Navbar() {
  const [email, setEmail] = useState("");
  const [showLogout, setShowLogout] = useState(false);

  const loadEmail = () => {
    const userEmail = localStorage.getItem("userEmail");
    setEmail(userEmail || "");
  };

  useEffect(() => {
    loadEmail();
    window.addEventListener("userLogin", loadEmail);
    window.addEventListener("userLogout", loadEmail);

    return () => {
      window.removeEventListener("userLogin", loadEmail);
      window.removeEventListener("userLogout", loadEmail);
    };
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost:8000/api/logout", {
      method: "POST",
      credentials: "include",
    });

    localStorage.removeItem("userEmail");
    window.dispatchEvent(new Event("userLogout"));
    setShowLogout(false);
  };

  return (
    <nav className="bg-[#101828]/90 shadow-md py-3 fixed z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Duranta Online Logo"
            width={200}
            height={60}
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-8 text-sm font-semibold relative">
          <li>
            <Link href="/" className="text-cyan-400 hover:text-white transition">
              HOME
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link href="/support" className="text-gray-300 hover:text-white transition">
              SUPPORT
            </Link>
          </li>
          {/* <li>
            <Link href="/services" className="text-gray-300 hover:text-white transition">
              OUR SERVICE
            </Link>
          </li> */}
          {/* <li>
            <Link href="/bill-payment" className="text-gray-300 hover:text-white transition">
              BILL PAYMENT
            </Link>
          </li> */}
          <li>
            <Link href="/packages" className="text-gray-300 hover:text-white transition">
              PACKAGES
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              CONTACTS
            </Link>
          </li>

          {/* User Section */}
          {email ? (
            <>
              <li>
                <Link
                  href="/dashboard"
                  className="text-cyan-400 hover:text-white transition"
                >
                  DASHBOARD
                </Link>
              </li>
              <li className="relative text-cyan-400 font-medium cursor-pointer">
                <span onClick={() => setShowLogout(!showLogout)}>
                  {email}
                </span>
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
            <>
              <li>
                <Link href="/login" className="text-gray-300 hover:text-white transition">
                  LOGIN
                </Link>
              </li>
              <li>
                <Link href="/register" className="text-gray-300 hover:text-white transition">
                  REGISTER
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
