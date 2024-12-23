"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { EllipsisIcon } from "../../public/icons";

interface Note {
  _id: string;
  title: string;
  image: string;
  link: string;
  alt: string;
}

export default function Notes({ notes }: { notes: Note[] }) {
  return (
    <section
      id="notes"
      className="bg-gradient-to-b from-cyan-950 via-gray-950 to-black"
    >
      <div className="min-h-screen w-11/12 m-auto py-8 flex flex-col justify-center items-center">
        <h1 className="w-full text-2xl font-semibold pb-2 mb-12 border-b-2 border-b-gray-500">
          Notes
        </h1>
        <ul className="w-full max-w-2xl text-black">
          {notes.map((note) => {
            return (
              <motion.li
                key={note._id}
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: { duration: 0.5 },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                whileHover={{ scale: 1.03 }}
                className="flex justify-between items-center bg-white my-3 rounded-full"
              >
                <Link
                  className="flex-1 flex gap-8 items-center p-3 px-6"
                  href={note.link}
                  target="_blank"
                >
                  <div className="shrink-0">
                    <Image
                      className="h-9 w-9"
                      src={note.image}
                      alt={note.alt}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h1>{note.title}</h1>
                </Link>
                <button className="mr-6 text-gray-400 hover:text-black transition-all duration-300">
                  <EllipsisIcon className="h-5 w-5" />
                </button>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
