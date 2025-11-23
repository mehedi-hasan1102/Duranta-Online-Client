  "use client";
import Sidebar from "./components/sidebar";
// import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";

export default function DashboardLayout({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch logged-in user
    fetch("http://localhost:8000/api/me", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => setUser(data.email || null))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <p className="text-center mt-20 text-white">Loading...</p>;

  return (
    <div className="flex min-h-screen  text-white">
      <Sidebar user={user} />
      <div className="flex-1 flex flex-col">
        {/* <Navbar user={user} /> */}
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
