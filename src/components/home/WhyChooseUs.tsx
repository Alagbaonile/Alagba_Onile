
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
      icon: <Clock className="h-10 w-10 text-[#4F46E5]" />,
      title: "Faster Processing",
      description: "Get your SEVIS fee processed in less than 24 hours, ensuring you have your receipt quickly for visa interviews.",
      bgColor: "from-indigo-50 to-purple-50 dark:from-indigo-950/30 dark:to-purple-950/30"
    },
    {
      icon: <Shield className="h-10 w-10 text-[#0EA5E9]" />,
      title: "Secure Payments",
      description: "Bank-level security encryption ensures your payment information is always protected.",
      bgColor: "from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30"
    },
    {
      icon: <DollarSign className="h-10 w-10 text-[#10B981]" />,
      title: "No Hidden Fees",
      description: "Transparent pricing with no hidden costs. What you see is what you pay.",
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30"
    },
    {
      icon: <HeadphonesIcon className="h-10 w-10 text-[#EC4899]" />,
      title: "24/7 Customer Support",
      description: "Our dedicated support team is available around the clock to help with any issues.",
      bgColor: "from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30"
    },
    {
      icon: <Zap className="h-10 w-10 text-[#F59E0B]" />,
      title: "Instant Confirmation",
      description: "Receive instant payment confirmation and tracking details via email and SMS.",
      bgColor: "from-amber-50 to-yellow-50 dark:from-amber-950/30 dark:to-yellow-950/30"
    },
    {
      icon: <Globe className="h-10 w-10 text-[#6366F1]" />,
      title: "Multiple Payment Options",
      description: "Choose from various payment methods including bank transfers, cards, and mobile money.",
      bgColor: "from-violet-50 to-indigo-50 dark:from-violet-950/30 dark:to-indigo-950/30"
    },
    {
      icon: <FileCheck className="h-10 w-10 text-[#8B5CF6]" />,
      title: "Digital Receipts",
      description: "Download and print your digital receipt immediately after payment confirmation.",
      bgColor: "from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-[#059669]" />,
      title: "100% Success Rate",
      description: "We've helped thousands of students successfully complete their SEVIS fee payments.",
      bgColor: "from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-background to-background"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.07]"></div>
      <div className="absolute -left-64 -bottom-32 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -right-64 -top-32 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-600 dark:text-blue-400 animate-fade-in">
            <CheckCircle className="w-4 h-4" />
            <span>Why Students Choose Us</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 animate-fade-in [animation-delay:200ms]">
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
              className="rounded-xl p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-border relative overflow-hidden group animate-fade-in backdrop-blur-sm"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor} opacity-80`}></div>
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-16 -mt-16 transition-all duration-300 group-hover:scale-110"></div>
              <div className="relative">
                <div className="rounded-xl bg-white/40 dark:bg-white/10 backdrop-blur-sm w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10,000+", label: "Students Served" },
            { value: "99.9%", label: "Success Rate" },
            { value: "24/7", label: "Customer Support" },
            { value: "5-Star", label: "Average Rating" }
          ].map((stat, index) => (
            <div 
              key={index} 
              className="rounded-xl p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 dark:from-blue-950/30 dark:to-indigo-950/30 border border-blue-100 dark:border-blue-900/30 shadow-md animate-fade-in backdrop-blur-sm"
              style={{ animationDelay: `${(index + 11) * 100}ms` }}
            >
              <div className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400 mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
