import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Toggle from "../ui/Toggle";
import InputFieldWrapper from "../ui/InputFieldWrapper";
import { UploadCloud } from "lucide-react";

const StepBacker = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext();
  const hasBacker = watch("has_backer");

  return (
    <div className="animate-fade-in">
      <h2 className="text-xl font-bold text-gray-800 mb-1">
        Backer Information
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Who is funding or supporting this bounty?
      </p>

      <Controller
        name="has_backer"
        control={control}
        render={({ field }) => (
          <Toggle
            label="Does this bounty have a sponsor/backer?"
            checked={field.value}
            onChange={field.onChange}
          />
        )}
      />

      {hasBacker && (
        <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-sm mb-6">
          <div className="grid grid-cols-1 gap-y-4">
            <Input
              label="Backer / Organization Name"
              placeholder="e.g. Acme Corp"
              {...register("backer.name", {
                required: "Backer name is required",
              })}
              error={errors.backer?.name}
              required
            />

            <InputFieldWrapper
              label="Backer Logo (URL)"
              error={errors.backer?.logo}
              required
            >
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Input
                    {...register("backer.logo", {
                      required: "Logo URL is required",
                    })}
                    placeholder="https://example.com/logo.png"
                    className="pl-10"
                  />
                  <UploadCloud className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                </div>
              </div>
              <p className="text-xs text-gray-400 mt-1">
                Paste a direct image URL for this demo
              </p>
            </InputFieldWrapper>

            <Textarea
              label="Sponsor Message (Optional)"
              placeholder="A message from the sponsor..."
              {...register("backer.message")}
            />
          </div>
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-gray-200">
        <div
          className={`flex items-start p-4 rounded-lg border ${
            errors.terms_accepted
              ? "border-red-200 bg-red-50"
              : "border-gray-200 bg-gray-50"
          }`}
        >
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              {...register("terms_accepted", {
                required: "You must accept the terms",
              })}
              className="focus:ring-primary-500 h-4 w-4 text-primary-600 border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-medium text-gray-700">
              I agree to the Terms and Conditions
            </label>
            <p className="text-gray-500">
              By creating this bounty, you agree to the Impact Miner platform
              rules and payment schedules.
            </p>
            {errors.terms_accepted && (
              <p className="text-red-600 font-medium mt-1">
                Please accept the terms to proceed.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepBacker;
