"use client";

import { socialLinks } from "@/utils/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="w-11/12 m-auto py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Sachin Gyandor. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-2 md:mt-0">
            {socialLinks.map((link) => (
              <a
                key={link.id}
                href={link.link}
                title={link.title}
                target="_blank"
              >
                <link.icon className="w-6 h-6 hover:text-cyan-500 transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
