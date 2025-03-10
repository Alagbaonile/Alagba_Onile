
import { CircleUser, CreditCard, CheckCircle, ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PaymentSteps() {
  const steps = [
    {
      icon: <CircleUser className="h-10 w-10 text-primary" />,
      title: "Fill Your Information",
      description: "Enter your personal details and SEVIS information in our secure form."
    },
    {
      icon: <CreditCard className="h-10 w-10 text-primary" />,
      title: "Make Payment",
      description: "Choose your preferred payment method and securely process your payment."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Get Confirmation",
      description: "Receive instant confirmation and your official SEVIS fee receipt via email."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-fade-in [animation-delay:200ms]">
            How It Works
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            Our simple three-step process makes paying your SEVIS fee quick and hassle-free.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connector line */}
          <div className="absolute top-36 left-0 hidden md:block w-full h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center relative animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <Card className="w-full h-full bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <CardContent className="p-8 flex flex-col items-center relative">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20"></div>
                    
                    <div className="relative mb-6">
                      <div className="relative">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center border-4 border-background shadow-xl">
                          {step.icon}
                        </div>
                        <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-2xl flex items-center justify-center text-primary-foreground font-bold shadow-lg">
                          {index + 1}
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-4 md:hidden">
                    <ArrowRight className="text-primary animate-pulse" />
                  </div>
                )}
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute top-36 left-full z-20 transform -translate-x-1/2 hidden md:flex items-center">
                    <ArrowRight className="text-primary w-8 h-8 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center animate-fade-in [animation-delay:800ms]">
            <a href="/payment">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#FFD700] text-[#003366] rounded-lg font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105">
                Start Payment Process
                <ArrowRight className="w-4 h-4" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
