import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import sandblastingWork from "@/assets/sandblasting-work.jpg";

const Gallery = () => {
  const projects = [
    {
      id: 1,
      title: "Steel Components - Sand Blasting",
      image: sandblastingWork,
      category: "Sand Blasting",
      beforeAfter: "After Treatment"
    },
    {
      id: 2,
      title: "Precision Parts - Nickel Plating",
      image: sandblastingWork,
      category: "Nickel Plating", 
      beforeAfter: "Final Result"
    },
    {
      id: 3,
      title: "Industrial Components - Shot Blasting",
      image: sandblastingWork,
      category: "Shot Blasting",
      beforeAfter: "Process Complete"
    },
    {
      id: 4,
      title: "Electronic Parts - Electroless Plating",
      image: sandblastingWork,
      category: "Electroless Plating",
      beforeAfter: "Quality Finish"
    },
    {
      id: 5,
      title: "Automotive Parts - Multi-Process",
      image: sandblastingWork,
      category: "Combined Services",
      beforeAfter: "Complete Process"
    },
    {
      id: 6,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 7,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 8,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 9,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 10,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 11,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 12,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 13,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 14,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 15,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 16,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 17,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 18,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 19,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 20,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 21,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 22,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 23,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
    {
      id: 24,
      title: "Custom Metal Work - Specialized",
      image: sandblastingWork,
      category: "Custom Work",
      beforeAfter: "Custom Solution"
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Our Work Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the quality and precision of our metal finishing services through our completed projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card 
                key={project.id}
                className="overflow-hidden shadow-card hover:shadow-industrial transition-all duration-300 group border-border/50"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground">
                      {project.beforeAfter}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {project.title}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Ready to Transform Your Metal Parts?
            </h2>
            <p className="text-muted-foreground mb-6">
              Contact us to discuss your project requirements and get a customized solution for your metal finishing needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;