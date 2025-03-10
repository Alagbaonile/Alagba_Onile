
import { CheckCircle, Clock, Shield, DollarSign, HeadphonesIcon } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Faster Processing",
      description: "Get your SEVIS fee processed in less than 24 hours, ensuring you have your receipt quickly for visa interviews."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure Payments",
      description: "Bank-level security encryption ensures your payment information is always protected."
    },
    {
      icon: <DollarSign className="h-10 w-10 text-primary" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no hidden costs. What you see is what you pay."
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-primary" />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to help with any issues."
    }
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We make SEVIS fee payment stress-free with our secure, efficient service tailored for African students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
