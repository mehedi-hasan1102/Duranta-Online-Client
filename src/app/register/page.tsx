"use client";
import { registerUser } from "@/src/services/authService";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface RegisterForm {
  name: string;
  email: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMsg("");

    try {
      const res = await registerUser(form);
      setMsg(res.data.message);
    } catch (err: any) {
      setMsg(err.response?.data?.message || "Register failed ❌");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* <div className="w-full max-w-md bg-gray-800/90 backdrop-blur-md rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-white text-center mb-6">Create Account</h1>
        <p className="text-gray-300 text-center mb-6">
          Register to get access to your dashboard
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />

          <button className="bg-cyan-500 hover:bg-cyan-400 transition text-white font-semibold py-3 rounded-lg shadow-md">
            Register
          </button>
        </form>

        {msg && (
          <p
            className={`mt-4 text-center ${
              msg.toLowerCase().includes("successful") ? "text-green-400" : "text-red-400"
            }`}
          >
            {msg}
          </p>
        )}

        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Login
          </a>
        </p>
      </div> */}
      <div
        className="w-full max-w-md
  bg-gradient-to-br from-blue-900/70 via-slate-800/60 to-blue-950/70
  backdrop-blur-xl rounded-2xl shadow-2xl p-8
  border border-blue-400/20"
      >
        <h1 className="text-3xl font-bold text-cyan-300 text-center mb-6">
          Create Account
        </h1>

        <p className="text-gray-300 text-center mb-6">
          Register to get access to your dashboard
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-transparent border border-blue-400/40
        text-white placeholder-gray-300
        focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-transparent border border-blue-400/40
        text-white placeholder-gray-300
        focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-3 rounded-lg bg-transparent border border-blue-400/40
        text-white placeholder-gray-300
        focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
            required
          />

          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600
        hover:opacity-90 transition
        text-white font-semibold py-3 rounded-lg shadow-lg"
          >
            Register
          </button>
        </form>

        {msg && (
          <p
            className={`mt-4 text-center ${
              msg.toLowerCase().includes("successful")
                ? "text-green-400"
                : "text-red-400"
            }`}
          >
            {msg}
          </p>
        )}

        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-cyan-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
