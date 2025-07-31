import { useFormContext } from "../../contexts/FormContext";
import { validateStep1, validateEmail, validateFirstName, validateLastName } from "../../utils/validation";
import FormRow from "../molecules/FormRow";
import Button from "../atoms/Button";
import ValidatedInput from "../molecules/ValidatedInput";


export const Step1 = ({ onNext }) => {
  const { formData, setErrors } = useFormContext();

  const isValid =
    formData.email.trim() !== "" &&
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "";

  const handleNext = (e) => {
    e.preventDefault();
    const newErrors = validateStep1(formData);
    setErrors(newErrors);
    if(Object.keys(newErrors).length === 0) onNext();
  };

  return (
    <form
      onSubmit={handleNext}
      noValidate
      className="space-y-6 bg-[#232633] p-8 rounded-2xl shadow-2xl max-w-md mx-auto"
    >
      {/* Email Field */}
      <ValidatedInput 
      id="email"
      label="Email"
      type="email"
      validate={validateEmail}
      required
      placeholder="Enter your email"
      />

      {/* First Name & Last Name Side by Side */}
      <FormRow columns={2}>
        <ValidatedInput 
        id="firstName"
        label="First Name"
        validate={validateFirstName}
        required
        placeholder="First name"
        />

        <ValidatedInput
        id="lastName"
        label="Last Name"
        validate={validateLastName}
        required
        placeholder="Last Name"
        />
      </FormRow>
      <Button
      type="submit"
      disabled={!isValid}
      >Next</Button>
    </form>
  );
};
