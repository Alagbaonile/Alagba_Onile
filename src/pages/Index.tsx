
import { useEffect, useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/home/HeroSection";
import { HowItWorks } from "@/components/home/HowItWorks";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PaymentSteps } from "@/components/home/PaymentSteps";
import { FAQ } from "@/components/home/FAQ";
import { ContactSupport } from "@/components/home/ContactSupport";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import { SiteFooter } from "@/components/layout/Footer";

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
        <div className="py-20 md:py-24 lg:py-28"> {/* Increased spacing */}
          <HowItWorks />
        </div>
        <div id="services" className="py-20 md:py-24 lg:py-28"> {/* Increased spacing */}
          <WhyChooseUs />
        </div>
        <div id="about" className="py-20 md:py-24 lg:py-28"> {/* Increased spacing */}
          <PaymentSteps />
        </div>
        <div id="faq" className="py-20 md:py-24 lg:py-28"> {/* Increased spacing */}
          <FAQ />
        </div>
        <div id="contact-support" className="py-20 md:py-24 lg:py-28"> {/* Increased spacing */}
          <ContactSupport />
        </div>
      </main>
      
      {/* Replace the old footer with the new SiteFooter component */}
      <SiteFooter />
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop} 
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md hover:shadow-lg transition-all z-50 ${
          showScrollTop ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default Index;
