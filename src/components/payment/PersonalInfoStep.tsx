
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle } from "lucide-react";

interface PersonalInfoStepProps {
  formData: {
    fullName: string;
    dateOfBirth: string;
    countryOfBirth: string;
    citizenship: string;
  };
  errors: {
    [key: string]: string;
  };
  fieldValidStatus: {
    [key: string]: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({
  formData,
  errors,
  fieldValidStatus,
  handleChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="fullName" className="flex items-center gap-1">
          Full Name {errors.fullName && <AlertCircle className="h-4 w-4 text-destructive" />}
          {fieldValidStatus.fullName && !errors.fullName && formData.fullName && (
            <CheckCircle className="h-4 w-4 text-green-500" />
          )}
        </Label>
        <Input
          id="fullName"
          name="fullName"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={handleChange}
          className={`${errors.fullName ? "border-destructive" : ""} 
                    ${
                      fieldValidStatus.fullName && !errors.fullName && formData.fullName
                        ? "border-green-500"
                        : ""
                    }`}
        />
        {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="dateOfBirth" className="flex items-center gap-1">
          Date of Birth {errors.dateOfBirth && <AlertCircle className="h-4 w-4 text-destructive" />}
          {fieldValidStatus.dateOfBirth && !errors.dateOfBirth && formData.dateOfBirth && (
            <CheckCircle className="h-4 w-4 text-green-500" />
          )}
        </Label>
        <Input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className={`${errors.dateOfBirth ? "border-destructive" : ""} 
                    ${
                      fieldValidStatus.dateOfBirth && !errors.dateOfBirth && formData.dateOfBirth
                        ? "border-green-500"
                        : ""
                    }`}
        />
        {errors.dateOfBirth && <p className="text-sm text-destructive">{errors.dateOfBirth}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="countryOfBirth" className="flex items-center gap-1">
          Country of Birth {errors.countryOfBirth && <AlertCircle className="h-4 w-4 text-destructive" />}
          {fieldValidStatus.countryOfBirth && !errors.countryOfBirth && formData.countryOfBirth && (
            <CheckCircle className="h-4 w-4 text-green-500" />
          )}
        </Label>
        <Input
          id="countryOfBirth"
          name="countryOfBirth"
          placeholder="Enter your country of birth"
          value={formData.countryOfBirth}
          onChange={handleChange}
          className={`${errors.countryOfBirth ? "border-destructive" : ""} 
                    ${
                      fieldValidStatus.countryOfBirth && !errors.countryOfBirth && formData.countryOfBirth
                        ? "border-green-500"
                        : ""
                    }`}
        />
        {errors.countryOfBirth && <p className="text-sm text-destructive">{errors.countryOfBirth}</p>}
      </div>

      <div className="space-y-2">
        <Label htmlFor="citizenship" className="flex items-center gap-1">
          Citizenship {errors.citizenship && <AlertCircle className="h-4 w-4 text-destructive" />}
          {fieldValidStatus.citizenship && !errors.citizenship && formData.citizenship && (
            <CheckCircle className="h-4 w-4 text-green-500" />
          )}
        </Label>
        <Input
          id="citizenship"
          name="citizenship"
          placeholder="Enter your citizenship"
          value={formData.citizenship}
          onChange={handleChange}
          className={`${errors.citizenship ? "border-destructive" : ""} 
                    ${
                      fieldValidStatus.citizenship && !errors.citizenship && formData.citizenship
                        ? "border-green-500"
                        : ""
                    }`}
        />
        {errors.citizenship && <p className="text-sm text-destructive">{errors.citizenship}</p>}
      </div>
    </div>
  );
};

export default PersonalInfoStep;
