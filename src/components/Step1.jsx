import { useFormContext } from "../contexts/FormContext";
import { validateStep1 } from "../utils/validation";
import InputField from "./atoms/InputField";
import FormRow from "./atoms/FormRow";
import Button from "./atoms/Button";


export const Step1 = ({ onNext }) => {
  const { formData, updateField, errors, setErrors } = useFormContext();

  const isValid =
    Object.keys(errors).length === 0 &&
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
      <InputField 
      id="email"
      label="Email"
      type="email"
      value={formData.email}
      required
      error={errors.email}
      placeholder="Enter your email"
      onChange={(e) => {
        updateField("email", e.target.value)
        setErrors(prev => {
          const next = {...prev}
          if(!e.target.value.trim()){
            next.email = "Email is required"
          }else delete next.email 
          return next;
        })
      }}
      />

      {/* First Name & Last Name Side by Side */}
      <FormRow columns={2}>
        <InputField 
        id="firstName"
        label="First Name"
        value={formData.firstName}
        required
        error={errors.firstName}
        placeholder="Enter your first name"
        onChange={(e) => {
          updateField("firstName", e.target.value)
          setErrors(prev => {
            const next = {...prev}
            if(!e.target.value.trim()){
              next.firstName = "First Name is required"
            }else delete next.firstName
            return next;
          })
        }}
        />

        <InputField
        id="lastName"
        label="Last Name"
        value={formData.lastName}
        required
        error={errors.lastName}
        placeholder="Enter your Last Name"
        onChange={(e) => {
          updateField("lastName", e.target.value)
          setErrors(prev => {
            const next = {...prev}
            if(!e.target.value.trim()){
              next.lastName = "Last Name is required";
            }else delete next.lastName
            return next;
          })
        }}
        />
      </FormRow>
      <Button
      type="submit"
      disabled={!isValid}
      >Next</Button>
    </form>
  );
};
