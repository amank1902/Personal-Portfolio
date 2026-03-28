import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import TechKeyboard from "@/components/tech-keyboard";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Experience />
      <Projects />
      <TechKeyboard />
      <Education />
      <Contact />
    </main>
  );
}
