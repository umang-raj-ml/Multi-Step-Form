import { useState } from "react";
import { useFormContext } from "../../contexts/FormContext";
import { validateStep3 } from "../../utils/validation";
import TextareaField from "../atoms/TextareaField";
import Button from "../atoms/Button";
import FormRow from "../molecules/FormRow";

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
    const newErrors = validateStep3(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length !== 0) return;
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
      <FormRow columns={2}>
      <TextareaField
        id="message"
        label="Message"
        rows={5}
        required
        value={formData.message}
        error={errors.message}
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
        placeholder="How can we help you?"
      />

      <TextareaField
        id="suggestions"
        label="Suggestions"
        rows={5}
        value={formData.suggestions}
        placeholder="Any suggestions?"
        onChange={e => updateField("suggestions", e.target.value)}
      />
      </FormRow>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          disabled={submitting}
          className="px-4 py-2 border-none cursor-pointer rounded-full text-gray-400 hover:text-white text-base transition disabled:opacity-50"
        >
          Back
        </button>

        <Button
        type="submit"
        disabled={submitting && !isValid}  
        >
          {submitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
      {submitSuccess && (
        <p className="mt-4 text-[#36e2ae] font-semibold text-center">
          Thank you for contacting us! You’ll be redirected shortly if you wish to send another message.
        </p>
      )}
    </form>
  );
};
