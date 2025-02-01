"use client";

import {
  LinkedInIcon,
  FacebookIcon,
  TwitterIcon,
  GitHubIcon,
} from "../../public/icons";
import { motion } from "framer-motion";

const links = [
  {
    icon: LinkedInIcon,
    href: "https://linkedin.com/in/gyandors",
  },
  {
    icon: FacebookIcon,
    href: "https://facebook.com/gyandors",
  },
  {
    icon: TwitterIcon,
    href: "https://twitter.com/gyandors",
  },
  {
    icon: GitHubIcon,
    href: "https://github.com/gyandors",
  },
];

export default function SocialLinks() {
  return (
    <div className="mt-4 flex items-center gap-4">
      {links.map((link, index) => (
        <motion.a
          key={link.href}
          href={link.href}
          target="_blank"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 * (index + 2) }}
        >
          <link.icon className="w-6 h-6 text-gray-300 hover:text-cyan-500 hover:scale-110 transition-all" />
        </motion.a>
      ))}
    </div>
  );
}
