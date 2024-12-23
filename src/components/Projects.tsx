"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { ArrowUpRightIcon, GitHubIcon } from "../../public/icons";

interface Project {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  github: string;
}

export default function Projects({ projects }: { projects: Project[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide effect
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, projects]);

  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black via-gray-950 to-cyan-950"
    >
      <div className="min-h-screen w-11/12 m-auto py-8 flex flex-col justify-center items-center">
        <h1 className="w-full text-2xl font-semibold pb-2 mb-12 border-b-2 border-b-gray-500">
          Projects
        </h1>

        {projects.length > 0 && (
          <div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              {/* Image Section */}
              <div className="w-full md:w-1/2 relative aspect-video">
                <Image
                  key={currentIndex}
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-lg animate-fadeIn"
                />
              </div>

              {/* Content Section */}
              <div
                key={currentIndex}
                className="w-full md:w-1/2 space-y-4 animate-fadeIn"
              >
                <h2 className="text-xl font-bold">
                  {projects[currentIndex].title}
                </h2>
                <p className="text-gray-300">
                  {projects[currentIndex].description}
                </p>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={projects[currentIndex].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors"
                  >
                    <ArrowUpRightIcon className="w-6 h-6" />
                  </a>
                  <a
                    href={projects[currentIndex].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-500 transition-colors"
                  >
                    <GitHubIcon className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Dots Navigation */}
            <div className="flex justify-center gap-2 mt-20">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index
                      ? "bg-cyan-500 w-6"
                      : "bg-cyan-900 hover:bg-cyan-700"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
