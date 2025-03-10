
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Shield, Globe, CreditCard, Clock } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-28 px-4 overflow-hidden bg-gradient-to-b from-background via-background/90 to-muted/40">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07]"></div>
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -left-32 top-24 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
              <Shield className="w-4 h-4" />
              <span>Trusted by 10,000+ African students</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:200ms]">
              Secure & Stress-Free 
              <span className="text-primary block mt-2">SEVIS Fee Payments</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in [animation-delay:400ms]">
              The fastest and most secure way for African students to process their SEVIS fee payment. Experience seamless, fast, and reliable payments with real-time confirmation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in [animation-delay:600ms]">
              <Link to="/payment">
                <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105 bg-[#FFD700] text-[#003366] hover:bg-[#FFD700]/90">
                  Pay SEVIS Fee Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5">
                How It Works
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium animate-fade-in [animation-delay:800ms]">
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm p-3 rounded-lg border border-border">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm p-3 rounded-lg border border-border">
                <Shield className="w-4 h-4 text-primary shrink-0" />
                <span>SSL Encrypted</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm p-3 rounded-lg border border-border">
                <CreditCard className="w-4 h-4 text-primary shrink-0" />
                <span>Multiple Payment Options</span>
              </div>
              <div className="flex items-center gap-2 bg-card/50 backdrop-blur-sm p-3 rounded-lg border border-border">
                <Globe className="w-4 h-4 text-primary shrink-0" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in [animation-delay:600ms]">
            <div className="relative w-full max-w-md">
              <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-xl bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 blur-xl"></div>
              <div className="relative bg-card backdrop-blur-sm border border-border rounded-xl shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                <div className="relative p-6 flex flex-col gap-5">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold">SEVIS Fee Payment</h3>
                  <p className="text-muted-foreground">Secure your SEVIS fee receipt quickly and easily for your visa application.</p>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">SEVIS Fee:</span>
                      <span className="font-semibold">$350.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Service Fee:</span>
                      <span className="font-semibold">$20.00</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between">
                      <span className="text-sm font-medium">Total:</span>
                      <span className="font-bold">$370.00</span>
                    </div>
                  </div>
                  <Link to="/payment" className="w-full">
                    <Button className="w-full gap-2 bg-[#FFD700] text-[#003366] hover:bg-[#FFD700]/90">
                      Make Payment
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
