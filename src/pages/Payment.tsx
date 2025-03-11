
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Link } from "react-router-dom";
import { Textarea } from "@/components/ui/textarea";
import { 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft, 
  AlertCircle, 
  User, 
  GraduationCap, 
  Mail, 
  Passport,
  Loader2
} from "lucide-react";
import { 
  validateEmail, 
  validateRequired, 
  validateSevisId, 
  validatePassportNumber,
  validateSchoolCode,
  validateProgramNumber
} from "@/lib/validators";

interface FormData {
  // Personal Information
  fullName: string;
  dateOfBirth: string;
  countryOfBirth: string;
  citizenship: string;
  
  // Visa & School Information
  sevisId: string;
  visaType: string;
  schoolCode: string;
  programNumber: string;
  
  // Contact Information
  email: string;
  address: string;
  
  // Passport Information
  passportRequired: boolean;
  passportNumber: string;
  
  // Payment Information
  amount: number;
  paymentMethod: string;
}

interface FieldError {
  [key: string]: string;
}

const Payment = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dateOfBirth: "",
    countryOfBirth: "",
    citizenship: "",
    sevisId: "",
    visaType: "f1",
    schoolCode: "",
    programNumber: "",
    email: "",
    address: "",
    passportRequired: false,
    passportNumber: "",
    amount: 350,
    paymentMethod: "card"
  });
  
  const [errors, setErrors] = useState<FieldError>({});

  const steps = [
    {
      title: "Personal Information",
      icon: <User className="h-5 w-5" />,
      fields: ["fullName", "dateOfBirth", "countryOfBirth", "citizenship"]
    },
    {
      title: "Visa & School Information",
      icon: <GraduationCap className="h-5 w-5" />,
      fields: ["sevisId", "visaType", "schoolCode", "programNumber"]
    },
    {
      title: "Contact Information",
      icon: <Mail className="h-5 w-5" />,
      fields: ["email", "address"]
    },
    {
      title: "Passport Information",
      icon: <Passport className="h-5 w-5" />,
      fields: ["passportRequired", "passportNumber"]
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user makes a selection
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const validateStep = (stepIndex: number) => {
    const stepFields = steps[stepIndex].fields;
    const newErrors: FieldError = {};
    let isValid = true;

    stepFields.forEach(field => {
      // Skip validation for passport number if passport is not required
      if (field === "passportNumber" && !formData.passportRequired) {
        return;
      }
      
      // Skip validation for schoolCode if visa type is J1
      if (field === "schoolCode" && formData.visaType === "j1") {
        return;
      }
      
      // Skip validation for programNumber if visa type is F1
      if (field === "programNumber" && formData.visaType === "f1") {
        return;
      }

      switch (field) {
        case "email":
          if (!validateEmail(formData[field])) {
            newErrors[field] = "Please enter a valid email address";
            isValid = false;
          }
          break;
        case "sevisId":
          if (!validateSevisId(formData[field])) {
            newErrors[field] = "SEVIS ID should be in the format N12345678";
            isValid = false;
          }
          break;
        case "passportNumber":
          if (formData.passportRequired && !validatePassportNumber(formData[field])) {
            newErrors[field] = "Please enter a valid passport number (6-12 characters)";
            isValid = false;
          }
          break;
        case "schoolCode":
          if (formData.visaType === "f1" && !validateSchoolCode(formData[field])) {
            newErrors[field] = "School code should be in the format ABC12345";
            isValid = false;
          }
          break;
        case "programNumber":
          if (formData.visaType === "j1" && !validateProgramNumber(formData[field])) {
            newErrors[field] = "Program number should be in the format P-1-12345";
            isValid = false;
          }
          break;
        case "passportRequired":
          // No validation needed for checkbox
          break;
        default:
          if (!validateRequired(formData[field])) {
            newErrors[field] = "This field is required";
            isValid = false;
          }
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    } else {
      toast({
        title: "Please fix the errors",
        description: "Please correct the highlighted fields before proceeding.",
        variant: "destructive"
      });
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateStep(currentStep)) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        toast({
          title: "Payment process initiated",
          description: "Redirecting to payment gateway...",
        });
        
        // In a real app, here you would redirect to Flutterwave
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
      }, 1500);
    }
  };

  const renderFormFields = () => {
    const currentFields = steps[currentStep].fields;
    
    return (
      <div className="space-y-6">
        {currentFields.includes("fullName") && (
          <div className="space-y-2">
            <Label htmlFor="fullName" className="flex items-center gap-1">
              Full Name {errors.fullName && <AlertCircle className="h-4 w-4 text-destructive" />}
            </Label>
            <Input 
              id="fullName" 
              name="fullName" 
              placeholder="Enter your full name" 
              value={formData.fullName}
              onChange={handleChange}
              className={errors.fullName ? "border-destructive" : ""}
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("dateOfBirth") && (
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth" className="flex items-center gap-1">
              Date of Birth {errors.dateOfBirth && <AlertCircle className="h-4 w-4 text-destructive" />}
            </Label>
            <Input 
              id="dateOfBirth" 
              name="dateOfBirth" 
              type="date" 
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={errors.dateOfBirth ? "border-destructive" : ""}
            />
            {errors.dateOfBirth && (
              <p className="text-sm text-destructive">{errors.dateOfBirth}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("countryOfBirth") && (
          <div className="space-y-2">
            <Label htmlFor="countryOfBirth" className="flex items-center gap-1">
              Country of Birth {errors.countryOfBirth && <AlertCircle className="h-4 w-4 text-destructive" />}
            </Label>
            <Input 
              id="countryOfBirth" 
              name="countryOfBirth" 
              placeholder="Enter your country of birth" 
              value={formData.countryOfBirth}
              onChange={handleChange}
              className={errors.countryOfBirth ? "border-destructive" : ""}
            />
            {errors.countryOfBirth && (
              <p className="text-sm text-destructive">{errors.countryOfBirth}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("citizenship") && (
          <div className="space-y-2">
            <Label htmlFor="citizenship" className="flex items-center gap-1">
              Citizenship {errors.citizenship && <AlertCircle className="h-4 w-4 text-destructive" />}
            </Label>
            <Input 
              id="citizenship" 
              name="citizenship" 
              placeholder="Enter your citizenship" 
              value={formData.citizenship}
              onChange={handleChange}
              className={errors.citizenship ? "border-destructive" : ""}
            />
            {errors.citizenship && (
              <p className="text-sm text-destructive">{errors.citizenship}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("sevisId") && (
          <div className="space-y-2">
            <Label htmlFor="sevisId" className="flex items-center gap-1">
              SEVIS ID {errors.sevisId && <AlertCircle className="h-4 w-4 text-destructive" />}
            </Label>
            <Input 
              id="sevisId" 
              name="sevisId" 
              placeholder="N12345678" 
              value={formData.sevisId}
              onChange={handleChange}
              className={errors.sevisId ? "border-destructive" : ""}
            />
            {errors.sevisId && (
              <p className="text-sm text-destructive">{errors.sevisId}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("visaType") && (
          <div className="space-y-2">
            <Label htmlFor="visaType">Visa Type</Label>
            <Select 
              value={formData.visaType} 
              onValueChange={(value) => handleSelectChange("visaType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select visa type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="f1">F-1 Student Visa</SelectItem>
                <SelectItem value="j1">J-1 Exchange Visitor</SelectItem>
              </SelectContent>
            </Select>
          </div>
        )}
        
        {currentFields.includes("schoolCode") && formData.visaType === "f1" && (
          <div className="space-y-2">
            <Label htmlFor="schoolCode" className="flex items-center gap-1">
              School Code (F-1 only) {errors.schoolCode && <AlertCircle className="h-4 w-4 text-destructive" />}
            </Label>
            <Input 
              id="schoolCode" 
              name="schoolCode" 
              placeholder="ABC12345" 
              value={formData.schoolCode}
              onChange={handleChange}
              className={errors.schoolCode ? "border-destructive" : ""}
            />
            {errors.schoolCode && (
              <p className="text-sm text-destructive">{errors.schoolCode}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("programNumber") && formData.visaType === "j1" && (
          <div className="space-y-2">
            <Label htmlFor="programNumber" className="flex items-center gap-1">
              Program Number (J-1 only) {errors.programNumber && <AlertCircle className="h-4 w-4 text-destructive" />}
            </Label>
            <Input 
              id="programNumber" 
              name="programNumber" 
              placeholder="P-1-12345" 
              value={formData.programNumber}
              onChange={handleChange}
              className={errors.programNumber ? "border-destructive" : ""}
            />
            {errors.programNumber && (
              <p className="text-sm text-destructive">{errors.programNumber}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("email") && (
          <div className="space-y-2">
            <Label htmlFor="email" className="flex items-center gap-1">
              Email Address {errors.email && <AlertCircle className="h-4 w-4 text-destructive" />}
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("address") && (
          <div className="space-y-2">
            <Label htmlFor="address">
              Mailing Address (Optional)
            </Label>
            <Textarea 
              id="address" 
              name="address" 
              placeholder="Enter your mailing address" 
              value={formData.address}
              onChange={handleChange}
              rows={3}
            />
          </div>
        )}
        
        {currentFields.includes("passportRequired") && (
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="passportRequired"
                checked={formData.passportRequired}
                onChange={(e) => handleCheckboxChange("passportRequired", e.target.checked)}
                className="rounded border-input h-4 w-4"
              />
              <Label htmlFor="passportRequired">
                I have a passport to provide
              </Label>
            </div>
          </div>
        )}
        
        {currentFields.includes("passportNumber") && formData.passportRequired && (
          <div className="space-y-2">
            <Label htmlFor="passportNumber" className="flex items-center gap-1">
              Passport Number {errors.passportNumber && <AlertCircle className="h-4 w-4 text-destructive" />}
            </Label>
            <Input 
              id="passportNumber" 
              name="passportNumber" 
              placeholder="Enter your passport number" 
              value={formData.passportNumber}
              onChange={handleChange}
              className={errors.passportNumber ? "border-destructive" : ""}
            />
            {errors.passportNumber && (
              <p className="text-sm text-destructive">{errors.passportNumber}</p>
            )}
          </div>
        )}
        
        {currentStep === steps.length - 1 && (
          <div className="bg-muted p-4 rounded-lg mt-6">
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
        )}
      </div>
    );
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
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center ${index <= currentStep ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  <div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full mb-2 transition-colors ${
                      index < currentStep 
                        ? 'bg-primary text-primary-foreground' 
                        : index === currentStep 
                          ? 'border-2 border-primary bg-background' 
                          : 'border border-muted-foreground bg-muted'
                    }`}
                  >
                    {index < currentStep ? (
                      <CheckCircle2 className="h-5 w-5" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span className="text-xs text-center hidden md:block">{step.title}</span>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute h-1 bg-muted top-0 left-0 right-0 rounded"></div>
              <div 
                className="absolute h-1 bg-primary top-0 left-0 rounded transition-all duration-300 ease-in-out" 
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <Card className="shadow-lg border-t-4 border-t-primary animate-fade-in">
            <CardHeader>
              <CardTitle>{steps[currentStep].title}</CardTitle>
              <CardDescription>
                Please fill in the information below to proceed with your SEVIS fee payment.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent>
                {renderFormFields()}
              </CardContent>
              
              <CardFooter className="flex justify-between">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handlePrevious} 
                  disabled={currentStep === 0}
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                
                {currentStep < steps.length - 1 ? (
                  <Button type="button" onClick={handleNext}>
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      "Process Payment"
                    )}
                  </Button>
                )}
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
