"use client";

import { useState } from "react";
import Loading from "./Loading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } else {
      setStatus("error");
    }

    setIsLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-gray-950 to-sky-950"
    >
      <div className="min-h-screen w-11/12 m-auto py-8 flex flex-col justify-center items-center">
        <h1 className="w-full text-2xl font-semibold pb-2 mb-12 border-b-2 border-b-gray-500">
          Contact
        </h1>
        <div className="w-full max-w-2xl text-black">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="text-sm font-semibold text-gray-300 mb-2 block"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-300 mb-2 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="text-sm font-semibold text-gray-300 mb-2 block"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Message"
                className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 w-full text-white p-2 rounded-md"
            >
              Send
            </button>
            {status === "success" && (
              <p className="relative text-green-800 font-semibold w-full text-center bg-green-200 p-2 rounded-md">
                <span>Message sent successfully</span>
                <button
                  className="absolute right-4"
                  onClick={() => setStatus("idle")}
                >
                  x
                </button>
              </p>
            )}
            {status === "error" && (
              <p className="relative text-red-800 font-semibold w-full text-center bg-red-200 p-2 rounded-md">
                <span>Error sending message</span>
                <button
                  className="absolute right-4"
                  onClick={() => setStatus("idle")}
                >
                  x
                </button>
              </p>
            )}
          </form>
        </div>
      </div>
      {isLoading && <Loading />}
    </section>
  );
}
