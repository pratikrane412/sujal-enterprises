const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6 bg-accent-gradient bg-clip-text text-transparent">
              Sujal Enterprises
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Professional metal finishing solutions with decades of industrial expertise. 
              Your trusted partner for all plating and surface treatment needs.
            </p>
            <div className="flex items-center text-sm text-primary-foreground/70">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              Established with excellence in mind
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Nickel Plating",
                "Sand Blasting", 
                "Shot Blasting",
                "Electroless Plating"
              ].map((service) => (
                <li key={service} className="text-primary-foreground/80 hover:text-accent transition-colors duration-200 cursor-pointer">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-primary-foreground">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <p>E-3 Advance Builder Compound, Kherani Road<br />Andheri Sakinaka, Mumbai - 400072</p>
              <p>Phone: +91 9987546535</p>
              <p>Email: sandeepbrane3010@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Sujal Enterprises. All rights reserved. | Professional Metal Finishing Solutions
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;