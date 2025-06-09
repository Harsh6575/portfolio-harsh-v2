import { H2 } from "@/components/heading";

export const About = () => {
  return (
    <section className="grid gap-5">
      <H2>About</H2>
      <div className="flex flex-col gap-5 text-gray-400">
        <p className="text-justify leading-6">
          I&apos;m a passionate Software Developer with ~2 years of experience, specializing in building performant and scalable web applications using technologies like <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>. Previously worked at a fintech startup building trading platforms. Currently open to new opportunities where I can contribute to impactful, user-centric products.
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
