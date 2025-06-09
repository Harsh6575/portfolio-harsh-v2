import { H2 } from "@/components/heading";
import Image from "next/image";

type TExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  techStack: string[];
  bulletPoints: string[];
};

const experiences: TExperience[] = [
  {
    company: "AlgoAcharya",
    position: "Software Developer",
    startDate: "Sep 2023",
    endDate: "May 2025",
    imageUrl: "/algoacharya.webp",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "GraphQL", "Django", "PostgreSQL"],
    bulletPoints: [
      "Developed and maintained the company's trading platform with modern frontend technologies.",
      "Integrated GraphQL and REST APIs for real-time trading data and performance.",
      "Improved SEO, accessibility, and frontend performance, reducing load time significantly.",
      "Mentored interns, one of whom became a full-time developer at the company.",
      "Collaborated cross-functionally with product and backend teams in an agile workflow.",
    ],
  },
  {
    company: "Gujarat Informatics Limited (GIL)",
    position: "Dot Net Developer Intern",
    startDate: "Mar 2023",
    endDate: "May 2023",
    imageUrl: "/gil.png",
    techStack: [".NET Core", "SQL Server", "REST API", "C#"],
    bulletPoints: [
      "Contributed to web application development for government services using .NET.",
      "Designed and optimized SQL Server database schemas for internal tools.",
      "Implemented authentication flows and collaborated in agile team settings.",
    ],
  },
];

const ExperienceCard = ({
  company,
  position,
  startDate,
  endDate,
  imageUrl,
  techStack,
  bulletPoints,
}: TExperience) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row w-full items-start">
      <div className="w-14 h-14 relative rounded-md overflow-hidden shadow-sm">
        <Image src={imageUrl} alt={company} fill className="object-contain" />
      </div>
      <div className="flex-1 flex flex-col gap-1.5">
        <div className="flex sm:flex-row flex-col sm:items-center justify-between w-full">
          <p className="font-semibold">{company}</p>
          <p className="text-sm text-gray-400">
            {startDate} – {endDate}
          </p>
        </div>
        <p className="text-sm text-gray-300">{position}</p>
        <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
          {bulletPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <p className="text-xs text-gray-400 italic mt-2">
          Tech: {techStack.join(", ")}
        </p>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section className="grid gap-6">
      <H2>Work Experience</H2>
      <div className="grid gap-8">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.company} {...exp} />
        ))}
      </div>
    </section>
  );
};
