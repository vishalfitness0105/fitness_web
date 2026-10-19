import { Instagram, Youtube, Facebook, ExternalLink } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Transformations", href: "#transformations" },
  { label: "Nutrition", href: "#nutrition" },
  { label: "Social", href: "#social" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Instagram, url: "https://instagram.com/vishalfitness_05", label: "Instagram" },
  { icon: Youtube, url: "https://www.youtube.com/@Vishal_Fitness_12", label: "YouTube" },
  { icon: Facebook, url: "https://www.facebook.com/people/Vishal-Soni/pfbid0C3CyZMN74ubo7k8a4JSPMS5nUMQC8totwaSdb7vcur5ojbFHnjVYANhpoguiQNU1l/", label: "Facebook" },
];

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a href="#home" className="font-heading font-black text-2xl tracking-tight inline-block mb-4">
              VISHAL <span className="text-primary">FITNESS</span>
            </a>
            <p className="text-muted-foreground">
              Fitness Trainer & Body Recomposition Specialist
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Recompose your body with real nutrition, real training, and real results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
              <a
                href="https://www.snapchat.com/add/vishals032"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Snapchat"
              >
                <span className="text-lg">👻</span>
              </a>
              <a
                href="https://linktr.ee/Vishalfitness"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Linktree"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vishal Fitness. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
