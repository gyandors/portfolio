"use client";

import { motion } from "framer-motion";

import { socialLinks } from "@/utils/constants";

export default function SocialLinks() {
  return (
    <div className="mt-4 flex items-center gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.link}
          title={link.title}
          target="_blank"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 * (index + 3) }}
        >
          <link.icon className="w-6 h-6 text-gray-300 hover:text-cyan-500 hover:scale-110 transition-all" />
        </motion.a>
      ))}
    </div>
  );
}
