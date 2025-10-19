import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to improve your water quality? Contact us today for a consultation
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Phone */}
          <a
            href="tel:+919446690306"
            className="group"
          >
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Phone</h3>
              <p className="text-lg text-muted-foreground group-hover:text-primary transition-colors">
                +91 9446690306
              </p>
              <p className="text-sm text-muted-foreground mt-2">Click to call</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:smartwatersolutiontholanur@gmail.com"
            className="group"
          >
            <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Email</h3>
              <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors break-all">
                smartwatersolutiontholanur@gmail.com
              </p>
              <p className="text-sm text-muted-foreground mt-2">Click to email</p>
            </div>
          </a>

          {/* Location */}
          <div className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Location</h3>
            <p className="text-lg text-muted-foreground">
              Tholanur
            </p>
            <p className="text-sm text-muted-foreground mt-2">Serving local areas</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
