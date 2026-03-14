import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      {/* ============================================== */}
      {/* STYLED PROFILE PHOTO SECTION                   */}
      {/* ============================================== */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* Back Glow Layer (Secondary color - Accent/Purple) */}
          <div className="absolute -inset-1.5 rounded-full bg-accent blur-md opacity-40 animate-pulse-glow" style={{ animationDelay: "1s" }} />
          
          {/* Main Glow Layer (Primary color - Cyan/Blue) */}
          <div className="absolute -inset-1 rounded-full bg-primary blur opacity-60 animate-pulse-glow" />

          {/* Image Container with Inner Border */}
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-primary/80 ring-2 ring-black/40">
            <img 
              // Assumes your file is at public/mYOPHOTO2.jpg
              src="/mYOPHOTO2.jpg" 
              alt="Emir Fenina" 
              // Adds standard aspect ratio control and a slight screen filter
              className="w-full h-full object-cover filter brightness-[0.9] grayscale-[10%] sepia-[15%]"
            />
          </div>
        </motion.div>
      </div>
      {/* ============================================== */}

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-primary text-sm tracking-widest uppercase mb-6"
        >
          {">"} Hello, World
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span className="text-foreground">I'm </span>
          <span className="gradient-text">Emir Fenina</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground font-mono max-w-2xl mx-auto mb-10"
        >
          Software Engineering Student · Full-Stack Developer · Future Machine Learning Specialist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-[var(--glow-primary)] transition-shadow duration-300"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors duration-300"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 text-muted-foreground hover:text-primary transition-colors"
      >
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;