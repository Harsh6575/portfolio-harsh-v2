import { H2 } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "../constants";

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
