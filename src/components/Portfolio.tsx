import sandblastingWork from "@/assets/sandblasting-work.jpg";
import nickelPlatingWork from "@/assets/nickel-plating-work.jpg";
import electrolessPlating from "@/assets/electroless-plating.jpg";

const Portfolio = () => {
  const portfolioItems = [
    {
      title: "Sand Blasting Results",
      description: "Steel components after professional sand blasting treatment showing clean, prepared surfaces ready for coating.",
      image: sandblastingWork,
      category: "Sand Blasting"
    },
    {
      title: "Nickel Plating Finish",
      description: "High-quality nickel plated parts showcasing our expertise in achieving mirror-like finishes and corrosion protection.",
      image: nickelPlatingWork,
      category: "Nickel Plating"
    },
    {
      title: "Electroless Plating",
      description: "Uniform electroless plating on complex geometries demonstrating our advanced chemical processing capabilities.",
      image: electrolessPlating,
      category: "Electroless Plating"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Quality Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the exceptional results of our metal finishing processes and the quality craftsmanship that sets us apart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={item.title} className={`portfolio-image group cursor-pointer fade-in-up stagger-${index + 1}`}>
              <div className="relative rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-primary-foreground/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            These are just a few examples of our work. We handle projects of all sizes with the same attention to detail and quality.
          </p>
          <div className="inline-flex items-center gap-2 text-accent font-semibold">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            More projects available upon request
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;