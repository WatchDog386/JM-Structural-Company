
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Building2,
  HardHat,
  Ruler,
  Hammer,
  Wrench,
  CheckCircle2,
  Check,
  PencilRuler,
  Armchair,
  Settings
} from "lucide-react";
import Footer from "@/components/Footer";
// Images
import heroImg from "@/assets/hero-construction-v2.jpg";
import aboutImg from "@/assets/about-team-v2.jpg";
import projCommercial from "@/assets/project-commercial-v2.jpg";
import projResidential from "@/assets/project-residential-v2.jpg"; 
import projInfra from "@/assets/project-bridge-v2.jpg";

const services = [
  { 
    id: 1,
    icon: PencilRuler, 
    title: "Design building/house", 
    description: "We have an architect for design new buildings",
    highlight: true
  },
  { 
    id: 2,
    icon: Armchair, 
    title: "Interior Design", 
    description: "We have an interior designer for design your perfect inside house" 
  },
  { 
    id: 3,
    icon: Building2, 
    title: "Build from scratch", 
    description: "We have a contractor for build new building from scratch" 
  },
  { 
    id: 4,
    icon: Hammer, 
    title: "Renovation", 
    description: "We can also renovate or rebuilds new buildings/house" 
  },
];

const stats = [
  { value: "50+", label: "Clients" },
  { value: "30+", label: "House" },
  { value: "20+", label: "Building" },
];

const heroImages = [
  "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498206694_2503475463342915_2948985823118728548_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFoUkScQhvo6-IoAaOGrMxupNA54SvFd9Ck0DnhK8V30FprAUFY_N890DYs45KP9KnizXUBQYehkQt3fF64mdZx&_nc_ohc=cDZn3XimR5UQ7kNvwE0WKX-&_nc_oc=AdlLJutrGlyyhvhE2cu937fRMN6eWeEpr_hZGPXqz8NEnaGVyyh8Clru3H2mMPFzZQE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=sAkGrgD7GaAAQrJBtrDLUQ&oh=00_AfujRTbz-awef3aLpoMBSiZd2e0QCT6hIfZ0Y4Yu9WTVbg&oe=699A8753",
  "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498160853_2504197496604045_7291734859850757276_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeE349GghmZjuTaf_f9SqI3QluNCtOKo5WGW40K04qjlYbfI-7kHluxkzF2y-LzWReX-eukmnnpCQtv2quiI1UYP&_nc_ohc=esuaB_4zwLoQ7kNvwHYj_7W&_nc_oc=Adnk1MKfGMtnWXoOS-4lajCrk1pzxxHpoyHEaK3Ro8SElEgQQX3OrqmEmVp0JIiS6rs&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=uMZHAScw8OMhC7p3_b5DrA&oh=00_Afuuhmdf0uWtmTkWf7DIo62A8KCSn9yp_acVUfCXx37HTg&oe=699AACDB",
  "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497804217_2504192899937838_6743806134746177182_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeHU7bSjwRmwYxNSIJtTB_rFrEfBL2kaEt-sR8EvaRoS34-gZkBdXdDBQfDBlAxc8T1izL4OsRYj6Al-cB1JxOoL&_nc_ohc=KahvYBpuI9cQ7kNvwHe3Y3M&_nc_oc=AdmCDWhbzlFjQ6MI8ycLHHLMRwJSHDVlbs4Pyqsp3x2Zd5OKwZOzkO6GqkUzY0NxYQA&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=fstc_PTy0AAtM7HGu9iYnw&oh=00_AftW5otm0MHgEmXYJheo28g1ofhi7Gt6HxXTsVS2H8yaeQ&oe=699AC2B6",
  "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499444120_2504193169937811_4698375073619860044_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFNqI1-u7IgdqdaLK76RsLlsKCVRLRymjGwoJVEtHKaMRllBykcG4A_eC7yP79lomwrVzsyyWS7FYcmHQqVttTK&_nc_ohc=mWtGnYHmqzQQ7kNvwF1ttSC&_nc_oc=Admf6TjcuAvH3Zt4Tg4Qj8RwMlvR9cIKU7gago2mw_cKq4ZiYdO7MKgunhENtC9CQ4M&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Hkr1BaIqR2k_RR6Yr4Tpmg&oh=00_AftbnFor5UhoY4SZUgACwInPe2msPNTLWhlKkHy4IhVO3Q&oe=699AAE2C"
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Hero Section with Merged Navbar */}
      <section className="relative w-full h-[500px] lg:h-[640px] overflow-hidden bg-white">
        
        {/* White Header Top Strip Background (Right Side) */}
        <div className="absolute top-0 right-0 w-full h-14 bg-white z-0"></div>

        {/* Full Image Background */}
        <div className="absolute inset-0 w-full h-full z-0 top-0">
           <AnimatePresence mode="popLayout">
             <motion.img 
               key={currentImageIndex}
               src={heroImages[currentImageIndex]}
               alt={`Luxury Home Background ${currentImageIndex + 1}`} 
               initial={{ x: "100%" }}
               animate={{ x: 0 }}
               exit={{ x: "-100%" }}
               transition={{ duration: 1, ease: "easeInOut" }}
               className="absolute w-full h-full object-cover mt-0"
             />
           </AnimatePresence>
           {/* Soft Overlay for text readability on the right side if needed */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/10 pointer-events-none z-10"></div>
        </div>

        {/* WHITE HEADER BACKGROUND (Right Side Only really visible) */}
        <div className="absolute top-0 left-0 w-full h-16 bg-white z-10"></div>

        {/* BLUE DIAGONAL OVERLAY - Extends from top to bottom, cutting the screen */}
        <div 
          className="absolute top-0 left-0 w-[75%] md:w-[50%] lg:w-[42%] h-full bg-[#0E4861] z-20 shadow-2xl" 
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
        ></div>

        {/* NAVBAR - Sitting on top of everything */}
        <nav className="absolute top-0 left-0 w-full z-30 flex items-center h-20">
           <div className="container mx-auto px-4 flex justify-between items-center h-full">
              {/* Logo - Sits in the Blue Zone */}
              <div className="z-50 pl-2 md:pl-0 flex flex-col items-start md:items-center">
                <img 
                  src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499412170_2508487489508379_5327772305037987538_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFXLndQEp47DcRofi1ba4dOOHaPjsD9yrk4do-OwP3KuVSmCsbbPakFXkpJRAmfYYIBuYP6JZmWepwOy_Sl25mr&_nc_ohc=lF6RLjx8K1wQ7kNvwFyRVhC&_nc_oc=AdlnasVbJT6kYyLBZ-o7dWwSxqjcYCu6ZXZ9WEzXkd8hgpdFk_3-azYJO-Wsd8c4bpk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=EdmRitnQzB1cjkqr_AOSqg&oh=00_AfvbFO_ezxHqN-AJAQrRP2CTLsXDdkDXnwZxbl1ME22i6Q&oe=699A9D75" 
                  alt="JM Structural Logo" 
                  className="h-12 md:h-16 w-auto object-contain rounded-full border-2 border-white shadow-lg mb-1"
                />
                <span className="text-white text-[8px] md:text-[10px] uppercase tracking-widest font-bold shadow-sm">We Depend On God</span>
              </div>

              {/* Navigation Links - Sits in the White Zone */}
              <div className="hidden md:flex gap-6 lg:gap-8 items-center z-50 pr-2">
                 <Link to="/" className="text-[#0E4861] font-bold text-xs lg:text-sm hover:text-[#008fb3] transition-colors font-heading">Home</Link>
                 <Link to="/about" className="text-[#0E4861] font-bold text-xs lg:text-sm hover:text-[#008fb3] transition-colors font-heading">About</Link>
                 <Link to="/services" className="text-[#0E4861] font-bold text-xs lg:text-sm hover:text-[#008fb3] transition-colors font-heading">Services</Link>
                 <Link to="/projects" className="text-[#0E4861] font-bold text-xs lg:text-sm hover:text-[#008fb3] transition-colors font-heading">Projects</Link>
                 <Link to="/contact" className="text-[#0E4861] font-bold text-xs lg:text-sm hover:text-[#008fb3] transition-colors font-heading">Contact</Link>
                 <Link to="/contact" className="text-[#0E4861] font-bold text-xs lg:text-sm hover:text-[#008fb3] transition-colors font-heading">Get a Quote</Link>
              </div>


               {/* Mobile Menu Toggle */}
               <div className="md:hidden z-50 text-[#0E4861] bg-white p-2 rounded shadow-md cursor-pointer mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
               </div>
           </div>
        </nav>

        {/* Hero Content */}
        <div className="container relative h-full mx-auto px-4 z-20 flex items-center">
          <div className="w-full relative pt-0 pl-2 md:pl-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[800px] lg:max-w-[900px]"
            >
              <h1 className="text-3xl md:text-4xl lg:text-[3.25rem] font-bold leading-[1.3] lg:leading-[1.4] mb-6 text-white font-heading tracking-tight drop-shadow-lg">
                Design and build with us: <br />
                <span className="block mt-2">JM Structural Solutions.</span>
                <span className="block mt-1 text-xl md:text-2xl lg:text-3xl font-medium text-[#00A3CC]">JM LEADS THE WAY !</span>
              </h1>
              
              <p className="text-white/90 text-xs md:text-sm mb-8 max-w-sm leading-relaxed font-light tracking-wide">
                Our team can build a house according to your wishes. <br />
                Any design and concept, we will help make it happen
              </p>
              
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center min-w-[140px] h-12 bg-gradient-to-r from-[#00A3CC] to-[#008fb3] text-white rounded font-semibold transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px] text-xs uppercase tracking-widest"
              >
                Contact us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About / Our Company Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Left Image Grid */}
            <div className="w-full lg:w-1/2 relative">
               <div className="grid grid-cols-2 gap-4">
                 <div className="rounded-lg overflow-hidden h-40 md:h-56">
                    <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/526598029_2569821540041640_883920338921018576_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeErCjCHvWSck4KYhGUPMe6anVY5bQLKq8idVjltAsqryLJf2RuaZ-EOeIZ9Mnykwj7opAw992k7KyZ-TZsesSSI&_nc_ohc=l9tqNChX3T4Q7kNvwGRiWUH&_nc_oc=Adk6U29QbUkxZS7fxpD2893nTHFh6NMZXoAohGRaw-CD1LQ0rQlWwreonj-jF1J_Xsk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=-cCF-S5yDIL_E7fcOOqouA&oh=00_Aftr0VLLl57BAu7eCJkRtq7jG1UCQ6Dm9Hxkw9bMG6kpow&oe=699AA1D4" alt="Residential" className="w-full h-full object-cover" />
                 </div>
                 <div className="rounded-lg overflow-hidden h-40 md:h-56">
                    <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/518004339_2547997688890692_3951651927707410792_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFy2BLcEU0sNLmVM0Bjt-5YvC1VytgC2FS8LVXK2ALYVIWNfmbZgM8nKNwA-ZeZi8RO-fvvhIIJ1aWY0Xruglet&_nc_ohc=EZozmQMLPWoQ7kNvwFKPfD3&_nc_oc=Adm-U8exkcHHfekVwMnmPpqdEw37R-5rZROOeE5ERhI3UN_Q4AcAnbRVpGNsjllYU1s&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=IHfbK_WiV2AtPmY9sAYjMw&oh=00_Afu5nqOuA7i-Fb_etJr-Pjd6nlEM20BoVzY4G-siUcf0Zg&oe=699A94DC" alt="Construction" className="w-full h-full object-cover" />
                 </div>
                 <div className="rounded-lg overflow-hidden h-40 md:h-56">
                    <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498138904_2502807786743016_2138920553055391479_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeEAz3DHKKRXoQUsK-_Zb6NH0YY6CB7JTALRhjoIHslMAs_xPXO9UGDBzvbmp7Gtix-NmYGjDOs_G5VgJczCmIWn&_nc_ohc=uWGIgpk3YJMQ7kNvwEKAJuz&_nc_oc=AdlODKzgYPXzsNDVcoH2ffNXf9Jlwg07VxpHTRlDJajJfbDiEYXWox604TX78ng6LI0&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=D3ILqhkwYnFChgoVMm6_qw&oh=00_AfvIGzMH0HKI3BLaELmVaJEDub6KtCKjsEfFBPY9zPZs0w&oe=699A9067" alt="Architecture" className="w-full h-full object-cover" />
                 </div>
                 <div className="rounded-lg overflow-hidden h-40 md:h-56">
                    <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/581457644_2669241823432944_2589876573066385893_n.jpg?stp=cp6_dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEZg1PPF6IQvEhiN08DjK6tMC6tPMP2zmMwLq08w_bOY1SEoqk5u4L9z271MyeI_KrCmo1wvW_zzepokrS8RtIB&_nc_ohc=QZAgSKP4am8Q7kNvwEL8X-U&_nc_oc=AdkIf_JRTCBA4GJli6oeqPX1nZTzRL9kdi5rd4wmSIvMGkyn582X4dATC5BAz7YTYk8&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=Thm6en8wZW3-Fqdv_0FI8A&oh=00_AftCitUYdllP235_PZjg3DJdodq32GmY_DmI9dEFUZAR3A&oe=699ABDA8" alt="Commercial" className="w-full h-full object-cover" />
                 </div>
               </div>
               
               {/* Center Badge */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-2xl z-20">
                 <div className="w-24 h-24 rounded-full flex flex-col items-center justify-center bg-white text-[#0e4c66]">
                    <CheckCircle2 className="w-10 h-10 mb-1 text-[#0E4861]" strokeWidth={3} />
                    <span className="text-[11px] font-bold text-[#0E4861] leading-tight">Pro licensed</span>
                 </div>
               </div>
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2 lg:pl-10">
              <h2 className="text-[#0E4861] font-bold text-2xl mb-6 font-heading">Our company</h2>
              <p className="text-gray-500 mb-8 leading-relaxed text-[15px] font-normal text-justify">
                JM Structural Solutions is a dedicated team of architects, structural engineers, and contractors committed to bringing your vision to life. We specialize in designing and constructing durable, aesthetically pleasing buildings that ensure comfort and safety for years to come.
              </p>
              
              <p className="text-[#0E4861] font-medium mb-6 text-sm">
                We have successfully delivered
              </p>

              <div className="flex gap-12 mb-10">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <h3 className="text-[#008fb3] text-xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-[#0E4861] text-sm font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link 
                to="/about" 
                className="inline-flex items-center px-8 py-3 bg-[#008fb3] text-white font-medium hover:bg-[#007a99] transition-colors text-sm shadow-lg rounded-sm"
                onClick={() => window.scrollTo(0, 0)}
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
             <h2 className="text-[#0E4861] font-bold text-2xl mb-6 font-heading">Our services</h2>
             <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
               Our services include building new buildings <br/>and renovating old buildings
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
             {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`p-10 transition-all duration-300 group relative flex flex-col justify-start ${
                     service.highlight 
                     ? "bg-[#0E4861] text-white shadow-2xl" 
                     : "bg-white"
                  }`}
                >
                  {/* Background Image for Highlight Card */}
                  {service.highlight && (
                    <div className="absolute inset-0 z-0 overflow-hidden">
                       <img src={heroImg} className="w-full h-full object-cover opacity-10 mix-blend-overlay" alt="" />
                       <div className="absolute inset-0 bg-[#0E4861]/95" />
                    </div>
                  )}

                  <div className={`relative z-10 mb-8 ${service.highlight ? "text-white" : "text-[#333]"}`}>
                    {service.title === "Renovation" ? (
                       <div className="relative w-12 h-12">
                          <Hammer className="absolute top-0 left-0 w-8 h-8 transform rotate-12" strokeWidth={2.5} />
                          <Wrench className="absolute bottom-0 right-0 w-8 h-8 transform -rotate-[100deg] translate-x-1" strokeWidth={2.5} />
                       </div>
                    ) : (
                       <service.icon size={48} strokeWidth={service.highlight ? 2 : 2.5} />
                    )}
                  </div>
                  
                  <h4 className={`relative z-10 text-xl font-bold mb-4 ${service.highlight ? "text-white" : "text-[#333]"}`}>
                    {service.title}
                  </h4>
                  <p className={`relative z-10 text-sm leading-6 ${service.highlight ? "text-white/80" : "text-gray-500"}`}>
                    {service.description}
                  </p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - White Background */}
      <section className="bg-white py-20 relative overflow-hidden">
        {/* Subtle pattern or gradient overlay for better design - REMOVED for sleek white */}
        
        <div className="container mx-auto px-4 relative z-10">
           {/* Benefits Header */}
           <div className="text-center mb-16">
              <h3 className="text-[#00A3CC] font-bold text-base mb-2 uppercase tracking-wider">Our benefits</h3>
              <h2 className="text-[#0E4861] text-2xl md:text-3xl font-bold max-w-2xl mx-auto leading-tight">
                Here's why you should collaborate with our team
              </h2>
           </div>

           {/* Benefits Cards - Improved Design */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-lg bg-[#145a7a] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-[340px]">
                 <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity">
                    <img src={projResidential} className="w-full h-full object-cover" alt="" />
                 </div>
                 <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-[#0E4861] transition-all">
                      <Check className="w-7 h-7" strokeWidth={3} />
                    </div>
                    <h4 className="text-white text-lg font-bold mb-3">Flexible time</h4>
                    <p className="text-blue-100 text-sm leading-relaxed px-4">
                      We work whenever you are ready to build. Fast, professional, and on your schedule.
                    </p>
                 </div>
              </div>

               {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-lg bg-[#145a7a] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-[340px]">
                 <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity">
                    <img src={projCommercial} className="w-full h-full object-cover" alt="" />
                 </div>
                 <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-[#0E4861] transition-all">
                      <Check className="w-7 h-7" strokeWidth={3} />
                    </div>
                    <h4 className="text-white text-lg font-bold mb-3">Customizable design</h4>
                    <p className="text-blue-100 text-sm leading-relaxed px-4">
                      We can design your buildings, but we are open if you want to customize your design or bring your own architect.
                    </p>
                 </div>
              </div>

               {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-lg bg-[#145a7a] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-[340px]">
                 <div className="absolute inset-0 opacity-20 group-hover:opacity-10 transition-opacity">
                    <img src={projInfra} className="w-full h-full object-cover" alt="" />
                 </div>
                 <div className="relative z-10 p-8 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-[#0E4861] transition-all">
                      <Check className="w-7 h-7" strokeWidth={3} />
                    </div>
                    <h4 className="text-white text-lg font-bold mb-3">Negotiable price</h4>
                    <p className="text-blue-100 text-sm leading-relaxed px-4">
                      Yes, we're open to negotiate the price with you, and we will give the best price for our lovely clients.
                    </p>
                 </div>
              </div>
           </div>

           {/* Our Works Section */}
           <div className="text-center mb-16 pt-8 border-t border-gray-100">
              <h3 className="text-[#0E4861] font-bold text-3xl mb-4 mt-8">Our works</h3>
              <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
                Here are some of the best results from our building, housing, and interior design projects.
              </p>
           </div>

           {/* Works Grid - Masonry Style */}
           <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[500px] mb-12">
              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg group relative cursor-pointer">
                 <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497856400_2503475473342914_934757569356650226_n.jpg?stp=cp6_dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeELLrXXofVUCfBLu55YgdSaAfVkZAps1lIB9WRkCmzWUuS76FrsvouuaYn01Nw9pYDkVM2psNQnEUUS_xww-RJc&_nc_ohc=VRvqaWwTSCMQ7kNvwFD6LPG&_nc_oc=AdnKTIrPYaEicmrHvAib_1n4BNAiGEyuzTtgT7n2yVQBvJWE1sAENgCjJoR7Dpixw4w&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=op_sNk9H6Cy1hqmpm3piMw&oh=00_Afs5NklA6giVRWoAgZDQzGffnL7Chf9bZP1kb1OniF5x3g&oe=699A9386" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work" />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="col-span-1 row-span-2 overflow-hidden rounded-lg group relative cursor-pointer bg-white">
                 <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/630055397_2753208011702991_7404026679065351647_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGYIDFQTXTOrXAA4zTyPIa_HZVqf7QHOvkdlWp_tAc6-dtXkA-_YKQiJIZgjfzGZESccJb1-XeybqbZbpfeCbQ2&_nc_ohc=QCtEs-HyM94Q7kNvwGq7Z-T&_nc_oc=AdltAGC0KkrweSvLDxB_0txfuJ5iV9-iVq6gNotUi5588YBGMMjW3HRFh1cTh9PAsPE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=ueeGnFRWSUyvIlnuFAdG2Q&oh=00_AfvLPvQjh2kPC_KIGNPxAdRw9ghsceeyhryffbxrFHEdRg&oe=699AC33A" className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" alt="Work" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="col-span-2 row-span-1 overflow-hidden rounded-lg group relative cursor-pointer">
                  <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497746584_2503719489985179_5232636595511515025_n.jpg?stp=dst-jpg_s720x720_tt6&_nc_cat=111&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH9O7vHHzWrFcxvAnK2ibw3hPiYL8ueM5qE-Jgvy54zmmqe7Vp1ap32Bt2jmTnWd2iSsCUsRlYmBsA1KOVprJbI&_nc_ohc=W6p3d3WlQ4UQ7kNvwFAade6&_nc_oc=Adl8rG7owPUb9_PBMnMX5yVzXZ1lG7d6NtjykDwDc3VhwqyoUmzx0sZA4g7p2ZmqCIQ&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=K7FzquIMMrsy8cUECb7RRg&oh=00_AftWi8C0HdXhwOk-_QdttWvJbXTApEakmjBKj0rt40uE7Q&oe=699A9FBA" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work" />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg group relative cursor-pointer bg-white">
                  <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/634940167_2757324491291343_3637851233721734552_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHrfYduek2DIuZnOkQdinRYUrrsAHL5IzhSuuwAcvkjOIMy3Zx60GrU_TE0pQDAoKmc5EZBzBgVMnX_Z1pRybyR&_nc_ohc=3wbgnbr-VV0Q7kNvwF-70aC&_nc_oc=AdlXX3UwWL8PI10sEJy8X1OR69oMMG127mr-xBNsR7OHG1BIZU2S4XymTDf2vuqCQC0&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=AbWFKyKBI36x-ooJolNIdA&oh=00_AfsnevTb4eFl-6je3AcDUO2e34TSPI5akeF9IJMVxCWyfQ&oe=699AA694" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work" />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
              <div className="col-span-1 row-span-1 overflow-hidden rounded-lg group relative cursor-pointer">
                  <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/633325295_2753208025036323_7714688810793687048_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGN4riU7OLryVkFCB8RGG2NBfkyJyjLUMgF-TInKMtQyA-DxK1tpQe3tjsM9tQM5lLzJcG4SUy8HDuHRLE0k3OW&_nc_ohc=ZYIkGMBCO9sQ7kNvwEqBth9&_nc_oc=AdkW5xwPO-BzvxFCVnJbuKOU20TXRsixrxWpW_CFf0BDzsxx990HdOUaI5SSpvjk8lA&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=4LiqdIl6Osrv_kyHyPgJ9A&oh=00_AftshrtcCXSFVKZSRSthCIP4Se7zkqOpbGE40AlvI-gtRg&oe=699AA0E5" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Work" />
                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
           </div>

           <div className="text-center pb-4">
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-10 py-3 border border-[#0E4861]/30 text-[#0E4861] font-semibold text-sm rounded transition-all hover:bg-[#0E4861] hover:text-white"
              >
                See more works
              </Link>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 pb-24 overflow-visible">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row items-center">
                
                {/* Left Side - Text */}
                <div className="w-full lg:w-[35%] z-10 mb-8 lg:mb-0 lg:pr-8">
                   <h2 className="text-[#0E4861] text-2xl font-bold mb-4 font-heading tracking-tight">What our clients say?</h2>
                   <p className="text-gray-500 text-sm mb-8 leading-relaxed font-medium">
                     See what our clients say <br /> about their new home
                   </p>
                    <Link 
                        to="/testimonials" 
                        className="inline-flex items-center justify-center px-8 py-3 bg-[#00A3CC] text-white font-bold text-sm shadow-md hover:bg-[#008fb3] hover:shadow-lg transition-all rounded-sm"
                    >
                        See more
                    </Link>
                </div>

                {/* Right Side - Image & Overlay Card */}
                <div className="w-full lg:w-[65%] relative">
                   <div className="relative w-full h-[350px] lg:h-[400px]">
                      <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498598594_2504305999926528_709694308130276759_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH0LQuKW2jLY2VCel3WEJlodF3nQAiyzCR0XedACLLMJG2rzPfEfAPZFHVIXkClzZtLvy_jW2zSy3pZ7_6Fre1h&_nc_ohc=YoU40oYEODUQ7kNvwEc16KT&_nc_oc=Adma9LNNMJpwGoUHmRytQvPdUoouWzTX1eesnKRSgeslfchilEDgxnPPF_fSGaHV7Wk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=JDi2QPneS9pIJCvNGtBkjA&oh=00_AfvairwCq3m-aFlEtVfHe_39vPCXxTeQxPigTtSKZekLjw&oe=699AA060" className="w-full h-full object-cover shadow-xl" alt="Client House" />
                   </div>
                   
                   {/* Floating Dark Blue Card */}
                   <div className="absolute -bottom-12 right-0 lg:-right-6 w-[90%] md:w-[70%] lg:w-[60%] bg-[#0E4861] p-6 shadow-xl rounded-sm z-20">
                         {/* Circle Avatar (Floating on top border) */}
                         <div className="absolute -top-8 left-8 w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-md bg-gray-200">
                            <img src="https://i.pravatar.cc/150?img=60" alt="Client" className="w-full h-full object-cover" />
                         </div>

                         <div className="mt-6">
                             <p className="text-white text-xs italic leading-6 mb-4 font-light">
                               "I really happy to see the result my new home. It's really good house and good price too. And they work so fast because they have the best team. Once again, thankyou. I really appreciate it."
                             </p>
                             <p className="text-white font-bold text-sm tracking-wide">
                               - Mr. Roberto
                             </p>
                         </div>
                   </div>
                </div>
             </div>
          </div>
      </section>

      {/* Partners Section (Restored) */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
           <h3 className="text-[#0E4861] font-bold text-xl mb-12">Our Partners</h3>
           <div className="flex flex-wrap gap-8 items-center justify-between opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-2xl lg:text-3xl font-bold text-gray-400 font-heading">J.construct</span>
              <span className="text-2xl lg:text-3xl font-bold text-gray-400 font-heading">Arch.Point</span>
              <span className="text-2xl lg:text-3xl font-bold text-gray-400 font-heading">BuildIt</span>
              <span className="text-2xl lg:text-3xl font-bold text-gray-400 font-heading">TerraFirm</span>
              <span className="text-2xl lg:text-3xl font-bold text-gray-400 font-heading">NextGen</span>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

