"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { id: "1", title: "Home" },
    { id: "2", title: "Skills" },
    { id: "3", title: "Projects" },
    { id: "4", title: "Notes" },
    { id: "6", title: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((link) =>
        document.querySelector(`#${link.title.toLowerCase()}`)
      );
      const currentSection = sections.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection !== -1) {
        setActiveSection(links[currentSection].title.toLowerCase());
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-11/12 py-3 px-5 md:px-8 fixed z-50 top-6 left-0 right-0 m-auto border rounded-full border-gray-400/40 backdrop-blur-md bg-black/50"
    >
      <div className="flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, scale: 8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="h-8 w-8"
        >
          <Link href="/">
            <Image
              src="/images/logo-white.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </Link>
        </motion.div>
        <nav className="hidden md:block">
          <ul className="flex justify-between items-center gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.title.toLowerCase();
              return (
                <li key={link.id}>
                  <Link
                    href={`#${link.title.toLowerCase()}`}
                    className={`relative font-medium px-2 py-[16px] transition-colors duration-300 ${
                      isActive
                        ? "text-cyan-500 border-b-2 border-cyan-500"
                        : "hover:text-cyan-500 text-white"
                    }`}
                  >
                    {link.title}
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
