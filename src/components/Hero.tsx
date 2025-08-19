import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Industrial manufacturing facility"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 fade-in-up">
            Sujal Enterprises
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 fade-in-up stagger-1">
            Professional Metal Finishing Solutions
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto fade-in-up stagger-2">
            Specializing in Nickel Plating, Sand Blasting, Shot Blasting, and Electroless Plating services with over years of industrial expertise.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-up stagger-3">
            <Button variant="hero" size="lg" asChild>
              <a href="#services">Our Services</a>
            </Button>
            <Button variant="outline" size="lg" className="bg-background/10 border-primary-foreground/30 text-primary-foreground hover:bg-background/20" asChild>
              <a href="#portfolio">View Our Work</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;