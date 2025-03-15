
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, CreditCard, Clock, ArrowUpRight } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* Updated background image with better fit */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?q=80&w=2070')] bg-cover bg-center bg-no-repeat"></div>
      
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/70 dark:from-background/95 dark:via-background/90 dark:to-background/85"></div>
      
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07]"></div>
      <div className="absolute -right-32 top-1/4 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute -left-32 top-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-0 w-full h-32 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-3 px-5 py-2 mb-8 text-base font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-600 dark:text-blue-400 animate-fade-in border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
              <Shield className="w-5 h-5" />
              <span>Trusted by 10,000+ African students</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in [animation-delay:200ms] leading-tight">
              Secure & Stress-Free 
              <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-[#003366] to-[#0033CC] dark:from-blue-400 dark:to-indigo-400">SEVIS Fee Payments</span>
            </h1>
            
            <p className="text-xl leading-relaxed text-muted-foreground mb-12 max-w-2xl animate-fade-in [animation-delay:400ms]">
              The fastest and most secure way for African students to process their SEVIS fee payment. Experience seamless, fast, and reliable payments with real-time confirmation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-16 animate-fade-in [animation-delay:600ms]">
              <Link to="/payment">
                <Button size="lg" className="gap-3 shadow-xl hover:shadow-2xl transition-all hover:scale-105 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#003366] hover:from-[#FFD700] hover:to-[#FFB700] border border-[#FFD700]/20 py-7 px-8 text-lg font-medium">
                  Pay SEVIS Fee Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 hover:bg-primary/5 shadow-md backdrop-blur-sm group py-7 px-8 text-lg font-medium"
                onClick={() => scrollToSection('how-it-works')}
              >
                <span>How It Works</span>
                <ArrowUpRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-base font-medium animate-fade-in [animation-delay:800ms]">
              {[
                { icon: <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />, text: "Fast Processing" },
                { icon: <Shield className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />, text: "SSL Encrypted" },
                { icon: <CreditCard className="w-5 h-5 text-violet-600 dark:text-violet-400 shrink-0" />, text: "Multiple Payment Options" },
                { icon: <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400 shrink-0" />, text: "24/7 Support" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gradient-to-br from-white/80 to-white/40 dark:from-gray-900/60 dark:to-gray-900/40 backdrop-blur-sm p-4 rounded-lg border border-blue-100/50 dark:border-blue-900/50 shadow-sm">
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
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
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
                
                <div className="relative p-10 flex flex-col gap-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                      <CreditCard className="w-7 h-7 text-white" />
                    </div>
                    <img 
                      src="https://placehold.co/80x30?text=SEVIS" 
                      alt="SEVIS Logo" 
                      className="h-9 rounded"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#003366] to-[#0033CC] dark:from-blue-400 dark:to-indigo-400 mb-2">SEVIS Fee Payment</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://placehold.co/40x40?text=Student" 
                        alt="Student" 
                        className="w-12 h-12 rounded-full object-cover border-2 border-[#FFD700]"
                      />
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Student Name</p>
                        <p className="font-medium text-base">Wanjiku Kamau</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                        <Globe className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">University</p>
                        <p className="font-medium text-base">Harvard University</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 p-5 rounded-lg border border-blue-100 dark:border-blue-800/30">
                    <div className="flex justify-between mb-3">
                      <span className="text-base text-muted-foreground">SEVIS Fee:</span>
                      <span className="font-semibold text-base">$350.00</span>
                    </div>
                    <div className="flex justify-between mb-3">
                      <span className="text-base text-muted-foreground">Service Fee:</span>
                      <span className="font-semibold text-base">$20.00</span>
                    </div>
                    <div className="border-t border-blue-200 dark:border-blue-800/50 pt-3 mt-3 flex justify-between">
                      <span className="text-base font-medium">Total:</span>
                      <span className="font-bold text-lg text-blue-600 dark:text-blue-400">$370.00</span>
                    </div>
                  </div>
                  
                  <Link to="/payment" className="w-full mt-2">
                    <Button className="w-full gap-3 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#003366] hover:from-[#FFD700] hover:to-[#FFB700] shadow-lg group border border-[#FFD700]/20 py-6 text-lg font-medium">
                      Make Payment
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="payment-partners" className="mt-24 border-t border-blue-100 dark:border-blue-900/30 pt-14 animate-fade-in [animation-delay:1000ms]">
          <p className="text-center text-base text-muted-foreground mb-8">Trusted Payment Partners</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center justify-items-center">
            <img src="https://placehold.co/150x75?text=Visa" alt="Visa" className="h-14 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/150x75?text=MasterCard" alt="MasterCard" className="h-14 opacity-70 hover:opacity-100 transition-opacity" />
            <img src="https://placehold.co/150x75?text=Flutterwave" alt="Flutterwave" className="h-14 opacity-70 hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </div>
    </section>
  );
}
