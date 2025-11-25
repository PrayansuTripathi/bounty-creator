import React from "react";
import { useFormContext } from "react-hook-form";
import {
  BOUNTY_TYPES,
  CORE_TYPES,
  PROJECTS,
} from "../../constants/initialValues";
import Input from "../ui/Input";
import Textarea from "../ui/Textarea";
import Select from "../ui/Select";

const StepBasics = () => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const mode = watch("mode");

  return (
    <div className="animate-fade-in max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-1">Basic Details</h2>
      <p className="text-gray-500 text-sm mb-6">
        Let's start with the essentials for your bounty.
      </p>

      <div className="grid grid-cols-1 gap-y-5">
        <Input
          label="Bounty Title"
          placeholder="Type your bounty's title"
          {...register("title", {
            required: "Title is required",
            maxLength: { value: 40, message: "Max 40  characters allowed" },
          })}
          error={errors.title}
          description={`characters limit: ${watch("title")?.length || 0}/40 `}
          maxLength={40}
          required
        />

        <Textarea
          label="Bounty Description"
          placeholder="Briefly describe what the bounty does"
          {...register("description", { required: "Description is required" })}
          error={errors.description}
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Select
            label="Bounty Type"
            options={BOUNTY_TYPES}
            placeholder="Choose category"
            {...register("type")}
          />

          <Select
            label="Dominant Impact Core"
            options={CORE_TYPES}
            placeholder="Choose core"
            {...register("dominant_core")}
          />
        </div>

        <div className="mt-1">
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Bounty Mode
          </label>
          <div className="flex items-center gap-8">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                value="digital"
                {...register("mode")}
                className="w-5 h-5 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="text-gray-700 font-medium group-hover:text-primary-700 transition-colors">
                Digital Bounty
              </span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                value="physical"
                {...register("mode")}
                className="w-5 h-5 text-primary-600 focus:ring-primary-500 border-gray-300"
              />
              <span className="text-gray-700 font-medium group-hover:text-primary-700 transition-colors">
                Physical Bounty
              </span>
            </label>
          </div>
        </div>

        {mode === "physical" && (
          <div className="animate-fade-in mt-2">
            <Input
              label="Enter Bounty Radius (in Kms)"
              placeholder="e.g. 50"
              {...register("location", {
                required: "Location radius is required for physical bounties",
              })}
              error={errors.location}
              required
            />

            <div className="mt-2 h-32 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 text-sm">
              <span className="flex items-center gap-2">📍 Map Preview</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepBasics;
