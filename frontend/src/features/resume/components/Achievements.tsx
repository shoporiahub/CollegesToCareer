import { useFieldArray, useFormContext } from "react-hook-form";
import {
    Award,
    Plus,
    Trash2,
} from "lucide-react";

import FormField from "../../../components/ui/FormField";
import Input from "../../../components/ui/Input";

import type { ResumeFormValues } from "../types/resume.types";


function Achievements() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<ResumeFormValues>();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "achievements",
    });


    const addAchievement = () => {
        append({
            title: "",
            issuer: "",
            achievement_date: "",
            description: "",
        });
    };


    return (
        <div className="space-y-12">


            {/* ===================================================== */}
            {/* HEADER */}
            {/* ===================================================== */}

            <div>

                <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                        <Award size={21} />
                    </div>

                    <div>

                        <h3 className="text-xl font-extrabold tracking-tight text-amber-700">
                            Achievements
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            Highlight awards, accomplishments, recognitions,
                            competitions, and milestones that strengthen your resume.
                        </p>

                    </div>

                </div>

            </div>


            {/* ===================================================== */}
            {/* ACHIEVEMENT LIST */}
            {/* ===================================================== */}

            <div className="space-y-6">

                {fields.map((field, index) => {

                    const achievementErrors =
                        errors.achievements?.[index];


                    return (
                        <div
                            key={field.id}
                            className="overflow-hidden rounded-3xl border border-amber-100 bg-amber-50/40 shadow-sm"
                        >


                            {/* ================================================= */}
                            {/* CARD HEADER */}
                            {/* ================================================= */}

                            <div className="flex items-center justify-between gap-4 border-b border-amber-100 bg-white/80 px-5 py-4 sm:px-6">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-sm font-extrabold text-amber-700">
                                        {String(index + 1).padStart(
                                            2,
                                            "0",
                                        )}
                                    </div>

                                    <div>

                                        <h4 className="font-extrabold text-slate-900">
                                            Achievement {index + 1}
                                        </h4>

                                        <p className="mt-0.5 text-xs text-slate-500">
                                            Add details about your accomplishment.
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    aria-label={`Remove achievement ${index + 1}`}
                                    className="inline-flex items-center gap-2 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-sm font-semibold text-red-500 transition-all duration-200 hover:border-red-200 hover:bg-red-100 hover:text-red-600"
                                >

                                    <Trash2 size={16} />

                                    <span className="hidden sm:inline">
                                        Remove
                                    </span>

                                </button>

                            </div>


                            {/* ================================================= */}
                            {/* FORM CONTENT */}
                            {/* ================================================= */}

                            <div className="space-y-8 p-5 sm:p-6">


                                {/* Role Information */}

                                <div>

                                    <div className="mb-5">

                                        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                            Achievement Details
                                        </h5>

                                    </div>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* Achievement */}

                                        <FormField
                                            label="Achievement"
                                            error={
                                                achievementErrors?.title
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. Employee of the Year"
                                                {...register(
                                                    `achievements.${index}.title`,
                                                    {
                                                        required:
                                                            "Achievement title is required.",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Achievement title must contain at least 2 characters.",
                                                        },
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Achievement title cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>


                                        {/* Issuer */}

                                        <FormField
                                            label="Issuer / Organization"
                                            error={
                                                achievementErrors?.issuer
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. Google"
                                                {...register(
                                                    `achievements.${index}.issuer`,
                                                    {
                                                        required:
                                                            "Issuer or organization is required.",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Issuer must contain at least 2 characters.",
                                                        },
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Issuer cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>

                                    </div>

                                </div>


                                {/* Date */}

                                <div>

                                    <h5 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        Date
                                    </h5>


                                    <FormField
                                        label="Achievement Date"
                                        error={
                                            achievementErrors
                                                ?.achievement_date
                                                ?.message
                                        }
                                    >

                                        <Input
                                            type="date"
                                            {...register(
                                                `achievements.${index}.achievement_date`,
                                                {
                                                    required:
                                                        "Achievement date is required.",
                                                },
                                            )}
                                        />

                                    </FormField>

                                </div>


                                {/* Description */}

                                <div>

                                    <div className="mb-5">

                                        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                            Description
                                        </h5>

                                        <p className="mt-1 text-xs text-slate-500">
                                            Explain what you achieved and why
                                            it was significant.
                                        </p>

                                    </div>


                                    <FormField
                                        label="Achievement Description"
                                        error={
                                            achievementErrors?.description
                                                ?.message
                                        }
                                    >

                                        <textarea
                                            {...register(
                                                `achievements.${index}.description`,
                                                {
                                                    required:
                                                        "Achievement description is required.",
                                                    minLength: {
                                                        value: 20,
                                                        message:
                                                            "Description must contain at least 20 characters.",
                                                    },
                                                    maxLength: {
                                                        value: 2000,
                                                        message:
                                                            "Description cannot exceed 2000 characters.",
                                                    },
                                                },
                                            )}
                                            rows={6}
                                            placeholder="Describe the achievement, its impact, or why it was significant..."
                                            className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-amber-500 focus:ring-4 focus:ring-amber-100"
                                        />

                                    </FormField>

                                </div>

                            </div>

                        </div>
                    );
                })}

            </div>


            {/* ===================================================== */}
            {/* EMPTY STATE */}
            {/* ===================================================== */}

            {fields.length === 0 && (

                <div className="rounded-3xl border border-dashed border-amber-200 bg-amber-50/50 px-6 py-12 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600">

                        <Award size={28} />

                    </div>

                    <h4 className="mt-5 text-lg font-extrabold text-slate-900">
                        No achievements added yet
                    </h4>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Add awards, recognitions, competitions, scholarships,
                        or other accomplishments that make you stand out.
                    </p>

                </div>

            )}


            {/* ===================================================== */}
            {/* ADD ACHIEVEMENT */}
            {/* ===================================================== */}

            <button
                type="button"
                onClick={addAchievement}
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-amber-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-700 hover:shadow-lg"
            >

                <Plus size={18} />

                Add Achievement

            </button>


            {/* ===================================================== */}
            {/* TIP */}
            {/* ===================================================== */}

            <div className="rounded-2xl border border-amber-100 bg-amber-50 p-5">

                <div className="flex gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-sm">
                        🏆
                    </div>

                    <div>

                        <p className="text-sm font-bold text-amber-800">
                            Make your achievements stand out
                        </p>

                        <p className="mt-1 text-sm leading-6 text-amber-700/80">
                            Focus on the result or impact of your achievement.
                            Numbers, rankings, awards, and measurable outcomes
                            can make your resume more convincing.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default Achievements;