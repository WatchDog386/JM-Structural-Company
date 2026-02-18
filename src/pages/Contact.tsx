import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you soon.");
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-[#0E4861] text-sm focus:outline-none focus:ring-2 focus:ring-[#00A3CC]/20 focus:border-[#00A3CC] transition-all placeholder-gray-400";

  return (
    <Layout>
      {/* Header */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00A3CC]/15 border border-[#00A3CC]/20 mb-4">
              <CheckCircle2 size={11} className="text-[#00A3CC]" />
              <span className="text-[10px] text-[#00A3CC] font-medium tracking-wide uppercase">Get In Touch</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-[#0E4861] mb-3">
              Contact Us
            </h1>
            <p className="text-gray-500 text-sm max-w-lg mx-auto">
              Let's discuss your next project. Our team will get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <h2 className="text-2xl font-heading font-bold text-[#0E4861] mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0E4861] mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClasses}
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0E4861] mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClasses}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-[#0E4861] mb-2">Phone Number</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={inputClasses}
                      placeholder="+234 800 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[#0E4861] mb-2">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className={inputClasses}
                    >
                      <option value="">Select type...</option>
                      <option value="commercial">Commercial</option>
                      <option value="residential">Residential</option>
                      <option value="infrastructure">Infrastructure</option>
                      <option value="consulting">Consulting</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#0E4861] mb-2">Message</label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputClasses} resize-none`}
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl bg-[#00A3CC] text-white font-bold text-sm hover:bg-[#008fb3] transition-all shadow-lg hover:shadow-xl hover:translate-y-[-2px]"
                >
                  <Send size={16} /> Send Message
                </button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <h2 className="text-2xl font-heading font-bold text-[#0E4861] mb-8">Office Information</h2>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: "Address", value: "123 Engineering Drive, Suite 400\nLagos, Nigeria" },
                  { icon: Phone, label: "Phone", value: "+234 800 123 4567" },
                  { icon: Mail, label: "Email", value: "info@jmstructural.com" },
                  { icon: Clock, label: "Working Hours", value: "Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-[#0E4861]/10 flex items-center justify-center">
                      <item.icon size={20} className="text-[#0E4861]" strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0E4861]">{item.label}</p>
                      <p className="text-sm text-gray-500 whitespace-pre-line leading-relaxed mt-1">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="rounded-lg overflow-hidden border border-gray-200 bg-[#f8f9fa] h-48 flex items-center justify-center mt-8">
                <div className="text-center text-gray-400">
                  <MapPin size={28} className="mx-auto mb-2 opacity-40" strokeWidth={1.5} />
                  <p className="text-xs">Google Map Placeholder</p>
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
