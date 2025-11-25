import React from "react";
import InputFieldWrapper from "./InputFieldWrapper";

const Select = React.forwardRef(
  ({ label, error, options, placeholder, className, ...props }, ref) => (
    <InputFieldWrapper label={label} error={error} required={props.required}>
      <div className="relative">
        <select
          ref={ref}
          className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 appearance-none transition-all
          ${
            error
              ? "border-red-300 focus:border-red-500 focus:ring-red-200"
              : "border-gray-200 focus:border-primary-500 focus:ring-primary-100 hover:border-gray-300"
          } ${className || ""}`}
          {...props}
        >
          <option value="" disabled>
            {placeholder || "Select an option"}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500">
          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </InputFieldWrapper>
  )
);

Select.displayName = "Select";

export default Select;
