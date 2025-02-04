import { H2 } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { Link } from "lucide-react";
import { FaGithub } from "react-icons/fa6";

type TProject = {
  index: number;
  name: string;
  description: React.ReactNode;
  technologies: string[];
  githubUrl?: string;
  url?: string;
};

const projects: TProject[] = [
  {
    index: 1,
    name: "Hotel Reservation Site",
    description:
      "Hotel Reservation Site is a fully functional Next.js application that replicates core Airbnb features. It includes user authentication with NextAuth.js, seamless data handling using Prisma, and an interactive UI with libraries like React-Leaflet, React-Select, and React-Date-Range. Built with TypeScript and Tailwind CSS, the project supports listing exploration, booking functionalities, and image management via Cloudinary. Optimized for performance and maintainability, it employs Next.js scripts, Axios for API communication, and bcrypt for secure authentication.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Axios",
      "bcrypt",
      "NextAuth.js",
      "Prisma",
      "TypeScript",
      "Cloudinary",
      "React-Leaflet",
    ],
    url: "https://hotel-reservation-harsh6575.vercel.app/",
  },
];

const ProjectCard = ({
  index,
  name,
  description,
  technologies,
  githubUrl,
  url,
}: TProject) => {
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
              <Link className="h-4 w-4" />
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
        {projects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>
    </section>
  );
};
