import { projects } from "../../constants";
import Title from "../Title";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="pb-10" id="projects">
      <Title
        text="Проекты ⚒️"
        className="flex flex-col items-center  mb-8 pt-8"
      />
      <div className="mt-20 grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-2 min-[1100px]:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
