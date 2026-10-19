import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const transformations = [
  {
    duration: "12 Weeks",
    testimonial: "Lost 12 kg while gaining strength and energy. Life-changing!",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    duration: "10 Weeks",
    testimonial: "From skinny to muscular. Finally feel confident in my body.",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    duration: "16 Weeks",
    testimonial: "Complete body recomposition. Dropped fat, built lean muscle.",
    beforeLabel: "Before",
    afterLabel: "After",
  },
  {
    duration: "8 Weeks",
    testimonial: "Quick transformation for my wedding. Best decision ever!",
    beforeLabel: "Before",
    afterLabel: "After",
  },
];

const Transformations = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="transformations" className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Real <span className="text-gradient-green">Transformations.</span>{" "}
            Real People.
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These are real results from dedicated clients who trusted the process. 
            Your transformation story could be next.
          </p>
        </div>

        {/* Transformations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {transformations.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden hover-lift"
            >
              {/* Before/After Images */}
              <div className="grid grid-cols-2">
                <div className="aspect-square bg-gradient-to-br from-muted to-secondary flex items-center justify-center relative">
                  <span className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                    {item.beforeLabel}
                  </span>
                  <div className="text-4xl font-black text-muted-foreground/30">
                    B
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <span className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    {item.afterLabel}
                  </span>
                  <div className="text-4xl font-black text-accent/30">
                    A
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {item.duration}
                </div>
                <p className="text-muted-foreground italic">
                  "{item.testimonial}"
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            variant="accent"
            size="lg"
            onClick={() => scrollToSection("#contact")}
          >
            Start Your Transformation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Transformations;
