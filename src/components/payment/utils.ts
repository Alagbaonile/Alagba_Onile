
import { 
  validateEmail, 
  validateRequired, 
  validateSevisId, 
  validatePassportNumber,
  validateSchoolCode,
  validateProgramNumber
} from "@/lib/validators";
import { FormData, FieldError } from "./types";

export const validateField = (field: string, value: any, formData: FormData) => {
  let isValid = true;
  
  // Skip validation for passport number if passport is not required
  if (field === "passportNumber" && !formData.passportRequired) {
    return true;
  }
  
  // Skip validation for schoolCode if visa type is J1
  if (field === "schoolCode" && formData.visaType === "j1") {
    return true;
  }
  
  // Skip validation for programNumber if visa type is F1
  if (field === "programNumber" && formData.visaType === "f1") {
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
  
  return isValid;
};

export const validateStep = (
  stepFields: string[], 
  formData: FormData, 
  setErrors: (errors: FieldError) => void,
  setFieldValidStatus: (prev: (prevState: {[key: string]: boolean}) => {[key: string]: boolean}) => void
) => {
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
