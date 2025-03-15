
import { ArrowRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background to-accent/20"> {/* Increased padding */}
      <div className="container mx-auto px-6 md:px-10"> {/* Increased container padding */}
        <div className="text-center max-w-3xl mx-auto mb-20"> {/* Increased margin */}
          <Badge variant="outline" className="mb-6 px-4 py-1.5 rounded-full bg-primary/5 text-base"> {/* Increased size and spacing */}
            Simple Process
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">How It Works</h2> {/* Increased font size and margin */}
          <p className="text-xl leading-relaxed text-muted-foreground"> {/* Increased font size and line height */}
            Our simple three-step process makes paying your SEVIS fee quick and hassle-free.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Increased gap */}
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
            <div key={index} className="bg-background border border-border rounded-xl p-10 shadow-sm relative overflow-hidden group hover-lift"> {/* Increased padding */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-primary/5 rounded-full"></div> {/* Increased size */}
              
              <div className="mb-8 flex items-center gap-5"> {/* Increased spacing */}
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold"> {/* Increased size and font */}
                  {item.step}
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground hidden md:block group-last:hidden" /> {/* Increased size */}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3> {/* Increased font size and margin */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{item.description}</p> {/* Increased font size, margin, and line height */}
              
              <ul className="space-y-3"> {/* Increased spacing */}
                {item.points.map((point, pidx) => (
                  <li key={pidx} className="flex items-start gap-3 text-base"> {/* Increased gap and text size */}
                    <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 shrink-0" /> {/* Increased size */}
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
