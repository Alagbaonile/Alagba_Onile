
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PaymentSteps } from "@/components/home/PaymentSteps";
import { FAQ } from "@/components/home/FAQ";
import { ContactSupport } from "@/components/home/ContactSupport";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUp, GraduationCap } from "lucide-react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      <main className="flex-grow">
        <HeroSection />
        <HowItWorks />
        <div id="services">
          <WhyChooseUs />
        </div>
        <div id="about">
          <PaymentSteps />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact-support">
          <ContactSupport />
        </div>
      </main>
      
      {/* Using the global Footer component */}
      <Footer />
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-6 right-6 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:shadow-lg transition-all z-50 ${
          showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default Index;
