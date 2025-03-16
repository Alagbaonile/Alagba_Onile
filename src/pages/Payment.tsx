import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Link } from "react-router-dom";
import { 
  ChevronRight, 
  ChevronLeft, 
  User, 
  GraduationCap, 
  Mail, 
  FileText,
  Loader2,
  DollarSign,
  ArrowLeft,
} from "lucide-react";
import { Footer } from "@/components/layout/Footer";

// Import custom components
import PersonalInfoStep from "@/components/payment/PersonalInfoStep";
import VisaInfoStep from "@/components/payment/VisaInfoStep";
import ContactInfoStep from "@/components/payment/ContactInfoStep";
import PassportInfoStep from "@/components/payment/PassportInfoStep";
import PaymentStepsProgress from "@/components/payment/PaymentStepsProgress";

// Import types and utils
import { FormData, FieldError, StepConfig } from "@/components/payment/types";
import { validateField, validateStep } from "@/components/payment/utils";
import { sendFormDataByEmail } from "@/services/emailService";

// Pricing plan types
interface PricingPlan {
  id: string;
  name: string;
  processingTime: string;
  sevisFee: number;
  serviceFee: number;
  totalAmount: number;
  visaType: "f1" | "j1";
}

const Payment = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const locationState = location.state as { planId?: string; visaType?: "f1" | "j1" } | null;
  const [selectedPlan, setSelectedPlan] = useState<PricingPlan | null>(null);

  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    dateOfBirth: "",
    countryOfBirth: "",
    citizenship: "",
    sevisId: "",
    visaType: locationState?.visaType || "f1",
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
  const [fieldValidStatus, setFieldValidStatus] = useState<{[key: string]: boolean}>({});

  const pricingPlans: PricingPlan[] = [
    {
      id: "express-f1",
      name: "Express",
      processingTime: "24 hours",
      sevisFee: 350,
      serviceFee: 100,
      totalAmount: 450,
      visaType: "f1"
    },
    {
      id: "standard-f1",
      name: "Standard",
      processingTime: "3-5 days",
      sevisFee: 350,
      serviceFee: 70,
      totalAmount: 420,
      visaType: "f1"
    },
    {
      id: "basic-f1",
      name: "Basic",
      processingTime: "7-10 days",
      sevisFee: 350,
      serviceFee: 40,
      totalAmount: 390,
      visaType: "f1"
    },
    {
      id: "free-f1",
      name: "Economy",
      processingTime: "21-30 days",
      sevisFee: 350,
      serviceFee: 10,
      totalAmount: 360,
      visaType: "f1"
    },
    {
      id: "express-j1",
      name: "Express",
      processingTime: "24 hours",
      sevisFee: 220,
      serviceFee: 90,
      totalAmount: 310,
      visaType: "j1"
    },
    {
      id: "standard-j1",
      name: "Standard",
      processingTime: "3-5 days",
      sevisFee: 220,
      serviceFee: 60,
      totalAmount: 280,
      visaType: "j1"
    },
    {
      id: "basic-j1",
      name: "Basic",
      processingTime: "7-10 days",
      sevisFee: 220,
      serviceFee: 30,
      totalAmount: 250,
      visaType: "j1"
    },
    {
      id: "free-j1",
      name: "Economy",
      processingTime: "21-30 days",
      sevisFee: 220,
      serviceFee: 10,
      totalAmount: 230,
      visaType: "j1"
    }
  ];

  useEffect(() => {
    const planId = locationState?.planId || localStorage.getItem("selectedPlan");
    
    if (planId) {
      const plan = pricingPlans.find(p => p.id === planId);
      if (plan) {
        setSelectedPlan(plan);
        
        setFormData(prev => ({
          ...prev,
          visaType: plan.visaType,
          amount: plan.totalAmount
        }));
      } else {
        toast({
          title: "No plan selected",
          description: "Please select a payment plan to continue",
          variant: "destructive"
        });
        navigate("/pricing");
      }
    } else {
      navigate("/pricing");
    }
  }, [location, navigate, toast, locationState]);

  const steps: StepConfig[] = [
    {
      title: "Personal Information",
      icon: <User className="h-5 w-5" />,
      fields: ["fullName", "dateOfBirth", "countryOfBirth", "citizenship"],
      bgColor: "from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30"
    },
    {
      title: "Visa & School Information",
      icon: <GraduationCap className="h-5 w-5" />,
      fields: ["sevisId", "visaType", "schoolCode", "programNumber"],
      bgColor: "from-green-50 to-emerald-50 dark:from-green-950/40 dark:to-emerald-950/30"
    },
    {
      title: "Contact Information",
      icon: <Mail className="h-5 w-5" />,
      fields: ["email", "address"],
      bgColor: "from-amber-50 to-yellow-50 dark:from-amber-950/40 dark:to-yellow-950/30"
    },
    {
      title: "Passport Information",
      icon: <FileText className="h-5 w-5" />,
      fields: ["passportRequired", "passportNumber"],
      bgColor: "from-purple-50 to-fuchsia-50 dark:from-purple-950/40 dark:to-fuchsia-950/30"
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    const isValid = validateField(name, value, formData);
    setFieldValidStatus(prev => ({ ...prev, [name]: isValid }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    const isValid = validateField(name, value, formData);
    setFieldValidStatus(prev => ({ ...prev, [name]: isValid }));
    
    if (name === "visaType") {
      if (value === "f1") {
        const isSchoolCodeValid = validateField("schoolCode", formData.schoolCode, formData);
        setFieldValidStatus(prev => ({ ...prev, schoolCode: isSchoolCodeValid, programNumber: true }));
      } else {
        const isProgramNumberValid = validateField("programNumber", formData.programNumber, formData);
        setFieldValidStatus(prev => ({ ...prev, programNumber: isProgramNumberValid, schoolCode: true }));
      }
    }
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
    
    const isValid = validateField(name, checked, formData);
    setFieldValidStatus(prev => ({ ...prev, [name]: isValid }));
    
    if (name === "passportRequired") {
      if (!checked) {
        setFieldValidStatus(prev => ({ ...prev, passportNumber: true }));
      } else {
        const isPassportValid = validateField("passportNumber", formData.passportNumber, formData);
        setFieldValidStatus(prev => ({ ...prev, passportNumber: isPassportValid }));
      }
    }
  };

  const handleStepValidation = () => {
    return validateStep(
      steps[currentStep].fields, 
      formData, 
      setErrors,
      setFieldValidStatus
    );
  };

  const handleEmailSubmission = async () => {
    setIsSubmitting(true);
    
    try {
      console.log("Sending form data:", formData);
      const result = await sendFormDataByEmail(formData);
      console.log("Email service response:", result);
      
      if (result.success) {
        toast({
          title: "Form data sent successfully",
          description: "Your information has been submitted. Proceeding to payment...",
        });
        
        simulatePaymentProcess();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Email submission error:", error);
      toast({
        title: "Submission error",
        description: error instanceof Error ? error.message : "Failed to submit your information. You can still proceed to payment.",
        variant: "destructive"
      });
      
      simulatePaymentProcess();
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (handleStepValidation()) {
      if (currentStep === steps.length - 1) {
        handleEmailSubmission();
      } else {
        setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
        
        toast({
          title: "Step completed!",
          description: `Moving to ${steps[Math.min(currentStep + 1, steps.length - 1)].title}`,
          variant: "default",
        });
      }
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

  const simulatePaymentProcess = () => {
    setTimeout(() => {
      toast({
        title: "Payment process initiated",
        description: "Redirecting to payment gateway...",
      });
      
      console.log("Form submitted:", formData);
    }, 1500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (handleStepValidation()) {
      handleEmailSubmission();
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <PersonalInfoStep
            formData={formData}
            errors={errors}
            fieldValidStatus={fieldValidStatus}
            handleChange={handleChange}
          />
        );
      case 1:
        return (
          <VisaInfoStep
            formData={formData}
            errors={errors}
            fieldValidStatus={fieldValidStatus}
            handleChange={handleChange}
            handleSelectChange={handleSelectChange}
          />
        );
      case 2:
        return (
          <ContactInfoStep
            formData={formData}
            errors={errors}
            fieldValidStatus={fieldValidStatus}
            handleChange={handleChange}
          />
        );
      case 3:
        return (
          <PassportInfoStep
            formData={formData}
            errors={errors}
            fieldValidStatus={fieldValidStatus}
            handleChange={handleChange}
            handleCheckboxChange={handleCheckboxChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-fixed bg-no-repeat bg-cover bg-center bg-opacity-10">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-0"></div>
      
      <header className="border-b relative z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-xl text-primary flex items-center gap-2">
            <GraduationCap className="h-5 w-5" /> SEVIS Pay Africa
          </Link>
          <div className="flex items-center gap-6">
            <Link to="/pricing" className="text-base font-medium hover:text-primary flex items-center gap-1">
              <ArrowLeft className="h-4 w-4" />
              Back to Pricing
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-indigo-400 text-transparent bg-clip-text mb-4">SEVIS Fee Payment</h1>
            
            {selectedPlan && (
              <Card className="mb-10 overflow-hidden shadow-lg">
                <div className={`bg-gradient-to-r ${formData.visaType === "f1" ? "from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30" : "from-purple-50 to-fuchsia-50 dark:from-purple-950/40 dark:to-fuchsia-950/30"} p-6`}>
                  <h2 className="text-xl font-semibold mb-2">Selected Plan: {selectedPlan.name}</h2>
                  <div className="flex flex-wrap gap-4 text-base">
                    <div className="flex items-center gap-1 font-medium">
                      <DollarSign className="h-5 w-5" />
                      <span>Total: ${selectedPlan.totalAmount}</span>
                    </div>
                    <div className="flex items-center gap-1 font-medium">
                      <FileText className="h-5 w-5" />
                      <span>SEVIS Fee: ${selectedPlan.sevisFee}</span>
                    </div>
                    <div className="flex items-center gap-1 font-medium">
                      <GraduationCap className="h-5 w-5" />
                      <span>Visa Type: {formData.visaType.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </Card>
            )}
          </div>
          
          <PaymentStepsProgress steps={steps} currentStep={currentStep} />
          
          <Card className="shadow-xl border-t-4 border-t-primary animate-fade-in dark:shadow-primary/5 overflow-hidden mb-10">
            <div className={`absolute inset-0 bg-gradient-to-r ${steps[currentStep].bgColor} opacity-50 z-0`}></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2 text-xl">
                {steps[currentStep].icon} {steps[currentStep].title}
              </CardTitle>
              <CardDescription className="text-base">
                Please fill in the information below to proceed with your SEVIS fee payment.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="relative z-10">
                {renderCurrentStep()}
              </CardContent>
              
              <CardFooter className="flex justify-between relative z-10">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={handlePrevious} 
                  disabled={currentStep === 0}
                  className="shadow-sm hover:shadow-md transition-all"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
                
                {currentStep < steps.length - 1 ? (
                  <Button 
                    type="button" 
                    onClick={handleNext}
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-md hover:shadow-lg transition-all"
                  >
                    {currentStep === 2 ? "Submit" : "Next"}
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 shadow-md hover:shadow-lg transition-all"
                  >
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
          
          <div className="mt-8 text-center text-base font-medium text-muted-foreground bg-secondary/80 p-6 rounded-lg shadow-sm border border-muted">
            <p className="text-foreground">By proceeding with the payment, you agree to our Terms of Service and Privacy Policy.</p>
            <div className="mt-6 flex justify-center gap-8 animate-fade-in">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-10 grayscale-0 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-10 grayscale-0 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-10 grayscale-0 transition-all" />
              <img src="https://flutterwave.com/images/logo/full.svg" alt="Flutterwave" className="h-10 grayscale-0 transition-all" />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Payment;
