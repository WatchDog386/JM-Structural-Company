import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary-foreground border-t border-primary-foreground/10">
      <div className="container mx-auto px-3 py-6 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          
          <div className="space-y-2">
            <div className="flex flex-col items-start">
               <img 
                  src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499412170_2508487489508379_5327772305037987538_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFXLndQEp47DcRofi1ba4dOOHaPjsD9yrk4do-OwP3KuVSmCsbbPakFXkpJRAmfYYIBuYP6JZmWepwOy_Sl25mr&_nc_ohc=lF6RLjx8K1wQ7kNvwFyRVhC&_nc_oc=AdlnasVbJT6kYyLBZ-o7dWwSxqjcYCu6ZXZ9WEzXkd8hgpdFk_3-azYJO-Wsd8c4bpk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=EdmRitnQzB1cjkqr_AOSqg&oh=00_AfvbFO_ezxHqN-AJAQrRP2CTLsXDdkDXnwZxbl1ME22i6Q&oe=699A9D75" 
                  alt="JM Structural Logo" 
                  className="h-10 md:h-12 w-auto object-contain rounded-full border border-primary-foreground/20 shadow-md mb-2"
                />
               <h3 className="text-sm md:text-base font-bold font-heading">JM Structural Solutions</h3>
               <p className="text-primary text-[9px] font-bold uppercase tracking-widest mt-0.5">We Depend On God</p>
            </div>
            <p className="text-primary-foreground/60 text-[10px] md:text-xs leading-relaxed max-w-xs">
              Dedicated to excellence in architectural design, structural engineering, and construction.
            </p>
          </div>

          <div className="hidden md:block lg:pl-6">
            <h4 className="text-xs font-bold mb-3 font-heading">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Services", path: "/services" },
                { label: "Projects", path: "/projects" },
                { label: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-primary-foreground/60 hover:text-primary transition-colors text-[11px] flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary"></span>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <h4 className="text-xs font-bold mb-3 font-heading">Contact Us</h4>
            <ul className="space-y-3">
              {[
                { icon: MapPin, label: "Office", value: "123 Construction Ave, City" },
                { icon: Phone, label: "Phone", value: "+1 (234) 567-890" },
                { icon: Mail, label: "Email", value: "info@jmstructural.com" },
              ].map((item) => (
                <li key={item.label} className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded bg-primary/10 flex items-center justify-center shrink-0">
                     <item.icon className="text-primary" size={13} />
                  </div>
                  <div>
                     <span className="text-primary-foreground/60 text-[10px] block leading-snug">{item.value}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/5 bg-secondary/80">
        <div className="container mx-auto px-3 py-2.5">
           <div className="flex flex-col md:flex-row justify-between items-center gap-1">
              <p className="text-[9px] md:text-[10px] text-primary-foreground/40">
                © {new Date().getFullYear()} JM Structural Solutions. All rights reserved.
              </p>
              <p className="text-[9px] md:text-[10px] text-primary-foreground/40">
                 Designed with excellence
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
