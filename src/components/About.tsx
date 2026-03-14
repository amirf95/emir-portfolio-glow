import { motion } from "framer-motion";
import { User } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <User className="w-5 h-5 text-primary" />
            <h2 className="text-3xl font-bold text-glow text-primary">About Me</h2>
          </div>
          
          <div className="bg-card rounded-xl p-8 border border-border border-glow">
            <p className="text-secondary-foreground leading-relaxed mb-4">
              I'm a fourth-year Software Engineering student originally from <span className="text-primary">Tunisia</span>, currently studying abroad in North Cyprus Near East University. I'm deeply passionate about software development, AI, and building real-world applications that solve meaningful problems.
            </p>
            <p className="text-secondary-foreground leading-relaxed mb-4">
              I enjoy turning ideas into functional software systems, with a particular interest in full-stack web development and emerging technologies. Recently, I've been exploring <span className="text-primary">Fast Fourier Transform (FFT)</span>, audio-reactive visual systems, and AI-based applications.
            </p>
            <p className="text-secondary-foreground leading-relaxed">
              Outside of coding, I'm passionate about fitness and personal discipline Football is also a big part of my life .I can literraly defie all the world to just support my team which is <span className="text-red-600 font-bold">Club Africain </span>. My long-term goal is to pursue a <span className="text-primary">Master's in Machine Learning</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
