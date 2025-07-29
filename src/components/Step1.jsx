import { useFormContext } from "../contexts/FormContext";

export const Step1 = ({ onNext }) => {
  const { formData, updateField, errors, setErrors } = useFormContext();

  const validate = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.firstName)) {
      newErrors.firstName = "Only letters and spaces are allowed";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last Name is required";
    } else if (!/^[a-zA-Z\s'-]+$/.test(formData.lastName)) {
      newErrors.lastName = "Only letters and spaces are allowed";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid Email";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValid =
    Object.keys(errors).length === 0 &&
    formData.email.trim() !== "" &&
    formData.firstName.trim() !== "" &&
    formData.lastName.trim() !== "";

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) onNext();
  };

  return (
    <form
      onSubmit={handleNext}
      noValidate
      className="space-y-6 bg-[#232633] p-8 rounded-2xl shadow-2xl max-w-md mx-auto"
    >
      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-gray-200 font-semibold mb-2"
        >
          Email <span className="text-[#36e2ae]">*</span>
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => {
            updateField("email", e.target.value);
            setErrors((prev) => {
              const next = { ...prev };
              if (!e.target.value.trim()) {
                next.email = "Email is required";
              } else delete next.email;
              return next;
            });
          }}
          className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
            ${
              errors.email
                ? "border-[#f87171] focus:border-[#f87171]"
                : "border-transparent focus:border-[#36e2ae]"
            }`}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-[#F87171] text-xs mt-1 pl-1">{errors.email}</p>
        )}
      </div>

      {/* First Name & Last Name Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="block text-gray-200 font-semibold mb-2"
          >
            First Name <span className="text-[#36e2ae]">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={(e) => {
              updateField("firstName", e.target.value);
              setErrors((prev) => {
                const next = { ...prev };
                if (!e.target.value.trim()) {
                  next.firstName = "First Name is required";
                } else delete next.firstName;
                return next;
              });
            }}
            className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
              ${
                errors.firstName
                  ? "border-[#f87171] focus:border-[#f87171]"
                  : "border-transparent focus:border-[#36e2ae]"
              }`}
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p className="text-[#F87171] mt-1 text-xs pl-1">
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="lastName"
            className="block text-gray-200 font-semibold mb-2"
          >
            Last Name <span className="text-[#36e2ae]">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={(e) => {
              updateField("lastName", e.target.value);
              setErrors((prev) => {
                const next = { ...prev };
                if (!e.target.value.trim()) {
                  next.lastName = "Last Name is required";
                } else delete next.lastName;
                return next;
              });
            }}
            className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
              ${
                errors.lastName
                  ? "border-[#f87171] focus:border-[#f87171]"
                  : "border-transparent focus:border-[#36e2ae]"
              }`}
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p className="text-[#F87171] mt-1 text-xs pl-1">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full text-[#232633] text-lg font-semibold py-3 rounded-full transition
        ${
          isValid
            ? "bg-[#36e2ae] hover:bg-[#3cfbbb] opacity-100 cursor-pointer"
            : "bg-[#36e2ae] opacity-50 cursor-not-allowed"
        }
  `}
      >
        Next
      </button>
    </form>
  );
};
