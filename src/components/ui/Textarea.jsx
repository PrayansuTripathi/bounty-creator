import React from "react";
import InputFieldWrapper from "./InputFieldWrapper";

const Textarea = React.forwardRef(
  ({ label, error, className, ...props }, ref) => (
    <InputFieldWrapper label={label} error={error} required={props.required}>
      <textarea
        ref={ref}
        rows={4}
        className={`w-full px-4 py-2.5 rounded-lg border bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 transition-all resize-none
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

Textarea.displayName = "Textarea";

export default Textarea;
