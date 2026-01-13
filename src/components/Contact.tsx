"use client";

import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdDone, MdError } from "react-icons/md";

import Loader from "./common/Loader";
import SectionHeading from "./SectionHeading";
import Label from "./common/Label";
import { AnimatePresence } from "motion/react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<null | {
    error?: boolean;
    message: string;
  }>();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      if (!formData.name || !formData.email || !formData.message)
        throw new Error("Please enter the required details.");

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) throw new Error("Something went wrong.");

      setStatus({ message: result.message });
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error(error);
      setStatus({ error: true, message: error.message });
    }

    setIsLoading(false);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-black via-gray-950 to-sky-950"
    >
      <div className="min-h-screen w-11/12 m-auto py-8 flex flex-col justify-center items-center">
        <SectionHeading heading="Contact Me" />
        <div className="w-full max-w-2xl text-black">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name" label="Name" />
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="email" label="Email" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <Label htmlFor="message" label="Message" />
              <textarea
                id="message"
                placeholder="Enter your message"
                className="w-full p-2 rounded-md border border-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>
            <button
              type="submit"
              className="bg-cyan-400 hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 w-full text-white p-2 rounded-md"
            >
              Send
            </button>
            {status && (
              <div
                className={`flex items-center font-semibold w-full text-center p-2 rounded-md ${
                  status.error
                    ? "text-red-800 bg-red-100"
                    : "text-green-800 bg-green-100"
                }`}
              >
                {status.error ? (
                  <MdError className="size-8 text-red-500" />
                ) : (
                  <MdDone className="size-8 text-green-600" />
                )}
                <span className="flex-1">{status.message}</span>
                <button
                  className="hover:scale-125 transition-transform"
                  onClick={() => setStatus(null)}
                >
                  <IoClose className="size-5" />
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
      <AnimatePresence>{isLoading && <Loader />}</AnimatePresence>
    </section>
  );
}
