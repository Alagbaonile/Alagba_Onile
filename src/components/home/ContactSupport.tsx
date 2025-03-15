
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export function ContactSupport() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "We've received your message and will respond shortly.",
    });
    // In a real app, this would submit to the API
    console.log("Contact form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Contact & Support</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions or need assistance? Our team is here to help with your SEVIS fee payment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Email Us</h4>
                  <p className="text-sm text-muted-foreground">support@sevispayafrica.com</p>
                  <p className="text-sm text-muted-foreground">info@sevispayafrica.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Call Us</h4>
                  <p className="text-sm text-muted-foreground">+234 (0) 800 SEVIS PAY</p>
                  <p className="text-sm text-muted-foreground">+1 (234) 567-8901</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MessageSquare className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Live Chat</h4>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                  <Button variant="link" className="h-auto p-0 text-primary">Start Chat</Button>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h4 className="font-medium mb-2">Business Hours</h4>
              <p className="text-sm text-muted-foreground">
                Monday - Friday: 8am - 8pm (WAT)<br />
                Weekends: 10am - 6pm (WAT)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
