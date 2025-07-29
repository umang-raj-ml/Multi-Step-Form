import { useFormContext } from "../contexts/FormContext";

export const Step2 = ({ onNext, onBack }) => {
  const { formData, updateField, errors, setErrors } = useFormContext();

  const validate = () => {
    const newErrors = {};
    if (formData.phone.trim() && !/^[0-9\s\-()+]+$/.test(formData.phone))
      newErrors.phone = "Phone number is invalid";
    if (!formData.address1.trim())  newErrors.address1 = "Address Line 1 is required";
    if (!formData.address2.trim())  newErrors.address2 = "Address Line 2 is required";
    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.state.trim()) newErrors.state = "State is required";
    if (!formData.zip.trim()) newErrors.zip = "ZIP code is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
      {/* Phone (full width) */}
      <div>
        <label htmlFor="phone" className="block text-gray-200 font-semibold mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
            ${errors.phone ? "border-[#f87171] focus:border-[#f87171]" : "border-transparent focus:border-[#36e2ae]"}
          `}
          placeholder="Enter your phone number"
        />
        {errors.phone && <p className="text-[#F87171] mt-1 text-xs pl-1">{errors.phone}</p>}
      </div>

      {/* Address lines, side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="address1" className="block text-gray-200 font-semibold mb-2">
            Address Line 1 <span className="text-[#36e2ae]">*</span>
          </label>
          <input
            type="text"
            id="address1"
            value={formData.address1}
            onChange={(e) => updateField("address1", e.target.value)}
            className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
              ${errors.address1 ? "border-[#f87171] focus:border-[#f87171]" : "border-transparent focus:border-[#36e2ae]"}
            `}
            placeholder="Street address"
          />
          {errors.address1 && <p className="text-[#F87171] mt-1 text-xs pl-1">{errors.address1}</p>}
        </div>
        <div>
          <label htmlFor="address2" className="block text-gray-200 font-semibold mb-2">
            Address Line 2 <span className="text-[#36e2ae]">*</span>
          </label>
          <input
            type="text"
            id="address2"
            value={formData.address2}
            onChange={(e) => updateField("address2", e.target.value)}
            className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
              ${errors.address2 ? "border-[#f87171] focus:border-[#f87171]" : "border-transparent focus:border-[#36e2ae]"}
            `}
            placeholder="Apartment, suite, etc."
          />
          {errors.address2 && <p className="text-[#F87171] mt-1 text-xs pl-1">{errors.address2}</p>}
        </div>
      </div>

      {/* City, State, Zip side by side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="city" className="block text-gray-200 font-semibold mb-2">
            City <span className="text-[#36e2ae]">*</span>
          </label>
          <input
            type="text"
            id="city"
            value={formData.city}
            onChange={(e) => updateField("city", e.target.value)}
            className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
              ${errors.city ? "border-[#f87171] focus:border-[#f87171]" : "border-transparent focus:border-[#36e2ae]"}
            `}
            placeholder="Your city"
          />
          {errors.city && <p className="text-[#F87171] mt-1 text-xs pl-1">{errors.city}</p>}
        </div>
        <div>
          <label htmlFor="state" className="block text-gray-200 font-semibold mb-2">
            State <span className="text-[#36e2ae]">*</span>
          </label>
          <input
            type="text"
            id="state"
            value={formData.state}
            onChange={(e) => updateField("state", e.target.value)}
            className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
              ${errors.state ? "border-[#f87171] focus:border-[#f87171]" : "border-transparent focus:border-[#36e2ae]"}
            `}
            placeholder="State"
          />
          {errors.state && <p className="text-[#F87171] mt-1 text-xs pl-1">{errors.state}</p>}
        </div>
        <div>
          <label htmlFor="zip" className="block text-gray-200 font-semibold mb-2">
            Zip Code <span className="text-[#36e2ae]">*</span>
          </label>
          <input
            type="text"
            id="zip"
            value={formData.zip}
            onChange={(e) => updateField("zip", e.target.value)}
            className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
              ${errors.zip ? "border-[#f87171] focus:border-[#f87171]" : "border-transparent focus:border-[#36e2ae]"}
            `}
            placeholder="ZIP code"
          />
          {errors.zip && <p className="text-[#F87171] mt-1 text-xs pl-1">{errors.zip}</p>}
        </div>
      </div>

      <div className="flex justify-between mt-8">
        <button
          type="button"
          onClick={onBack}
          className="px-4 py-2 border-none rounded-full text-gray-400 hover:text-white text-base transition"
        >
          Back
        </button>
        <button
          type="submit"
          className="px-8 py-3 bg-[#36e2ae] text-[#232633] rounded-full font-semibold text-lg hover:bg-[#3cfbbb] transition"
        >
          Next
        </button>
      </div>
    </form>
  );
};
