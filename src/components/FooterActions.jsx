import React from "react";
import { Loader2 } from "lucide-react";

const FooterActions = ({
  currentStep,
  handleNext,
  handleBack,
  isSubmitting,
}) => (
  <div className="p-4 md:px-10 md:py-6 border-t border-gray-100 bg-white md:bg-gray-50/50 md:rounded-b-2xl flex justify-between items-center sticky bottom-0 md:static z-20">
    <button
      type="button"
      onClick={handleBack}
      disabled={currentStep === 1}
      className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-colors
        ${
          currentStep === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
        }`}
    >
      Back
    </button>

    {currentStep < 3 ? (
      <button
        type="button"
        onClick={handleNext}
        className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all active:scale-95"
      >
        Next
      </button>
    ) : (
      <button
        type="submit"
        form="bounty-form"
        disabled={isSubmitting}
        className="flex items-center bg-primary-600 hover:bg-primary-700 text-white px-8 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Publishing...
          </>
        ) : (
          "Publish Bounty"
        )}
      </button>
    )}
  </div>
);

export default FooterActions;
