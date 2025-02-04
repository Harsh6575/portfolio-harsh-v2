import { H2 } from "@/components/heading";

type TExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  imageUrl: string;
  description: React.ReactNode;
};

const experiences: TExperience[] = [
  {
    company: "AlgoAcharya",
    position: "Software Developer",
    startDate: "September 2023",
    endDate: "Present",
    imageUrl: "/algoacharya.webp",
    description: (
      <>
        At Algoacharya, I contribute as a Frontend Developer to an innovative,
        algorithm-based trading platform tailored for options trading in the
        Indian stock market. My work directly supports the mission of empowering
        traders with accurate, real-time insights and seamless trade execution.
      </>
    ),
  },
  {
    company: "Gujarat Informatics Limited",
    position: "Internship (Dot Net Developer Intern)",
    startDate: "March 2023",
    endDate: "May 2023",
    imageUrl: "/gil.png",
    description: (
      <>
        During my internship at Gujarat Informatics Limited (GIL), I worked as a
        Dot Net Developer Intern on internal tools and applications. This
        opportunity allowed me to collaborate with seasoned developers in an
        enterprise environment, honing my problem-solving skills and gaining
        practical experience in agile software development processes.
      </>
    ),
  },
];

const ExperienceCard = ({
  company,
  endDate,
  position,
  startDate,
  description,
}: TExperience) => {
  return (
    <div className="w-full border-none rounded-none shadow-none flex gap-5">
      <div className="flex flex-col gap-1.5 w-full">
        <div className="flex sm:flex-row flex-col sm:items-center items-start justify-between">
          <p className="font-semibold">{company}</p>
          <p className="md:text-sm text-xs text-gray-400">
            {startDate} - {endDate}
          </p>
        </div>
        <div>
          <p className="">{position}</p>
        </div>
        <div>
          <p className="text-justify text-sm text-gray-400 leading-6">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section className="grid gap-5">
      <H2>Work Experience</H2>
      <div className="grid gap-8">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.company} {...experience} />
        ))}
      </div>
    </section>
  );
};
