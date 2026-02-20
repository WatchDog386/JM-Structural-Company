import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <div className="absolute top-0 left-0 w-full h-12 bg-white z-40 shadow-sm md:shadow-none"></div>

      <div 
        className={`absolute top-0 left-0 w-[75%] md:w-[50%] lg:w-[42%] bg-secondary z-40 shadow-2xl transition-all duration-300 ${
           isHome ? "h-[500px] lg:h-[640px]" : "h-20 md:h-24"
        }`}
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 100%, 0% 100%)" }}
      ></div>

      <nav className="absolute top-0 left-0 w-full z-50 flex items-center h-14">
         <div className="container mx-auto px-3 flex justify-between items-center h-full">
            <div className="pl-1 md:pl-0 flex flex-col items-start md:items-center relative z-50">
              <Link to="/" className="flex flex-col items-center">
                <img 
                  src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499412170_2508487489508379_5327772305037987538_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFXLndQEp47DcRofi1ba4dOOHaPjsD9yrk4do-OwP3KuVSmCsbbPakFXkpJRAmfYYIBuYP6JZmWepwOy_Sl25mr&_nc_ohc=lF6RLjx8K1wQ7kNvwFyRVhC&_nc_oc=AdlnasVbJT6kYyLBZ-o7dWwSxqjcYCu6ZXZ9WEzXkd8hgpdFk_3-azYJO-Wsd8c4bpk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=EdmRitnQzB1cjkqr_AOSqg&oh=00_AfvbFO_ezxHqN-AJAQrRP2CTLsXDdkDXnwZxbl1ME22i6Q&oe=699A9D75" 
                  alt="JM Structural Logo" 
                  className="h-9 md:h-11 w-auto object-contain rounded-full border border-white/80 shadow-md mt-1"
                />
              </Link>
            </div>

            <div className="hidden md:flex gap-5 lg:gap-6 items-center z-50 pr-1">
               {[
                 { path: "/", label: "Home" },
                 { path: "/about", label: "About" },
                 { path: "/services", label: "Services" },
                 { path: "/projects", label: "Projects" },
                 { path: "/contact", label: "Contact" },
               ].map(({ path, label }) => (
                 <Link key={path} to={path} className={`font-semibold text-[11px] lg:text-xs transition-colors font-heading ${isActive(path) ? "text-primary" : "text-secondary hover:text-primary"}`}>{label}</Link>
               ))}
               <Link 
                 to="/contact" 
                 className="text-secondary font-semibold text-[11px] lg:text-xs hover:text-primary-foreground transition-colors font-heading border border-secondary px-3 py-1.5 rounded-md hover:bg-secondary hover:text-primary-foreground"
               >
                 Get a Quote
               </Link>
            </div>

             <div 
                className="md:hidden z-50 text-secondary bg-white p-1.5 rounded shadow-sm cursor-pointer mr-2 relative"
                onClick={() => setIsOpen(!isOpen)}
             >
                {isOpen ? <X size={16} /> : <Menu size={16} />}
             </div>
         </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-14 left-0 w-full bg-white z-50 shadow-lg border-t border-border overflow-hidden"
          >
            <div className="flex flex-col p-4 gap-3 items-center">
               {[
                 { path: "/", label: "Home" },
                 { path: "/about", label: "About" },
                 { path: "/services", label: "Services" },
                 { path: "/projects", label: "Projects" },
                 { path: "/contact", label: "Contact" },
               ].map(({ path, label }) => (
                 <Link key={path} to={path} onClick={() => setIsOpen(false)} className={`font-semibold text-sm ${isActive(path) ? "text-primary" : "text-secondary"}`}>{label}</Link>
               ))}
               <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2 px-5 py-2 bg-primary text-primary-foreground font-semibold rounded-lg shadow-md uppercase tracking-wide text-xs">
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
