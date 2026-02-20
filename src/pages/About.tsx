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
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[300px] flex items-center justify-center bg-secondary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 via-secondary/70 to-primary/30 z-10 mix-blend-multiply"></div>
        <div className="absolute inset-0 z-0">
          <img 
            src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/486681197_2451870551836740_2277915400451678782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHUTsSpq67aCKX8gi5O3YYtxUIQQXcdSMvFQhBBdx1Iy2C69_3h3BcNHJi0IuOSz-BW0UDGrX1stz254E-xHBzR&_nc_ohc=r1zAmgEr2KoQ7kNvwG1q48j&_nc_oc=AdnF4kue3vsHBmCbPYaKGPVuD_fE6i1E1D0Uj527MPiXta01h420PodnNvMksfzectQ&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Hj_YDpl9lg-pfZGJNHhLXw&oh=00_Afsk7nIqPHUQdp0EI93qPkkUwBRpnUXqs6O3qphofW8nOw&oe=699AD97A" 
            alt="About Hero" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay grayscale"
          />
        </div>
        
        <div className="relative z-20 text-center px-3 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-foreground/5 backdrop-blur-md border border-primary-foreground/20 mb-4">
              <div className="w-1 h-1 rounded-full bg-primary animate-pulse"></div>
              <span className="text-[8px] text-primary-foreground font-bold tracking-[0.2em] uppercase">Est. 2010</span>
            </div>
            
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground mb-4 font-heading tracking-tight leading-[0.95]">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-foreground to-primary/80">Us</span>
            </h1>
            
            <p className="text-primary-foreground/80 text-[11px] md:text-sm font-light max-w-2xl mx-auto leading-relaxed border-t border-primary-foreground/10 pt-4 mt-3">
              Engineering strength, building trust, and serving communities with integrity.
            </p>
            
            <div className="mt-4 flex flex-col items-center gap-1">
              <p className="text-primary-foreground font-semibold text-[10px] md:text-xs">JM Leads The Way!</p>
              <p className="text-accent font-bold text-[10px] md:text-sm">We depend on God</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-12 md:py-16 bg-background overflow-hidden relative">
        <div className="container mx-auto px-3">
          <div className="flex flex-row gap-3 md:gap-6 lg:gap-10 items-center">
            
            <div className="w-1/3 lg:w-5/12 flex justify-center lg:justify-start relative pl-1 md:pl-3 pt-3 shrink-0">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="relative z-10 w-full max-w-xs"
              >
                 <div className="absolute top-0 left-0 w-2/3 h-full bg-[hsl(122,39%,49%)] rounded-tl-[20px] md:rounded-tl-[35px] rounded-br-[6px] md:rounded-br-[10px] -z-10 -translate-x-1.5 md:-translate-x-3 -translate-y-1.5 md:-translate-y-3"></div>

                 <div className="relative overflow-hidden shadow-lg md:shadow-xl group w-full rounded-tr-[20px] md:rounded-tr-[40px] rounded-bl-[20px] md:rounded-bl-[40px] border-2 md:border-3 border-background bg-background">
                    <img 
                      src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/486681197_2451870551836740_2277915400451678782_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHUTsSpq67aCKX8gi5O3YYtxUIQQXcdSMvFQhBBdx1Iy2C69_3h3BcNHJi0IuOSz-BW0UDGrX1stz254E-xHBzR&_nc_ohc=r1zAmgEr2KoQ7kNvwG1q48j&_nc_oc=AdnF4kue3vsHBmCbPYaKGPVuD_fE6i1E1D0Uj527MPiXta01h420PodnNvMksfzectQ&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Hj_YDpl9lg-pfZGJNHhLXw&oh=00_Afsk7nIqPHUQdp0EI93qPkkUwBRpnUXqs6O3qphofW8nOw&oe=699AD97A" 
                      alt="Legacy of Structural Excellence" 
                      className="w-full h-auto object-cover object-top transform group-hover:scale-105 transition-transform duration-500 aspect-[4/5]" 
                    />
                 </div>

                 <div className="hidden md:block absolute top-1/2 -right-5 transform -translate-y-1/2 z-20 bg-background p-2 shadow-lg rounded-md border-l-3 border-primary max-w-[100px]">
                    <span className="text-xl font-bold text-secondary tracking-tighter">15+</span>
                    <span className="text-[7px] text-muted-foreground uppercase tracking-widest font-bold mt-0.5 block">Years of Excellence</span>
                 </div>
              </motion.div>
            </div>

            <div className="w-2/3 lg:w-1/2 lg:pl-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 }}
              >
                <div className="flex items-center gap-2 mb-1.5 md:mb-3">
                   <div className="h-[2px] w-5 md:w-6 bg-gradient-to-r from-primary to-transparent"></div>
                   <span className="text-primary font-bold text-[8px] md:text-[9px] uppercase tracking-[0.2em]">Our Story</span>
                </div>
                
                <h2 className="text-base md:text-lg lg:text-xl font-bold text-secondary mb-1.5 md:mb-3 font-heading leading-[1.1]">
                  A Legacy of <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Structural Excellence</span>
                </h2>
                
                <p className="text-muted-foreground text-[9px] md:text-[10px] lg:text-[11px] leading-relaxed mb-3 md:mb-4 font-light text-justify md:text-left">
                  JM Structural Company was founded with a clear mission: to deliver world-class civil and structural engineering services rooted in integrity and technical mastery.
                </p>
                
                <p className="hidden md:block text-muted-foreground text-[10px] md:text-[11px] leading-relaxed mb-4 font-light text-justify md:text-left border-l-3 border-secondary/20 pl-4 italic">
                  "Every project reflects our commitment to safety, sustainability, and the belief that great structures are built on a foundation of trust."
                </p>

                <div className="flex flex-col md:flex-row gap-3 md:gap-6 border-t border-border pt-3 md:pt-4">
                   {[
                     { num: "150+", label: "Projects" },
                     { num: "98%", label: "Satisfaction" },
                     { num: "30+", label: "Awards" },
                   ].map((stat, i) => (
                     <div key={i} className={i === 2 ? "hidden md:block" : ""}>
                        <h4 className="text-sm md:text-base font-bold text-secondary mb-0">{stat.num}</h4>
                        <p className="text-[8px] md:text-[9px] text-muted-foreground uppercase tracking-wider font-semibold">{stat.label}</p>
                     </div>
                   ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-8 md:py-12 bg-muted">
        <div className="container mx-auto px-3">
          <div className="grid md:grid-cols-2 gap-3 lg:gap-4 max-w-3xl mx-auto">
            {[
              { icon: Target, title: "Our Mission", color: "secondary", desc: "To provide exceptional civil and structural engineering services ensuring safety, durability, and value — while upholding the highest ethical standards." },
              { icon: Eye, title: "Our Vision", color: "primary", desc: "To become the most trusted structural engineering firm in Africa — known for excellence, transformative infrastructure, and faith-driven leadership." },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className={`bg-background p-4 md:p-5 rounded-lg shadow-md border-t-3 border-${item.color} relative overflow-hidden group hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5`}
              >
                 <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity">
                    <item.icon size={60} />
                 </div>
                 <div className={`w-7 h-7 md:w-8 md:h-8 rounded-md bg-${item.color}/5 flex items-center justify-center mb-2 text-${item.color} group-hover:bg-${item.color} group-hover:text-primary-foreground transition-colors duration-300`}>
                    <item.icon size={14} strokeWidth={2} />
                 </div>
                 <h3 className="text-sm md:text-base font-bold text-secondary mb-1.5 font-heading tracking-tight">{item.title}</h3>
                 <p className="text-muted-foreground text-[9px] md:text-[10px] leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-10 md:py-14 bg-background relative">
        <div className="absolute inset-0 bg-[radial-gradient(hsl(var(--border))_1px,transparent_1px)] [background-size:14px_14px] opacity-25"></div>
        
        <div className="container mx-auto px-3 relative z-10">
          <div className="text-center mb-6 md:mb-8 max-w-md mx-auto">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
               <span className="text-primary font-bold text-[8px] md:text-[9px] uppercase tracking-[0.2em] mb-1.5 block">Our Principles</span>
               <h2 className="text-secondary font-bold text-base md:text-lg mb-2 font-heading tracking-tight">Core Values</h2>
               <p className="text-muted-foreground text-[9px] md:text-[10px] font-light leading-relaxed">The foundational principles that guide everything we do.</p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.35 }}
                className="flex flex-col items-start text-left p-3 md:p-4 bg-background rounded-lg border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-muted to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                
                <div className="relative z-10 w-7 h-7 md:w-8 md:h-8 rounded-md bg-secondary/5 flex items-center justify-center mb-2 md:mb-3 text-secondary group-hover:bg-secondary group-hover:text-primary-foreground transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-105">
                  <v.icon className="w-3.5 h-3.5 md:w-4 md:h-4" strokeWidth={1.5} />
                </div>
                
                <h3 className="relative z-10 text-[11px] md:text-xs font-bold text-secondary mb-1 font-heading">{v.title}</h3>
                <p className="relative z-10 text-[8px] md:text-[9px] text-muted-foreground leading-relaxed font-light">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
