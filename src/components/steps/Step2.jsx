import { useFormContext } from "../../contexts/FormContext";
import { validateStep2 } from "../../utils/validation";
import Button from "../atoms/Button";
import FormRow from "../molecules/FormRow";
import InputField from "../atoms/InputField";

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
      <InputField
        id="phone"
        label="Phone"
        type="tel"
        value={formData.phone}
        error={errors.phone}
        placeholder="Enter your phone number"
        onChange={(e) => {
          updateField("phone", e.target.value);
          setErrors((prev) => {
            const next = { ...prev };
            if (
              e.target.value.trim() &&
              !/^[0-9\s\-()+]+$/.test(e.target.value)
            ) {
              next.phone = "Phone number is invalid";
            } else delete next.phone;
            return next;
          });
        }}
      />

      {/* Address lines, side by side */}
      <FormRow columns={2}>
        <InputField
          id="address1"
          label="Address Line 1"
          type="text"
          value={formData.address1}
          error={errors.address1}
          placeholder="Street Address"
          required
          onChange={(e) => {
            updateField("address1", e.target.value);
            setErrors((prev) => {
              const next = { ...prev };
              if (!e.target.value.trim()) {
                next.address1 = "Address Line 1 is required";
              } else {
                delete next.address1;
              }
              return next;
            });
          }}
        />

        <InputField
          id="address2"
          label="Address Line 2"
          type="text"
          value={formData.address2}
          error={errors.address2}
          placeholder="Apartment, suite, etc."
          onChange={(e) => {
            updateField("address2", e.target.value);
            setErrors((prev) => {
              const next = { ...prev };
              if (
                e.target.value.trim() &&
                !/^[a-zA-Z\s'-]+$/.test(e.target.value)
              ) {
                next.address2 = "Address Line 2 is invalid";
              } else {
                delete next.address2;
              }
              return next;
            });
          }}
        />
      </FormRow>

      {/* City, State, Zip side by side */}
      <FormRow columns={3}>
        <InputField
          id="city"
          label="City"
          type="text"
          value={formData.city}
          error={errors.city}
          required
          onChange={(e) => {
            updateField("city", e.target.value);
            setErrors((prev) => {
              const next = { ...prev };
              if (!e.target.value.trim()) {
                next.city = "City is required";
              } else {
                delete next.city;
              }
              return next;
            });
          }}
          placeholder="Your city"
        />

        <InputField
          id="state"
          label="State"
          type="text"
          value={formData.state}
          error={errors.state}
          required
          onChange={(e) => {
            updateField("state", e.target.value);
            setErrors((prev) => {
              const next = { ...prev };
              if (!e.target.value.trim()) {
                next.state = "State is required";
              } else {
                delete next.state;
              }
              return next;
            });
          }}
          placeholder="State"
        />

        <InputField
          id="zip"
          label="Zip"
          type="text"
          value={formData.zip}
          error={errors.zip}
          required
          onChange={(e) => {
            updateField("zip", e.target.value);
            setErrors((prev) => {
              const next = { ...prev };
              if (!e.target.value.trim()) {
                next.zip = "ZIP code is required";
              } else {
                delete next.zip;
              }
              return next;
            });
          }}
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
