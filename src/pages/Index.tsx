import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <footer className="py-8 text-center border-t border-border">
        <p className="font-mono text-sm text-muted-foreground">
          © 2025 Emir Fenina. Built with passion.
        </p>
      </footer>
    </div>
  );
};

export default Index;
