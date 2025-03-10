
import { 
  CheckCircle, 
  Clock, 
  Shield, 
  DollarSign, 
  HeadphonesIcon, 
  Zap,
  Globe,
  FileCheck
} from "lucide-react";

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
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Instant Confirmation",
      description: "Receive instant payment confirmation and tracking details via email and SMS."
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Multiple Payment Options",
      description: "Choose from various payment methods including bank transfers, cards, and mobile money."
    },
    {
      icon: <FileCheck className="h-10 w-10 text-primary" />,
      title: "Digital Receipts",
      description: "Download and print your digital receipt immediately after payment confirmation."
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "100% Success Rate",
      description: "We've helped thousands of students successfully complete their SEVIS fee payments."
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute -left-64 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-64 top-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            <span>Why Students Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-fade-in [animation-delay:200ms]">
            The Most Trusted SEVIS Payment Service
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            We make SEVIS fee payment stress-free with our secure, efficient service tailored for African students.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-border relative overflow-hidden group animate-fade-in"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-110"></div>
              <div className="rounded-xl bg-primary/10 w-16 h-16 flex items-center justify-center mb-6 relative">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 relative">{feature.title}</h3>
              <p className="text-muted-foreground relative">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
