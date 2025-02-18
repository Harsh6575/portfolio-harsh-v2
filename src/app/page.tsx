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
  );
}
