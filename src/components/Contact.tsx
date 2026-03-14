import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-glow text-primary mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-10 font-mono text-sm">
            I'm always open to new opportunities, collaborations, and conversations.
          </p>

          <div className="flex justify-center gap-6">
            <a
              href="mailto:amirfenina03@email.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[var(--glow-primary)]"
            >
              <Mail className="w-4 h-4" />
              <span className="font-mono text-sm">Email</span>
            </a>
            <a
              href="http://linkedin.com/in/amir-fenina-3b299b244/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[var(--glow-primary)]"
            >
              <Linkedin className="w-4 h-4" />
              <span className="font-mono text-sm">LinkedIn</span>
            </a>
            <a
              href="https://github.com/amirf95"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[var(--glow-primary)]"
            >
              <Github className="w-4 h-4" />
              <span className="font-mono text-sm">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
