import { H2 } from "@/components/heading";
import { Badge } from "@/components/ui/badge";

export const skills: { name: string }[] = [
  { name: "TypeScript" },
  { name: "React.js" },
  { name: "Next.js" },
  { name: "Tailwind CSS" },
  { name: "Express.js" },
  { name: "Node.js" },
  { name: "Python" },
  { name: "Django" },
  { name: "Java" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "GraphQL" },
  { name: "RESTApi" },
  { name: "Prisma ORM" },
  { name: "Jupyter Notebooks" },
  { name: "pandas" },
  { name: "NumPy" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "Bitbucket" },
  { name: "Docker" },
];

export const Skills = () => {
  return (
    <section className="grid gap-5">
      <H2>Skills</H2>
      <div className="flex flex-wrap gap-3 items-center">
        {skills.map((skill) => (
          <Badge key={skill.name}>{skill.name}</Badge>
        ))}
      </div>
    </section>
  );
};
