import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormField from "../../../components/ui/FormField";
import Input from "../../../components/ui/Input";

import type { ResumeFormValues } from "../types/resume.types";

function Education() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<ResumeFormValues>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "educations",
    });

    const addEducation = () => {
        append({
            institution: "",
            degree: "",
            field_of_study: "",
            start_date: "",
            end_date: "",
            grade: "",
            description: "",
        });
    };

    return (
        <div className="space-y-8">

            {/* Header */}

            <div>
                <h3 className="text-lg font-semibold text-slate-900">
                    Education
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                    Add your educational background, starting with your
                    most recent qualification.
                </p>
            </div>

            {/* Education List */}

            <div className="space-y-6">

                {fields.map((field, index) => {

                    const educationErrors =
                        errors.educations?.[index];

                    return (
                        <div
                            key={field.id}
                            className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6"
                        >

                            {/* Header */}

                            <div className="mb-6 flex items-center justify-between">

                                <div>
                                    <h4 className="font-semibold text-slate-900">
                                        Education {index + 1}
                                    </h4>

                                    <p className="mt-1 text-xs text-slate-500">
                                        Add your degree and institution details.
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600"
                                >
                                    <Trash2 size={16} />
                                    Remove
                                </button>

                            </div>

                            {/* Institution + Degree */}

                            <div className="grid gap-6 md:grid-cols-2">

                                <FormField
                                    label="Institution"
                                    error={
                                        educationErrors?.institution?.message
                                    }
                                >
                                    <Input
                                        placeholder="e.g. Delhi University"
                                        {...register(
                                            `educations.${index}.institution`,
                                        )}
                                    />
                                </FormField>

                                <FormField
                                    label="Degree"
                                    error={
                                        educationErrors?.degree?.message
                                    }
                                >
                                    <Input
                                        placeholder="e.g. Bachelor of Technology"
                                        {...register(
                                            `educations.${index}.degree`,
                                        )}
                                    />
                                </FormField>

                            </div>

                            {/* Field of Study */}

                            <div className="mt-6">

                                <FormField
                                    label="Field of Study"
                                    error={
                                        educationErrors?.field_of_study
                                            ?.message
                                    }
                                >
                                    <Input
                                        placeholder="e.g. Computer Science"
                                        {...register(
                                            `educations.${index}.field_of_study`,
                                        )}
                                    />
                                </FormField>

                            </div>

                            {/* Dates */}

                            <div className="mt-6 grid gap-6 md:grid-cols-2">

                                <FormField
                                    label="Start Date"
                                    error={
                                        educationErrors?.start_date?.message
                                    }
                                >
                                    <Input
                                        type="date"
                                        {...register(
                                            `educations.${index}.start_date`,
                                        )}
                                    />
                                </FormField>

                                <FormField
                                    label="End Date"
                                    error={
                                        educationErrors?.end_date?.message
                                    }
                                >
                                    <Input
                                        type="date"
                                        {...register(
                                            `educations.${index}.end_date`,
                                        )}
                                    />
                                </FormField>

                            </div>

                            {/* Grade */}

                            <div className="mt-6">

                                <FormField
                                    label="Grade / GPA"
                                    error={
                                        educationErrors?.grade?.message
                                    }
                                >
                                    <Input
                                        placeholder="e.g. 8.5 CGPA or 85%"
                                        {...register(
                                            `educations.${index}.grade`,
                                        )}
                                    />
                                </FormField>

                            </div>

                            {/* Description */}

                            <div className="mt-6">

                                <FormField
                                    label="Description"
                                    error={
                                        educationErrors?.description?.message
                                    }
                                >
                                    <textarea
                                        {...register(
                                            `educations.${index}.description`,
                                        )}
                                        rows={4}
                                        placeholder="Add relevant coursework, activities, honors, or other details..."
                                        className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                    />
                                </FormField>

                            </div>

                        </div>
                    );
                })}

            </div>

            {/* Empty State */}

            {fields.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">

                    <h4 className="font-semibold text-slate-900">
                        No education added yet
                    </h4>

                    <p className="mt-2 text-sm text-slate-500">
                        Add your degree, college, or other educational
                        qualifications.
                    </p>

                </div>
            )}

            {/* Add Education */}

            <button
                type="button"
                onClick={addEducation}
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
            >
                <Plus size={18} />
                Add Education
            </button>

        </div>
    );
}

export default Education;