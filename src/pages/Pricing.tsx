
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Clock, CreditCard, CheckCircle, DollarSign, ChevronRight, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface PricingOption {
  id: string;
  name: string;
  description: string;
  processingTime: string;
  sevisFee: number;
  serviceFee: number;
  totalAmount: number;
  features: string[];
  popular?: boolean;
}

const Pricing = () => {
  const navigate = useNavigate();
  const [visaType, setVisaType] = useState<"f1" | "j1">("f1");

  const f1VisaPricing: PricingOption[] = [
    {
      id: "express-f1",
      name: "Express",
      description: "Fastest processing for urgent cases",
      processingTime: "24 hours",
      sevisFee: 350,
      serviceFee: 100,
      totalAmount: 450,
      features: [
        "Priority processing",
        "Email confirmation",
        "24/7 support",
        "Guaranteed delivery",
      ],
      popular: true,
    },
    {
      id: "standard-f1",
      name: "Standard",
      description: "Balanced speed and affordability",
      processingTime: "3-5 days",
      sevisFee: 350,
      serviceFee: 70,
      totalAmount: 420,
      features: [
        "Fast processing",
        "Email confirmation",
        "Business hours support",
      ],
    },
    {
      id: "basic-f1",
      name: "Basic",
      description: "Budget-friendly option",
      processingTime: "7-10 days",
      sevisFee: 350,
      serviceFee: 40,
      totalAmount: 390,
      features: [
        "Standard processing",
        "Email confirmation",
      ],
    },
    {
      id: "free-f1",
      name: "Economy",
      description: "Most economical option",
      processingTime: "21-30 days",
      sevisFee: 350,
      serviceFee: 10,
      totalAmount: 360,
      features: [
        "Basic processing",
        "Email confirmation",
      ],
    },
  ];

  const j1VisaPricing: PricingOption[] = [
    {
      id: "express-j1",
      name: "Express",
      description: "Fastest processing for urgent cases",
      processingTime: "24 hours",
      sevisFee: 220,
      serviceFee: 90,
      totalAmount: 310,
      features: [
        "Priority processing",
        "Email confirmation",
        "24/7 support",
        "Guaranteed delivery",
      ],
      popular: true,
    },
    {
      id: "standard-j1",
      name: "Standard",
      description: "Balanced speed and affordability",
      processingTime: "3-5 days",
      sevisFee: 220,
      serviceFee: 60,
      totalAmount: 280,
      features: [
        "Fast processing",
        "Email confirmation",
        "Business hours support",
      ],
    },
    {
      id: "basic-j1",
      name: "Basic",
      description: "Budget-friendly option",
      processingTime: "7-10 days",
      sevisFee: 220,
      serviceFee: 30,
      totalAmount: 250,
      features: [
        "Standard processing",
        "Email confirmation",
      ],
    },
    {
      id: "free-j1",
      name: "Economy",
      description: "Most economical option",
      processingTime: "21-30 days",
      sevisFee: 220,
      serviceFee: 10,
      totalAmount: 230,
      features: [
        "Basic processing",
        "Email confirmation",
      ],
    },
  ];

  const handleSelectPlan = (planId: string) => {
    // Store selected plan in localStorage
    localStorage.setItem("selectedPlan", planId);
    
    // Navigate to payment page
    navigate("/payment", { 
      state: { 
        planId,
        visaType 
      } 
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-fixed bg-no-repeat bg-cover bg-center bg-opacity-10">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-0"></div>
      
      <header className="border-b relative z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-xl text-primary flex items-center gap-2">
            <GraduationCap className="h-5 w-5" /> SEVIS Pay Africa
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link to="/pricing" className="text-sm font-medium text-primary">
              Pricing
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary">
              Blog
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-indigo-400 text-transparent bg-clip-text">
              SEVIS Fee Payment Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the right plan for your SEVIS fee payment needs. All plans include the standard SEVIS fee plus our service charge based on processing time.
            </p>
          </div>

          <div className="mb-8">
            <Tabs defaultValue="f1" className="w-full" onValueChange={(value) => setVisaType(value as "f1" | "j1")}>
              <div className="flex justify-center mb-6">
                <TabsList className="grid w-full max-w-md grid-cols-2 shadow-md">
                  <TabsTrigger value="f1" className="text-sm md:text-base py-3 relative">
                    F-1 Visa
                    <Badge variant="outline" className="absolute -top-2 -right-2 bg-blue-600 text-white border-0 text-xs">
                      $350
                    </Badge>
                  </TabsTrigger>
                  <TabsTrigger value="j1" className="text-sm md:text-base py-3 relative">
                    J-1 Visa
                    <Badge variant="outline" className="absolute -top-2 -right-2 bg-purple-600 text-white border-0 text-xs">
                      $220
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="f1" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                  {f1VisaPricing.map((plan) => (
                    <PricingCard 
                      key={plan.id} 
                      plan={plan} 
                      onSelect={() => handleSelectPlan(plan.id)} 
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="j1" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
                  {j1VisaPricing.map((plan) => (
                    <PricingCard 
                      key={plan.id} 
                      plan={plan} 
                      onSelect={() => handleSelectPlan(plan.id)} 
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mt-16 bg-muted/50 rounded-lg p-6 border border-border shadow-sm">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <AlertCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Important Information</h3>
                <p className="text-muted-foreground">
                  The SEVIS fee is a mandatory fee required by the U.S. government for all F and J visa applicants. 
                  Our service helps you pay this fee easily and provides you with the necessary documentation 
                  for your visa interview. The processing time indicates when you can expect to receive your 
                  payment confirmation after submitting your information.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm text-left">
                <h3 className="font-medium mb-2">What is the SEVIS fee?</h3>
                <p className="text-muted-foreground text-sm">
                  The SEVIS fee is required by the U.S. government to maintain the Student and Exchange Visitor Information System (SEVIS), which tracks international students and exchange visitors in the United States.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm text-left">
                <h3 className="font-medium mb-2">When should I pay the SEVIS fee?</h3>
                <p className="text-muted-foreground text-sm">
                  The SEVIS fee must be paid before your visa interview at the U.S. embassy or consulate. We recommend paying at least 3 business days before your interview.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm text-left">
                <h3 className="font-medium mb-2">Do I need to print the receipt?</h3>
                <p className="text-muted-foreground text-sm">
                  Yes, you should print the SEVIS fee payment receipt and bring it to your visa interview. We will email you the receipt once the payment is processed.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border shadow-sm text-left">
                <h3 className="font-medium mb-2">Can I get a refund if my visa is denied?</h3>
                <p className="text-muted-foreground text-sm">
                  The SEVIS fee is non-refundable regardless of whether your visa application is approved or denied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6 relative z-10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SEVIS Pay Africa. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

interface PricingCardProps {
  plan: PricingOption;
  onSelect: () => void;
}

const PricingCard = ({ plan, onSelect }: PricingCardProps) => {
  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
      plan.popular ? 'border-primary/50 shadow-md' : ''
    }`}>
      {plan.popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg shadow-sm">
            Popular
          </div>
        </div>
      )}

      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          {plan.name}
          {plan.popular && <CheckCircle className="h-5 w-5 text-green-500" />}
        </CardTitle>
        <CardDescription>{plan.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="text-3xl font-bold">${plan.totalAmount}</div>
            <div className="text-sm text-muted-foreground">Total amount</div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border">
            <div className="flex flex-col items-start">
              <div className="flex items-center text-muted-foreground text-sm mb-1">
                <DollarSign className="h-3 w-3 mr-1" />
                SEVIS Fee
              </div>
              <div className="font-medium">${plan.sevisFee}</div>
            </div>

            <div className="flex flex-col items-start">
              <div className="flex items-center text-muted-foreground text-sm mb-1">
                <DollarSign className="h-3 w-3 mr-1" />
                Service Fee
              </div>
              <div className="font-medium">${plan.serviceFee}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Clock className="h-4 w-4 text-muted-foreground" />
            <span>Processing time: <span className="font-medium">{plan.processingTime}</span></span>
          </div>

          <ul className="space-y-2">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button 
          onClick={onSelect} 
          className={`w-full ${
            plan.popular 
              ? 'bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700' 
              : ''
          }`}
        >
          Select Plan
          <ChevronRight className="h-4 w-4 ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Pricing;
