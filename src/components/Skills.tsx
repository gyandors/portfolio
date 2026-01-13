import Image from "next/image";

import { skills } from "@/utils/constants";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-gradient-to-b from-sky-950 via-gray-950 to-black"
    >
      <div className="min-h-screen w-11/12 m-auto py-8 flex flex-col justify-center items-center">
        <SectionHeading heading="Skills" />

        <ul className="flex items-center gap-10 flex-wrap">
          {skills.map((skill) => {
            return (
              <li
                key={skill.id}
                className="grow border border-gray-500 rounded-md hover:-translate-y-1 hover:scale-105 hover:shadow-md hover:shadow-cyan-500 transition-all duration-300"
              >
                <a
                  className="h-full p-4 w-full block"
                  href={skill.link}
                  target="_blank"
                >
                  <div className="h-full w-full flex flex-col justify-evenly items-center">
                    <Image
                      src={skill.icon}
                      alt={`${skill.title} logo`}
                      width={500}
                      height={500}
                      className="size-28"
                    />
                    <h1>{skill.title}</h1>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
