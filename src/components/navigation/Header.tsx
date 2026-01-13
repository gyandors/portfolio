"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { navLinks } from "@/utils/constants";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.querySelector(`#${link.title.toLowerCase()}`)
      );
      const currentSection = sections.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection !== -1) {
        setActiveSection(navLinks[currentSection].title.toLowerCase());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="w-11/12 px-5 md:px-8 fixed z-50 top-6 left-0 right-0 m-auto border rounded-full border-gray-400/40 backdrop-blur-md bg-black/50"
    >
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, scale: 8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="h-8 w-8"
        >
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={200}
              height={200}
            />
          </Link>
        </motion.div>
        <nav>
          <ul className="flex justify-between items-center sm:gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.title.toLowerCase();
              return (
                <li key={link.title}>
                  <Link
                    href={`#${link.title.toLowerCase()}`}
                    className="font-medium text-white"
                  >
                    <div
                      className={`py-4 px-2 border-b-2 hover:text-cyan-500 transition-colors duration-300 ${
                        isActive
                          ? "text-cyan-500 border-cyan-500"
                          : "border-transparent"
                      }`}
                    >
                      <span className="hidden md:block">{link.title}</span>
                      <link.icon className="md:hidden size-6" />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
