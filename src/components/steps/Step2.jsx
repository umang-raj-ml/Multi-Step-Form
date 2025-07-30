import { useFormContext } from "../../contexts/FormContext";
import { validatePhone, validateAddress1, validateAddress2, validateCity, validateState, validateZip, validateStep2 } from "../../utils/validation";
import Button from "../atoms/Button";
import FormRow from "../molecules/FormRow";
import InputField from "../atoms/InputField";
import ValidatedInput from "../molecules/ValidatedInput";

export const Step2 = ({ onNext, onBack }) => {
  const { formData, updateField, errors, setErrors } = useFormContext();

  const isValid =
    formData.address1.trim() !== "" &&
    formData.city.trim() !== "" &&
    formData.state.trim() !== "" &&
    formData.zip.trim() !== "";

  const handleNext = (e) => {
    e.preventDefault();
    const newErrors = validateStep2(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) onNext();
  };

  return (
    <form
      onSubmit={handleNext}
      noValidate
      className="space-y-6 bg-[#232633] p-8 rounded-2xl shadow-2xl max-w-md mx-auto"
    >
      {/* Phone (full width) */}
      <ValidatedInput
        id="phone"
        label="Phone"
        type="tel"
        validate={validatePhone}
        placeholder="Enter your phone number"
      />

      {/* Address lines, side by side */}
      <FormRow columns={2}>
        <ValidatedInput
          id="address1"
          label="Address Line 1"
          type="text"
          validate={validateAddress1}
          placeholder="Street Address"
          required
        />

        <ValidatedInput
          id="address2"
          label="Address Line 2"
          type="text"
          validate={validateAddress2}
          placeholder="Apartment, suite, etc."
        />
      </FormRow>

      {/* City, State, Zip side by side */}
      <FormRow columns={3}>
        <ValidatedInput
          id="city"
          label="City"
          type="text"
          validate={validateCity}
          required
          placeholder="Your city"
        />

        <ValidatedInput
          id="state"
          label="State"
          type="text"
          validate={validateState}
          required
          placeholder="State"
        />

        <ValidatedInput
          id="zip"
          label="Zip"
          type="text"
          validate={validateZip}
          required
          placeholder="ZIP code"
        />
      </FormRow>

      {/* Buttons  */}
      <div className="flex justify-between mt-8">
        <button
          disabled={!errors.length === 0}
          type="button"
          onClick={onBack}
          className="cursor-pointer px-4 py-2 border-none rounded-full text-gray-400 hover:text-white text-base transition"
        >
          Back
        </button>
        <Button type="submit" disabled={!isValid}>
          Next
        </Button>
      </div>
    </form>
  );
};
