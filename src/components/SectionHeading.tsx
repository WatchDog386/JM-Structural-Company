import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  light?: boolean;
  centered?: boolean;
  tag?: string;
}

const SectionHeading = ({ title, subtitle, light = false, centered = true, tag }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
      className={`mb-10 ${centered ? "text-center" : ""}`}
    >
      {tag && (
        <span className={`text-xs font-semibold uppercase tracking-[0.2em] mb-3 block ${light ? "text-accent" : "text-accent"}`}>
          {tag}
        </span>
      )}
      <h2
        className={`text-2xl md:text-3xl font-heading font-bold mb-3 text-balance ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`max-w-xl text-sm leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-primary-foreground/60" : "text-muted-foreground"}`}
        >
          {subtitle}
        </p>
      )}
      <div className={`mt-3 h-0.5 w-10 rounded-full bg-accent ${centered ? "mx-auto" : ""}`} />
    </motion.div>
  );
};

export default SectionHeading;
