
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle, CreditCard } from "lucide-react";

interface PassportInfoStepProps {
  formData: {
    passportRequired: boolean;
    passportNumber: string;
  };
  errors: {
    [key: string]: string;
  };
  fieldValidStatus: {
    [key: string]: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleCheckboxChange: (name: string, checked: boolean) => void;
}

const PassportInfoStep: React.FC<PassportInfoStepProps> = ({
  formData,
  errors,
  fieldValidStatus,
  handleChange,
  handleCheckboxChange,
}) => {
  return (
    <div className="space-y-6">
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

      {formData.passportRequired && (
        <div className="space-y-2">
          <Label htmlFor="passportNumber" className="flex items-center gap-1">
            Passport Number {errors.passportNumber && <AlertCircle className="h-4 w-4 text-destructive" />}
            {fieldValidStatus.passportNumber && !errors.passportNumber && formData.passportNumber && (
              <CheckCircle className="h-4 w-4 text-green-500" />
            )}
          </Label>
          <Input
            id="passportNumber"
            name="passportNumber"
            placeholder="Enter your passport number"
            value={formData.passportNumber}
            onChange={handleChange}
            className={`${errors.passportNumber ? "border-destructive" : ""} 
                      ${
                        fieldValidStatus.passportNumber && !errors.passportNumber && formData.passportNumber
                          ? "border-green-500"
                          : ""
                      }`}
          />
          {errors.passportNumber && <p className="text-sm text-destructive">{errors.passportNumber}</p>}
        </div>
      )}

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
    </div>
  );
};

export default PassportInfoStep;
