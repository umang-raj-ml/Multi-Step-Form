const TextareaField = ({
  id, label, value, onChange,
  required = false, error,
  placeholder, rows = 4, ...props
}) => (
  <div>
    <label htmlFor={id} className="block text-gray-200 font-semibold mb-2">
      {label} {required && <span className="text-[#36e2ae]">*</span>}
    </label>
    <textarea
      id={id}
      rows={rows}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-3 bg-[#282b36] rounded-xl placeholder-gray-400 text-white border-2 outline-none transition
        ${error ? "border-[#f87171] focus:border-[#f87171]" : "border-transparent focus:border-[#36e2ae]"}
      `}
      {...props}
    />
    {error && (
      <p className="text-[#F87171] text-xs mt-1 pl-1">{error}</p>
    )}
  </div>
);

export default TextareaField;
