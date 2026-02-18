import { motion } from "framer-motion";
import { Award, Target, Eye, Heart, Shield, Users, Lightbulb, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

const values = [
  { icon: Shield, title: "Integrity", description: "Honest dealings and transparent processes in every project." },
  { icon: Award, title: "Excellence", description: "Highest standards in engineering practice and safety." },
  { icon: Users, title: "Collaboration", description: "Working hand-in-hand with clients for optimal outcomes." },
  { icon: Heart, title: "Faith", description: "Guided by purpose and principled leadership." },
  { icon: Lightbulb, title: "Innovation", description: "Embracing new technologies and modern methods." },
  { icon: BookOpen, title: "Continuous Learning", description: "Investing in knowledge and team growth." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center bg-[#0E4861] overflow-hidden">
        {/* Dynamic Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0E4861]/90 via-[#0E4861]/70 to-[#00A3CC]/30 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-0 scale-105 animate-pulse-slow">
          <img 
            src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/486681197_2451870551836740_2277915400451678782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHUTsSpq67aCKX8gi5O3YYtxUIQQXcdSMvFQhBBdx1Iy2C69_3h3BcNHJi0IuOSz-BW0UDGrX1stz254E-xHBzR&_nc_ohc=r1zAmgEr2KoQ7kNvwG1q48j&_nc_oc=AdnF4kue3vsHBmCbPYaKGPVuD_fE6i1E1D0Uj527MPiXta01h420PodnNvMksfzectQ&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Hj_YDpl9lg-pfZGJNHhLXw&oh=00_Afsk7nIqPHUQdp0EI93qPkkUwBRpnUXqs6O3qphofW8nOw&oe=699AD97A" 
            alt="About Hero" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale hover:grayscale-0 transition-all duration-[2s]"
          />
        </div>
        
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/20 mb-8 shadow-2xl">
              <div className="w-2 h-2 rounded-full bg-[#00A3CC] animate-pulse"></div>
              <span className="text-xs text-white font-bold tracking-[0.2em] uppercase">Est. 2010</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white mb-8 font-heading tracking-tight leading-[0.9]">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00A3CC]/80">Us</span>
            </h1>
            
            <p className="text-blue-50/90 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed border-t border-white/10 pt-8 mt-4">
              Engineering strength, building trust, and serving communities with <br className="hidden md:block"/> uncommon purpose and unwavering integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-32 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-row gap-4 md:gap-8 lg:gap-16 items-center">
            
            {/* Image Side - Modern Architectural Shape */}
            <div className="w-1/3 lg:w-5/12 flex justify-center lg:justify-start relative pl-2 md:pl-4 pt-4 shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="relative z-10 w-full max-w-sm"
              >
                 {/* Abstract Geometric Background Elements */}
                 <div className="absolute top-0 left-0 w-2/3 h-full bg-[#16a34a] rounded-tl-[40px] md:rounded-tl-[60px] rounded-br-[10px] md:rounded-br-[20px] -z-10 -translate-x-2 md:-translate-x-4 -translate-y-2 md:-translate-y-4"></div>
                 <div className="absolute bottom-[-10px] md:bottom-[-20px] right-[-10px] md:right-[-20px] w-20 md:w-32 h-20 md:h-32 bg-[radial-gradient(circle,_#00A3CC_2px,_transparent_2.5px)] bg-[size:8px_8px] md:bg-[size:12px_12px] opacity-40 z-0"></div>

                 {/* Main Image Container - Asymmetric Curve */}
                 <div className="relative overflow-hidden shadow-xl md:shadow-2xl group w-full rounded-tr-[40px] md:rounded-tr-[80px] rounded-bl-[40px] md:rounded-bl-[80px] border-2 md:border-4 border-white bg-white">
                    <img 
                      src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/486681197_2451870551836740_2277915400451678782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHUTsSpq67aCKX8gi5O3YYtxUIQQXcdSMvFQhBBdx1Iy2C69_3h3BcNHJi0IuOSz-BW0UDGrX1stz254E-xHBzR&_nc_ohc=r1zAmgEr2KoQ7kNvwG1q48j&_nc_oc=AdnF4kue3vsHBmCbPYaKGPVuD_fE6i1E1D0Uj527MPiXta01h420PodnNvMksfzectQ&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Hj_YDpl9lg-pfZGJNHhLXw&oh=00_Afsk7nIqPHUQdp0EI93qPkkUwBRpnUXqs6O3qphofW8nOw&oe=699AD97A" 
                      alt="Legacy of Structural Excellence" 
                      className="w-full h-auto object-cover object-top transform group-hover:scale-110 transition-transform duration-700 aspect-[4/5]" 
                    />
                    
                    {/* Corner Accent */}
                    <div className="absolute bottom-0 left-0 w-12 md:w-20 h-12 md:h-20 bg-gradient-to-tr from-[#0E4861] to-transparent opacity-90"></div>
                 </div>

                 {/* Floating Badge - Overlapping - Hidden on mobile, shown on larger screens if needed, or scaled down */}
                 <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 md:translate-x-0 z-20 bg-white p-4 shadow-xl rounded-lg border-l-4 border-[#00A3CC] max-w-[150px]">
                    <div className="flex flex-col">
                       <span className="text-4xl font-bold text-[#0E4861] tracking-tighter">15+</span>
                       <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">Years of<br/>Excellence</span>
                    </div>
                 </div>
              </motion.div>
            </div>

            {/* Content Side */}
            <div className="w-2/3 lg:w-1/2 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-6">
                   <div className="h-[2px] w-6 md:w-10 bg-gradient-to-r from-[#00A3CC] to-transparent"></div>
                   <span className="text-[#00A3CC] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em]">Our Story</span>
                </div>
                
                <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-[#0E4861] mb-2 md:mb-6 font-heading leading-[1.1]">
                  A Legacy of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3CC] to-[#0E4861]">Structural Excellence</span>
                </h2>
                
                <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed mb-4 md:mb-6 font-light text-justify md:text-left">
                  JM Structural Company was founded with a clear mission: to deliver world-class civil and structural engineering services rooted in integrity and technical mastery.
                </p>
                
                <p className="hidden md:block text-gray-600 text-sm md:text-base leading-relaxed mb-8 font-light text-justify md:text-left border-l-4 border-[#0E4861]/20 pl-6 italic">
                  "Every project reflects our commitment to safety, sustainability, and the belief that great structures are built on a foundation of trust. We depend on God to guide our work."
                </p>

                <div className="flex flex-col md:flex-row gap-4 md:gap-10 border-t border-gray-100 pt-4 md:pt-6">
                   <div>
                      <h4 className="text-lg md:text-2xl font-bold text-[#0E4861] mb-1">150+</h4>
                      <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-semibold">Projects</p>
                   </div>
                   <div>
                      <h4 className="text-lg md:text-2xl font-bold text-[#0E4861] mb-1">98%</h4>
                      <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-semibold">Satisfaction</p>
                   </div>
                   <div className="hidden md:block">
                      <h4 className="text-lg md:text-2xl font-bold text-[#0E4861] mb-1">30+</h4>
                      <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider font-semibold">Awards</p>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Split Design */}
      <section className="py-16 md:py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
            
            {/* Mission */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
               className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-t-4 border-[#0E4861] relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                  <Target size={100} />
               </div>
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#0E4861]/5 flex items-center justify-center mb-4 text-[#0E4861] group-hover:bg-[#0E4861] group-hover:text-white transition-colors duration-300">
                  <Target size={20} strokeWidth={2} />
               </div>
               <h3 className="text-xl md:text-2xl font-bold text-[#0E4861] mb-2 font-heading tracking-tight">Our Mission</h3>
               <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                 To provide exceptional civil and structural engineering services ensuring safety, durability, and value — while upholding the highest ethical standards in every community we serve.
               </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: 0.2 }}
               className="bg-white p-5 md:p-6 rounded-xl shadow-lg border-t-4 border-[#00A3CC] relative overflow-hidden group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
               <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
                  <Eye size={100} />
               </div>
               <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[#00A3CC]/5 flex items-center justify-center mb-4 text-[#00A3CC] group-hover:bg-[#00A3CC] group-hover:text-white transition-colors duration-300">
                  <Eye size={20} strokeWidth={2} />
               </div>
               <h3 className="text-xl md:text-2xl font-bold text-[#0E4861] mb-2 font-heading tracking-tight">Our Vision</h3>
               <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                 To become the most trusted structural engineering firm in Africa — known for excellence, transformative infrastructure, and faith-driven leadership that builds a better future.
               </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-12 max-w-xl mx-auto">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5 }}
            >
               <span className="text-[#00A3CC] font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 block">Our Principles</span>
               <h2 className="text-[#0E4861] font-bold text-2xl md:text-3xl mb-3 font-heading tracking-tight">Core Values</h2>
               <p className="text-gray-500 text-xs md:text-base font-light leading-relaxed">The foundational principles that guide everything we do at JM Structural.</p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="flex flex-col items-start text-left p-4 md:p-6 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#f0f9ff] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 w-8 h-8 md:w-10 md:h-10 rounded-lg bg-[#0E4861]/5 flex items-center justify-center mb-3 md:mb-4 text-[#0E4861] group-hover:bg-[#0E4861] group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                  <v.icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
                </div>
                
                <h3 className="relative z-10 text-base md:text-lg font-bold text-[#0E4861] mb-2 font-heading group-hover:translate-x-1 transition-transform">{v.title}</h3>
                <p className="relative z-10 text-[10px] md:text-xs text-gray-500 leading-relaxed font-light group-hover:text-gray-600">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




    </Layout>
  );
};

export default About;
