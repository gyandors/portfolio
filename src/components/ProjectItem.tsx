"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView, motion } from "motion/react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
  github: string;
  images: string[];
}

export default function ProjectItem({ project }: { project: Project }) {
  const projectRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isInView = useInView(projectRef, {
    margin: "-100px",
    once: false,
  });

  // Auto scroll effect
  useEffect(() => {
    if (!isAutoPlaying || !scrollContainerRef.current || !isInView) return;

    const scrollContainer = scrollContainerRef.current;
    const scrollInterval = setInterval(() => {
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        // Reset to start when reaching the end
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += scrollContainer.clientWidth;
      }
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(scrollInterval);
  }, [isAutoPlaying, isInView]);

  // Pause auto-scroll on hover or touch
  const handleInteraction = () => {
    setIsAutoPlaying(false);
  };

  // Resume auto-scroll when leaving
  const handleInteractionEnd = () => {
    setIsAutoPlaying(true);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const scrollContainer = scrollContainerRef.current;
    const scrollLeft = scrollContainer.scrollLeft;
    const imageWidth = scrollContainer.clientWidth;
    const newIndex = Math.round(scrollLeft / imageWidth);
    setCurrentImageIndex(newIndex);
  };

  return (
    <div
      ref={projectRef}
      className="relative flex flex-col md:flex-row justify-center items-start gap-12"
    >
      {/* Left side - Images and Title */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        viewport={{ once: true }}
      >
        <h3 className="text-xl font-semibold text-cyan-500 md:text-right mb-4">
          {project.title}
        </h3>
        <div className="w-full">
          <div
            ref={scrollContainerRef}
            className="w-full rounded-lg flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth mb-4"
            onMouseEnter={handleInteraction}
            onMouseLeave={handleInteractionEnd}
            onTouchStart={handleInteraction}
            onTouchEnd={handleInteractionEnd}
            onScroll={handleScroll}
          >
            {project.images.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`${project.title} screenshot ${index + 1}`}
                width={2784}
                height={1480}
                className="rounded-lg snap-start"
              />
            ))}
          </div>

          {/* Image dots indicator */}
          <div className="flex gap-2 justify-center">
            {project.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentImageIndex ? "bg-cyan-500" : "bg-cyan-500/30"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Timeline dot and line */}
      <div className="hidden md:flex flex-col items-center flex-shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1, transition: { delay: 0.1, duration: 0.3 } }}
          viewport={{ once: true }}
          className="w-4 h-4 bg-cyan-500 rounded-full z-10"
        />
        <motion.div
          initial={{ height: 0 }}
          whileInView={{
            height: "calc(100% + 3rem)",
            transition: { delay: 0.5, duration: 0.5 },
          }}
          viewport={{ once: true }}
          className="absolute w-0.5 bg-gradient-to-b from-cyan-500 to-gray-600"
        />
      </div>

      {/* Right side - Description and Links */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 1 },
        }}
        viewport={{ once: true }}
        className="w-full md:w-1/2"
      >
        <div className="mb-2">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <FiExternalLink className="text-3xl inline" />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            <FiGithub className="text-3xl inline ml-2" />
          </a>
        </div>

        <ul className="md:list-disc space-y-2 text-gray-300">
          {project.description
            .split(".")
            .filter((point) => point.trim())
            .map((point, index) => (
              <li key={index} className="leading-relaxed">
                {point.trim()}
              </li>
            ))}
        </ul>
      </motion.div>
    </div>
  );
}
