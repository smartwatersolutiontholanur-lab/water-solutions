import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Home, Building2, Wrench, Settings, Shield, Phone } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Whole House Water Purifier Systems",
    description: "Softens & Purifies Borewell/Municipal Water. Removes Hardness, Iron, Chlorine, and More. Ideal for Villas, Apartments & Independent Homes.",
  },
  {
    icon: Droplets,
    title: "Domestic & Commercial Water Purifiers",
    description: "Advanced RO, UV, UF & TDS Technologies. Multi-stage Filtration. Compact & Stylish Designs.",
  },
  {
    icon: Building2,
    title: "RO Plant Installation",
    description: "Commercial & Industrial RO Systems (50–10,000 LPH). Customized Plant Design. High-Efficiency Membranes & Pumps.",
  },
  {
    icon: Settings,
    title: "Borewell Water Treatment Solutions",
    description: "Specialized Filtration for High TDS & Iron Content. Sand, Iron, Fluoride, and Arsenic Removal. Fully Automated & Manual Systems Available.",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Trained Technicians. Hassle-Free Setup. Piping & Electrical Work Included.",
  },
  {
    icon: Shield,
    title: "Annual Maintenance Contracts (AMC)",
    description: "Timely Filter Replacements. Regular System Checkups. Emergency Support Available.",
  },
  {
    icon: Phone,
    title: "Repairs & Upgrades",
    description: "All Brands Supported. Genuine Spare Parts. Quick Service Turnaround.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Core Services
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive water treatment solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
