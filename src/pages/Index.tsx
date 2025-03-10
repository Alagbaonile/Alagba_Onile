
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PaymentSteps } from "@/components/home/PaymentSteps";
import { FAQ } from "@/components/home/FAQ";
import { ContactSupport } from "@/components/home/ContactSupport";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b sticky top-0 z-50 bg-background/95 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-xl text-primary flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground">S</div>
            SEVIS Pay Africa
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/payment">
              <Button>Make Payment</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <HeroSection />
        <WhyChooseUs />
        <PaymentSteps />
        <FAQ />
        <ContactSupport />
      </main>
      
      <footer className="border-t py-10 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-lg mb-4">SEVIS Pay Africa</h3>
              <p className="text-muted-foreground">Making SEVIS fee payments simple, secure and stress-free for African students.</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="#" className="text-muted-foreground hover:text-primary">About Us</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Services</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">FAQs</Link></li>
                <li><Link to="#" className="text-muted-foreground hover:text-primary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>support@sevispayafrica.com</li>
                <li>+234 (0) 800 SEVIS PAY</li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SEVIS Pay Africa. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
