import { Button } from "@/components/ui/button";
import { Instagram, Youtube, Facebook, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "Instagram",
    handle: "@vishalfitness_05",
    description: "Daily content, tips, workouts, and client results",
    url: "https://instagram.com/vishalfitness_05",
    icon: Instagram,
    color: "from-pink-500 to-purple-600",
  },
  {
    name: "YouTube",
    handle: "@Vishal_Fitness_12",
    description: "Coaching videos, workouts, and fitness education",
    url: "https://www.youtube.com/@Vishal_Fitness_12",
    icon: Youtube,
    color: "from-red-500 to-red-700",
  },
  {
    name: "Facebook",
    handle: "Vishal Soni",
    description: "Community updates and fitness motivation",
    url: "https://www.facebook.com/people/Vishal-Soni/pfbid0C3CyZMN74ubo7k8a4JSPMS5nUMQC8totwaSdb7vcur5ojbFHnjVYANhpoguiQNU1l/",
    icon: Facebook,
    color: "from-blue-500 to-blue-700",
  },
];

const SocialHub = () => {
  return (
    <section id="social" className="section-padding bg-card">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            Follow My <span className="text-gradient-blue">Journey</span> Online
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Daily content, tips, workouts, and client results. Stay connected 
            and get inspired every day.
          </p>
        </div>

        {/* Social Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-background border border-border rounded-2xl p-6 hover-lift hover:border-primary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${social.color} flex items-center justify-center mb-4`}>
                <social.icon className="w-7 h-7 text-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-1 flex items-center gap-2">
                {social.name}
                <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-primary text-sm mb-2">{social.handle}</p>
              <p className="text-muted-foreground text-sm">
                {social.description}
              </p>
            </a>
          ))}
        </div>

        {/* Additional Links */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.snapchat.com/add/vishals032"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg">
              <span className="mr-2">👻</span>
              Add on Snapchat
            </Button>
          </a>
          <a
            href="https://linktr.ee/Vishalfitness"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="accent" size="lg">
              <ExternalLink className="w-4 h-4 mr-2" />
              All Links - Linktree
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SocialHub;
