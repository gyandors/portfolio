"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { TypeAnimation } from "react-type-animation";

import SocialLinks from "./SocialLinks";

export default function Hero({ resume }: { resume?: string }) {
  return (
    <section
      id="home"
      className="bg-gradient-to-b from-black via-gray-950 to-sky-950 relative"
    >
      <div className="min-h-screen w-11/12 m-auto pt-24 flex flex-col-reverse gap-10 md:flex-row justify-evenly items-center">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="md:w-1/2"
        >
          <p className="text-xl">Hi there, I&apos;m</p>
          <h1 className="text-4xl md:text-5xl text-nowrap font-semibold text-[#ff266e]">
            Sachin Gyandor
          </h1>
          <div className="text-xl my-1">
            A{" "}
            <TypeAnimation
              className="text-cyan-500"
              sequence={[
                "Web Developer",
                2000,
                "Front-End Developer",
                2000,
                "JavaScript Developer",
                2000,
                "React Developer",
                2000,
              ]}
              repeat={Infinity}
              preRenderFirstString
            />
          </div>
          <p className="mt-5 text-gray-100 tracking-wide">
            I have a hands-on experience in building dynamic, responsive, and
            user-friendly web applications. Eager to leverage skills in React,
            HTML, CSS, and JavaScript to contribute to innovative projects and
            drive digital solutions.
          </p>
          <SocialLinks />
          <div className="mt-8 font-semibold">
            <a
              className="rounded border border-yellow-400 bg-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 text-black p-2 transition-colors duration-300"
              href={resume || "/Sachin_Gyandor_CV.pdf"}
              target="_blank"
            >
              Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:w-1/2 drop-shadow-[0px_0px_8px_rgba(6,181,212,1)]"
        >
          <Image
            src="/images/developer.png"
            alt="Web developer"
            width={1000}
            height={1000}
            priority
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
