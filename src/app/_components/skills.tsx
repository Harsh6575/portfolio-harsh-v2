import { H2 } from "@/components/heading";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "../constants";

export const Skills = () => {
  return (
    <section className="grid gap-5">
      <H2>Skills</H2>
      {Object.entries(skillGroups).map(([category, items]) => (
        <div key={category}>
          <p className="font-medium text-gray-300 mb-2">{category}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {items.map((name) => (
              <Badge key={name}>{name}</Badge>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};
