import React from "react";

const Toggle = ({ label, checked, onChange }) => (
  <div className="flex items-center justify-between mb-6 p-4 border border-gray-100 rounded-lg bg-gray-50/50">
    <span className="text-sm font-medium text-gray-700">{label}</span>
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        ${checked ? "bg-primary-600" : "bg-gray-200"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform shadow-sm
          ${checked ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  </div>
);

export default Toggle;
