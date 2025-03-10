
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-background to-muted/30">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary">
          The trusted SEVIS fee payment solution for African students
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Pay Your SEVIS Fee 
          <span className="text-primary block mt-2">Quickly & Securely</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          The fastest and most secure way for African students to process their SEVIS fee payment. Start your educational journey with confidence.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link to="/payment">
            <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
              Make Payment Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-muted-foreground">
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Secure Payments</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>24/7 Support</span>
          </div>
          <div className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4 text-primary" />
            <span>Fast Processing</span>
          </div>
          <div className="flex items-center gap-1">
            <Shield className="w-4 h-4 text-primary" />
            <span>SSL Encrypted</span>
          </div>
        </div>
      </div>
    </section>
  );
}
