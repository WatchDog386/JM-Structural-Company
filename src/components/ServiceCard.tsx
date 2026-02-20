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
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group bg-card rounded-lg p-4 border border-border card-hover"
    >
      <div className="w-8 h-8 rounded-md bg-primary/8 flex items-center justify-center mb-2.5 group-hover:bg-accent/15 transition-colors duration-300">
        <Icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
      </div>
      <h3 className="text-[11px] font-heading font-semibold text-card-foreground mb-1">{title}</h3>
      <p className="text-[9px] text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
