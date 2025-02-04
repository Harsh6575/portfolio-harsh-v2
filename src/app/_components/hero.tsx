import { ColoredHeading } from "@/components/heading";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="grid gap-5">
      <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold sm:leading-snug">
        Hello, I&apos;m <ColoredHeading>Harsh Vansjaliya</ColoredHeading>
        <span aria-label="waving hand">👋</span>
      </h1>
      <p className="lg:text-xl sm:text-base text-xs">
        Frontend Developer | Full Stack Developer | Software Developer | Algo
        Trading Enthusiast
      </p>
      <div className="flex flex-col gap-5">
        <p className="text-justify text-gray-400 leading-6">
          I&apos;m a passionate Frontend Developer at{" "}
          <Link
            href="https://www.algoacharya.com/login"
            className="text-foreground underline underline-offset-4"
          >
            @Algoacharya
          </Link>
          , crafting innovative trading platforms. As an Algo Enthusiast and
          Problem Solver, I constantly explore new technologies to build
          efficient, scalable solutions.
        </p>
      </div>
    </section>
  );
};
