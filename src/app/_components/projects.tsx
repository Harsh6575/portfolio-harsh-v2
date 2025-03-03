import { H2 } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Link as LinkIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { TProject } from "../types";
import { projects } from "../constants";

const ProjectCard = ({
  index,
  name,
  description,
  technologies,
  githubUrl,
  url,
}: TProject & {
  index: number;

}) => {
  return (
    <div className="w-full border-none rounded-none shadow-none flex flex-col gap-4">
      <p className="font-semibold">
        {index}. {name}
      </p>
      <div className="flex flex-col gap-4">
        <p className="text-justify text-sm text-gray-400 leading-6">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((technology) => (
            <Badge key={technology} variant={"outline"}>
              {technology}
            </Badge>
          ))}
        </div>
      </div>
      <div className="flex sm:items-center items-start sm:flex-row flex-col gap-4">
        {githubUrl && (
          <a href={githubUrl} target="_blank">
            <Badge variant={"secondary"} className="flex items-center gap-2">
              <FaGithub className="h-4 w-4" />
              GitHub
            </Badge>
          </a>
        )}
        {url && (
          <a href={url} target="_blank">
            <Badge variant={"secondary"} className="flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              Explore the live demo
            </Badge>
          </a>
        )}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section className="grid gap-5">
      <H2>Projects</H2>
      {/* <div>
        <p>
          I&apos;ve worked on a variety of projects, from simple websites to
          complex applications. Here are a few of my favorites.
        </p>
      </div> */}
      <div className="grid gap-8">
        {projects.map((project,index) => (
          <ProjectCard key={project.name} {...project} index={index+1} />
        ))}
      </div>
    </section>
  );
};
