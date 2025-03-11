
import { CircleUser, CreditCard, CheckCircle, ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function PaymentSteps() {
  const steps = [
    {
      icon: <CircleUser className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
      title: "Fill Your Information",
      description: "Enter your personal details and SEVIS information in our secure form.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      color: "from-blue-500 to-indigo-500"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-violet-600 dark:text-violet-400" />,
      title: "Make Payment",
      description: "Choose your preferred payment method and securely process your payment.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      color: "from-violet-500 to-purple-500"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />,
      title: "Get Confirmation",
      description: "Receive instant confirmation and your official SEVIS fee receipt via email.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-background dark:from-background dark:via-blue-950/10 dark:to-background"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-600 dark:text-blue-400 animate-fade-in border border-blue-200/50 dark:border-blue-800/50 backdrop-blur-sm">
            <CheckCircle className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 animate-fade-in [animation-delay:200ms]">
            How It Works
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            Our simple three-step process makes paying your SEVIS fee quick and hassle-free.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Desktop connector line */}
          <div className="absolute top-40 left-0 hidden md:block w-full h-1 bg-gradient-to-r from-blue-200 via-violet-300 to-emerald-200 dark:from-blue-800/50 dark:via-violet-700/50 dark:to-emerald-800/50 rounded-full"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center relative animate-fade-in"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <Card className="w-full h-full bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70 backdrop-blur-md border border-blue-100/50 dark:border-blue-900/30 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group">
                  <CardContent className="p-0 flex flex-col items-center relative">
                    {/* Step image */}
                    <div className="w-full h-40 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 dark:to-black/40 z-10"></div>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="p-6 flex flex-col items-center w-full">
                      <div className="relative -mt-16 mb-4">
                        <div className="relative">
                          <div className="w-20 h-20 bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-900/70 backdrop-blur-xl rounded-full flex items-center justify-center border-4 border-background shadow-xl">
                            {step.icon}
                          </div>
                          <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} text-2xl flex items-center justify-center text-white font-bold shadow-lg">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>
                      
                      <div className="w-20 h-1 bg-gradient-to-r ${step.color} rounded-full opacity-70"></div>
                    </div>
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
                  <div className="absolute top-40 left-full z-20 transform -translate-x-1/2 hidden md:flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center text-white shadow-lg pulse-animation">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center animate-fade-in [animation-delay:800ms]">
            <a href="/payment">
              <button className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-[#003366] rounded-lg font-medium shadow-xl hover:shadow-2xl transition-all hover:scale-105 group border border-[#FFD700]/20">
                Start Payment Process
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
