
import { FormData } from "@/components/payment/types";

const API_URL = "http://localhost:5000"; // Update this with your actual backend URL in production

export const sendFormDataByEmail = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    console.log("Sending data to API:", formData);
    
    const response = await fetch(`${API_URL}/send-email`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: formData.fullName,
        dob: formData.dateOfBirth,
        countryBirth: formData.countryOfBirth,
        citizenship: formData.citizenship,
        sevisId: formData.sevisId,
        visaType: formData.visaType,
        schoolCode: formData.schoolCode,
        programNumber: formData.programNumber,
        email: formData.email,
        mailingAddress: formData.address,
        passportNumber: formData.passportRequired ? formData.passportNumber : "Not required",
      }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.message || "Failed to send email");
    }
    
    return { success: true, message: data.message || "Form data sent successfully" };
  } catch (error) {
    console.error("Error sending form data:", error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : "Failed to send email. Please try again." 
    };
  }
};
