import { useState } from "react";
import { FormProvider } from "../contexts/FormContext";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import Stepper from "./molecules/Stepper";

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
        <Stepper step={step} total={3} />
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
