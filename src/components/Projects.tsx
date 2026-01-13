import { projects } from "@/utils/constants";
import ProjectItem from "./ProjectItem";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-black via-gray-950 to-cyan-950"
    >
      <div className="min-h-screen w-11/12 m-auto py-8 flex flex-col justify-center items-center">
        <SectionHeading heading="Projects" />

        <div className="w-full space-y-12">
          {projects.map((project) => (
            <ProjectItem key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
