import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Transformations from "@/components/Transformations";
import Testimonials from "@/components/Testimonials";
import Nutrition from "@/components/Nutrition";
import SocialHub from "@/components/SocialHub";
import CTAStrip from "@/components/CTAStrip";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Programs />
        <Transformations />
        <Testimonials />
        <Nutrition />
        <SocialHub />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
