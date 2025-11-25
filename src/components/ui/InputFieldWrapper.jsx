const InputFieldWrapper = ({
  label,
  error,
  children,
  required,
  className,
  description,
}) => (
  <div className={`mb-5 ${className || ""}`}>
    {label && (
      <label className="block text-sm font-semibold text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
    )}
    {children}
    {description && (
      <p className="text-xs text-gray-500 mt-2 text-end ">{description}</p>
    )}
    {error && (
      <span className="text-xs text-red-500 mt-1 block">{error.message}</span>
    )}
  </div>
);

export default InputFieldWrapper;
