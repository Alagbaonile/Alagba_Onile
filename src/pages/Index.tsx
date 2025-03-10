
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { PaymentSteps } from "@/components/home/PaymentSteps";
import { FAQ } from "@/components/home/FAQ";
import { ContactSupport } from "@/components/home/ContactSupport";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-xl text-primary">SEVIS Pay Africa</Link>
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
      
      <footer className="border-t py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SEVIS Pay Africa. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
