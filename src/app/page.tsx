import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import EducationCertificates from "@/components/EducationCertificates";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <EducationCertificates />
      <Contact />
    </main>
  );
}
