import TextareaField from "../atoms/TextareaField";
import { useValidatedField } from "../../hooks/useValidatedField";

const ValidatedTextarea = ({ id, label, placeholder, rows = 4, required = false, validate }) => {
  const { value, error, onChange } = useValidatedField(id, validate);

  return (
    <TextareaField
      id={id}
      label={label}
      placeholder={placeholder}
      rows={rows}
      required={required}
      value={value}
      error={error}
      onChange={onChange}
    />
  );
};

export default ValidatedTextarea;
