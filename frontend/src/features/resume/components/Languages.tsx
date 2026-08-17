import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";

import FormField from "../../../components/ui/FormField";
import Input from "../../../components/ui/Input";

import type { ResumeFormValues } from "../types/resume.types";

function Languages() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<ResumeFormValues>();

    const { fields, append, remove } = useFieldArray({
        control,
        name: "languages",
    });

    const addLanguage = () => {
        append({
            name: "",
            proficiency: "",
        });
    };

    return (
        <div className="space-y-8">

            {/* Header */}

            <div>
                <h3 className="text-lg font-semibold text-slate-900">
                    Languages
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                    Add the languages you know and your level of
                    proficiency in each one.
                </p>
            </div>

            {/* Languages */}

            <div className="space-y-4">

                {fields.map((field, index) => {

                    const languageErrors =
                        errors.languages?.[index];

                    return (
                        <div
                            key={field.id}
                            className="rounded-2xl border border-slate-200 bg-slate-50/50 p-5"
                        >

                            <div className="flex items-start gap-4">

                                {/* Number */}

                                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-700">
                                    {index + 1}
                                </div>

                                {/* Fields */}

                                <div className="min-w-0 flex-1">

                                    <div className="grid gap-5 md:grid-cols-2">

                                        <FormField
                                            label="Language"
                                            error={
                                                languageErrors?.name?.message
                                            }
                                        >
                                            <Input
                                                placeholder="e.g. English"
                                                {...register(
                                                    `languages.${index}.name`,
                                                )}
                                            />
                                        </FormField>

                                        <FormField
                                            label="Proficiency"
                                            error={
                                                languageErrors?.proficiency
                                                    ?.message
                                            }
                                        >
                                            <select
                                                {...register(
                                                    `languages.${index}.proficiency`,
                                                )}
                                                className="h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                                            >
                                                <option value="">
                                                    Select proficiency
                                                </option>

                                                <option value="basic">
                                                    Basic
                                                </option>

                                                <option value="conversational">
                                                    Conversational
                                                </option>

                                                <option value="intermediate">
                                                    Intermediate
                                                </option>

                                                <option value="fluent">
                                                    Fluent
                                                </option>

                                                <option value="native">
                                                    Native
                                                </option>
                                            </select>
                                        </FormField>

                                    </div>

                                </div>

                                {/* Remove */}

                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    aria-label={`Remove language ${index + 1}`}
                                    className="mt-1 rounded-lg p-2 text-red-500 transition hover:bg-red-50 hover:text-red-600"
                                >
                                    <Trash2 size={18} />
                                </button>

                            </div>

                        </div>
                    );
                })}

            </div>

            {/* Empty State */}

            {fields.length === 0 && (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">

                    <h4 className="font-semibold text-slate-900">
                        No languages added yet
                    </h4>

                    <p className="mt-2 text-sm text-slate-500">
                        Add the languages you can communicate in.
                    </p>

                </div>
            )}

            {/* Add Language */}

            <button
                type="button"
                onClick={addLanguage}
                className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 transition hover:border-blue-300 hover:bg-blue-100"
            >
                <Plus size={18} />
                Add Language
            </button>

        </div>
    );
}

export default Languages;