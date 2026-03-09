import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 px-4">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-3 tracking-widest uppercase">
            // About Me
          </h2>
          <p className="text-lg md:text-xl text-secondary-foreground leading-relaxed">
            Minecraft server developer specializing in{" "}
            <span className="text-foreground font-medium">plugin configuration</span>,{" "}
            <span className="text-foreground font-medium">staff management</span>, and{" "}
            <span className="text-foreground font-medium">community engagement</span>.
            Experienced in growing servers from small communities to hundreds of members,
            focusing on creating exceptional gameplay experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
