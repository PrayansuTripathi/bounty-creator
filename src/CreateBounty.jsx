import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import Sidebar from "./components/Sidebar";
import StepBasics from "./components/steps/StepBasic";
import StepRewards from "./components/steps/StepRewards";
import StepBacker from "./components/steps/StepBacker";
import { INITIAL_VALUES } from "./constants/initialValues";
import useBountyFlow from "./hooks/useBountyFlow";
import BountyResult from "./components/BountyResult";
import MobileStepper from "./components/MobileStepper";
import FooterActions from "./components/FooterActions";
import ConfirmationModal from "./components/ConfirmationModal";

const CreateBounty = () => {
  const methods = useForm({
    mode: "onChange",
    defaultValues: INITIAL_VALUES,
  });

  const {
    currentStep,
    completedSteps,
    isSubmitting,
    showConfirmation,
    finalPayload,
    handleNext,
    handleBack,
    onSubmit,
    handleConfirm,
    handleCancel,
    goToStep,
  } = useBountyFlow(methods);

  if (finalPayload) return <BountyResult finalPayload={finalPayload} />;

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row font-sans">
        <Sidebar
          currentStep={currentStep}
          completedSteps={completedSteps}
          goToStep={goToStep}
        />

        <main className="flex-1 md:ml-64 flex flex-col min-h-screen">
          <MobileStepper
            currentStep={currentStep}
            completedSteps={completedSteps}
          />

          <div className="flex-1 flex flex-col items-center justify-center p-0 md:p-12 w-full">
            <div className="w-full max-w-3xl bg-white md:rounded-2xl md:shadow-sm md:border md:border-gray-200 flex flex-col">
              <div className="flex-1 p-6 md:p-10">
                <form
                  onSubmit={methods.handleSubmit(onSubmit)}
                  id="bounty-form"
                >
                  {currentStep === 1 && <StepBasics />}
                  {currentStep === 2 && <StepRewards />}
                  {currentStep === 3 && <StepBacker />}
                </form>
              </div>

              <FooterActions
                currentStep={currentStep}
                isSubmitting={isSubmitting}
                handleNext={handleNext}
                handleBack={handleBack}
              />
            </div>
          </div>

          <ConfirmationModal
            isOpen={showConfirmation}
            isLoading={isSubmitting}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </main>
      </div>
    </FormProvider>
  );
};

export default CreateBounty;
