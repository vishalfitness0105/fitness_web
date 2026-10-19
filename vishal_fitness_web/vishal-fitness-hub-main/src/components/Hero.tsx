import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: 150, suffix: "+", label: "Body Transformations" },
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
];

const features = [
  "Body recomposition",
  "Strength & conditioning",
  "Customized nutrition",
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <span className="text-4xl md:text-5xl font-black text-accent">
      {count}
      {suffix}
    </span>
  );
};

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6">
              Transform Your Body.{" "}
              <span className="text-gradient-blue">Transform Your Life.</span>
            </h1>

            <h3 className="text-xl md:text-2xl font-semibold text-muted-foreground mb-4">
              Vishal Soni — Fitness Trainer & Body Recomposition Specialist
            </h3>

            <p className="text-muted-foreground mb-6">
              Online & Offline Coaching • Nutrition • Training • Transformation
            </p>

            {/* Feature List */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm"
                >
                  <Check className="w-5 h-5 text-accent" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                variant="hero"
                size="xl"
                onClick={() => scrollToSection("#contact")}
              >
                Start Coaching
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                onClick={() => scrollToSection("#contact")}
              >
                Book Free Consultation
              </Button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div
            id="stats-section"
            className="grid grid-cols-3 gap-4 lg:gap-6"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-4 md:p-6 text-center hover-lift"
              >
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-xs md:text-sm text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
