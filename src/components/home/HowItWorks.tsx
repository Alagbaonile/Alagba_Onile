
import { ArrowRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-3 py-1 rounded-full bg-primary/5">Simple Process</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="text-lg text-muted-foreground">
            Our simple three-step process makes paying your SEVIS fee quick and hassle-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Fill Your Information",
              description: "Complete our easy-to-use form with your personal and visa details.",
              points: [
                "Basic personal information",
                "Passport details",
                "Visa application information",
                "Contact details"
              ]
            },
            {
              step: "02",
              title: "Select a Package",
              description: "Choose from our Express, Standard, Basic, or Free packages based on your timeline.",
              points: [
                "Express (24 hours)",
                "Standard (3-5 days)",
                "Basic (7-10 days)",
                "Free (21-30 days)"
              ]
            },
            {
              step: "03",
              title: "Make Payment",
              description: "Securely pay via our trusted payment partners and receive your SEVIS fee receipt.",
              points: [
                "Secure payment processing",
                "Instant confirmation",
                "Email receipt",
                "Track your payment status"
              ]
            }
          ].map((item, index) => (
            <div key={index} className="bg-background border border-border rounded-xl p-8 shadow-sm relative overflow-hidden group hover-lift">
              <div className="absolute -right-8 -top-8 w-24 h-24 bg-primary/5 rounded-full"></div>
              
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <ArrowRight className="w-5 h-5 text-muted-foreground hidden md:block group-last:hidden" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-muted-foreground mb-6">{item.description}</p>
              
              <ul className="space-y-2">
                {item.points.map((point, pidx) => (
                  <li key={pidx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
