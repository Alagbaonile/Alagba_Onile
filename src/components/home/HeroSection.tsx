
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-5xl text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Pay Your SEVIS Fee 
          <span className="text-primary block mt-2">Quickly & Securely</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          The fastest and most secure way for African students to process their SEVIS fee payment. Start your educational journey with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/payment">
            <Button size="lg" className="gap-2">
              Make Payment Now
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">Learn More</Button>
        </div>
      </div>
    </section>
  );
}
