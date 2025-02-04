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
          . I&apos;m diving into the exciting world of algorithmic trading,
          leveraging{" "}
          <span className="font-semibold">
            Python, Django, and PostgreSQL along with tools like Jupyter
            Notebooks, yfinance, pandas
          </span>
          , and NumPy.
        </p>
      </div>
    </section>
  );
};
