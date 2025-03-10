
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

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
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            <HelpCircle className="h-4 w-4" />
            <span>FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about SEVIS fee payments and our service.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-sm border border-border p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  <span className="font-medium text-lg">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground pb-2">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
