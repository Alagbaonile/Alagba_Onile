
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
      
      <footer className="border-t py-12 bg-muted/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">S</div>
                <h3 className="font-semibold text-xl">SEVIS Pay Africa</h3>
              </div>
              <p className="text-muted-foreground">Making SEVIS fee payments simple, secure and stress-free for African students.</p>
              
              <div className="mt-6 flex gap-4">
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
                <li><Link to="/payment" className="text-muted-foreground hover:text-primary transition-colors">Make a Payment</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  <span>+234 (0) 800 SEVIS PAY</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  <span>support@sevispayafrica.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span>Lagos, Nigeria</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="font-medium mb-2">Payment Partners</h4>
                <div className="flex gap-3">
                  <img src="https://placehold.co/40x20?text=Visa" alt="Visa" className="h-8 opacity-75" />
                  <img src="https://placehold.co/40x20?text=MC" alt="MasterCard" className="h-8 opacity-75" />
                  <img src="https://placehold.co/40x20?text=Flw" alt="Flutterwave" className="h-8 opacity-75" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} SEVIS Pay Africa. All rights reserved.</p>
            <div className="mt-2 flex justify-center gap-4">
              <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
      
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
