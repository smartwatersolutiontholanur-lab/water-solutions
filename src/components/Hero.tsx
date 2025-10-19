import { Button } from "@/components/ui/button";
import { Droplet } from "lucide-react";

const Hero = () => {
  const openEnquiryForm = () => {
    window.open('https://form.jotform.com/252914257700051', '_blank');
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center border-2 border-primary/30">
              <Droplet className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Pure Water Solutions
            <br />
            <span className="text-primary">
              Professional Excellence
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Advanced water treatment systems for residential, commercial, and industrial applications
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-primary hover:bg-accent text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
              onClick={openEnquiryForm}
            >
              Get a Quote
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white/80 text-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-all duration-300"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-white/70 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
