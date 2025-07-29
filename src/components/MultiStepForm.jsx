import { useState } from "react";
import { FormProvider } from "../contexts/FormContext";
import { Step3 } from "./Step3";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";

export const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));
  const goToStep1 = () => setStep(1);

  const handleSubmit = () => {
    console.log("Final submit handled here");
  };

  return (
    <FormProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#20242c] to-[#232633] flex flex-col justify-center items-center py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-white">
          Contact Us
        </h1>
        <div className="flex justify-center mb-8 space-x-4">
          {[1, 2, 3].map((num) => (
            <div
              key={num}
              className={`w-10 h-10 flex items-center justify-center rounded-full border-2 font-semibold
                ${step === num
                  ? "bg-[#36e2ae] text-[#20242c] border-[#36e2ae] shadow-lg"
                  : "text-gray-400 border-[#363a43] bg-[#282b36]"
                }`}
            >
              {num}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="w-full max-w-xl">
          {step === 1 && <Step1 onNext={nextStep} />}
          {step === 2 && <Step2 onNext={nextStep} onBack={prevStep} />}
          {step === 3 && (
            <Step3
              onBack={prevStep}
              onSubmit={handleSubmit}
              goToStep1={goToStep1}
            />
          )}
        </div>
      </div>
    </FormProvider>
  );
};
