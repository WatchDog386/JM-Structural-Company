import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Ruler, Compass, HardHat, BarChart3, TrendingUp, Cog, Check } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Ruler, title: "Structural Design",
    description: "Safe, efficient, and economical structural designs using advanced software and proven methodologies.",
    benefits: ["International code compliance", "Optimized material usage", "3D modeling & BIM", "Seismic & wind analysis"],
    image: "https://api.gharpedia.com/wp-content/uploads/2018/11/Design-of-Structure-01-0202140001.jpg",
  },
  {
    icon: Compass, title: "Civil Engineering Consulting",
    description: "Expert consulting to navigate complex engineering challenges with innovative, practical solutions.",
    benefits: ["Feasibility studies", "Site assessments", "Regulatory compliance", "Environmental considerations"],
    image: "https://content3.jdmagicbox.com/v2/comp/ahmedabad/u1/079pxx79.xx79.180711164305.i4u1/catalogue/the-civil-minds-engineering-consultants-sola-ahmedabad-civil-contractors-for-commercial-zlnvuyfsw9.jpg",
  },
  {
    icon: HardHat, title: "Construction Supervision",
    description: "On-site supervision ensuring construction quality meets design specifications at every phase.",
    benefits: ["Quality inspections", "Progress monitoring", "Safety compliance", "Defect identification"],
    image: "https://db-engineering-consulting.com/wp-content/uploads/2021/07/AdobeStock_209466807_Bauueberwachung-scaled-1.jpeg",
  },
  {
    icon: BarChart3, title: "Structural Analysis",
    description: "Cutting-edge finite element analysis for structural integrity and durability evaluation.",
    benefits: ["FE modeling", "Load path analysis", "Retrofit evaluation", "Performance-based design"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2xtIr91kBdiwJV197fmmRzOh-PqWWLafbw&s",
  },
  {
    icon: Cog, title: "Infrastructure Development",
    description: "Planning and delivering infrastructure projects that serve communities for decades.",
    benefits: ["Transportation", "Water & drainage", "Utility planning", "Sustainable design"],
    image: "https://www.dcg-consulting.com/media/1037/infrastructure.jpg",
  },
  {
    icon: TrendingUp, title: "Project Management",
    description: "Coordinating all project aspects to deliver on time, within budget, and to the highest standards.",
    benefits: ["Budget management", "Schedule optimization", "Stakeholder coordination", "Risk mitigation"],
    image: "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative w-full h-[220px] md:h-[300px] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-foreground/20 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Services" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="relative z-20 text-center px-3 max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-foreground mb-2 md:mb-3 font-heading tracking-tight">
              Our Services
            </h1>
            <p className="text-primary-foreground/85 text-[10px] md:text-sm font-light max-w-xl mx-auto leading-relaxed">
              Comprehensive engineering solutions built on expertise, precision, and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-8 md:py-12 bg-background overflow-hidden">
        <div className="container mx-auto px-3">
          <div className="flex flex-col gap-8 md:gap-10">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-4 lg:gap-8 items-center`}
              >
                <div className="w-full lg:w-5/12">
                   <div className="relative overflow-hidden group">
                      <motion.img 
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        src={service.image} 
                        alt={service.title}
                        className="relative z-10 w-full h-[160px] md:h-[200px] object-cover sm:rounded-md shadow-md" 
                      />
                   </div>
                </div>

                <div className="w-full lg:w-7/12">
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <service.icon size={12} strokeWidth={1.5} />
                    </div>
                    <span className="text-primary font-bold tracking-wider text-[8px] uppercase">Service 0{i + 1}</span>
                  </div>
                  
                  <h2 className="text-sm md:text-lg font-bold text-secondary mb-1.5 font-heading">{service.title}</h2>
                  <p className="text-muted-foreground text-[9px] md:text-[10px] leading-relaxed mb-3 font-light text-justify">{service.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-1 gap-x-3">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-[hsl(122,39%,49%)]/10 flex items-center justify-center shrink-0">
                          <Check size={7} className="text-[hsl(122,39%,49%)]" strokeWidth={3} />
                        </div>
                        <span className="text-secondary font-medium text-[8px] md:text-[9px]">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-3">
                     <Link to="/contact" className="text-secondary font-bold text-[9px] border-b-2 border-primary pb-0.5 hover:text-primary transition-colors">
                       Request this service
                     </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-foreground/5 skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-3 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-xl md:text-3xl font-bold text-primary-foreground mb-4 font-heading">
              Ready to verify your structure?
            </h2>
            <p className="text-primary-foreground/70 text-[11px] md:text-sm mb-6 font-light leading-relaxed">
              Our team of experts is ready to help you ensure the safety and longevity of your building.
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
                <Link to="/contact" className="inline-flex items-center justify-center h-10 px-6 bg-background text-secondary font-bold text-[11px] rounded-lg shadow-md hover:bg-muted hover:scale-105 transition-all duration-300">
                  Start Consultation
                </Link>
                <Link to="/projects" className="inline-flex items-center justify-center h-10 px-6 border border-primary-foreground/30 text-primary-foreground font-bold text-[11px] rounded-lg hover:bg-primary-foreground/10 transition-all duration-300">
                  View Our Projects
                </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
