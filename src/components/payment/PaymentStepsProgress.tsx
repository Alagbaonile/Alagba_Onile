
import React from "react";
import { CheckCircle2 } from "lucide-react";

interface Step {
  title: string;
  icon: React.ReactNode;
  bgColor: string;
}

interface PaymentStepsProgressProps {
  steps: Step[];
  currentStep: number;
}

const PaymentStepsProgress: React.FC<PaymentStepsProgressProps> = ({ steps, currentStep }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index <= currentStep ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full mb-2 transition-all duration-300 shadow-md ${
                index < currentStep
                  ? "bg-primary text-primary-foreground animate-pulse"
                  : index === currentStep
                  ? "border-2 border-primary bg-primary/10 animate-fade-in"
                  : "border border-muted-foreground bg-muted"
              }`}
            >
              {index < currentStep ? <CheckCircle2 className="h-5 w-5" /> : step.icon}
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
  );
};

export default PaymentStepsProgress;
