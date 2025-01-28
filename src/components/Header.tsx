"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { GrProjects } from "react-icons/gr";
import { FaNoteSticky } from "react-icons/fa6";
import { RiContactsFill } from "react-icons/ri";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");

  const links = [
    { id: "1", title: "Home", icon: <FaHome className="h-6 w-8" /> },
    { id: "2", title: "Skills", icon: <GiSkills className="h-6 w-6" /> },
    { id: "3", title: "Projects", icon: <GrProjects className="h-6 w-5" /> },
    { id: "4", title: "Notes", icon: <FaNoteSticky className="h-6 w-6" /> },
    { id: "6", title: "Contact", icon: <RiContactsFill className="h-6 w-6" /> },
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
              width={100}
              height={100}
            />
          </Link>
        </motion.div>
        <nav>
          <ul className="flex justify-between items-center gap-4 sm:gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.title.toLowerCase();
              return (
                <li key={link.id}>
                  <Link
                    href={`#${link.title.toLowerCase()}`}
                    className="font-medium text-white"
                  >
                    <div
                      className={`py-4 border-b-2 ${
                        isActive
                          ? "text-cyan-500 border-cyan-500"
                          : "border-transparent"
                      }`}
                    >
                      <span className="hidden md:block">{link.title}</span>
                      <span className="md:hidden">{link.icon}</span>
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
