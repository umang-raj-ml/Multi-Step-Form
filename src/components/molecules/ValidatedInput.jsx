// components/molecules/ValidatedInput.jsx
import InputField from "../atoms/InputField";
import { useValidatedField } from "../../hooks/useValidatedField";

const ValidatedInput = ({ id, label, placeholder, required = false, type = "text", validate }) => {
  const { value, error, onChange } = useValidatedField(id, validate);

  return (
    <InputField
      id={id}
      label={label}
      placeholder={placeholder}
      required={required}
      type={type}
      value={value}
      error={error}
      onChange={onChange}
    />
  );
};

export default ValidatedInput;
