// "use client";
// import { useState } from "react";

// export default function LoginPage() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [msg, setMsg] = useState("");

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch("http://localhost:8000/api/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       credentials: "include", // important for cookies
//       body: JSON.stringify(form),
//     });
//     const data = await res.json();
//     setMsg(data.message);
//     if (res.ok) {
//   localStorage.setItem("userEmail", data.email);
//   window.dispatchEvent(new Event("userLogin")); 
// }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-20 text-white bg-gray-600 p-6 rounded-lg my-28">
//       <h1 className="text-xl font-bold mb-4">Login</h1>
//       <form onSubmit={handleSubmit} className="flex flex-col gap-3">
//         <input name="email" placeholder="Email" onChange={handleChange} className="p-2 text-black" />
//         <input name="password" type="password" placeholder="Password" onChange={handleChange} className="p-2 text-black" />
//         <button className="bg-cyan-500 text-white p-2 rounded">Login</button>
//       </form>
//       {msg && <p className="mt-3">{msg}</p>}
//     </div>
//   );
// }
"use client";
import { useState } from "react";

export default function LoginPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [msg, setMsg] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include", // for cookies
      body: JSON.stringify(form),
    });
    const data = await res.json();
    setMsg(data.message);
    if (res.ok) {
      localStorage.setItem("userEmail", data.email);
      window.dispatchEvent(new Event("userLogin"));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Welcome Back
        </h1>
        <p className="text-gray-300 text-center mb-6">
          Login to access your dashboard
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />
          <button className="bg-cyan-500 hover:bg-cyan-400 transition text-white font-semibold py-3 rounded-lg shadow-md">
            Login
          </button>
        </form>

        {msg && (
          <p
            className={`mt-4 text-center ${
              msg.toLowerCase().includes("success")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {msg}
          </p>
        )}

        <p className="text-gray-400 text-sm mt-6 text-center">
          Don't have an account?{" "}
          <a href="/register" className="text-cyan-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
