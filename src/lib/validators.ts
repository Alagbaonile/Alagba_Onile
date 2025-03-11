
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateSevisId = (sevisId: string) => {
  const sevisIdRegex = /^N\d{8}$/;
  return sevisIdRegex.test(sevisId);
};

export const validateRequired = (value: string) => {
  return value.trim() !== "";
};

export const validatePassportNumber = (passportNumber: string) => {
  // Basic validation - can be enhanced based on specific country requirements
  return passportNumber.length >= 6 && passportNumber.length <= 12;
};

export const validateSchoolCode = (code: string) => {
  // Format: 3 letters followed by 5 digits (example format)
  const schoolCodeRegex = /^[A-Z]{3}\d{5}$/;
  return schoolCodeRegex.test(code);
};

export const validateProgramNumber = (programNumber: string) => {
  // Basic validation for program number (example format)
  const programNumberRegex = /^P-\d{1}-\d{5}$/;
  return programNumberRegex.test(programNumber);
};
