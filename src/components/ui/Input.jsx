import React from "react";
import InputFieldWrapper from "./InputFieldWrapper";

const Input = React.forwardRef(
  ({ label, error, description, className, ...props }, ref) => (
    <InputFieldWrapper
      label={label}
      error={error}
      required={props.required}
      description={description}
    >
      <input
        ref={ref}
        className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all appearance-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        ${
          error
            ? "border-red-300 focus:border-red-500 focus:ring-red-200"
            : "border-gray-200 focus:border-primary-500 focus:ring-primary-100 hover:border-gray-300"
        } ${className || ""}`}
        {...props}
      />
    </InputFieldWrapper>
  )
);

Input.displayName = "Input";

export default Input;
