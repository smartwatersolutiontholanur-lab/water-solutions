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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
              <motion.div 
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Phone className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
              <p className="text-lg text-muted-foreground group-hover:text-primary transition-colors">
                +91 9446690306
              </p>
              <p className="text-sm text-muted-foreground mt-2">Click to call</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:smartwatersolutiontholanur@gmail.com"
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -8 }}
          >
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
              <motion.div 
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <Mail className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors break-all">
                smartwatersolutiontholanur@gmail.com
              </p>
              <p className="text-sm text-muted-foreground mt-2">Click to email</p>
            </div>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://maps.app.goo.gl/kRGZXkG3G7qWM5Qa8"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ y: -8 }}
          >
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 cursor-pointer">
              <motion.div 
                className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <MapPin className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
              <p className="text-lg text-muted-foreground group-hover:text-primary transition-colors">
                Tholanur
              </p>
              <p className="text-sm text-muted-foreground mt-2">Serving Palakkad district</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
