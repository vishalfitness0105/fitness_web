import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTAStrip = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary via-primary/90 to-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,white_0%,transparent_50%)]" />
      </div>

      <div className="container-custom relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-primary-foreground mb-4">
          Ready to Start Your Transformation?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Let's build a stronger, leaner, healthier you — step by step.
        </p>
        <Button
          variant="accent"
          size="xl"
          onClick={() => scrollToSection("#contact")}
          className="text-lg"
        >
          Apply for Coaching
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default CTAStrip;
