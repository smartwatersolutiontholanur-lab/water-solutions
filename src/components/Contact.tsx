import { Phone, Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <motion.div 
            className="h-1 w-24 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to improve your water quality? Contact us today for a consultation
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <motion.a
            href="tel:+919446690306"
            className="group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
            whileHover={{
              y: -12,
              scale: 1.05,
              transition: { duration: 0.3, type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer hover:border-primary/50 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors relative z-10"
                whileHover={{
                  rotate: [0, -15, 15, -15, 0],
                  scale: 1.15
                }}
                transition={{ duration: 0.5 }}
              >
                <Phone className="w-8 h-8 text-primary group-hover:animate-pulse" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors relative z-10">Phone</h3>
              <p className="text-lg text-muted-foreground group-hover:text-primary transition-colors relative z-10">
                +91 9446690306
              </p>
              <p className="text-sm text-muted-foreground mt-2 relative z-10">Click to call</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:smartwatersolutiontholanur@gmail.com"
            className="group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, type: "spring", stiffness: 100 }}
            whileHover={{
              y: -12,
              scale: 1.05,
              transition: { duration: 0.3, type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer hover:border-primary/50 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors relative z-10"
                whileHover={{
                  rotate: [0, -15, 15, -15, 0],
                  scale: 1.15
                }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-8 h-8 text-primary group-hover:animate-pulse" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors relative z-10">Email</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors break-all relative z-10">
                smartwatersolutiontholanur@gmail.com
              </p>
              <p className="text-sm text-muted-foreground mt-2 relative z-10">Click to email</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://maps.app.goo.gl/kRGZXkG3G7qWM5Qa8"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
            whileHover={{
              y: -12,
              scale: 1.05,
              transition: { duration: 0.3, type: "spring", stiffness: 300 }
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer hover:border-primary/50 relative overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              <motion.div
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors relative z-10"
                whileHover={{
                  rotate: [0, -15, 15, -15, 0],
                  scale: 1.15
                }}
                transition={{ duration: 0.5 }}
              >
                <MapPin className="w-8 h-8 text-primary group-hover:animate-bounce" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors relative z-10">Location</h3>
              <p className="text-lg text-muted-foreground group-hover:text-primary transition-colors relative z-10">
                Tholanur
              </p>
              <p className="text-sm text-muted-foreground mt-2 relative z-10">
                Serving Palakkad District
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
