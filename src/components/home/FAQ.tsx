
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, CheckCircle } from "lucide-react";

export function FAQ() {
  const faqs = [
    {
      question: "What is a SEVIS fee?",
      answer: "The SEVIS fee (I-901 fee) is a mandatory fee required by the U.S. government for students and exchange visitors. It funds the Student and Exchange Visitor Information System (SEVIS) which maintains information on international students and exchange visitors in the United States."
    },
    {
      question: "How much is the SEVIS fee?",
      answer: "The SEVIS fee is $350 for F and M visa students. There's a small processing fee for using our service to handle the payment on your behalf."
    },
    {
      question: "When should I pay the SEVIS fee?",
      answer: "You should pay the SEVIS fee at least 3 days before your visa interview at the U.S. embassy or consulate. This gives the system enough time to process your payment."
    },
    {
      question: "How do I get my payment receipt?",
      answer: "Once your payment is processed, we'll immediately send your official SEVIS fee receipt to your email. You should print this receipt and bring it to your visa interview."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards, bank transfers, mobile money, and cryptocurrencies to provide flexibility for students across Africa."
    },
    {
      question: "How long does the payment take to process?",
      answer: "Most payments are processed instantly. However, it can take up to 24 hours for the payment to be reflected in the SEVIS system. We recommend making the payment at least 3 days before your visa interview."
    }
  ];

  return (
    <section className="py-20 bg-muted/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full -mr-64 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary animate-fade-in">
            <HelpCircle className="w-4 h-4" />
            <span>FAQ</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 animate-fade-in [animation-delay:200ms]">
            Frequently Asked Questions
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in [animation-delay:400ms]">
            Find answers to common questions about SEVIS fee payments and our service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-70"></div>
          <div className="bg-card rounded-xl shadow-lg border border-border p-6 md:p-8 relative animate-fade-in [animation-delay:600ms]">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="border-b border-border last:border-0 animate-fade-in"
                  style={{ animationDelay: `${(index + 5) * 100}ms` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 group">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                        <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <span className="font-medium text-lg">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-9">
                      <p className="text-muted-foreground pb-2">{faq.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-in [animation-delay:1000ms]">
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary rounded-lg font-medium hover:bg-primary/20 transition-colors">
            <HelpCircle className="w-4 h-4" />
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}
