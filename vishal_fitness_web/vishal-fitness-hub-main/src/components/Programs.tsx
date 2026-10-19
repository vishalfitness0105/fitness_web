import { Button } from "@/components/ui/button";
import { 
  Repeat, 
  Monitor, 
  User, 
  Utensils, 
  StretchHorizontal, 
  Dumbbell,
  Check
} from "lucide-react";

const programs = [
  {
    icon: Repeat,
    title: "Body Recomposition Coaching",
    description: "Lose fat and build muscle simultaneously with a personalized approach.",
    highlights: [
      "Customized workout plan",
      "Macro-based nutrition",
      "Weekly check-ins",
      "Progress tracking"
    ],
  },
  {
    icon: Monitor,
    title: "Online 1:1 Coaching",
    description: "Train from anywhere with comprehensive remote coaching support.",
    highlights: [
      "Home or gym workouts",
      "Video form checks",
      "24/7 app support",
      "Flexible scheduling"
    ],
  },
  {
    icon: User,
    title: "Offline Personal Training",
    description: "In-person sessions for hands-on guidance and real-time feedback.",
    highlights: [
      "Direct supervision",
      "Form correction",
      "Motivation & accountability",
      "Equipment guidance"
    ],
  },
  {
    icon: Utensils,
    title: "Personalized Nutrition Plan",
    description: "Eat for your goals with a diet plan tailored to your preferences.",
    highlights: [
      "Indian meal options",
      "Veg/non-veg flexibility",
      "Calorie & macro targets",
      "Easy-to-follow recipes"
    ],
  },
  {
    icon: StretchHorizontal,
    title: "Mobility & Flexibility Training",
    description: "Improve range of motion and prevent injuries with targeted work.",
    highlights: [
      "Joint health focus",
      "Stretching routines",
      "Injury prevention",
      "Better performance"
    ],
  },
  {
    icon: Dumbbell,
    title: "Calisthenics & Gymnastics",
    description: "Master bodyweight movements and build functional strength.",
    highlights: [
      "Progressive skills",
      "Core strength",
      "Balance & control",
      "No equipment needed"
    ],
  },
];

const Programs = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="programs" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Programs & <span className="text-gradient-blue">Coaching Plans</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose a plan that fits your goals and lifestyle. Every program is 
            customized to help you achieve maximum results.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-card border border-border rounded-2xl p-6 hover-lift group hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <program.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2">{program.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {program.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6">
                {program.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant="outline"
                className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                onClick={() => scrollToSection("#contact")}
              >
                Apply Now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
