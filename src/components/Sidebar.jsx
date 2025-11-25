import React from "react";
import { CheckCircle, Circle, FileText, Award, UserCheck } from "lucide-react";

const steps = [
  { id: 1, title: "Basics", icon: FileText },
  { id: 2, title: "Rewards", icon: Award },
  { id: 3, title: "Backer", icon: UserCheck },
];

const Sidebar = ({ currentStep, completedSteps, goToStep }) => {
  const canNavigateTo = (stepId) => {
    if (stepId < currentStep) return true;
    if (stepId === currentStep) return true;
    if (stepId > currentStep && completedSteps.includes(currentStep))
      return true;
    return false;
  };

  return (
    <div className="hidden md:flex w-64 bg-white h-screen fixed left-0 border-r border-gray-200 flex-col z-10">
      <div className="p-6 border-b border-gray-100">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-sm font-bold">
            BC
          </span>
          Impact Miner
        </h1>
      </div>

      <nav className="p-4 flex-1 overflow-y-auto">
        <ul className="space-y-2">
          {steps.map((step) => {
            const isActive = currentStep === step.id;
            const isCompleted = completedSteps.includes(step.id);
            const canNavigate = canNavigateTo(step.id);
            const Icon = step.icon;

            return (
              <li key={step.id}>
                <button
                  onClick={() => canNavigate && goToStep(step.id)}
                  disabled={!canNavigate}
                  title={
                    !canNavigate && step.id > currentStep
                      ? "Complete current step first"
                      : ""
                  }
                  className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 text-left
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-600 shadow-sm"
                        : isCompleted
                        ? "bg-green-50 text-green-700 border-l-4 border-green-500 hover:bg-green-100"
                        : "text-gray-600 hover:bg-gray-50 border-l-4 border-transparent"
                    }
                    ${
                      !canNavigate
                        ? "opacity-50 cursor-not-allowed"
                        : "cursor-pointer"
                    }
                  `}
                >
                  <div className="mr-3">
                    {isCompleted ? (
                      <CheckCircle
                        className={`w-5 h-5 ${
                          isActive ? "text-blue-600" : "text-green-500"
                        }`}
                      />
                    ) : (
                      <Icon
                        className={`w-5 h-5 ${
                          isActive ? "text-blue-600" : "text-gray-400"
                        }`}
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p
                      className={`text-sm font-medium ${
                        isActive
                          ? "text-blue-900"
                          : isCompleted
                          ? "text-green-900"
                          : "text-gray-600"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {isCompleted ? "✓ Completed" : `Step ${step.id} of 3`}
                    </p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
