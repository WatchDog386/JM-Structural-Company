import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import {
  Building2,
  HardHat,
  Ruler,
  Hammer,
  Wrench,
  Check,
  PencilRuler,
  Armchair,
} from "lucide-react";
import Footer from "@/components/Footer";
import heroImg from "@/assets/hero-construction-v2.jpg";
import projCommercial from "@/assets/project-commercial-v2.jpg";
import projResidential from "@/assets/project-residential-v2.jpg"; 
import projInfra from "@/assets/project-bridge-v2.jpg";

const services = [
  { id: 1, icon: PencilRuler, title: "Design building/house", description: "We have an architect for design new buildings", highlight: true },
  { id: 2, icon: Armchair, title: "Interior Design", description: "We have an interior designer for design your perfect inside house" },
  { id: 3, icon: Building2, title: "Build from scratch", description: "We have an contractor for build new building from scratch" },
  { id: 4, icon: Hammer, title: "Renovation", description: "We can also renovate or rebuilds new buildings/house" },
];

const stats = [
  { value: "50+", label: "Clients" },
  { value: "30+", label: "House" },
  { value: "20+", label: "Building" },
];

const heroImages = [
  "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497927324_2503742366649558_2232254236741211719_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGe7dS0nuHYWd21ZTXzcMWbbcHx5Ct5GWttwfHkK3kZa66oAlDC5zAOVqNRbdDxzy_I5XfPGAaL9gK6u-vUIiEh&_nc_ohc=4tfoJCeuhtoQ7kNvwEbSo7o&_nc_oc=Admf2Y40k_cm-a4DZJ0CM8WjwJ08suBSEPd5xiLajjB7Zpg8fD0DWUBvK8402RwlCZM&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=faHWSGdbV2hoCFWpLLNSTQ&oh=00_AfuTSr2uTuPkzMg-BXAJE07yFvqVpxoo2sGjKrd0LkMLLw&oe=699AD391"
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Hero */}
      <section className="relative w-full h-[240px] md:h-[340px] lg:h-[540px] overflow-hidden bg-background">
        <div className="absolute top-0 right-0 w-full h-10 bg-background z-0"></div>
        <div className="absolute inset-0 w-full h-full z-0">
           <AnimatePresence mode="popLayout">
             <motion.img 
               key={currentImageIndex}
               src={heroImages[currentImageIndex]}
               alt="Construction"
               initial={{ x: "100%" }}
               animate={{ x: 0 }}
               exit={{ x: "-100%" }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
               className="absolute w-full h-full object-cover"
             />
           </AnimatePresence>
           <div className="absolute inset-0 bg-gradient-to-r md:from-transparent md:via-background/5 md:to-background/10 from-foreground/40 via-foreground/30 to-foreground/20 pointer-events-none z-10"></div>
        </div>

        <div className="absolute top-0 left-0 w-full h-12 bg-background z-10"></div>

        <div className="hidden md:block absolute top-0 left-0 w-[75%] md:w-[50%] lg:w-[42%] h-full bg-secondary z-20 shadow-2xl" 
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
        ></div>

        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full z-30 flex items-center h-12">
           <div className="w-full px-3 md:px-5 flex justify-between items-center h-full">
              <div className="z-50 flex flex-col items-start">
                <Link to="/" className="flex items-center gap-1.5">
                  <img 
                    src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499412170_2508487489508379_5327772305037987538_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFXLndQEp47DcRofi1ba4dOOHaPjsD9yrk4do-OwP3KuVSmCsbbPakFXkpJRAmfYYIBuYP6JZmWepwOy_Sl25mr&_nc_ohc=lF6RLjx8K1wQ7kNvwFyRVhC&_nc_oc=AdlnasVbJT6kYyLBZ-o7dWwSxqjcYCu6ZXZ9WEzXkd8hgpdFk_3-azYJO-Wsd8c4bpk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=EdmRitnQzB1cjkqr_AOSqg&oh=00_AfvbFO_ezxHqN-AJAQrRP2CTLsXDdkDXnwZxbl1ME22i6Q&oe=699A9D75" 
                    alt="JM" 
                    className="h-8 md:h-9 w-auto object-contain rounded-full border border-primary-foreground/60 shadow-sm"
                  />
                  <span className="text-primary-foreground text-[7px] md:text-[8px] uppercase tracking-widest font-bold hidden md:inline">We Depend On God</span>
                </Link>
              </div>

              <div className="hidden md:flex gap-4 lg:gap-5 items-center z-50 pr-1 absolute md:left-[75%] lg:left-[71%] transform -translate-x-1/2">
                 {[
                   { path: "/", label: "Home" },
                   { path: "/about", label: "About" },
                   { path: "/services", label: "Services" },
                   { path: "/projects", label: "Projects" },
                   { path: "/contact", label: "Contact" },
                 ].map(({ path, label }) => (
                   <Link key={path} to={path} className="text-secondary font-semibold text-[10px] lg:text-[11px] hover:text-primary transition-colors font-heading">{label}</Link>
                 ))}
                 <Link to="/contact" className="text-secondary font-semibold text-[10px] lg:text-[11px] hover:text-primary transition-colors font-heading whitespace-nowrap border border-secondary/30 px-2.5 py-1 rounded-md hover:bg-secondary hover:text-primary-foreground">Get a Quote</Link>
              </div>

               <div className="md:hidden z-50 text-secondary bg-background p-1.5 rounded shadow-sm cursor-pointer mr-2" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <X size={14} /> : <Menu size={14} />}
               </div>
           </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed top-12 right-0 w-3/4 bg-background z-40 shadow-lg border-l border-border overflow-hidden"
            >
              <div className="flex flex-col p-3 gap-2.5 items-center">
                 {["Home", "About", "Services", "Projects", "Contact"].map((label) => (
                   <Link key={label} to={label === "Home" ? "/" : `/${label.toLowerCase()}`} onClick={() => setIsOpen(false)} className="font-semibold text-xs text-secondary hover:text-primary">{label}</Link>
                 ))}
                 <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-1 px-4 py-1.5 bg-primary text-primary-foreground font-semibold rounded-lg shadow-sm uppercase tracking-wide text-[10px]">
                   Get a Quote
                 </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="container relative h-full mx-auto px-3 z-20 flex items-center justify-center md:justify-start">
          <div className="w-full relative pl-1 md:pl-0 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-[500px] lg:max-w-[600px] mx-auto md:mx-0"
            >
              <h1 className="text-sm md:text-lg lg:text-3xl font-black leading-[1.3] lg:leading-[1.2] mb-2 md:mb-3 font-heading tracking-tight drop-shadow-sm pt-14 md:pt-0">
                <span className="text-primary-foreground drop-shadow-md">We build your </span>
                <span className="text-accent drop-shadow-md">dream house</span>
                <span className="text-primary-foreground drop-shadow-md"> well and professionally</span>
              </h1>

              <div className="hidden md:block text-accent text-lg md:text-xl lg:text-3xl mb-2 tracking-wide" style={{ fontFamily: '"Dancing Script", cursive' }}>
                JM Leads The Way!
              </div>

              <div className="flex flex-row gap-2 justify-center md:justify-start pt-1 md:pt-0">
                <Link 
                  to="/projects"  
                  className="inline-flex items-center justify-center px-3 py-1 md:px-4 md:py-1.5 bg-[hsl(122,39%,49%)] hover:bg-[hsl(122,39%,42%)] text-primary-foreground rounded-full font-semibold text-[8px] md:text-[10px] lg:text-[11px] uppercase tracking-wide shadow-sm transition-transform hover:scale-105"
                >
                  View Projects
                </Link>
                <Link 
                  to="/contact"  
                  className="inline-flex items-center justify-center px-3 py-1 md:px-4 md:py-1.5 bg-background text-secondary hover:bg-muted rounded-full font-semibold text-[8px] md:text-[10px] lg:text-[11px] uppercase tracking-wide shadow-sm transition-transform hover:scale-105 border border-transparent"
                >
                  Contact Us →
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="hidden lg:flex absolute bottom-3 right-3 z-10 gap-2">
             <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }} className="w-24 h-18 shadow-md">
                <img src={projResidential} alt="Project 1" className="w-full h-full object-cover" />
             </motion.div>
             <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="w-24 h-18 shadow-md">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" alt="Project 2" className="w-full h-full object-cover" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-10 bg-background overflow-hidden">
        <div className="container mx-auto px-3">
          <div className="flex flex-row gap-3 md:gap-5 lg:gap-6 items-start justify-center">
            
            <div className="w-1/2 lg:w-[42%] relative max-w-[300px] lg:max-w-[340px] flex-shrink-0">
               <div className="grid grid-cols-2 gap-0.5 md:gap-1 rounded-xl overflow-hidden">
                 {[
                   "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497887985_2503848883305573_7681431306909647287_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEIPJKaGsRJ_YYzGAxTDgVuyBkRmWE_ImPIGRGZYT8iY7_y24JKF7y0Bv1P9EhMihbEXXXFnl5yHRx6J28LasZ2&_nc_ohc=KR0VQV9iCtkQ7kNvwHva3Qh&_nc_oc=AdkKwXthdNDhwrkc2HK690CLfBrpD9z18LcnR4AvbET6fB4etzq9Jgk8MLhkc8ywHDE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=5q5W-VjmW0fsljcLy35cIg&oh=00_AfuJsgKKzKCSh78C-cijCmjyF7SnbMi0EruPiVUKXCL3VA&oe=699AE509",
                   "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499651742_2506904226333372_395211802453963508_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHozDTJsCv-mHJP9cVRsbeOha361LckHpaFrfrUtyQelgoGdiowmAHyPe5Aje81xM4P1rM_Pb9yhKpJlyStIPT2&_nc_ohc=Fa7fL1sLUfoQ7kNvwHMWNJ7&_nc_oc=Adnk1Jy1zdtLu9BkqMZxi-2oLfnVWtwZWcf6NZ9FMYc_lk8l-YgMHMXQd46_qZFcRWI&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=AwwNq6CmP39rhQbwJOveBg&oh=00_AftoVyhmIfFWwhqQy1nDmbMsMQzgmjCORFMDhti2iORI0w&oe=699AD971",
                   "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497927324_2503742366649558_2232254236741211719_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGe7dS0nuHYWd21ZTXzcMWbbcHx5Ct5GWttwfHkK3kZa66oAlDC5zAOVqNRbdDxzy_I5XfPGAaL9gK6u-vUIiEh&_nc_ohc=4tfoJCeuhtoQ7kNvwEbSo7o&_nc_oc=Admf2Y40k_cm-a4DZJ0CM8WjwJ08suBSEPd5xiLajjB7Zpg8fD0DWUBvK8402RwlCZM&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=faHWSGdbV2hoCFWpLLNSTQ&oh=00_AfuTSr2uTuPkzMg-BXAJE07yFvqVpxoo2sGjKrd0LkMLLw&oe=699AD391",
                   "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/518004339_2547997688890692_3951651927707410792_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFy2BLcEU0sNLmVM0Bjt-5YvC1VytgC2FS8LVXK2ALYVIWNfmbZgM8nKNwA-ZeZi8RO-fvvhIIJ1aWY0Xruglet&_nc_ohc=EZozmQMLPWoQ7kNvwFKPfD3&_nc_oc=Adm-U8exkcHHfekVwMnmPpqdEw37R-5rZROOeE5ERhI3UN_Q4AcAnbRVpGNsjllYU1s&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=IHfbK_WiV2AtPmY9sAYjMw&oh=00_Afu5nqOuA7i-Fb_etJr-Pjd6nlEM20BoVzY4G-siUcf0Zg&oe=699A94DC"
                 ].map((src, i) => (
                   <div key={i} className="aspect-[4/3] w-full overflow-hidden">
                      <img src={src} alt={`Work ${i+1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                   </div>
                 ))}
               </div>
               
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[26%] aspect-square">
                 <div className="w-full h-full bg-background rounded-full shadow-md flex flex-col items-center justify-center border-2 border-background">
                    <Check className="w-[35%] h-[35%] text-secondary stroke-[4]" />
                    <span className="text-[6px] md:text-[7px] lg:text-[8px] font-semibold text-secondary leading-none mt-0.5">Pro licensed</span>
                 </div>
               </div>
            </div>

            <div className="w-1/2 lg:w-1/2 lg:pl-4">
              <h2 className="text-secondary font-semibold text-xs md:text-sm mb-1.5 font-heading">Our company</h2>
              <p className="text-muted-foreground mb-3 md:mb-4 leading-relaxed text-[9px] md:text-[10px] font-normal text-justify">
                JM Structural Solutions is a dedicated team of architects, structural engineers, and contractors committed to bringing your vision to life.
              </p>
              
              <p className="text-secondary font-medium mb-2 text-[9px] md:text-[10px]">
                We have successfully delivered
              </p>

              <div className="flex gap-3 md:gap-6 mb-3 md:mb-4 flex-wrap">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <h3 className="text-primary text-xs md:text-sm font-semibold mb-0">{stat.value}</h3>
                    <p className="text-secondary text-[8px] md:text-[9px] font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link 
                to="/about" 
                className="inline-flex items-center px-3 md:px-4 py-1 md:py-1.5 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors text-[9px] md:text-[10px] shadow-sm rounded-md"
                onClick={() => window.scrollTo(0, 0)}
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-5 bg-background">
        <div className="container mx-auto px-3">
          <div className="text-center mb-3">
             <h2 className="text-secondary font-semibold text-sm md:text-base mb-0.5 font-heading">Our services</h2>
             <p className="text-muted-foreground text-[9px] max-w-md mx-auto leading-relaxed">
               Our services include building new buildings and renovating old buildings
             </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
             {services.map((service) => (
                <div 
                  key={service.id} 
                  className={`p-3 transition-all duration-300 group relative flex flex-col justify-start rounded-md ${
                     service.highlight 
                     ? "bg-secondary text-primary-foreground shadow-md" 
                     : "bg-background"
                  }`}
                >
                  {service.highlight && (
                    <div className="absolute inset-0 z-0 overflow-hidden rounded-md">
                       <img src={heroImg} className="w-full h-full object-cover opacity-10 mix-blend-overlay" alt="" />
                       <div className="absolute inset-0 bg-secondary/95 rounded-md" />
                    </div>
                  )}

                  <div className={`relative z-10 mb-2 ${service.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {service.title === "Renovation" ? (
                       <div className="relative w-5 h-5">
                          <Hammer className="absolute top-0 left-0 w-3 h-3 transform rotate-12" strokeWidth={2} />
                          <Wrench className="absolute bottom-0 right-0 w-3 h-3 transform -rotate-[100deg] translate-x-0.5" strokeWidth={2} />
                       </div>
                    ) : (
                       <service.icon size={18} strokeWidth={service.highlight ? 1.5 : 2} />
                    )}
                  </div>
                  
                  <h4 className={`relative z-10 text-[10px] font-semibold mb-0.5 ${service.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {service.title}
                  </h4>
                  <p className={`relative z-10 text-[8px] leading-relaxed ${service.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {service.description}
                  </p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background py-6 md:py-8 relative overflow-hidden">
        <div className="container mx-auto px-3 relative z-10">
           <div className="text-center mb-4 md:mb-6">
              <h3 className="text-primary font-semibold text-[9px] md:text-[10px] mb-0.5 uppercase tracking-wider">Our benefits</h3>
              <h2 className="text-secondary text-sm md:text-base lg:text-lg font-semibold max-w-xl mx-auto leading-tight">
                Here's why you should collaborate with our team
              </h2>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3 mb-8 md:mb-10">
              {[
                { title: "Flexible time", desc: "We work whenever you are ready to build. Fast, professional, and on your schedule.", img: projResidential },
                { title: "Customizable design", desc: "We can design your buildings, but we are open if you want to customize your design.", img: projCommercial },
                { title: "Negotiable price", desc: "We're open to negotiate the price with you, and we will give the best price.", img: projInfra },
              ].map((card, i) => (
                <div key={i} className="group relative overflow-hidden rounded-md bg-secondary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg h-[140px] md:h-[160px]">
                   <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity">
                      <img src={card.img} className="w-full h-full object-cover mix-blend-overlay" alt="" />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-transparent" />
                   </div>
                   <div className="relative z-10 p-3 h-full flex flex-col items-center justify-center text-center">
                      <div className="w-6 h-6 bg-primary-foreground/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-1.5 text-primary-foreground group-hover:bg-primary-foreground group-hover:text-secondary transition-all shadow-inner">
                        <Check className="w-3 h-3" strokeWidth={3} />
                      </div>
                      <h4 className="text-primary-foreground text-[11px] md:text-xs font-semibold mb-0.5 drop-shadow-md">{card.title}</h4>
                      <p className="text-primary-foreground/80 text-[8px] md:text-[9px] leading-relaxed px-1 drop-shadow-sm font-medium">
                        {card.desc}
                      </p>
                   </div>
                </div>
              ))}
           </div>

           {/* Our Works */}
           <div className="text-center mb-6 pt-4 border-t border-border">
              <h3 className="text-secondary font-semibold text-sm md:text-base mb-1 mt-4">Our works</h3>
              <p className="text-muted-foreground text-[9px] max-w-md mx-auto leading-relaxed">
                Here are some of the best results from our building, housing, and interior design projects.
              </p>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-2 h-[200px] md:h-[220px] mb-6 max-w-3xl mx-auto">
              {[
                { src: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497856400_2503475473342914_934757569356650226_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeELLrXXofVUCfBLu55YgdSaAfVkZAps1lIB9WRkCmzWUuS76FrsvouuaYn01Nw9pYDkVM2psNQnEUUS_xww-RJc&_nc_ohc=VRvqaWwTSCMQ7kNvwFD6LPG&_nc_oc=AdnKTIrPYaEicmrHvAib_1n4BNAiGEyuzTtgT7n2yVQBvJWE1sAENgCjJoR7Dpixw4w&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=op_sNk9H6Cy1hqmpm3piMw&oh=00_Afs5NklA6giVRWoAgZDQzGffnL7Chf9bZP1kb1OniF5x3g&oe=699A9386", cls: "col-span-1 row-span-1" },
                { src: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/630055397_2753208011702991_7404026679065351647_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGYIDFQTXTOrXAA4zTyPIa_HZVqf7QHOvkdlWp_tAc6-dtXkA-_YKQiJIZgjfzGZESccJb1-XeybqbZbpfeCbQ2&_nc_ohc=QCtEs-HyM94Q7kNvwGq7Z-T&_nc_oc=AdltAGC0KkrweSvLDxB_0txfuJ5iV9-iVq6gNotUi5588YBGMMjW3HRFh1cTh9PAsPE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=ueeGnFRWSUyvIlnuFAdG2Q&oh=00_AfvLPvQjh2kPC_KIGNPxAdRw9ghsceeyhryffbxrFHEdRg&oe=699AC33A", cls: "col-span-1 row-span-2", fit: "object-contain" },
                { src: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497746584_2503719489985179_5232636595511515025_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH9O7vHHzWrFcxvAnK2ibw3hPiYL8ueM5qE-Jgvy54zmmqe7Vp1ap32Bt2jmTnWd2iSsCUsRlYmBsA1KOVprJbI&_nc_ohc=W6p3d3WlQ4UQ7kNvwFAade6&_nc_oc=Adl8rG7owPUb9_PBMnMX5yVzXZ1lG7d6NtjykDwDc3VhwqyoUmzx0sZA4g7p2ZmqCIQ&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=K7FzquIMMrsy8cUECb7RRg&oh=00_AftWi8C0HdXhwOk-_QdttWvJbXTApEakmjBKj0rt40uE7Q&oe=699A9FBA", cls: "col-span-2 row-span-1" },
                { src: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/634940167_2757324491291343_3637851233721734552_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHrfYduek2DIuZnOkQdinRYUrrsAHL5IzhSuuwAcvkjOIMy3Zx60GrU_TE0pQDAoKmc5EZBzBgVMnX_Z1pRybyR&_nc_ohc=3wbgnbr-VV0Q7kNvwF-70aC&_nc_oc=AdlXX3UwWL8PI10sEJy8X1OR69oMMG127mr-xBNsR7OHG1BIZU2S4XymTDf2vuqCQC0&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=AbWFKyKBI36x-ooJolNIdA&oh=00_AfsnevTb4eFl-6je3AcDUO2e34TSPI5akeF9IJMVxCWyfQ&oe=699AA694", cls: "col-span-1 row-span-1" },
                { src: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/633325295_2753208025036323_7714688810793687048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGN4riU7OLryVkFCB8RGG2NBfkyJyjLUMgF-TInKMtQyA-DxK1tpQe3tjsM9tQM5lLzJcG4SUy8HDuHRLE0k3OW&_nc_ohc=ZYIkGMBCO9sQ7kNvwEqBth9&_nc_oc=AdkW5xwPO-BzvxFCVnJbuKOU20TXRsixrxWpW_CFf0BDzsxx990HdOUaI5SSpvjk8lA&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=4LiqdIl6Osrv_kyHyPgJ9A&oh=00_AftshrtcCXSFVKZSRSthCIP4Se7zkqOpbGE40AlvI-gtRg&oe=699AA0E5", cls: "col-span-1 row-span-1" },
              ].map((item, i) => (
                <div key={i} className={`${item.cls} overflow-hidden rounded-xl group relative cursor-pointer shadow-sm`}>
                   <img src={item.src} className={`w-full h-full ${item.fit || "object-cover"} transition-transform duration-500 group-hover:scale-110`} alt="Work" />
                   <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/15 transition-colors"></div>
                </div>
              ))}
           </div>

           <div className="text-center pb-1">
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-4 py-1.5 border border-secondary/30 text-secondary font-semibold text-[9px] rounded transition-all hover:bg-secondary hover:text-primary-foreground"
              >
                See more works
              </Link>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-5 md:py-6 pb-8 md:pb-10 overflow-visible">
          <div className="container mx-auto px-3">
             <div className="flex flex-col lg:flex-row items-center">
                
                <div className="w-full lg:w-[35%] z-10 mb-3 md:mb-4 lg:mb-0 lg:pr-4">
                   <h2 className="text-secondary text-sm md:text-base font-semibold mb-1.5 font-heading tracking-tight">What our clients say?</h2>
                   <p className="text-muted-foreground text-[9px] md:text-[10px] mb-3 leading-relaxed font-medium">
                     See what our clients say about their new home
                   </p>
                    <Link 
                        to="/projects" 
                        className="inline-flex items-center justify-center px-3 py-1 bg-primary text-primary-foreground font-semibold text-[9px] md:text-[10px] shadow-sm hover:bg-primary/90 transition-all rounded-sm"
                    >
                        See more
                    </Link>
                </div>

                <div className="w-full lg:w-[65%] relative">
                   <div className="relative w-full h-[160px] md:h-[200px] lg:h-[230px]">
                      <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498598594_2504305999926528_709694308130276759_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH0LQuKW2jLY2VCel3WEJlodF3nQAiyzCR0XedACLLMJG2rzPfEfAPZFHVIXkClzZtLvy_jW2zSy3pZ7_6Fre1h&_nc_ohc=YoU40oYEODUQ7kNvwEc16KT&_nc_oc=Adma9LNNMJpwGoUHmRytQvPdUoouWzTX1eesnKRSgeslfchilEDgxnPPF_fSGaHV7Wk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=JDi2QPneS9pIJCvNGtBkjA&oh=00_AfvairwCq3m-aFlEtVfHe_39vPCXxTeQxPigTtSKZekLjw&oe=699AA060" className="w-full h-full object-cover shadow-md" alt="Client House" />
                   </div>
                   
                   <div className="absolute -bottom-5 md:-bottom-6 right-0 lg:-right-3 w-[88%] md:w-[72%] lg:w-[62%] bg-secondary p-2.5 md:p-3 shadow-md rounded-sm z-20">
                         <div className="absolute -top-4 md:-top-5 left-3 w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-background overflow-hidden shadow-sm bg-muted">
                            <img src="https://i.pravatar.cc/150?img=60" alt="Client" className="w-full h-full object-cover" />
                         </div>
                         <div className="mt-2.5">
                             <p className="text-primary-foreground text-[8px] md:text-[9px] italic leading-4 mb-1.5 font-light">
                               "I really happy to see the result my new home. It's really good house and good price too. And they work so fast because they have the best team."
                             </p>
                             <p className="text-primary-foreground font-semibold text-[9px] md:text-[10px] tracking-wide">
                               - Mr. Roberto
                             </p>
                         </div>
                   </div>
                </div>
             </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
