
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
    description: "We have an contractor for build new building from scratch" 
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
  "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497927324_2503742366649558_2232254236741211719_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGe7dS0nuHYWd21ZTXzcMWbbcHx5Ct5GWttwfHkK3kZa66oAlDC5zAOVqNRbdDxzy_I5XfPGAaL9gK6u-vUIiEh&_nc_ohc=4tfoJCeuhtoQ7kNvwEbSo7o&_nc_oc=Admf2Y40k_cm-a4DZJ0CM8WjwJ08suBSEPd5xiLajjB7Zpg8fD0DWUBvK8402RwlCZM&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=faHWSGdbV2hoCFWpLLNSTQ&oh=00_AfuTSr2uTuPkzMg-BXAJE07yFvqVpxoo2sGjKrd0LkMLLw&oe=699AD391"
];


const testimonials = [
  {
    id: 1,
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499444120_2504193169937811_4698375073619860044_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeFNqI1-u7IgdqdaLK76RsLlsKCVRLRymjGwoJVEtHKaMRllBykcG4A_eC7yP79lomwrVzsyyWS7FYcmHQqVttTK&_nc_ohc=dYw-F56E6-kQ7kNvwFJu0Pg&_nc_oc=AdmgghjZA6DWNeeQdSn0WeYaEHjO-MhP7lI2ddI3uZ9u4a94Zop9RFO9-WFqW-xibS8&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=4N0e0zMOPqIZmUIvO7FZKA&oh=00_AftwTpd6yGM6vffNVg6rWPvFG2CDy42bsCSwnPgk38Yftw&oe=699AE66C",
    text: "I really happy to see the result my new home. It's really good house and good price too. And they work so fast because they have the best team. Once again, thankyou. I really appreciate it.",
    client: "Mr. Roberto",
    avatar: "https://i.pravatar.cc/150?img=60",
    project: "Engineering Excellence"
  },
  {
    id: 2,
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497746584_2503719489985179_5232636595511515025_n.jpg?stp=c200.0.1200.1200a_dst-jpg_s206x206_tt6&_nc_cat=111&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeH9O7vHHzWrFcxvAnK2ibw3hPiYL8ueM5qE-Jgvy54zmmqe7Vp1ap32Bt2jmTnWd2iSsCUsRlYmBsA1KOVprJbI&_nc_ohc=W6p3d3WlQ4UQ7kNvwFAade6&_nc_oc=Adl8rG7owPUb9_PBMnMX5yVzXZ1lG7d6NtjykDwDc3VhwqyoUmzx0sZA4g7p2ZmqCIQ&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=EGna3uAeen73x0WVKU3guw&oh=00_Afug9-hcGB-kLnmaRnsVVVAzpEI2DwXL453pEMpQgXNTuQ&oe=699AD7FA",
    text: "JM Structural transformed our vision into reality. Their attention to detail in our modern residence was impeccable. The team was professional, timely, and exceeded our expectations.",
    client: "Mrs. Sarah Jenkins",
    avatar: "https://i.pravatar.cc/150?img=32",
    project: "Modern Residence"
  },
  {
    id: 3,
    image: "https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498206694_2503475463342915_2948985823118728548_n.jpg?stp=c280.0.720.720a_dst-jpg_s206x206_tt6&_nc_cat=103&ccb=1-7&_nc_sid=5df8b4&_nc_eui2=AeFoUkScQhvo6-IoAaOGrMxupNA54SvFd9Ck0DnhK8V30FprAUFY_N890DYs45KP9KnizXUBQYehkQt3fF64mdZx&_nc_ohc=u7C2RJ0mhI0Q7kNvwE_xlx1&_nc_oc=AdmwAnFzkFJBGuZQhkWoW3866TES565gPF5sZWP0K9oa-wVICIfrIuig2mrqean7FRw&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=9Fn4yKWzmzfhdUnjFC0WeQ&oh=00_Afuvh_NUHi3kg30ylxM9DH4HXeh51yg-akAfp1J2hTJa9A&oe=699ABF93",
    text: "The infrastructure work delivered was top-notch. They handled the complex requirements with ease and delivered a robust solution that will stand the test of time. Highly recommended!",
    client: "Mr. David Chen",
    avatar: "https://i.pravatar.cc/150?img=11",
    project: "Infrastructure Works"
  }
];

const Index = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000); // Change testimonial every 6 seconds

    return () => {
      clearInterval(interval);
      clearInterval(testimonialInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Hero Section with Merged Navbar */}
      <section className="relative w-full h-[350px] md:h-[500px] lg:h-[640px] overflow-hidden bg-white">
        
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
           <div className="absolute inset-0 bg-gradient-to-r md:from-transparent md:via-white/5 md:to-white/10 from-black/40 via-black/30 to-black/20 pointer-events-none z-10"></div>
        </div>

        {/* WHITE HEADER BACKGROUND (Right Side Only really visible) */}
        <div className="absolute top-0 left-0 w-full h-16 bg-white z-10"></div>

        {/* BLUE DIAGONAL OVERLAY - Extends from top to bottom, cutting the screen - Hidden on mobile */}
        <div 
          className="hidden md:block absolute top-0 left-0 w-[75%] md:w-[50%] lg:w-[42%] h-full bg-[#0E4861] z-20 shadow-2xl" 
          style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
        ></div>

        {/* NAVBAR - Sitting on top of everything */}
        <nav className="absolute top-0 left-0 w-full z-30 flex items-center h-20">
           <div className="w-full px-4 md:px-8 flex justify-between items-center h-full">
              {/* Logo - Sits in the Blue Zone */}
              <div className="z-50 flex flex-col items-start">
                <h1 className="text-[#0E4861] md:text-white text-4xl md:text-5xl font-black tracking-tighter leading-none mb-1 font-heading">
                  JM
                </h1>
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
               <div 
                  className="md:hidden z-50 text-[#0E4861] bg-white p-2 rounded shadow-md cursor-pointer mr-4"
                  onClick={() => setIsOpen(!isOpen)}
               >
                  {isOpen ? <X size={20} /> : <Menu size={20} />}
               </div>
           </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed top-20 right-0 w-3/4 bg-white z-40 shadow-xl border-l border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4 items-center">
                 <Link to="/" onClick={() => setIsOpen(false)} className="font-bold text-lg text-[#0E4861] hover:text-[#008fb3]">Home</Link>
                 <Link to="/about" onClick={() => setIsOpen(false)} className="font-bold text-lg text-[#0E4861] hover:text-[#008fb3]">About</Link>
                 <Link to="/services" onClick={() => setIsOpen(false)} className="font-bold text-lg text-[#0E4861] hover:text-[#008fb3]">Services</Link>
                 <Link to="/projects" onClick={() => setIsOpen(false)} className="font-bold text-lg text-[#0E4861] hover:text-[#008fb3]">Projects</Link>
                 <Link to="/contact" onClick={() => setIsOpen(false)} className="font-bold text-lg text-[#0E4861] hover:text-[#008fb3]">Contact</Link>
                 <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 px-6 py-3 bg-[#008fb3] text-white font-bold rounded-2xl shadow-lg uppercase tracking-wide text-sm">
                   Get a Quote
                 </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Content */}
        <div className="container relative h-full mx-auto px-4 z-20 flex items-center justify-center md:justify-start">
          <div className="w-full relative pt-0 pl-2 md:pl-0 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-[800px] lg:max-w-[900px] mx-auto md:mx-0"
            >
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-black leading-[1.3] lg:leading-[1.2] mb-4 md:mb-6 font-heading tracking-tight drop-shadow-sm pt-24 md:pt-0">
                <span className="text-white drop-shadow-md">We build your </span>
                <span className="text-[#D65828] drop-shadow-md">dream house</span>
                <span className="text-white drop-shadow-md"> well and professionally</span>
              </h1>

              <div className="hidden md:block text-[#D65828] text-3xl md:text-5xl mb-6 tracking-wide" style={{ fontFamily: '"Dancing Script", cursive' }}>
                JM Leads The Way!
              </div>

              <div className="flex flex-row gap-3 md:gap-4 justify-center md:justify-start pt-4 md:pt-0">
                <Link 
                  to="/projects"  
                  className="inline-flex items-center justify-center px-5 py-2 md:px-8 md:py-3 bg-[#4CAF50] hover:bg-[#43a047] text-white rounded-full font-black text-xs md:text-sm uppercase tracking-wide shadow-lg transition-transform hover:scale-105"
                >
                  <span className="bg-white/20 rounded-full p-1 mr-2 md:mr-3">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="ml-0 md:ml-0.5 w-3 h-3 md:w-[14px] md:h-[14px]">
                      <path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z" />
                    </svg>
                  </span>
                  View Projects
                </Link>

                <Link 
                  to="/contact"  
                  className="inline-flex items-center justify-center px-5 py-2 md:px-8 md:py-3 bg-white text-[#0E4861] hover:bg-gray-50 rounded-full font-black text-xs md:text-sm uppercase tracking-wide shadow-lg transition-transform hover:scale-105 border border-transparent"
                >
                  Contact Us
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ml-1 md:ml-2 w-3.5 h-3.5 md:w-4 md:h-4">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Floating Images (Desktop Only) */}
          <div className="hidden lg:flex absolute bottom-8 right-8 z-10 gap-6">
             <motion.div 
               initial={{ y: 50, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.5, duration: 0.8 }}
               className="w-48 h-32 shadow-xl"
             >
                <img src={projResidential} alt="Dream House 1" className="w-full h-full object-cover" />
             </motion.div>
             <motion.div 
               initial={{ y: 70, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               transition={{ delay: 0.7, duration: 0.8 }}
               className="w-48 h-32 shadow-xl"
             >
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Dream House 2" className="w-full h-full object-cover" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* About / Our Company Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-row gap-4 md:gap-8 lg:gap-12 items-start justify-center">
            
            {/* Left Image Grid */}
            <div className="w-1/2 lg:w-1/2 relative max-w-[500px] lg:max-w-none flex-shrink-0">
               <div className="grid grid-cols-2 gap-1 md:gap-3">
                 <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497887985_2503848883305573_7681431306909647287_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeEIPJKaGsRJ_YYzGAxTDgVuyBkRmWE_ImPIGRGZYT8iY7_y24JKF7y0Bv1P9EhMihbEXXXFnl5yHRx6J28LasZ2&_nc_ohc=KR0VQV9iCtkQ7kNvwHva3Qh&_nc_oc=AdkKwXthdNDhwrkc2HK690CLfBrpD9z18LcnR4AvbET6fB4etzq9Jgk8MLhkc8ywHDE&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=5q5W-VjmW0fsljcLy35cIg&oh=00_AfuJsgKKzKCSh78C-cijCmjyF7SnbMi0EruPiVUKXCL3VA&oe=699AE509" alt="Architecture" className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499651742_2506904226333372_395211802453963508_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHozDTJsCv-mHJP9cVRsbeOha361LckHpaFrfrUtyQelgoGdiowmAHyPe5Aje81xM4P1rM_Pb9yhKpJlyStIPT2&_nc_ohc=Fa7fL1sLUfoQ7kNvwHMWNJ7&_nc_oc=Adnk1Jy1zdtLu9BkqMZxi-2oLfnVWtwZWcf6NZ9FMYc_lk8l-YgMHMXQd46_qZFcRWI&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=AwwNq6CmP39rhQbwJOveBg&oh=00_AftoVyhmIfFWwhqQy1nDmbMsMQzgmjCORFMDhti2iORI0w&oe=699AD971" alt="Commercial" className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/497927324_2503742366649558_2232254236741211719_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeGe7dS0nuHYWd21ZTXzcMWbbcHx5Ct5GWttwfHkK3kZa66oAlDC5zAOVqNRbdDxzy_I5XfPGAaL9gK6u-vUIiEh&_nc_ohc=4tfoJCeuhtoQ7kNvwEbSo7o&_nc_oc=Admf2Y40k_cm-a4DZJ0CM8WjwJ08suBSEPd5xiLajjB7Zpg8fD0DWUBvK8402RwlCZM&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=faHWSGdbV2hoCFWpLLNSTQ&oh=00_AfuTSr2uTuPkzMg-BXAJE07yFvqVpxoo2sGjKrd0LkMLLw&oe=699AD391" alt="Residential" className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-500" />
                 </div>
                 <div className="aspect-[4/3] w-full overflow-hidden">
                    <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/518004339_2547997688890692_3951651927707410792_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeFy2BLcEU0sNLmVM0Bjt-5YvC1VytgC2FS8LVXK2ALYVIWNfmbZgM8nKNwA-ZeZi8RO-fvvhIIJ1aWY0Xruglet&_nc_ohc=EZozmQMLPWoQ7kNvwFKPfD3&_nc_oc=Adm-U8exkcHHfekVwMnmPpqdEw37R-5rZROOeE5ERhI3UN_Q4AcAnbRVpGNsjllYU1s&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=IHfbK_WiV2AtPmY9sAYjMw&oh=00_Afu5nqOuA7i-Fb_etJr-Pjd6nlEM20BoVzY4G-siUcf0Zg&oe=699A94DC" alt="Construction" className="w-full h-full object-cover scale-100 hover:scale-110 transition-transform duration-500" />
                 </div>
               </div>
               
               {/* Center Badge - Perfectly Responsive & Circular */}
               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 w-[28%] aspect-square">
                 <div className="w-full h-full bg-white rounded-full shadow-2xl flex flex-col items-center justify-center border-4 border-white">
                    <Check className="w-[40%] h-[40%] text-[#0E4861] stroke-[4]" />
                    <span className="text-[2.2vw] md:text-[10px] lg:text-[12px] font-bold text-[#0E4861] leading-none mt-[4%]">Pro licensed</span>
                 </div>
               </div>
            </div>

            {/* Right Text Content */}
            <div className="w-1/2 lg:w-1/2 lg:pl-10">
              <h2 className="text-[#0E4861] font-bold text-lg md:text-2xl mb-4 md:mb-6 font-heading">Our company</h2>
              <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed text-xs md:text-[15px] font-normal text-justify">
                JM Structural Solutions is a dedicated team of architects, structural engineers, and contractors committed to bringing your vision to life. We specialize in designing and constructing durable, aesthetically pleasing buildings that ensure comfort and safety for years to come.
              </p>
              
              <p className="text-[#0E4861] font-medium mb-4 md:mb-6 text-xs md:text-sm">
                We have successfully delivered
              </p>

              <div className="flex gap-4 md:gap-12 mb-6 md:mb-10 flex-wrap">
                {stats.map((stat, i) => (
                  <div key={i} className="flex flex-col">
                    <h3 className="text-[#008fb3] text-lg md:text-xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-[#0E4861] text-xs md:text-sm font-bold">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link 
                to="/about" 
                className="inline-flex items-center px-6 md:px-8 py-2 md:py-3 bg-[#008fb3] text-white font-medium hover:bg-[#007a99] transition-colors text-xs md:text-sm shadow-lg rounded-xl"
                onClick={() => window.scrollTo(0, 0)}
              >
                See more
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6">
             <h2 className="text-[#0E4861] font-bold text-2xl mb-2 font-heading">Our services</h2>
             <p className="text-gray-500 text-xs max-w-xl mx-auto leading-relaxed">
               Our services include building new buildings <br/>and renovating old buildings
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {services.map((service, index) => (
                <div 
                  key={service.id} 
                  className={`p-5 transition-all duration-300 group relative flex flex-col justify-start rounded-md ${
                     service.highlight 
                     ? "bg-[#0E4861] text-white shadow-xl" 
                     : "bg-white"
                  }`}
                >
                  {/* Background Image for Highlight Card */}
                  {service.highlight && (
                    <div className="absolute inset-0 z-0 overflow-hidden rounded-md">
                       <img src={heroImg} className="w-full h-full object-cover opacity-10 mix-blend-overlay" alt="" />
                       <div className="absolute inset-0 bg-[#0E4861]/95 rounded-md" />
                    </div>
                  )}

                  <div className={`relative z-10 mb-4 ${service.highlight ? "text-white" : "text-[#333]"}`}>
                    {service.title === "Renovation" ? (
                       <div className="relative w-8 h-8">
                          <Hammer className="absolute top-0 left-0 w-5 h-5 transform rotate-12" strokeWidth={2} />
                          <Wrench className="absolute bottom-0 right-0 w-5 h-5 transform -rotate-[100deg] translate-x-1" strokeWidth={2} />
                       </div>
                    ) : (
                       <service.icon size={32} strokeWidth={service.highlight ? 1.5 : 2} />
                    )}
                  </div>
                  
                  <h4 className={`relative z-10 text-[15px] font-bold mb-2 ${service.highlight ? "text-white" : "text-[#333]"}`}>
                    {service.title}
                  </h4>
                  <p className={`relative z-10 text-[11px] leading-relaxed ${service.highlight ? "text-white/80" : "text-gray-500"}`}>
                    {service.description}
                  </p>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - White Background */}
      <section className="bg-white py-12 md:py-16 relative overflow-hidden">
        {/* Subtle pattern or gradient overlay for better design - REMOVED for sleek white */}
        
        <div className="container mx-auto px-4 relative z-10">
           {/* Benefits Header */}
           <div className="text-center mb-10 md:mb-14">
              <h3 className="text-[#00A3CC] font-bold text-xs md:text-base mb-2 uppercase tracking-wider">Our benefits</h3>
              <h2 className="text-[#0E4861] text-xl md:text-2xl lg:text-3xl font-bold max-w-2xl mx-auto leading-tight">
                Here's why you should collaborate with our team
              </h2>
           </div>

           {/* Benefits Cards - Improved Design */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
              {/* Card 1 */}
              <div className="group relative overflow-hidden rounded-lg bg-[#145a7a] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-[220px] md:h-[240px] lg:h-[260px]">
                 <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity">
                    <img src={projResidential} className="w-full h-full object-cover mix-blend-overlay" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#145a7a] via-[#145a7a]/80 to-transparent" />
                 </div>
                 <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-[#0E4861] transition-all shadow-inner">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <h4 className="text-white text-base md:text-lg font-bold mb-2 drop-shadow-md">Flexible time</h4>
                    <p className="text-blue-50 text-xs md:text-sm leading-relaxed px-2 drop-shadow-sm font-medium">
                      We work whenever you are ready to build. Fast, professional, and on your schedule.
                    </p>
                 </div>
              </div>

               {/* Card 2 */}
              <div className="group relative overflow-hidden rounded-lg bg-[#145a7a] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-[220px] md:h-[240px] lg:h-[260px]">
                 <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity">
                    <img src={projCommercial} className="w-full h-full object-cover mix-blend-overlay" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#145a7a] via-[#145a7a]/80 to-transparent" />
                 </div>
                 <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-[#0E4861] transition-all shadow-inner">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <h4 className="text-white text-base md:text-lg font-bold mb-2 drop-shadow-md">Customizable design</h4>
                    <p className="text-blue-50 text-xs md:text-sm leading-relaxed px-2 drop-shadow-sm font-medium">
                      We can design your buildings, but we are open if you want to customize your design or bring your own architect.
                    </p>
                 </div>
              </div>

               {/* Card 3 */}
              <div className="group relative overflow-hidden rounded-lg bg-[#145a7a] transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl h-[220px] md:h-[240px] lg:h-[260px]">
                 <div className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity">
                    <img src={projInfra} className="w-full h-full object-cover mix-blend-overlay" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#145a7a] via-[#145a7a]/80 to-transparent" />
                 </div>
                 <div className="relative z-10 p-6 h-full flex flex-col items-center justify-center text-center">
                    <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mb-4 text-white group-hover:bg-white group-hover:text-[#0E4861] transition-all shadow-inner">
                      <Check className="w-5 h-5" strokeWidth={3} />
                    </div>
                    <h4 className="text-white text-base md:text-lg font-bold mb-2 drop-shadow-md">Negotiable price</h4>
                    <p className="text-blue-50 text-xs md:text-sm leading-relaxed px-2 drop-shadow-sm font-medium">
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
      <section className="bg-white py-10 md:py-14 pb-16 md:pb-20 overflow-visible">
          <div className="container mx-auto px-4">
             <div className="flex flex-col lg:flex-row items-center">
                
                {/* Left Side - Text */}
                <div className="w-full lg:w-[35%] z-10 mb-6 md:mb-8 lg:mb-0 lg:pr-8">
                   <h2 className="text-[#0E4861] text-xl md:text-2xl font-bold mb-3 font-heading tracking-tight">What our clients say?</h2>
                   <p className="text-gray-500 text-xs md:text-sm mb-6 leading-relaxed font-medium">
                     See what our clients say <br /> about their new home
                   </p>
                    <Link 
                        to="/testimonials" 
                        className="inline-flex items-center justify-center px-6 py-2 bg-[#00A3CC] text-white font-bold text-xs md:text-sm shadow-md hover:bg-[#008fb3] hover:shadow-lg transition-all rounded-sm"
                    >
                        See more
                    </Link>
                </div>

                {/* Right Side - Image & Overlay Card */}
                <div className="w-full lg:w-[65%] relative">
                   <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px]">
                      <img src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/498598594_2504305999926528_709694308130276759_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=107&ccb=1-7&_nc_sid=7b2446&_nc_eui2=AeH0LQuKW2jLY2VCel3WEJlodF3nQAiyzCR0XedACLLMJG2rzPfEfAPZFHVIXkClzZtLvy_jW2zSy3pZ7_6Fre1h&_nc_ohc=YoU40oYEODUQ7kNvwEc16KT&_nc_oc=Adma9LNNMJpwGoUHmRytQvPdUoouWzTX1eesnKRSgeslfchilEDgxnPPF_fSGaHV7Wk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=JDi2QPneS9pIJCvNGtBkjA&oh=00_AfvairwCq3m-aFlEtVfHe_39vPCXxTeQxPigTtSKZekLjw&oe=699AA060" className="w-full h-full object-cover shadow-xl" alt="Client House" />
                   </div>
                   
                   {/* Floating Dark Blue Card */}
                   <div className="absolute -bottom-8 md:-bottom-10 right-0 lg:-right-6 w-[90%] md:w-[75%] lg:w-[65%] bg-[#0E4861] p-4 md:p-5 shadow-xl rounded-sm z-20">
                         {/* Circle Avatar (Floating on top border) */}
                         <div className="absolute -top-6 md:-top-7 left-6 w-12 h-12 md:w-14 md:h-14 rounded-full border-4 border-white overflow-hidden shadow-md bg-gray-200">
                            <img src="https://i.pravatar.cc/150?img=60" alt="Client" className="w-full h-full object-cover" />
                         </div>

                         <div className="mt-4">
                             <p className="text-white text-[10px] md:text-xs italic leading-5 md:leading-6 mb-3 font-light">
                               "I really happy to see the result my new home. It's really good house and good price too. And they work so fast because they have the best team. Once again, thankyou. I really appreciate it."
                             </p>
                             <p className="text-white font-bold text-xs md:text-sm tracking-wide">
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

