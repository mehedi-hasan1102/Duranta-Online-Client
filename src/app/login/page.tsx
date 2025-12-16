"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [msg, setMsg] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://duranta-online-server.vercel.app/api/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include", // for cookies
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();
      setMsg(data.message);

      if (res.ok) {
        localStorage.setItem("userEmail", data.email);
        window.dispatchEvent(new Event("userLogin"));
      }
    } catch (error) {
      setMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
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
};

export default LoginPage;
