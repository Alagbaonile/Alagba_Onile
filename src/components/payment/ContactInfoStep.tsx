
import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle } from "lucide-react";

interface ContactInfoStepProps {
  formData: {
    email: string;
    address: string;
  };
  errors: {
    [key: string]: string;
  };
  fieldValidStatus: {
    [key: string]: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const ContactInfoStep: React.FC<ContactInfoStepProps> = ({
  formData,
  errors,
  fieldValidStatus,
  handleChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="email" className="flex items-center gap-1">
          Email Address {errors.email && <AlertCircle className="h-4 w-4 text-destructive" />}
          {fieldValidStatus.email && !errors.email && formData.email && (
            <CheckCircle className="h-4 w-4 text-green-500" />
          )}
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          className={`${errors.email ? "border-destructive" : ""} 
                    ${
                      fieldValidStatus.email && !errors.email && formData.email
                        ? "border-green-500"
                        : ""
                    }`}
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

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
    </div>
  );
};

export default ContactInfoStep;
