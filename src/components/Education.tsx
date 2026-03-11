import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h2 className="text-3xl font-bold text-glow text-primary">Education</h2>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <span className="font-mono text-xs text-accent uppercase tracking-wider">2021 – Present</span>
            <h3 className="text-xl font-bold text-foreground mt-2">Bachelor's in Software Engineering</h3>
            <p className="text-muted-foreground font-mono text-sm mt-1 mb-4">4th Year · Studying Abroad</p>
            <p className="text-secondary-foreground leading-relaxed">
              Currently in my final year, focusing on full-stack development, algorithms, and emerging technologies. Planning to pursue a Master's degree in Cybersecurity upon graduation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
