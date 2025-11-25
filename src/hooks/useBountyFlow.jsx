import { useState } from "react";
import findFirstErrorField from "../utils/findFirstErrorField";

export default function useBountyFlow(methods) {
  const { trigger, setFocus } = methods;

  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [pendingData, setPendingData] = useState(null);
  const [finalPayload, setFinalPayload] = useState(null);

  const validateStep = async (step) => {
    if (step === 1)
      return await trigger([
        "title",
        "description",
        "type",
        "dominant_core",
        "location",
        "mode",
      ]);
    else if (step === 2)
      return await trigger([
        "reward.amount",
        "reward.winners",
        "timeline.expiration_date",
        "impactBriefMessage",
      ]);
    else if (step === 3)
      return await trigger(["backer.name", "backer.logo", "terms_accepted"]);
    return true;
  };

  const goToStep = async (stepNumber) => {
    if (stepNumber < currentStep) {
      setCurrentStep(stepNumber);
      return;
    }

    if (stepNumber > currentStep) {
      const isValid = await validateStep(currentStep);
      if (!isValid) {
        const first = findFirstErrorField(methods.formState.errors);
        setFocus(first);
        return;
      }
      setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
      setCurrentStep(stepNumber);
    }
  };

  const handleNext = async () => {
    const isValid = await validateStep(currentStep);

    if (!isValid) {
      const first = findFirstErrorField(methods.formState.errors);
      setFocus(first);
      return;
    }

    setCompletedSteps((prev) => [...new Set([...prev, currentStep])]);
    if (currentStep < 3) setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const onSubmit = (data) => {
    setPendingData(data);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setFinalPayload(pendingData);
      setIsSubmitting(false);
      setShowConfirmation(false);
    }, 1500);
  };

  const handleCancel = () => {
    setShowConfirmation(false);
    setPendingData(null);
  };

  return {
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
  };
}
