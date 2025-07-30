import { useFormContext } from "../contexts/FormContext";

export function useValidatedField(fieldId, validateFn) {
  const { formData, updateField, errors, setErrors } = useFormContext();

  // Current value and error for this field
  const value = formData[fieldId] || "";
  const error = errors[fieldId];

  const onChange = (e) => {
    const val = e.target.value;
    updateField(fieldId, val);

    setErrors((prev) => {
      const next = { ...prev };
      const validationError = validateFn ? validateFn(val) : null;
      if (validationError) {
        next[fieldId] = validationError;
      } else {
        delete next[fieldId];
      }
      return next;
    });
  };

  return { value, error, onChange };
}
