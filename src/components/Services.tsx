import { Zap, Hammer, Shield, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Nickel Plating",
      description: "High-quality nickel coating for enhanced durability, corrosion resistance, and superior finish on metal components.",
      features: ["Corrosion Protection", "Enhanced Durability", "Superior Finish"]
    },
    {
      icon: <Hammer className="h-8 w-8" />,
      title: "Sand Blasting",
      description: "Professional abrasive cleaning process to remove rust, paint, and contaminants while preparing surfaces for treatment.",
      features: ["Surface Preparation", "Rust Removal", "Paint Stripping"]
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Shot Blasting",
      description: "Advanced mechanical surface treatment using high-velocity steel shots for optimal surface preparation and finishing.",
      features: ["Surface Texturing", "Scale Removal", "Mechanical Cleaning"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Electroless Plating",
      description: "Chemical plating process delivering uniform coating thickness and excellent coverage on complex geometries.",
      features: ["Uniform Coating", "Complex Shapes", "Chemical Process"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Professional Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering excellence in metal finishing with state-of-the-art equipment and decades of industrial expertise
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={service.title} className={`service-card fade-in-up stagger-${index + 1} border-0 shadow-card`}>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-accent-gradient rounded-xl flex items-center justify-center text-accent-foreground mb-4">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center justify-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;