"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "motion/react";

import Label from "@/components/common/Label";
import Loader from "../common/Loader";

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await fetch("/api/auth", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.message);

      // Set cookie with expiration (7 days from now)
      const expiryDate = new Date();
      expiryDate.setDate(expiryDate.getDate() + 7);
      document.cookie = `token=${result.data}; expires=${expiryDate.toUTCString()}; path=/`;

      router.refresh();
    } catch (error: any) {
      console.error(error);
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <section className="min-h-[100dvh] flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit} className="space-y-4 p-4 w-full max-w-md">
        <div className="text-white mb-8 text-center">
          <h1 className="text-xl mb-1">Admin Login</h1>
          <p className="text-xs">Enter Email and Password to continue</p>
        </div>
        <div>
          <Label htmlFor="email" label="Email" />
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              setError(undefined);
            }}
            className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
          />
        </div>
        <div>
          <Label htmlFor="password" label="Password" />
          <input
            type="password"
            id="password"
            value={formData.password}
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
              setError(undefined);
            }}
            className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
        <button
          type="submit"
          className="bg-cyan-500 text-white p-2 rounded-md hover:bg-cyan-600 transition-all duration-300"
        >
          Login
        </button>
      </form>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
    </section>
  );
}
