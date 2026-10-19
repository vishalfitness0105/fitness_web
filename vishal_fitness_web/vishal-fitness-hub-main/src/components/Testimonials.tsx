import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul M.",
    goal: "Fat Loss",
    quote: "Vishal's approach to nutrition was a game-changer. Lost 15kg in 4 months without feeling starved. His support and knowledge are incredible!",
    rating: 5,
  },
  {
    name: "Priya S.",
    goal: "Body Recomposition",
    quote: "Finally found a coach who understands Indian food! My meal plans include food I actually enjoy eating. Results speak for themselves.",
    rating: 5,
  },
  {
    name: "Arjun K.",
    goal: "Muscle Gain",
    quote: "As a skinny guy, I never thought I could build muscle. Vishal's program helped me gain 8kg of lean mass. Absolutely recommend!",
    rating: 5,
  },
  {
    name: "Sneha R.",
    goal: "Strength Training",
    quote: "The mobility work combined with strength training fixed my back pain. I'm stronger and more flexible than ever at 35!",
    rating: 5,
  },
  {
    name: "Vikram P.",
    goal: "Online Coaching",
    quote: "Even with online coaching, Vishal's attention to detail is amazing. The video reviews of my form helped me progress safely.",
    rating: 5,
  },
  {
    name: "Anita G.",
    goal: "Lifestyle Change",
    quote: "This isn't just about looking good — it's about feeling good. Vishal helped me build habits that I'll keep for life.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-card">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            What Clients <span className="text-gradient-blue">Say</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real feedback from real clients who achieved their fitness goals 
            with personalized coaching and dedication.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-6 hover-lift"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    Goal: {testimonial.goal}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                  {testimonial.name[0]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
