import { ColoredHeading } from "@/components/heading";


export const Hero = () => {
  return (
    <section className="grid gap-5">
      <h1 className="lg:text-5xl sm:text-3xl text-2xl font-bold sm:leading-snug">
        Hello, I&apos;m <ColoredHeading>Harsh Vansjaliya</ColoredHeading>{" "}
        <span aria-label="waving hand">👋</span>
      </h1>
      <p className="lg:text-xl sm:text-base text-xs">
        Software Developer · Frontend Developer · Full Stack Developer · Algo Trading Enthusiast
      </p>
    </section>
  );
};
