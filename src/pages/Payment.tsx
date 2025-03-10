
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Link } from "react-router-dom";

const Payment = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    sevisId: "",
    dob: "",
    university: "",
    amount: 350,
    paymentMethod: "card"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Payment initiated",
      description: "We're processing your payment. You'll receive a confirmation shortly.",
    });
    // In a real app, this would submit to the API
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-xl text-primary">SEVIS Pay Africa</Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">SEVIS Fee Payment</h1>
          
          <Card>
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>
                Fill in the required information to process your SEVIS fee payment.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input 
                      id="fullName" 
                      name="fullName" 
                      placeholder="Enter your full name" 
                      value={formData.fullName}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
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
                  
                  <div className="space-y-2">
                    <Label htmlFor="sevisId">SEVIS ID</Label>
                    <Input 
                      id="sevisId" 
                      name="sevisId" 
                      placeholder="N12345678" 
                      value={formData.sevisId}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input 
                      id="dob" 
                      name="dob" 
                      type="date" 
                      value={formData.dob}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="university">University Name</Label>
                    <Input 
                      id="university" 
                      name="university" 
                      placeholder="Enter your university name" 
                      value={formData.university}
                      onChange={handleChange}
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (USD)</Label>
                    <Input 
                      id="amount" 
                      name="amount" 
                      type="number" 
                      value={formData.amount}
                      onChange={handleChange}
                      required 
                      disabled
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="paymentMethod">Payment Method</Label>
                  <Select 
                    value={formData.paymentMethod} 
                    onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select payment method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="card">Credit/Debit Card</SelectItem>
                      <SelectItem value="bank">Bank Transfer</SelectItem>
                      <SelectItem value="mobile">Mobile Money</SelectItem>
                      <SelectItem value="crypto">Cryptocurrency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="bg-muted p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Fee Breakdown</h3>
                  <div className="flex justify-between mb-1">
                    <span>SEVIS Fee</span>
                    <span>$350.00</span>
                  </div>
                  <div className="flex justify-between mb-1">
                    <span>Processing Fee</span>
                    <span>$10.00</span>
                  </div>
                  <div className="border-t mt-2 pt-2 flex justify-between font-bold">
                    <span>Total</span>
                    <span>$360.00</span>
                  </div>
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Link to="/">
                  <Button variant="outline">Cancel</Button>
                </Link>
                <Button type="submit" size="lg">Process Payment</Button>
              </CardFooter>
            </form>
          </Card>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>By proceeding with the payment, you agree to our Terms of Service and Privacy Policy.</p>
            <div className="mt-4 flex justify-center gap-4">
              <img src="https://placehold.co/40x20?text=Visa" alt="Visa" className="h-6" />
              <img src="https://placehold.co/40x20?text=MC" alt="Mastercard" className="h-6" />
              <img src="https://placehold.co/40x20?text=PayPal" alt="PayPal" className="h-6" />
              <img src="https://placehold.co/40x20?text=Stripe" alt="Stripe" className="h-6" />
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} SEVIS Pay Africa. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Payment;
