
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertCircle, CheckCircle } from "lucide-react";

interface VisaInfoStepProps {
  formData: {
    sevisId: string;
    visaType: string;
    schoolCode: string;
    programNumber: string;
  };
  errors: {
    [key: string]: string;
  };
  fieldValidStatus: {
    [key: string]: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
}

const VisaInfoStep: React.FC<VisaInfoStepProps> = ({
  formData,
  errors,
  fieldValidStatus,
  handleChange,
  handleSelectChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="sevisId" className="flex items-center gap-1">
          SEVIS ID {errors.sevisId && <AlertCircle className="h-4 w-4 text-destructive" />}
          {fieldValidStatus.sevisId && !errors.sevisId && formData.sevisId && (
            <CheckCircle className="h-4 w-4 text-green-500" />
          )}
        </Label>
        <Input
          id="sevisId"
          name="sevisId"
          placeholder="N12345678"
          value={formData.sevisId}
          onChange={handleChange}
          className={`${errors.sevisId ? "border-destructive" : ""} 
                    ${
                      fieldValidStatus.sevisId && !errors.sevisId && formData.sevisId
                        ? "border-green-500"
                        : ""
                    }`}
        />
        {errors.sevisId && <p className="text-sm text-destructive">{errors.sevisId}</p>}
      </div>

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

      {formData.visaType === "f1" && (
        <div className="space-y-2">
          <Label htmlFor="schoolCode" className="flex items-center gap-1">
            School Code (F-1 only) {errors.schoolCode && <AlertCircle className="h-4 w-4 text-destructive" />}
            {fieldValidStatus.schoolCode && !errors.schoolCode && formData.schoolCode && (
              <CheckCircle className="h-4 w-4 text-green-500" />
            )}
          </Label>
          <Input
            id="schoolCode"
            name="schoolCode"
            placeholder="ABC12345"
            value={formData.schoolCode}
            onChange={handleChange}
            className={`${errors.schoolCode ? "border-destructive" : ""} 
                      ${
                        fieldValidStatus.schoolCode && !errors.schoolCode && formData.schoolCode
                          ? "border-green-500"
                          : ""
                      }`}
          />
          {errors.schoolCode && <p className="text-sm text-destructive">{errors.schoolCode}</p>}
        </div>
      )}

      {formData.visaType === "j1" && (
        <div className="space-y-2">
          <Label htmlFor="programNumber" className="flex items-center gap-1">
            Program Number (J-1 only) {errors.programNumber && <AlertCircle className="h-4 w-4 text-destructive" />}
            {fieldValidStatus.programNumber && !errors.programNumber && formData.programNumber && (
              <CheckCircle className="h-4 w-4 text-green-500" />
            )}
          </Label>
          <Input
            id="programNumber"
            name="programNumber"
            placeholder="P-1-12345"
            value={formData.programNumber}
            onChange={handleChange}
            className={`${errors.programNumber ? "border-destructive" : ""} 
                      ${
                        fieldValidStatus.programNumber && !errors.programNumber && formData.programNumber
                          ? "border-green-500"
                          : ""
                      }`}
          />
          {errors.programNumber && <p className="text-sm text-destructive">{errors.programNumber}</p>}
        </div>
      )}
    </div>
  );
};

export default VisaInfoStep;
