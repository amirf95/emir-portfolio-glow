import { motion } from "framer-motion";
import { Code2 } from "lucide-react";

const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Django", "Java Servlets", "REST APIs"] },
  { category: "Database", items: ["MongoDB", "Mongoose"] },
  { category: "Languages", items: ["JavaScript", "C++", "Python", "Java"] },
  { category: "Tools", items: ["VS Code", "Git", "GitHub", "Postman"] },
  { category: "Interests", items: ["AI / ML", "Cybersecurity", "FFT / DSP", "Algorithms"] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <Code2 className="w-5 h-5 text-primary" />
            <h2 className="text-3xl font-bold text-glow text-primary">Skills</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/40 transition-colors duration-300"
              >
                <h3 className="font-mono text-primary text-sm uppercase tracking-wider mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
