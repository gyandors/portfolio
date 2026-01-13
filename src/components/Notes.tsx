"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import SectionHeading from "./SectionHeading";
import { notes } from "@/utils/constants";

export default function Notes() {
  return (
    <section
      id="notes"
      className="bg-gradient-to-b from-cyan-950 via-gray-950 to-black"
    >
      <div className="min-h-screen w-11/12 m-auto py-8 flex flex-col justify-center items-center">
        <SectionHeading heading="Notes" />

        <ul className="w-full max-w-2xl text-black">
          {notes.map((note) => {
            return (
              <motion.li
                key={note.id}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5, delay: 0.2 },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                className="bg-white my-3 rounded-full"
              >
                <Link
                  className="flex gap-8 items-center p-3 px-6"
                  href={note.link}
                  target="_blank"
                >
                  <div className="shrink-0">
                    <Image
                      className="h-9 w-9"
                      src={note.icon}
                      alt={note.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h1>{note.title}</h1>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
