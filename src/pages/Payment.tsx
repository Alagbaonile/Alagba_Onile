
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
  FileText,
  CreditCard,
  Loader2,
  CheckCircle
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
  const [fieldValidStatus, setFieldValidStatus] = useState<{[key: string]: boolean}>({});

  const steps = [
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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
    
    // Validate field as user types (for immediate feedback)
    validateField(name, value);
  };

  const validateField = (field: string, value: any) => {
    let isValid = true;
    
    // Skip validation for passport number if passport is not required
    if (field === "passportNumber" && !formData.passportRequired) {
      setFieldValidStatus(prev => ({ ...prev, [field]: true }));
      return true;
    }
    
    // Skip validation for schoolCode if visa type is J1
    if (field === "schoolCode" && formData.visaType === "j1") {
      setFieldValidStatus(prev => ({ ...prev, [field]: true }));
      return true;
    }
    
    // Skip validation for programNumber if visa type is F1
    if (field === "programNumber" && formData.visaType === "f1") {
      setFieldValidStatus(prev => ({ ...prev, [field]: true }));
      return true;
    }

    switch (field) {
      case "email":
        isValid = validateEmail(value);
        break;
      case "sevisId":
        isValid = validateSevisId(value);
        break;
      case "passportNumber":
        isValid = validatePassportNumber(value);
        break;
      case "schoolCode":
        isValid = validateSchoolCode(value);
        break;
      case "programNumber":
        isValid = validateProgramNumber(value);
        break;
      case "passportRequired":
        isValid = true; // Checkbox is always valid
        break;
      default:
        isValid = validateRequired(value);
    }
    
    setFieldValidStatus(prev => ({ ...prev, [field]: isValid }));
    return isValid;
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
    
    // Validate field
    validateField(name, value);
    
    // For visa type, we need to reset and validate dependent fields
    if (name === "visaType") {
      if (value === "f1") {
        validateField("schoolCode", formData.schoolCode);
        setFieldValidStatus(prev => ({ ...prev, programNumber: true }));
      } else {
        validateField("programNumber", formData.programNumber);
        setFieldValidStatus(prev => ({ ...prev, schoolCode: true }));
      }
    }
  };
  
  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
    validateField(name, checked);
    
    // Reset passport number validation if not required
    if (name === "passportRequired") {
      if (!checked) {
        setFieldValidStatus(prev => ({ ...prev, passportNumber: true }));
      } else {
        validateField("passportNumber", formData.passportNumber);
      }
    }
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

      let fieldIsValid = true;
      switch (field) {
        case "email":
          fieldIsValid = validateEmail(formData[field]);
          if (!fieldIsValid) {
            newErrors[field] = "Please enter a valid email address";
            isValid = false;
          }
          break;
        case "sevisId":
          fieldIsValid = validateSevisId(formData[field]);
          if (!fieldIsValid) {
            newErrors[field] = "SEVIS ID should be in the format N12345678";
            isValid = false;
          }
          break;
        case "passportNumber":
          fieldIsValid = validatePassportNumber(formData[field]);
          if (!fieldIsValid) {
            newErrors[field] = "Please enter a valid passport number (6-12 characters)";
            isValid = false;
          }
          break;
        case "schoolCode":
          fieldIsValid = validateSchoolCode(formData[field]);
          if (!fieldIsValid) {
            newErrors[field] = "School code should be in the format ABC12345";
            isValid = false;
          }
          break;
        case "programNumber":
          fieldIsValid = validateProgramNumber(formData[field]);
          if (!fieldIsValid) {
            newErrors[field] = "Program number should be in the format P-1-12345";
            isValid = false;
          }
          break;
        case "passportRequired":
          // No validation needed for checkbox
          fieldIsValid = true;
          break;
        default:
          fieldIsValid = validateRequired(formData[field]);
          if (!fieldIsValid) {
            newErrors[field] = "This field is required";
            isValid = false;
          }
      }
      
      setFieldValidStatus(prev => ({ ...prev, [field]: fieldIsValid }));
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
      
      // Show success toast when advancing to the next step
      toast({
        title: "Step completed!",
        description: `Moving to ${steps[Math.min(currentStep + 1, steps.length - 1)].title}`,
        variant: "default",
      });
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
              {fieldValidStatus.fullName && !errors.fullName && formData.fullName && 
                <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Input 
              id="fullName" 
              name="fullName" 
              placeholder="Enter your full name" 
              value={formData.fullName}
              onChange={handleChange}
              className={`${errors.fullName ? "border-destructive" : ""} 
                          ${fieldValidStatus.fullName && !errors.fullName && formData.fullName ? "border-green-500" : ""}`}
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
              {fieldValidStatus.dateOfBirth && !errors.dateOfBirth && formData.dateOfBirth && 
                <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Input 
              id="dateOfBirth" 
              name="dateOfBirth" 
              type="date" 
              value={formData.dateOfBirth}
              onChange={handleChange}
              className={`${errors.dateOfBirth ? "border-destructive" : ""} 
                          ${fieldValidStatus.dateOfBirth && !errors.dateOfBirth && formData.dateOfBirth ? "border-green-500" : ""}`}
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
              {fieldValidStatus.countryOfBirth && !errors.countryOfBirth && formData.countryOfBirth && 
                <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Input 
              id="countryOfBirth" 
              name="countryOfBirth" 
              placeholder="Enter your country of birth" 
              value={formData.countryOfBirth}
              onChange={handleChange}
              className={`${errors.countryOfBirth ? "border-destructive" : ""} 
                          ${fieldValidStatus.countryOfBirth && !errors.countryOfBirth && formData.countryOfBirth ? "border-green-500" : ""}`}
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
              {fieldValidStatus.citizenship && !errors.citizenship && formData.citizenship && 
                <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Input 
              id="citizenship" 
              name="citizenship" 
              placeholder="Enter your citizenship" 
              value={formData.citizenship}
              onChange={handleChange}
              className={`${errors.citizenship ? "border-destructive" : ""} 
                          ${fieldValidStatus.citizenship && !errors.citizenship && formData.citizenship ? "border-green-500" : ""}`}
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
              {fieldValidStatus.sevisId && !errors.sevisId && formData.sevisId && 
                <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Input 
              id="sevisId" 
              name="sevisId" 
              placeholder="N12345678" 
              value={formData.sevisId}
              onChange={handleChange}
              className={`${errors.sevisId ? "border-destructive" : ""} 
                          ${fieldValidStatus.sevisId && !errors.sevisId && formData.sevisId ? "border-green-500" : ""}`}
            />
            {errors.sevisId && (
              <p className="text-sm text-destructive">{errors.sevisId}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("visaType") && (
          <div className="space-y-2">
            <Label htmlFor="visaType" className="flex items-center gap-1">
              Visa Type
              {fieldValidStatus.visaType && <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Select 
              value={formData.visaType} 
              onValueChange={(value) => handleSelectChange("visaType", value)}
            >
              <SelectTrigger className={fieldValidStatus.visaType ? "border-green-500" : ""}>
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
              {fieldValidStatus.schoolCode && !errors.schoolCode && formData.schoolCode && 
                <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Input 
              id="schoolCode" 
              name="schoolCode" 
              placeholder="ABC12345" 
              value={formData.schoolCode}
              onChange={handleChange}
              className={`${errors.schoolCode ? "border-destructive" : ""} 
                          ${fieldValidStatus.schoolCode && !errors.schoolCode && formData.schoolCode ? "border-green-500" : ""}`}
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
              {fieldValidStatus.programNumber && !errors.programNumber && formData.programNumber && 
                <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Input 
              id="programNumber" 
              name="programNumber" 
              placeholder="P-1-12345" 
              value={formData.programNumber}
              onChange={handleChange}
              className={`${errors.programNumber ? "border-destructive" : ""} 
                          ${fieldValidStatus.programNumber && !errors.programNumber && formData.programNumber ? "border-green-500" : ""}`}
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
              {fieldValidStatus.email && !errors.email && formData.email && 
                <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Input 
              id="email" 
              name="email" 
              type="email" 
              placeholder="Enter your email" 
              value={formData.email}
              onChange={handleChange}
              className={`${errors.email ? "border-destructive" : ""} 
                          ${fieldValidStatus.email && !errors.email && formData.email ? "border-green-500" : ""}`}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>
        )}
        
        {currentFields.includes("address") && (
          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center gap-1">
              Mailing Address (Optional)
              {formData.address && <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Textarea 
              id="address" 
              name="address" 
              placeholder="Enter your mailing address" 
              value={formData.address}
              onChange={handleChange}
              rows={3}
              className={formData.address ? "border-green-500" : ""}
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
              <Label htmlFor="passportRequired" className="flex items-center gap-1">
                I have a passport to provide
                {fieldValidStatus.passportRequired && <CheckCircle className="h-4 w-4 text-green-500" />}
              </Label>
            </div>
          </div>
        )}
        
        {currentFields.includes("passportNumber") && formData.passportRequired && (
          <div className="space-y-2">
            <Label htmlFor="passportNumber" className="flex items-center gap-1">
              Passport Number {errors.passportNumber && <AlertCircle className="h-4 w-4 text-destructive" />}
              {fieldValidStatus.passportNumber && !errors.passportNumber && formData.passportNumber && 
                <CheckCircle className="h-4 w-4 text-green-500" />}
            </Label>
            <Input 
              id="passportNumber" 
              name="passportNumber" 
              placeholder="Enter your passport number" 
              value={formData.passportNumber}
              onChange={handleChange}
              className={`${errors.passportNumber ? "border-destructive" : ""} 
                          ${fieldValidStatus.passportNumber && !errors.passportNumber && formData.passportNumber ? "border-green-500" : ""}`}
            />
            {errors.passportNumber && (
              <p className="text-sm text-destructive">{errors.passportNumber}</p>
            )}
          </div>
        )}
        
        {currentStep === steps.length - 1 && (
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/30 p-4 rounded-lg mt-6 shadow-sm">
            <h3 className="font-medium mb-2 flex items-center gap-2">
              <CreditCard className="h-4 w-4" /> Fee Breakdown
            </h3>
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
    <div className="min-h-screen flex flex-col bg-background bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070')] bg-fixed bg-no-repeat bg-cover bg-center bg-opacity-10">
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm z-0"></div>
      
      <header className="border-b relative z-10">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold text-xl text-primary flex items-center gap-2">
            <GraduationCap className="h-5 w-5" /> SEVIS Pay Africa
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-indigo-400 text-transparent bg-clip-text">SEVIS Fee Payment</h1>
          
          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between">
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center ${index <= currentStep ? 'text-primary' : 'text-muted-foreground'}`}
                >
                  <div 
                    className={`flex items-center justify-center w-10 h-10 rounded-full mb-2 transition-all duration-300 shadow-md ${
                      index < currentStep 
                        ? 'bg-primary text-primary-foreground animate-pulse' 
                        : index === currentStep 
                          ? 'border-2 border-primary bg-primary/10 animate-fade-in' 
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
                className="absolute h-1 bg-gradient-to-r from-primary to-blue-600 dark:from-primary dark:to-indigo-400 top-0 left-0 rounded transition-all duration-700 ease-in-out" 
                style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
          </div>
          
          <Card className="shadow-xl border-t-4 border-t-primary animate-fade-in dark:shadow-primary/5 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-r ${steps[currentStep].bgColor} opacity-50 z-0`}></div>
            <CardHeader className="relative z-10">
              <CardTitle className="flex items-center gap-2">
                {steps[currentStep].icon} {steps[currentStep].title}
              </CardTitle>
              <CardDescription>
                Please fill in the information below to proceed with your SEVIS fee payment.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="relative z-10">
                {renderFormFields()}
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
                    Next
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
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>By proceeding with the payment, you agree to our Terms of Service and Privacy Policy.</p>
            <div className="mt-6 flex justify-center gap-6 animate-fade-in">
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-8 grayscale hover:grayscale-0 transition-all" />
              <img src="https://flutterwave.com/images/logo/full.svg" alt="Flutterwave" className="h-8 grayscale hover:grayscale-0 transition-all" />
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

export default Payment;
