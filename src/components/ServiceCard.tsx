import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group bg-card rounded-xl p-6 border border-border card-hover"
    >
      <div className="w-11 h-11 rounded-lg bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-accent/15 transition-colors duration-300">
        <Icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
      </div>
      <h3 className="text-sm font-heading font-semibold text-card-foreground mb-2">{title}</h3>
      <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
