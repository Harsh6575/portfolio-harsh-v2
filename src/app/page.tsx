import Head from "next/head";
import { About } from "./_components/about";
import { Contact } from "./_components/contact";
import { DownloadResume } from "./_components/download-resume";
import { Experience } from "./_components/experience";
import { Footer } from "./_components/footer";
import { Hero } from "./_components/hero";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";

export default function Home() {
  return (
    <>
      <Head>
        <title>Harsh Vansjaliya | Software Developer Portfolio</title>
        <meta name="description" content="Portfolio of Harsh Vansjaliya, a Software Developer specializing in Next.js, React, and TypeScript." />
        <meta property="og:title" content="Harsh Vansjaliya | Software Developer Portfolio" />
        <meta property="og:description" content="Portfolio of Harsh Vansjaliya, a Software Developer with expertise in Next.js, React, TypeScript, and scalable systems." />
        <meta property="og:image" content="/meta-image.png" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>

      <main className="max-w-5xl mx-auto sm:p-16 sm:pb-12 p-8 grid gap-10 md:text-base text-xs">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />

        <DownloadResume />
      </main>
    </>
  );
}
