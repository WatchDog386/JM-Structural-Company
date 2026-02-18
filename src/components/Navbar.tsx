import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  // Helper to determine if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* WHITE HEADER BACKGROUND (Right Side Only really visible) */}
      <div className="absolute top-0 left-0 w-full h-16 bg-white z-40 shadow-sm md:shadow-none"></div>

      {/* BLUE DIAGONAL OVERLAY */}
      <div 
        className={`absolute top-0 left-0 w-[75%] md:w-[50%] lg:w-[42%] bg-[#0E4861] z-40 shadow-2xl transition-all duration-300 ${
           isHome ? "h-[500px] lg:h-[640px]" : "h-24 md:h-32"
        }`}
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
      ></div>

      {/* NAVBAR - Sitting on top of everything */}
      <nav className="absolute top-0 left-0 w-full z-50 flex items-center h-20">
         <div className="container mx-auto px-4 flex justify-between items-center h-full">
            {/* Logo - Sits in the Blue Zone */}
            <div className="pl-2 md:pl-0 flex flex-col items-start md:items-center relative z-50">
              <Link to="/" className="flex flex-col items-center">
                <img 
                  src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499412170_2508487489508379_5327772305037987538_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFXLndQEp47DcRofi1ba4dOOHaPjsD9yrk4do-OwP3KuVSmCsbbPakFXkpJRAmfYYIBuYP6JZmWepwOy_Sl25mr&_nc_ohc=lF6RLjx8K1wQ7kNvwFyRVhC&_nc_oc=AdlnasVbJT6kYyLBZ-o7dWwSxqjcYCu6ZXZ9WEzXkd8hgpdFk_3-azYJO-Wsd8c4bpk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=EdmRitnQzB1cjkqr_AOSqg&oh=00_AfvbFO_ezxHqN-AJAQrRP2CTLsXDdkDXnwZxbl1ME22i6Q&oe=699A9D75" 
                  alt="JM Structural Logo" 
                  className="h-12 md:h-16 w-auto object-contain rounded-full border-2 border-white shadow-lg mb-1"
                />
                <span className="text-white text-[8px] md:text-[10px] uppercase tracking-widest font-bold shadow-sm">We Depend On God</span>
              </Link>
            </div>

            {/* Navigation Links - Sits in the White Zone */}
            <div className="hidden md:flex gap-6 lg:gap-8 items-center z-50 pr-2">
               <Link to="/" className={`font-bold text-xs lg:text-sm transition-colors font-heading ${isActive("/") ? "text-[#008fb3]" : "text-[#0E4861] hover:text-[#008fb3]"}`}>Home</Link>
               <Link to="/about" className={`font-bold text-xs lg:text-sm transition-colors font-heading ${isActive("/about") ? "text-[#008fb3]" : "text-[#0E4861] hover:text-[#008fb3]"}`}>About</Link>
               <Link to="/services" className={`font-bold text-xs lg:text-sm transition-colors font-heading ${isActive("/services") ? "text-[#008fb3]" : "text-[#0E4861] hover:text-[#008fb3]"}`}>Services</Link>
               <Link to="/projects" className={`font-bold text-xs lg:text-sm transition-colors font-heading ${isActive("/projects") ? "text-[#008fb3]" : "text-[#0E4861] hover:text-[#008fb3]"}`}>Projects</Link>
               <Link to="/contact" className={`font-bold text-xs lg:text-sm transition-colors font-heading ${isActive("/contact") ? "text-[#008fb3]" : "text-[#0E4861] hover:text-[#008fb3]"}`}>Contact</Link>
               
               <Link 
                 to="/contact" 
                 className="text-[#0E4861] font-bold text-xs lg:text-sm hover:text-[#008fb3] transition-colors font-heading border border-[#0E4861] px-4 py-2 rounded hover:bg-[#0E4861] hover:text-white"
               >
                 Get a Quote
               </Link>
            </div>

            {/* Mobile Menu Toggle */}
             <div 
                className="md:hidden z-50 text-[#0E4861] bg-white p-2 rounded shadow-md cursor-pointer mr-4 relative"
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
            className="fixed top-20 left-0 w-full bg-white z-40 shadow-xl border-t border-gray-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 items-center">
               <Link to="/" onClick={() => setIsOpen(false)} className={`font-bold text-lg ${isActive("/") ? "text-[#008fb3]" : "text-[#0E4861]"}`}>Home</Link>
               <Link to="/about" onClick={() => setIsOpen(false)} className={`font-bold text-lg ${isActive("/about") ? "text-[#008fb3]" : "text-[#0E4861]"}`}>About</Link>
               <Link to="/services" onClick={() => setIsOpen(false)} className={`font-bold text-lg ${isActive("/services") ? "text-[#008fb3]" : "text-[#0E4861]"}`}>Services</Link>
               <Link to="/projects" onClick={() => setIsOpen(false)} className={`font-bold text-lg ${isActive("/projects") ? "text-[#008fb3]" : "text-[#0E4861]"}`}>Projects</Link>
               <Link to="/contact" onClick={() => setIsOpen(false)} className={`font-bold text-lg ${isActive("/contact") ? "text-[#008fb3]" : "text-[#0E4861]"}`}>Contact</Link>
               <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-4 px-6 py-3 bg-[#008fb3] text-white font-bold rounded shadow-lg uppercase tracking-wide text-sm">
                 Get a Quote
               </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
