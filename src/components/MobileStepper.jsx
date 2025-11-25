import React from "react";

const MobileStepper = ({ currentStep, completedSteps }) => (
  <div className="md:hidden bg-white border-b border-gray-200 p-4 sticky top-0 z-30 shadow-sm">
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-lg font-bold text-gray-900">Impact Miner</h1>
      <span className="text-xs font-semibold text-gray-400">
        Step {currentStep} of 3
      </span>
    </div>

    <div className="flex items-center justify-between px-2">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center flex-1 last:flex-none">
          <div
            className={`
            flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold transition-colors
            ${
              currentStep === step
                ? "bg-primary-600 text-white"
                : completedSteps.includes(step)
                ? "bg-green-500 text-white"
                : "bg-gray-100 text-gray-400"
            }
          `}
          >
            {completedSteps.includes(step) && currentStep !== step ? "✓" : step}
          </div>
          {step !== 3 && (
            <div
              className={`h-1 flex-1 mx-2 rounded-full ${
                step < currentStep ? "bg-green-500" : "bg-gray-100"
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default MobileStepper;
