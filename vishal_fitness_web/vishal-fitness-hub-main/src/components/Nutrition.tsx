import { Button } from "@/components/ui/button";
import { Check, Utensils, Calculator, Leaf, Clock } from "lucide-react";

const features = [
  { icon: Utensils, text: "Based on your food preferences (veg / non-veg / vegan)" },
  { icon: Leaf, text: "Indian meal-based plans that fit your culture" },
  { icon: Calculator, text: "Macros and calories tailored to your goals" },
  { icon: Clock, text: "Sustainable approach — no crash diets" },
];

const Nutrition = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="nutrition" className="section-padding bg-gradient-to-br from-primary/10 via-background to-primary/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
              Nutrition That <span className="text-gradient-blue">Matches Your Goals</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Training alone is not enough. I provide personalized diet coaching 
              to fuel your progress. Every meal plan is designed around foods you 
              actually enjoy eating — no bland chicken and broccoli required.
            </p>

            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 bg-card/50 rounded-xl p-4 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button
              variant="accent"
              size="lg"
              onClick={() => scrollToSection("#contact")}
            >
              Get Your Diet Plan
            </Button>
          </div>

          {/* Right - Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                {/* Nutrition Icons */}
                <div className="bg-card rounded-2xl p-6 text-center hover-lift group">
                  <div className="text-4xl mb-2 inline-block group-hover:animate-spin transition-transform duration-500">🥗</div>
                  <p className="text-sm font-semibold">Balanced Meals</p>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center hover-lift group">
                  <div className="text-4xl mb-2 inline-block group-hover:animate-spin transition-transform duration-500">🍗</div>
                  <p className="text-sm font-semibold">Protein Rich</p>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center hover-lift group">
                  <div className="text-4xl mb-2 inline-block group-hover:animate-spin transition-transform duration-500">🥘</div>
                  <p className="text-sm font-semibold">Indian Cuisine</p>
                </div>
                <div className="bg-card rounded-2xl p-6 text-center hover-lift group">
                  <div className="text-4xl mb-2 inline-block group-hover:animate-spin transition-transform duration-500">📊</div>
                  <p className="text-sm font-semibold">Macro Tracking</p>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 left-4 md:left-8 bg-accent text-accent-foreground px-6 py-3 rounded-xl font-bold shadow-lg">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5" />
                No Crash Diets
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nutrition;
