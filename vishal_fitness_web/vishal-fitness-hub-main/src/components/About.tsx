import { Button } from "@/components/ui/button";
import { Dumbbell, Utensils, TrendingUp, Heart, Smile, Flame } from "lucide-react";

const achievements = [
  { icon: Flame, label: "Fat loss without crash dieting" },
  { icon: Dumbbell, label: "Lean muscle gain" },
  { icon: TrendingUp, label: "Better strength & mobility" },
  { icon: Utensils, label: "Flexible, sustainable nutrition" },
  { icon: Heart, label: "Improved confidence & lifestyle" },
  { icon: Smile, label: "Long-term health transformation" },
];

const About = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Dumbbell className="w-16 h-16 text-background" />
                </div>
                <p className="text-lg font-semibold text-muted-foreground">
                  Vishal Soni
                </p>
                <p className="text-sm text-muted-foreground">
                  Body Recomposition Specialist
                </p>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 md:bottom-8 md:right-8 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold shadow-lg">
              4+ Years Experience
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              About <span className="text-gradient-blue">Vishal</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              I'm a dedicated fitness coach specializing in body recomposition — 
              the art of losing fat while building lean muscle simultaneously. 
              My approach combines science-backed training methods with sustainable 
              nutrition strategies that work for your lifestyle.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Whether you're a beginner taking your first steps or an advanced 
              athlete looking to break plateaus, I provide personalized coaching 
              that delivers real, lasting results. No crash diets. No extreme measures. 
              Just proven methods that transform your body and life.
            </p>

            <h3 className="text-xl font-bold mb-4">What I Help You Achieve</h3>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {achievements.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 bg-secondary/50 rounded-lg px-4 py-3 transition-all duration-300 hover:bg-secondary"
                >
                  <item.icon className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">{item.label}</span>
                </div>
              ))}
            </div>

            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollToSection("#programs")}
            >
              View Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
