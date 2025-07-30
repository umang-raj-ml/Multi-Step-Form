import { useState } from "react";
import { useFormContext } from "../contexts/FormContext";
import { validateStep3 } from "../utils/validation";

export const Step3 = ({ onBack, onSubmit, goToStep1 }) => {
  const { formData, updateField, errors, setErrors } = useFormContext();
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const isValid =
    Object.keys(errors).length === 0 && formData.message.trim() !== "";

  const resetForm = () => {
    Object.keys(formData).forEach((key) => updateField(key, ""));
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateStep3(formData)
    setErrors(newErrors)
    if(Object.keys(newErrors).length !== 0) return;
    setSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); //just for simulation
      setSubmitSuccess(true);
      console.log(formData);

      onSubmit();
      resetForm();
      setTimeout(() => {
        setSubmitSuccess(false);
        if (goToStep1) goToStep1();
      }, 5000);
    } catch {
      setSubmitSuccess(false);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 bg-[#232633] p-8 rounded-2xl shadow-2xl max-w-md mx-auto"
    >
      <div>
        <label
          htmlFor="message"
          className="block text-gray-200 font-semibold mb-2"
        >
          Message <span className="text-[#36e2ae]">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => {
            updateField("message", e.target.value);
            setErrors((prev) => {
              const next = { ...prev };
              if (!e.target.value.trim()) {
                next.message = "Message is required";
              } else delete next.message;
              return next;
            });
          }}
          className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
            ${
              errors.message
                ? "border-[#f87171] focus:border-[#f87171]"
                : "border-transparent focus:border-[#36e2ae]"
            }`}
          placeholder="How can we help you?"
        />
        {errors.message && (
          <p className="text-[#F87171] mt-1 text-xs pl-1">{errors.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="suggestions"
          className="block text-gray-200 font-semibold mb-2"
        >
          Suggestions (optional)
        </label>
        <textarea
          id="suggestions"
          rows={3}
          value={formData.suggestions}
          onChange={(e) => updateField("suggestions", e.target.value)}
          className="w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 border-transparent focus:border-[#36e2ae] outline-none transition"
          placeholder="Any suggestions?"
        />
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="px-4 py-2 border-none cursor-pointer rounded-full text-gray-400 hover:text-white text-base transition disabled:opacity-50"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={submitting && !isValid}
          className={`w-full text-[#232633] text-lg font-semibold py-3 rounded-full transition
        ${
          isValid
            ? "bg-[#36e2ae] hover:bg-[#3cfbbb] opacity-100 cursor-pointer"
            : "bg-[#36e2ae] opacity-50 cursor-not-allowed"
        }`}
        >
          {submitting ? "Submitting..." : "Submit"}
        </button>
      </div>
      {submitSuccess && (
        <p className="mt-4 text-[#36e2ae] font-semibold text-center">
          Form submitted successfully! Redirecting to Step 1...
        </p>
      )}
    </form>
  );
};
