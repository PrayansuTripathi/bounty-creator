import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { CURRENCIES, SDG_OPTIONS } from "../../constants/initialValues";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Toggle from "../ui/Toggle";
import InputFieldWrapper from "../ui/InputFieldWrapper";
import Textarea from "../ui/Textarea";

const StepRewards = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext();
  const hasCertificate = watch("hasImpactCertificate");

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-1">
        Rewards & Timeline
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Choose bounty reward token and set the amount.
      </p>

      <div className="bg-white rounded-xl p-1 mb-6">
        <div className="mb-6">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            What is your budget for this bounty? *
          </label>
          <div className="flex gap-3">
            <div className="w-1/3">
              <Select
                options={CURRENCIES}
                {...register("reward.currency")}
                className="mt-0"
              />
            </div>
            <div className="w-2/3">
              <Input
                type="number"
                placeholder="12,000"
                {...register("reward.amount", {
                  required: "Amount required",
                  min: { value: 1, message: "Must be > 0" },
                  valueAsNumber: true,
                })}
                error={errors.reward?.amount}
                required
                className="mt-0"
              />
            </div>
          </div>
        </div>

        <Input
          label="How many winners? "
          type="number"
          placeholder="e.g. 3"
          {...register("reward.winners", {
            required: "Required",
            min: { value: 1, message: "Min 1 winner" },
            valueAsNumber: true,
          })}
          error={errors.reward?.winners}
          required
        />

        <p className="text-xs text-gray-500 -mt-3 mb-5">
          Each winner will be awarded.
        </p>
      </div>

      <div className="bg-white rounded-xl p-1 mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide text-gray-500">
          Timeline Config
        </h3>
        <Input
          label="When does this bounty expire?"
          type="date"
          {...register("timeline.expiration_date", {
            required: "Date required",
          })}
          error={errors.timeline?.expiration_date}
          required
        />

        <InputFieldWrapper label="Expected completion time per submission">
          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                placeholder="0"
                type="number"
                label="Days"
                {...register("timeline.estimated_completion.days", {
                  valueAsNumber: true,
                  min: 0,
                })}
                className="text-center"
              />
            </div>
            <div className="flex-1">
              <Input
                placeholder="0"
                type="number"
                label="Hours"
                {...register("timeline.estimated_completion.hours", {
                  valueAsNumber: true,
                  min: 0,
                  max: 23,
                })}
                className="text-center"
              />
            </div>
            <div className="flex-1">
              <Input
                placeholder="0"
                type="number"
                label="minutes"
                {...register("timeline.estimated_completion.minutes", {
                  valueAsNumber: true,
                  min: 0,
                  max: 23,
                })}
                className="text-center"
              />
            </div>
          </div>
        </InputFieldWrapper>
      </div>

      <div className="bg-white rounded-xl p-1">
        <Controller
          name="hasImpactCertificate"
          control={control}
          render={({ field }) => (
            <Toggle
              label="Impact Certificate"
              checked={field.value}
              onChange={field.onChange}
            />
          )}
        />

        {hasCertificate && (
          <Textarea
            label="Impact Certificate Brief *"
            placeholder="Creating digital assets for fellow guild members"
            {...register("impactBriefMessage", {
              required: "Brief is required if cert is enabled",
            })}
            error={errors.impactBriefMessage}
            className="mb-4"
          />
        )}

        <InputFieldWrapper label="SDGs ">
          <div className="grid grid-cols-1 gap-2 p-2 border border-gray-200 rounded-lg bg-gray-50">
            {SDG_OPTIONS.map((sdg) => (
              <label
                key={sdg}
                className="flex items-center space-x-3 p-2 hover:bg-white rounded cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  value={sdg}
                  {...register("sdgs")}
                  className="rounded border-gray-300 text-primary-600 focus:ring-primary-500 h-4 w-4"
                />
                <span className="text-sm text-gray-700">{sdg}</span>
              </label>
            ))}
          </div>
        </InputFieldWrapper>
      </div>
    </div>
  );
};

export default StepRewards;
