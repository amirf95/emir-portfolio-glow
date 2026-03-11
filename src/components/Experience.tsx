import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="w-5 h-5 text-primary" />
            <h2 className="text-3xl font-bold text-glow text-primary">Experience</h2>
          </div>

          <div className="relative pl-8 border-l-2 border-border">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[var(--glow-primary)]" />
            
            <div className="bg-card rounded-xl p-8 border border-border">
              <span className="font-mono text-xs text-accent uppercase tracking-wider">Internship</span>
              <h3 className="text-xl font-bold text-foreground mt-2">Full-Stack Developer Intern</h3>
              <p className="text-muted-foreground text-sm font-mono mt-1 mb-4">Task & Permission Management System</p>
              
              <ul className="space-y-2 text-secondary-foreground">
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Built a worker interface for viewing tasks and requesting holiday permissions
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Developed an admin dashboard for managing categories, tasks, projects, and user roles
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Designed REST APIs and database schemas with Node.js, MongoDB, and Mongoose
                </li>
                <li className="flex gap-2">
                  <span className="text-primary mt-1">▹</span>
                  Gained experience in team collaboration and full-stack development workflows
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
