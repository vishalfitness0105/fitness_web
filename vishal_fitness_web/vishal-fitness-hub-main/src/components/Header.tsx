import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home", isAnchor: true },
  { label: "About", href: "#about", isAnchor: true },
  { label: "Programs", href: "#programs", isAnchor: true },
  { label: "Products", href: "/products", isAnchor: false },
  { label: "Transformations", href: "#transformations", isAnchor: true },
  { label: "Testimonials", href: "#testimonials", isAnchor: true },
  { label: "Nutrition", href: "#nutrition", isAnchor: true },
  { label: "Contact", href: "#contact", isAnchor: true },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: typeof navItems[0]) => {
    setIsMobileMenuOpen(false);
    if (item.isAnchor) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(item.href);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const element = document.querySelector(item.href);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-20 px-4 md:px-8">
        {/* Logo */}
        <button
          onClick={() => handleNavClick({ label: "Home", href: "#home", isAnchor: true })}
          className="font-heading font-black text-xl md:text-2xl tracking-tight"
        >
          VISHAL <span className="text-primary">FITNESS</span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            variant="accent"
            onClick={() => handleNavClick({ label: "Contact", href: "#contact", isAnchor: true })}
          >
            Join Coaching
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-lg transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6 -mt-20">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item)}
              className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {item.label}
            </button>
          ))}
          <Button
            variant="accent"
            size="lg"
            onClick={() => handleNavClick({ label: "Contact", href: "#contact", isAnchor: true })}
            className="mt-4"
          >
            Join Coaching
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
