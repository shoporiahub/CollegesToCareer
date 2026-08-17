import { useFieldArray, useFormContext } from "react-hook-form";
import {
    Plus,
    Sparkles,
    Trash2,
} from "lucide-react";

import FormField from "../../../components/ui/FormField";
import Input from "../../../components/ui/Input";

import type { ResumeFormValues } from "../types/resume.types";


function Skills() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<ResumeFormValues>();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "skills",
    });


    const addSkill = () => {
        append({
            name: "",
            category: "",
            proficiency: "",
        });
    };


    return (
        <div className="space-y-12">


            {/* ===================================================== */}
            {/* HEADER */}
            {/* ===================================================== */}

            <div>

                <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                        <Sparkles size={21} />
                    </div>

                    <div>

                        <h3 className="text-xl font-extrabold tracking-tight text-cyan-700">
                            Skills
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            Add the technical and professional skills that
                            best represent your abilities.
                        </p>

                    </div>

                </div>

            </div>


            {/* ===================================================== */}
            {/* SKILLS LIST */}
            {/* ===================================================== */}

            <div className="space-y-5">

                {fields.map((field, index) => {

                    const skillErrors =
                        errors.skills?.[index];


                    return (
                        <div
                            key={field.id}
                            className="overflow-hidden rounded-3xl border border-cyan-100 bg-cyan-50/40 shadow-sm"
                        >


                            {/* ================================================= */}
                            {/* CARD HEADER */}
                            {/* ================================================= */}

                            <div className="flex items-center justify-between gap-4 border-b border-cyan-100 bg-white/80 px-5 py-4 sm:px-6">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 text-sm font-extrabold text-cyan-700">
                                        {String(index + 1).padStart(
                                            2,
                                            "0",
                                        )}
                                    </div>

                                    <div>

                                        <h4 className="font-extrabold text-slate-900">
                                            Skill {index + 1}
                                        </h4>

                                        <p className="mt-0.5 text-xs text-slate-500">
                                            Add a skill and indicate your proficiency.
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    aria-label={`Remove skill ${index + 1}`}
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

                            <div className="p-5 sm:p-6">

                                <div className="grid gap-6 md:grid-cols-3">


                                    {/* Skill */}

                                    <FormField
                                        label="Skill"
                                        error={
                                            skillErrors?.name?.message
                                        }
                                    >

                                        <Input
                                            placeholder="e.g. React"
                                            {...register(
                                                `skills.${index}.name`,
                                                {
                                                    required:
                                                        "Skill is required.",
                                                    minLength: {
                                                        value: 2,
                                                        message:
                                                            "Skill must contain at least 2 characters.",
                                                    },
                                                    maxLength: {
                                                        value: 100,
                                                        message:
                                                            "Skill cannot exceed 100 characters.",
                                                    },
                                                },
                                            )}
                                        />

                                    </FormField>


                                    {/* Category */}

                                    <FormField
                                        label="Category"
                                        error={
                                            skillErrors?.category?.message
                                        }
                                    >

                                        <Input
                                            placeholder="e.g. Frontend"
                                            {...register(
                                                `skills.${index}.category`,
                                                {
                                                    required:
                                                        "Skill category is required.",
                                                    minLength: {
                                                        value: 2,
                                                        message:
                                                            "Category must contain at least 2 characters.",
                                                    },
                                                    maxLength: {
                                                        value: 100,
                                                        message:
                                                            "Category cannot exceed 100 characters.",
                                                    },
                                                },
                                            )}
                                        />

                                    </FormField>


                                    {/* Proficiency */}

                                    <FormField
                                        label="Proficiency"
                                        error={
                                            skillErrors?.proficiency
                                                ?.message
                                        }
                                    >

                                        <select
                                            {...register(
                                                `skills.${index}.proficiency`,
                                                {
                                                    required:
                                                        "Please select a proficiency level.",
                                                },
                                            )}
                                            className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all duration-200 hover:border-slate-400 focus:border-cyan-600 focus:ring-4 focus:ring-cyan-100"
                                        >

                                            <option value="">
                                                Select level
                                            </option>

                                            <option value="beginner">
                                                Beginner
                                            </option>

                                            <option value="intermediate">
                                                Intermediate
                                            </option>

                                            <option value="advanced">
                                                Advanced
                                            </option>

                                            <option value="expert">
                                                Expert
                                            </option>

                                        </select>

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

                <div className="rounded-3xl border border-dashed border-cyan-200 bg-cyan-50/50 px-6 py-12 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-600">

                        <Sparkles size={28} />

                    </div>

                    <h4 className="mt-5 text-lg font-extrabold text-slate-900">
                        No skills added yet
                    </h4>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Add skills that are relevant to the jobs you
                        are applying for.
                    </p>

                </div>

            )}


            {/* ===================================================== */}
            {/* ADD SKILL */}
            {/* ===================================================== */}

            <button
                type="button"
                onClick={addSkill}
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-cyan-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-cyan-700 hover:shadow-lg"
            >

                <Plus size={18} />

                Add Skill

            </button>


            {/* ===================================================== */}
            {/* TIP */}
            {/* ===================================================== */}

            <div className="rounded-2xl border border-cyan-100 bg-cyan-50 p-5">

                <div className="flex gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-sm">
                        ✨
                    </div>

                    <div>

                        <p className="text-sm font-bold text-cyan-800">
                            Choose skills strategically
                        </p>

                        <p className="mt-1 text-sm leading-6 text-cyan-700/80">
                            Prioritize skills that match the job you are
                            applying for and that you can confidently
                            demonstrate through your experience or projects.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default Skills;