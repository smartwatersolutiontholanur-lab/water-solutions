import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Us
          </motion.h2>
          <motion.div 
            className="h-1 w-24 bg-primary mx-auto mb-12"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              At <span className="font-semibold text-foreground">Smart Water Solution</span>, we specialize in providing advanced and sustainable water treatment technologies for residential, commercial, and industrial sectors. Our goal is to deliver reliable, high-performance solutions that ensure water purity, operational efficiency, and environmental compliance.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              With years of experience in water management, we offer a full range of services including system design, installation, maintenance, and technical consultation. Our team of professionals works closely with clients to develop customized systems that meet specific requirements and standards.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 pt-8">
              <motion.div 
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-3 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be a leading provider of sustainable water solutions that promote innovation, conservation, and a cleaner future.
                </p>
              </motion.div>

              <motion.div 
                className="bg-card p-6 rounded-lg border border-border hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold mb-3 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver cutting-edge water technologies and services that enhance quality of life while supporting industrial growth and environmental protection.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
