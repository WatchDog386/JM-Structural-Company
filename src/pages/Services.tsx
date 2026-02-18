import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Ruler,
  Compass,
  HardHat,
  BarChart3,
  TrendingUp,
  Cog,
  Check,
} from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Ruler,
    title: "Structural Design",
    description: "Safe, efficient, and economical structural designs using advanced software and proven methodologies.",
    benefits: ["International code compliance", "Optimized material usage", "3D modeling & BIM", "Seismic & wind analysis"],
    image: "https://api.gharpedia.com/wp-content/uploads/2018/11/Design-of-Structure-01-0202140001.jpg",
  },
  {
    icon: Compass,
    title: "Civil Engineering Consulting",
    description: "Expert consulting to navigate complex engineering challenges with innovative, practical solutions.",
    benefits: ["Feasibility studies", "Site assessments", "Regulatory compliance", "Environmental considerations"],
    image: "https://content3.jdmagicbox.com/v2/comp/ahmedabad/u1/079pxx79.xx79.180711164305.i4u1/catalogue/the-civil-minds-engineering-consultants-sola-ahmedabad-civil-contractors-for-commercial-zlnvuyfsw9.jpg",
  },
  {
    icon: HardHat,
    title: "Construction Supervision",
    description: "On-site supervision ensuring construction quality meets design specifications at every phase.",
    benefits: ["Quality inspections", "Progress monitoring", "Safety compliance", "Defect identification"],
    image: "https://db-engineering-consulting.com/wp-content/uploads/2021/07/AdobeStock_209466807_Bauueberwachung-scaled-1.jpeg",
  },
  {
    icon: BarChart3,
    title: "Structural Analysis",
    description: "Cutting-edge finite element analysis for structural integrity and durability evaluation.",
    benefits: ["FE modeling", "Load path analysis", "Retrofit evaluation", "Performance-based design"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2xtIr91kBdiwJV197fmmRzOh-PqWWLafbw&s",
  },
  {
    icon: Cog,
    title: "Infrastructure Development",
    description: "Planning and delivering infrastructure projects that serve communities for decades.",
    benefits: ["Transportation", "Water & drainage", "Utility planning", "Sustainable design"],
    image: "https://www.dcg-consulting.com/media/1037/infrastructure.jpg",
  },
  {
    icon: TrendingUp,
    title: "Project Management",
    description: "Coordinating all project aspects to deliver on time, within budget, and to the highest standards.",
    benefits: ["Budget management", "Schedule optimization", "Stakeholder coordination", "Risk mitigation"],
    image: "https://files.selar.co/product-images/2024/products/Viclabulary/project-management-selar.co-65f60d5694847.jpg",
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center bg-[#0E4861] overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop" 
            alt="Services Hero" 
            className="w-full h-full object-cover opacity-40 hover:scale-105 transition-transform duration-700"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-heading tracking-tight">
              Our Services
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Comprehensive engineering solutions built on <br className="hidden md:block" /> expertise, precision, and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-8 lg:gap-12 items-center`}
              >
                {/* Image Side - Simple, clean, no card styling */}
                <div className="w-full lg:w-5/12">
                   <div className="relative overflow-hidden group">
                     {/* Decorative element */}
                     <div className={`absolute -top-4 ${i % 2 === 1 ? "-right-4" : "-left-4"} w-20 h-20 bg-[#0E4861]/5 z-0 rounded-full blur-2xl`}></div>
                     
                     <motion.img 
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        transition={{ duration: 0.3 }}
                        src={service.image} 
                        alt={service.title}
                        className="relative z-10 w-full h-[250px] md:h-[300px] object-cover sm:rounded-lg shadow-lg" 
                     />
                   </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-7/12">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 mb-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#00A3CC]/10 flex items-center justify-center text-[#00A3CC]">
                      <service.icon size={20} strokeWidth={1.5} />
                    </div>
                    <span className="text-[#00A3CC] font-bold tracking-wider text-xs uppercase">Service 0{i + 1}</span>
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-2xl md:text-3xl font-bold text-[#0E4861] mb-4 font-heading"
                  >
                    {service.title}
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-gray-500 text-base leading-relaxed mb-6 font-light"
                  >
                    {service.description}
                  </motion.p>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-6"
                  >

                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-4 h-4 rounded-full bg-[#22C55E]/10 flex items-center justify-center shrink-0">
                          <Check size={10} className="text-[#22C55E]" strokeWidth={3} />
                        </div>
                        <span className="text-[#0E4861] font-medium text-xs">{benefit}</span>
                      </div>
                    ))}
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-6"
                  >
                     <Link to="/contact" className="text-[#0E4861] font-bold text-xs border-b-2 border-[#00A3CC] pb-1 hover:text-[#00A3CC] transition-colors">
                       Request this service
                     </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#0E4861] relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00A3CC]/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-heading">
              Ready to verify your structure?
            </h2>
            <p className="text-blue-100 text-lg mb-10 font-light leading-relaxed">
              Our team of experts is ready to help you ensure the safety and longevity of your building. 
              Let's build something lasting together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center h-14 px-8 bg-white text-[#0E4861] font-bold text-base rounded-2xl shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
                >
                  Start Consultation
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center h-14 px-8 border border-white/30 text-white font-bold text-base rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
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
