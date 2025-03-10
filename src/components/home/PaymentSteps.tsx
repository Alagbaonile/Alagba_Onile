
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our simple three-step process makes paying your SEVIS fee quick and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-full w-full hidden md:flex items-center justify-center">
                    <ArrowRight className="text-muted-foreground" />
                  </div>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">Step {index + 1}: {step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
