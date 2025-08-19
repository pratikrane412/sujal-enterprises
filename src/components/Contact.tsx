import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: [
        "Sujal Enterprises",
        "E-3 Advance Builder Compound, Kherani Road",
        "Andheri Sakinaka, Mumbai - 400072",
        "India"
      ]
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Phone Numbers",
      details: [
        "+91 9987546535",
        "+91 9136019880",
        "Office: +91 9136015454"
      ]
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Address",
      details: [
        "sandeepbrane3010@gmail.com",
        "sales@sujalenterprises.com",
        "support@sujalenterprises.com"
      ]
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your metal finishing needs? Contact us today for professional consultation and competitive quotes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <Card key={info.title} className={`text-center border-0 shadow-card hover:shadow-elegant transition-all duration-300 fade-in-up stagger-${index + 1}`}>
              <CardHeader className="pb-4">
                <div className="mx-auto w-14 h-14 bg-primary rounded-xl flex items-center justify-center text-primary-foreground mb-4">
                  {info.icon}
                </div>
                <CardTitle className="text-lg font-bold text-foreground">
                  {info.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground leading-relaxed">
                      {detail}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-elegant">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-foreground mb-2">
                Request a Quote
              </CardTitle>
              <p className="text-muted-foreground">
                Tell us about your project requirements and we'll provide you with a detailed quote
              </p>
            </CardHeader>
            <CardContent className="text-center py-8">
              <div className="space-y-6">
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our team of experts is ready to help you with all your metal finishing needs. Whether you need nickel plating, 
                  sand blasting, shot blasting, or electroless plating services, we provide professional solutions tailored to your requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="industrial" size="lg" asChild>
                    <a href="tel:+919987546535">Call Now</a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:sandeepbrane3010@gmail.com">Send Email</a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;