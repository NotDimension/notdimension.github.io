import { motion } from "framer-motion";
import { Server, Users, MessageSquare, Wrench, FileText, Palette } from "lucide-react";

const skills = [
  { icon: Server, label: "Server Administration" },
  { icon: Users, label: "Staff Management" },
  { icon: MessageSquare, label: "Community Engagement" },
  { icon: Wrench, label: "Plugin Configuration" },
  { icon: FileText, label: "Logs Management" },
  { icon: Palette, label: "Graphic Design" },
];

const SkillsSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-8 tracking-widest uppercase">
            // Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.label}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass-card rounded-lg p-4 flex flex-col items-center gap-3 text-center group transition-all duration-300"
              >
                <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs font-mono text-secondary-foreground">{skill.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
