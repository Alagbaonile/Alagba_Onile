
import { CircleUser, CreditCard, CheckCircle, ArrowRight } from "lucide-react";

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
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Simple Process
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple three-step process makes paying your SEVIS fee quick and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative">
              <div className="relative">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6 border-4 border-background shadow-lg">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-12 left-full w-full hidden md:flex items-center justify-center">
                    <div className="h-0.5 w-16 bg-primary/30"></div>
                    <ArrowRight className="text-primary" />
                    <div className="h-0.5 w-16 bg-primary/30"></div>
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
