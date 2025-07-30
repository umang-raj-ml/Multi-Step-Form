//NOTE -  Step 1 Validation for Email & Names

export function validateStep1({ firstName, lastName, email }) {
  const errors = {};
  if (!firstName?.trim()) {
    errors.firstName = "First Name is required";
  } else if (!/^[a-zA-Z\s'-]+$/.test(firstName)) {
    errors.firstName = "Only letters and spaces are allowed";
  }
  if (!lastName?.trim()) {
    errors.lastName = "Last Name is required";
  } else if (!/^[a-zA-Z\s'-]+$/.test(lastName)) {
    errors.lastName = "Only letters and spaces are allowed";
  }
  if (!email?.trim()) {
    errors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S{2,}$/.test(email)) {
    errors.email = "Please enter a valid Email";
  }
  return errors;
}

//NOTE - Step 2 Validation for address
export function validateStep2({ phone, address1, city, state, zip }) {
  const errors = {};
  if (phone?.trim() && !/^[0-9\s\-()+]+$/.test(phone))
    errors.phone = "Phone number is invalid";
  if (!address1?.trim()) errors.address1 = "Address Line 1 is required";
  if (!city?.trim()) errors.city = "City is required";
  if (!state?.trim()) errors.state = "State is required";
  if (!zip?.trim()) errors.zip = "ZIP code is required";
  else if (!/^\d{6}(-\d{4})?$/.test(zip)) errors.zip = "ZIP code is invalid";
  return errors;
}

//SECTION - Step 3 Validation for message

export function validateStep3({ message }) {
  const errors = {};
  if (!message?.trim()) errors.message = "Message is required";
  else if (message.length < 10)
    errors.message = "Message must be at least 10 characters";
  return errors;
}

export const validateMessage = (value) => {
  if (!value.trim()) return "Message is required";
  if (value.length < 10) return "Message must be at least 10 characters";
  return null;
};

export const validatePhone = (value) => {
  if (value?.trim() && !/^[0-9\s\-()+]+$/.test(value)) {
    return "Phone number is invalid";
  }
  return null;
};

export const validateAddress1 = (value) => {
  if (!value?.trim()) {
    return "Address Line 1 is required";
  }
  return null;
};

export const validateAddress2 = (value) => {
  if (value?.trim() && !/^[a-zA-Z\s'-]+$/.test(value)) {
    return "Address Line 2 is invalid";
  }
  return null;
};

export const validateCity = (value) => {
  if (!value?.trim()) {
    return "City is required";
  }
  return null;
};

export const validateState = (value) => {
  if (!value?.trim()) {
    return "State is required";
  }
  return null;
};

export const validateZip = (value) => {
  if (!value?.trim()) {
    return "ZIP code is required";
  }
  // add regex for zip code validation as needed
  return null;
};

export const validateFirstName = (value) => {
  if (!value?.trim()) {
    return "First Name is required";
  }

  return null;
};
export const validateLastName = (value) => {
  if (!value?.trim()) {
    return "Last Name is required";
  }

  return null;
};
export const validateEmail = (value) => {
  if (!value?.trim()) {
    return "Email is required";
  }

  return null;
};
