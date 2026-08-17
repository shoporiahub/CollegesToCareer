import { useFieldArray, useFormContext } from "react-hook-form";
import {
    BriefcaseBusiness,
    CalendarDays,
    MapPin,
    Plus,
    Trash2,
} from "lucide-react";

import FormField from "../../../components/ui/FormField";
import Input from "../../../components/ui/Input";

import type { ResumeFormValues } from "../types/resume.types";


function Experience() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<ResumeFormValues>();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "experiences",
    });


    const addExperience = () => {
        append({
            company: "",
            position: "",
            employment_type: "",
            location: "",
            start_date: "",
            end_date: "",
            is_current: false,
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

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <BriefcaseBusiness size={21} />
                    </div>

                    <div>

                        <h3 className="text-xl font-extrabold tracking-tight text-blue-700">
                            Work Experience
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            Add your professional experience, starting with
                            your most recent position.
                        </p>

                    </div>

                </div>

            </div>


            {/* ===================================================== */}
            {/* EXPERIENCE LIST */}
            {/* ===================================================== */}

            <div className="space-y-6">

                {fields.map((field, index) => {

                    const experienceErrors =
                        errors.experiences?.[index];


                    return (
                        <div
                            key={field.id}
                            className="overflow-hidden rounded-3xl border border-blue-100 bg-blue-50/40 shadow-sm"
                        >


                            {/* ================================================= */}
                            {/* CARD HEADER */}
                            {/* ================================================= */}

                            <div className="flex items-center justify-between gap-4 border-b border-blue-100 bg-white/80 px-5 py-4 sm:px-6">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-sm font-extrabold text-blue-700">
                                        {String(index + 1).padStart(
                                            2,
                                            "0",
                                        )}
                                    </div>

                                    <div>

                                        <h4 className="font-extrabold text-slate-900">
                                            Experience {index + 1}
                                        </h4>

                                        <p className="mt-0.5 text-xs text-slate-500">
                                            Add your role and employment details.
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    aria-label={`Remove experience ${index + 1}`}
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

                                    <h5 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        Role Information
                                    </h5>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* Company */}

                                        <FormField
                                            label="Company"
                                            error={
                                                experienceErrors?.company
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. Google"
                                                {...register(
                                                    `experiences.${index}.company`,
                                                    {
                                                        required:
                                                            "Company name is required.",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Company name must contain at least 2 characters.",
                                                        },
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Company name cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>


                                        {/* Position */}

                                        <FormField
                                            label="Position"
                                            error={
                                                experienceErrors?.position
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. Software Engineer"
                                                {...register(
                                                    `experiences.${index}.position`,
                                                    {
                                                        required:
                                                            "Position is required.",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Position must contain at least 2 characters.",
                                                        },
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Position cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>

                                    </div>

                                </div>


                                {/* Employment Details */}

                                <div>

                                    <div className="mb-5 flex items-center gap-2">

                                        <MapPin
                                            size={17}
                                            className="text-blue-500"
                                        />

                                        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                            Employment Details
                                        </h5>

                                    </div>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* Employment Type */}

                                        <FormField
                                            label="Employment Type"
                                            error={
                                                experienceErrors
                                                    ?.employment_type
                                                    ?.message
                                            }
                                        >

                                            <select
                                                {...register(
                                                    `experiences.${index}.employment_type`,
                                                    {
                                                        required:
                                                            "Employment type is required.",
                                                    },
                                                )}
                                                className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition-all duration-200 hover:border-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                            >

                                                <option value="">
                                                    Select employment type
                                                </option>

                                                <option value="full-time">
                                                    Full-time
                                                </option>

                                                <option value="part-time">
                                                    Part-time
                                                </option>

                                                <option value="contract">
                                                    Contract
                                                </option>

                                                <option value="internship">
                                                    Internship
                                                </option>

                                                <option value="freelance">
                                                    Freelance
                                                </option>

                                                <option value="temporary">
                                                    Temporary
                                                </option>

                                            </select>

                                        </FormField>


                                        {/* Location */}

                                        <FormField
                                            label="Location"
                                            error={
                                                experienceErrors?.location
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. Bengaluru, India"
                                                {...register(
                                                    `experiences.${index}.location`,
                                                    {
                                                        required:
                                                            "Location is required.",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Location must contain at least 2 characters.",
                                                        },
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Location cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>

                                    </div>

                                </div>


                                {/* Employment Period */}

                                <div>

                                    <div className="mb-5 flex items-center gap-2">

                                        <CalendarDays
                                            size={17}
                                            className="text-blue-500"
                                        />

                                        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                            Employment Period
                                        </h5>

                                    </div>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* Start Date */}

                                        <FormField
                                            label="Start Date"
                                            error={
                                                experienceErrors?.start_date
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                type="date"
                                                {...register(
                                                    `experiences.${index}.start_date`,
                                                    {
                                                        required:
                                                            "Start date is required.",
                                                    },
                                                )}
                                            />

                                        </FormField>


                                        {/* End Date */}

                                        <FormField
                                            label="End Date"
                                            error={
                                                experienceErrors?.end_date
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                type="date"
                                                disabled={field.is_current}
                                                {...register(
                                                    `experiences.${index}.end_date`,
                                                )}
                                            />

                                            <p className="mt-1.5 text-xs text-slate-400">
                                                Leave blank if this is your
                                                current position.
                                            </p>

                                        </FormField>

                                    </div>


                                    {/* Current Position */}

                                    <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-xl border border-blue-100 bg-white px-4 py-3.5 transition hover:border-blue-200 hover:bg-blue-50/50">

                                        <input
                                            type="checkbox"
                                            {...register(
                                                `experiences.${index}.is_current`,
                                            )}
                                            className="h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500"
                                        />

                                        <div>

                                            <p className="text-sm font-bold text-slate-800">
                                                I currently work here
                                            </p>

                                            <p className="mt-0.5 text-xs text-slate-500">
                                                End date is not required for your
                                                current position.
                                            </p>

                                        </div>

                                    </label>

                                </div>


                                {/* Description */}

                                <div>

                                    <div className="mb-5">

                                        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                            Your Contribution
                                        </h5>

                                        <p className="mt-1 text-xs text-slate-500">
                                            Focus on responsibilities, achievements,
                                            and measurable impact.
                                        </p>

                                    </div>


                                    <FormField
                                        label="Description"
                                        error={
                                            experienceErrors?.description
                                                ?.message
                                        }
                                    >

                                        <textarea
                                            {...register(
                                                `experiences.${index}.description`,
                                                {
                                                    required:
                                                        "Experience description is required.",
                                                    minLength: {
                                                        value: 30,
                                                        message:
                                                            "Description must contain at least 30 characters.",
                                                    },
                                                    maxLength: {
                                                        value: 3000,
                                                        message:
                                                            "Description cannot exceed 3000 characters.",
                                                    },
                                                },
                                            )}
                                            rows={6}
                                            placeholder="Describe your responsibilities, achievements, projects, and impact..."
                                            className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
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

                <div className="rounded-3xl border border-dashed border-blue-200 bg-blue-50/50 px-6 py-12 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">

                        <BriefcaseBusiness size={28} />

                    </div>

                    <h4 className="mt-5 text-lg font-extrabold text-slate-900">
                        No experience added yet
                    </h4>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Add your professional experience to make your
                        resume stronger. You can add multiple positions.
                    </p>

                </div>

            )}


            {/* ===================================================== */}
            {/* ADD EXPERIENCE */}
            {/* ===================================================== */}

            <button
                type="button"
                onClick={addExperience}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
            >

                <Plus size={18} />

                Add Experience

            </button>


            {/* ===================================================== */}
            {/* TIP */}
            {/* ===================================================== */}

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">

                <div className="flex gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm">
                        💼
                    </div>

                    <div>

                        <p className="text-sm font-bold text-blue-800">
                            Make your experience stand out
                        </p>

                        <p className="mt-1 text-sm leading-6 text-blue-700/80">
                            Focus on achievements and measurable results
                            instead of only listing your responsibilities.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default Experience;