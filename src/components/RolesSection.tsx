import { motion } from "framer-motion";
import { ExternalLink, Users } from "lucide-react";

interface Role {
  name: string;
  role: string;
  members: string;
  icon: string;
  discord: string;
}

const currentRoles: Role[] = [
  { name: "ShadySMP", role: "Co-Owner", members: "450", icon: "/images/icons/shady.png", discord: "https://discord.gg/Jg48d8xbcD" },
  { name: "Discord Collective", role: "Manager", members: "60", icon: "/images/icons/collective.png", discord: "https://discord.gg/nUMJ52Pycj" },
];

const previousRoles: Role[] = [
  { name: "Prism SMP", role: "Owner", members: "700", icon: "/images/icons/prism.png", discord: "https://discord.gg/cVBDxNxP5c" },
  { name: "ShatterMC", role: "Senior Admin", members: "260", icon: "/images/icons/shatter.png", discord: "https://discord.gg/sfSnvmtFfA" },
  { name: "SMP Finder", role: "Senior Moderator", members: "27k", icon: "/images/icons/smpfinder.png", discord: "https://discord.gg/cuP8bPZgYv" },
  { name: "OceanMC", role: "Owner", members: "300", icon: "/images/icons/ocean.png", discord: "https://discord.gg/YEgAUe8UMp" },
  { name: "SteakySMP", role: "Co-Owner", members: "1.5k", icon: "/images/icons/steaky.png", discord: "https://discord.gg/nGVcVzK6" },
  { name: "BonkMC", role: "Moderator", members: "4.6k", icon: "/images/icons/bonk.png", discord: "https://discord.gg/XV4EGPxHqc" },
  { name: "Nebular SMP", role: "Overseer/Co-Owner", members: "200", icon: "/images/icons/nebular.png", discord: "https://discord.gg/YYwWMXxKAz" },
];

const RoleCard = ({ role, index }: { role: Role; index: number }) => (
  <motion.a
    href={role.discord}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ y: 30, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.4, delay: index * 0.08 }}
    className="glass-card rounded-lg p-4 flex items-center gap-4 group transition-all duration-300 cursor-pointer"
  >
    <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
      <img src={role.icon} alt={role.name} className="w-full h-full object-cover" />
    </div>
    <div className="flex-1 min-w-0">
      <h3 className="font-semibold text-foreground text-sm truncate">{role.name}</h3>
      <p className="text-xs text-muted-foreground font-mono">{role.role}</p>
    </div>
    <div className="flex items-center gap-3 flex-shrink-0">
      <div className="flex items-center gap-1 text-muted-foreground">
        <Users className="w-3 h-3" />
        <span className="text-xs font-mono">{role.members}</span>
      </div>
      <ExternalLink className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
    </div>
  </motion.a>
);

const RolesSection = () => {
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
            // Current Roles
          </h2>
          <div className="grid gap-3 mb-16">
            {currentRoles.map((role, i) => (
              <RoleCard key={role.name} role={role} index={i} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-mono text-primary mb-8 tracking-widest uppercase">
            // Previous Roles
          </h2>
          <div className="grid gap-3">
            {previousRoles.map((role, i) => (
              <RoleCard key={role.name} role={role} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RolesSection;
