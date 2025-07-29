import { createContext, useContext, useState } from "react";

const FormContext = createContext();

export function useFormContext() {
  return useContext(FormContext);
}

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    message: "",
    suggestions: "",
  });
  const [errors, setErrors] = useState({})

  const updateField = (field, value) => {
    setFormData(prev => ({
        ...prev, [field]: value,
    }))
  }

  return (
    <FormContext.Provider value={{formData, updateField, errors, setErrors}}>
        {children}
    </FormContext.Provider>
  )
}
