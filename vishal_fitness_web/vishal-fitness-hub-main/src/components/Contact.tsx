import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Mail, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const goals = [
  "Fat Loss",
  "Muscle Gain",
  "Body Recomposition",
  "General Fitness",
  "Mobility & Flexibility",
  "Other",
];

const trainingTypes = [
  "Online Coaching",
  "Offline Personal Training",
  "Nutrition Only",
  "Not Sure Yet",
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    city: "",
    goal: "",
    trainingType: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp message
    const whatsappMessage = `Hi Vishal! I'm interested in coaching.

Name: ${formData.name}
Age: ${formData.age}
City: ${formData.city}
Goal: ${formData.goal}
Training Type: ${formData.trainingType}
Email: ${formData.email}
Phone: ${formData.phone}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/919512674757?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");

    toast({
      title: "Form submitted!",
      description: "Redirecting to WhatsApp for quick response.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Form */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
              Apply for <span className="text-gradient-blue">Coaching</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Tell me about your goals and I'll help you choose the right plan. 
              Fill out the form below and I'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name *"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  required
                  className="bg-card border-border"
                />
                <Input
                  placeholder="Age *"
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleChange("age", e.target.value)}
                  required
                  className="bg-card border-border"
                />
              </div>

              <Input
                placeholder="City / Country *"
                value={formData.city}
                onChange={(e) => handleChange("city", e.target.value)}
                required
                className="bg-card border-border"
              />

              <div className="grid sm:grid-cols-2 gap-4">
                <Select onValueChange={(value) => handleChange("goal", value)}>
                  <SelectTrigger className="bg-card border-border">
                    <SelectValue placeholder="Primary Goal *" />
                  </SelectTrigger>
                  <SelectContent>
                    {goals.map((goal) => (
                      <SelectItem key={goal} value={goal}>
                        {goal}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleChange("trainingType", value)}>
                  <SelectTrigger className="bg-card border-border">
                    <SelectValue placeholder="Training Type *" />
                  </SelectTrigger>
                  <SelectContent>
                    {trainingTypes.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  placeholder="Email *"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  required
                  className="bg-card border-border"
                />
                <Input
                  placeholder="Phone / WhatsApp *"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  required
                  className="bg-card border-border"
                />
              </div>

              <Textarea
                placeholder="Tell me about your fitness journey and goals..."
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={4}
                className="bg-card border-border resize-none"
              />

              <Button type="submit" variant="accent" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Submit & Connect on WhatsApp
              </Button>
            </form>
          </div>

          {/* Right - Contact Options */}
          <div className="flex flex-col justify-center">
            <div className="bg-card border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Quick Connect</h3>
              
              <div className="space-y-4">
                <a
                  href="https://wa.me/919999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-500/10 rounded-xl hover:bg-green-500/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Chat on WhatsApp</p>
                    <p className="text-sm text-muted-foreground">Get quick response</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/vishalfitness_05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-pink-500/10 rounded-xl hover:bg-pink-500/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Message on Instagram</p>
                    <p className="text-sm text-muted-foreground">@vishalfitness_05</p>
                  </div>
                </a>

                <a
                  href="mailto:vishalfitness0105@gmail.com"
                  className="flex items-center gap-4 p-4 bg-primary/10 rounded-xl hover:bg-primary/20 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Email Me</p>
                    <p className="text-sm text-muted-foreground">vishalfitness0105@gmail.com</p>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-4 bg-muted/50 rounded-xl">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Response Time:</strong> I typically respond within 
                  24 hours. For faster response, reach out on WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
