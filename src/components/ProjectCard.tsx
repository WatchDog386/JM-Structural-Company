import { motion } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  category: string;
  index: number;
}

const ProjectCard = ({ image, title, category, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
      className="group relative overflow-hidden rounded-lg cursor-pointer shadow-sm"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-3">
        <div>
          <span className="text-accent text-[7px] md:text-[8px] font-semibold uppercase tracking-widest">{category}</span>
          <h3 className="text-primary-foreground font-heading font-semibold text-[10px] md:text-[11px] mt-0.5">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
