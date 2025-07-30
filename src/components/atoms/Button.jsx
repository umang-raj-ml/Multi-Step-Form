const Button = ({
  children,
  type = "button",
  disabled,
  className = "",
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`w-full text-[#232633] text-lg font-semibold py-3 rounded-full transition
      ${
        disabled
          ? "bg-[#36e2ae] opacity-50 cursor-not-allowed"
          : "bg-[#36e2ae] hover:bg-[#3cfbbb] opacity-100 cursor-pointer"
      } ${className}`}
       {...props}
    >
      {children}
    </button>
  );
};

export default Button;
