//Step 1 Validation for Email & Names
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
  } else if (!/\S+@\S+\.\S+/.test(email)) {
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
