
export interface FormData {
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

export interface FieldError {
  [key: string]: string;
}

export interface StepConfig {
  title: string;
  icon: React.ReactNode;
  fields: string[];
  bgColor: string;
}
