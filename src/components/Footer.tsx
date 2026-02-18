import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0E4861] text-white border-t border-white/10">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col items-start">
               <img 
                  src="https://scontent-mba2-1.xx.fbcdn.net/v/t39.30808-6/499412170_2508487489508379_5327772305037987538_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=2a1932&_nc_eui2=AeFXLndQEp47DcRofi1ba4dOOHaPjsD9yrk4do-OwP3KuVSmCsbbPakFXkpJRAmfYYIBuYP6JZmWepwOy_Sl25mr&_nc_ohc=lF6RLjx8K1wQ7kNvwFyRVhC&_nc_oc=AdlnasVbJT6kYyLBZ-o7dWwSxqjcYCu6ZXZ9WEzXkd8hgpdFk_3-azYJO-Wsd8c4bpk&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&_nc_gid=EdmRitnQzB1cjkqr_AOSqg&oh=00_AfvbFO_ezxHqN-AJAQrRP2CTLsXDdkDXnwZxbl1ME22i6Q&oe=699A9D75" 
                  alt="JM Structural Logo" 
                  className="h-16 w-auto object-contain rounded-full border-2 border-white/20 shadow-lg mb-4"
                />
               <h3 className="text-2xl font-bold font-heading">JM Structural Solutions</h3>
               <p className="text-[#00A3CC] text-xs font-bold uppercase tracking-widest mt-1">We Depend On God</p>
            </div>
            <p className="text-blue-100/70 text-sm leading-relaxed max-w-xs">
              Dedicated to excellence in architectural design, structural engineering, and construction. Building your future with integrity and precision.
            </p>
            <div className="flex gap-4 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#00A3CC] transition-all hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "About Us", "Services", "Our Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="/" className="text-blue-100/70 hover:text-[#00A3CC] hover:pl-2 transition-all duration-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A3CC]"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Our Services</h4>
            <ul className="space-y-4">
              {["Architectural Design", "Structural Engineering", "Building Construction", "Renovation & Remodeling", "Interior Design"].map((item) => (
                <li key={item} className="text-blue-100/70 text-sm flex items-center gap-2">
                   <div className="w-1 h-1 bg-white/30 rounded-full"></div>
                   {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-heading text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded bg-[#00A3CC]/10 flex items-center justify-center shrink-0 mt-1">
                   <MapPin className="text-[#00A3CC]" size={20} />
                </div>
                <div>
                   <span className="block text-white font-medium text-sm mb-1">Office Address</span>
                   <span className="text-blue-100/70 text-sm block leading-relaxed">123 Construction Ave, Industrial District, City, Country</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-10 h-10 rounded bg-[#00A3CC]/10 flex items-center justify-center shrink-0">
                   <Phone className="text-[#00A3CC]" size={20} />
                </div>
                <div>
                   <span className="block text-white font-medium text-sm mb-1">Phone Number</span>
                   <span className="text-blue-100/70 text-sm block">+1 (234) 567-890</span>
                </div>
              </li>
              <li className="flex items-center gap-4">
                 <div className="w-10 h-10 rounded bg-[#00A3CC]/10 flex items-center justify-center shrink-0">
                   <Mail className="text-[#00A3CC]" size={20} />
                </div>
                <div>
                   <span className="block text-white font-medium text-sm mb-1">Email Address</span>
                   <span className="text-blue-100/70 text-sm block">info@jmstructural.com</span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/5 bg-[#0b3d54]">
        <div className="container mx-auto px-4 py-6">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs text-blue-100/50">
                © {new Date().getFullYear()} JM Structural Solutions. All rights reserved. | <Link to="#" className="hover:text-white">Privacy Policy</Link>
              </p>
              <p className="text-xs text-blue-100/50 flex items-center gap-1">
                 Designed with excellence
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
