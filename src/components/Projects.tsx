import { motion } from "framer-motion";
import { FolderGit2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Task & Permission Management App",
    description: "Full-stack web app for managing tasks, projects, and holiday permissions with worker and admin interfaces.",
    tech: ["React", "Node.js", "MongoDB", "Mongoose", "REST API"],
    type: "Internship Project",
  },
  {
    title: "Audio-Reactive Visualizer",
    description: "Interactive visual system exploring FFT and real-time audio analysis for generating dynamic graphics.",
    tech: ["JavaScript", "Web Audio API", "Canvas", "FFT"],
    type: "Personal Project",
  },
  {
    title: "AI-Based Application",
    description: "Exploring AI interactions and building intelligent features into web applications.",
    tech: ["Python", "AI/ML", "React"],
    type: "Exploration",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <FolderGit2 className="w-5 h-5 text-primary" />
            <h2 className="text-3xl font-bold text-glow text-primary">Projects</h2>
          </div>

          <div className="grid gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group bg-card rounded-xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:border-glow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="font-mono text-xs text-accent uppercase tracking-wider">{project.type}</span>
                    <h3 className="text-xl font-bold text-foreground mt-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs rounded bg-muted text-primary font-mono">
                      {t}
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

export default Projects;
