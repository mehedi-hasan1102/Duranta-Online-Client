"use client";
import { useAuth } from "@/src/context/AuthProvider";
import { loginUser } from "@/src/services/authService";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent, FormEvent } from "react";

interface LoginForm {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [form, setForm] = useState<LoginForm>({
    email: "",
    password: "",
  });

  const [msg, setMsg] = useState<string>("");
  const [authLoading, setAuthLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMsg("");
    setAuthLoading(true);

    try {
      const res = await loginUser(form);
      console.log("res", res);
      if (res.data.success) {
        setMsg("Login successful");
        if (res?.data?.user?.role === "user") {
          router.push("/");
        } else if (res?.data?.user?.role === "admin") {
          router.push("/dashboard");
        }
      }
    } catch (err: any) {
      setMsg(err?.response?.data?.message || "Login failed");
    } finally {
      setAuthLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div
        className="w-full max-w-md
  bg-gradient-to-br from-blue-900/70 via-slate-800/60 to-blue-950/70
  backdrop-blur-xl rounded-2xl shadow-2xl p-8
  border border-blue-400/20"
      >
        <h1 className="text-3xl font-bold text-cyan-300 text-center mb-6">
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
