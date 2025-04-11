import { H2 } from "@/components/heading";

export const About = () => {
  return (
    <section className="grid gap-5">
      <H2>About</H2>
      <div className="flex flex-col gap-5 text-gray-400">
        <p className="text-justify leading-6">
          I&apos;m a Software Developer from India, specializing in creating
          performant, scalable web applications using modern technologies like{" "}
          <span className="font-semibold">
            Next.js, TypeScript, and Tailwind CSS
          </span>
          .
        </p>
        <p className="text-justify leading-6">
          Lately, I&apos;ve been diving deep into the world of algorithmic trading - working with{" "}
          <span className="font-semibold">
            Python, Django, and PostgreSQL,
          </span>
          along with tools like {" "}
          <span className="font-semibold">
            Jupyter Notebooks, yfinance, pandas, and NumPy
          </span>
          to gain insights from market data and build automated strategies.
        </p>
      </div>
    </section>
  );
};
