import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", projectType: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  const inputClasses = "w-full px-3 py-2 rounded-md border border-border bg-background text-secondary text-[11px] focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all placeholder-muted-foreground";

  return (
    <Layout>
      <section className="py-12 bg-background">
        <div className="container mx-auto px-3 text-center">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/15 border border-primary/20 mb-3">
              <CheckCircle2 size={10} className="text-primary" />
              <span className="text-[8px] text-primary font-medium tracking-wide uppercase">Get In Touch</span>
            </div>
            <h1 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-2">Contact Us</h1>
            <p className="text-muted-foreground text-[10px] md:text-xs max-w-md mx-auto">
              Let's discuss your next project. Our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-3">
          <div className="grid lg:grid-cols-5 gap-8">
            <motion.div initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-3">
              <h2 className="text-base font-heading font-bold text-secondary mb-5">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-secondary mb-1.5">Full Name</label>
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClasses} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-secondary mb-1.5">Email Address</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClasses} placeholder="john@example.com" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-secondary mb-1.5">Phone Number</label>
                    <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClasses} placeholder="+234 800 123 4567" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-secondary mb-1.5">Project Type</label>
                    <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={inputClasses}>
                      <option value="">Select type...</option>
                      <option value="commercial">Commercial</option>
                      <option value="residential">Residential</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-secondary mb-1.5">Message</label>
                  <textarea rows={4} required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClasses} resize-none`} placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg bg-primary text-primary-foreground font-bold text-[11px] hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                  <Send size={13} /> Send Message
                </button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-2 space-y-4">
              <h2 className="text-base font-heading font-bold text-secondary mb-5">Office Information</h2>
              <div className="space-y-4">
                {[
                  { icon: MapPin, label: "Address", value: "123 Engineering Drive, Suite 400\nLagos, Nigeria" },
                  { icon: Phone, label: "Phone", value: "+234 800 123 4567" },
                  { icon: Mail, label: "Email", value: "info@jmstructural.com" },
                  { icon: Clock, label: "Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-2.5">
                    <div className="w-8 h-8 shrink-0 rounded-md bg-secondary/10 flex items-center justify-center">
                      <item.icon size={14} className="text-secondary" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-secondary">{item.label}</p>
                      <p className="text-[10px] text-muted-foreground whitespace-pre-line leading-relaxed mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-md overflow-hidden border border-border bg-muted h-36 flex items-center justify-center mt-5">
                <div className="text-center text-muted-foreground">
                  <MapPin size={20} className="mx-auto mb-1 opacity-40" strokeWidth={1.5} />
                  <p className="text-[9px]">Google Map Placeholder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
