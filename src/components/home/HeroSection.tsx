import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, CreditCard, Clock, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-blue-50/50 via-indigo-50/30 to-background dark:from-blue-950/20 dark:via-indigo-950/10 dark:to-background">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07]"></div>
      <div className="absolute -right-32 top-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -left-32 top-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-600 dark:text-blue-400 animate-fade-in border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span>Trusted by 10,000+ African students</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in [animation-delay:200ms]">
              Secure & Stress-Free 
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-[#003366] to-[#0033CC] dark:from-blue-400 dark:to-indigo-400">SEVIS Fee Payments</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl animate-fade-in [animation-delay:400ms]">
              The fastest and most secure way for African students to process their SEVIS fee payment. Experience seamless, fast, and reliable payments with real-time confirmation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in [animation-delay:600ms]">
              <Link to="/payment">
                <Button size="lg" className="gap-2 shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#003366] hover:from-[#FFD700] hover:to-[#FFB700] border border-[#FFD700]/20">
                  Pay SEVIS Fee Now
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 hover:bg-primary/5 shadow-md backdrop-blur-sm group">
                <span>How It Works</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium animate-fade-in [animation-delay:800ms]">
              {[
                { icon: <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />, text: "Fast Processing" },
                { icon: <Shield className="w-4 h-4 text-indigo-600 dark:text-indigo-400 shrink-0" />, text: "SSL Encrypted" },
                { icon: <CreditCard className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0" />, text: "Multiple Payment Options" },
                { icon: <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400 shrink-0" />, text: "24/7 Support" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-2 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/60 dark:to-gray-900/40 backdrop-blur-sm p-3 rounded-lg border border-blue-100/50 dark:border-blue-900/50 shadow-sm">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in [animation-delay:600ms]">
            <div className="relative w-full max-w-md">
              <div className="absolute -right-8 -top-16 w-[500px] h-[500px] opacity-10 dark:opacity-5">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Technology background" 
                  className="w-full h-full object-cover rounded-full blur-sm"
                />
              </div>
              
              <div className="absolute -right-4 -top-4 -z-10 h-full w-full rounded-xl bg-gradient-to-r from-blue-500/20 via-violet-500/20 to-purple-500/20 blur-xl"></div>
              <div className="relative bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70 backdrop-blur-md border border-blue-100/50 dark:border-blue-900/30 rounded-xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-violet-500/5"></div>
                
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -inset-[10px] opacity-20 bg-gradient-to-r from-transparent via-white to-transparent skew-x-[-20deg] animate-shimmer"></div>
                </div>
                
                <div className="relative p-8 flex flex-col gap-5">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <img 
                      src="https://placehold.co/80x30?text=SEVIS" 
                      alt="SEVIS Logo" 
                      className="h-8 rounded"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#003366] to-[#0033CC] dark:from-blue-400 dark:to-indigo-400">SEVIS Fee Payment</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://placehold.co/40x40?text=Student" 
                        alt="Student" 
                        className="w-10 h-10 rounded-full object-cover border-2 border-[#FFD700]"
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">Student Name</p>
                        <p className="font-medium">John Doe</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">University</p>
                        <p className="font-medium">Harvard University</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-4 rounded-lg border border-blue-100 dark:border-blue-800/30">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">SEVIS Fee:</span>
                      <span className="font-semibold">$350.00</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-muted-foreground">Service Fee:</span>
                      <span className="font-semibold">$20.00</span>
                    </div>
                    <div className="border-t border-blue-200 dark:border-blue-800/50 pt-2 mt-2 flex justify-between">
                      <span className="text-sm font-medium">Total:</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">$370.00</span>
                    </div>
                  </div>
                  
                  <Link to="/payment" className="w-full">
                    <Button className="w-full gap-2 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#003366] hover:from-[#FFD700] hover:to-[#FFB700] shadow-lg group border border-[#FFD700]/20">
                      Make Payment
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 border-t border-blue-100 dark:border-blue-900/30 pt-10 animate-fade-in [animation-delay:1000ms]">
          <p className="text-center text-sm text-muted-foreground mb-6">Trusted Payment Partners</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            <img src="https://placehold.co/120x60?text=Visa" alt="Visa" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x60?text=MasterCard" alt="MasterCard" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x60?text=Flutterwave" alt="Flutterwave" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x60?text=PayPal" alt="PayPal" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x60?text=MTN" alt="MTN Money" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/120x60?text=Airtel" alt="Airtel Money" className="h-12 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
}
