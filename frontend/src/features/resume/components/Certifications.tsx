import { useFieldArray, useFormContext } from "react-hook-form";
import {
    Award,
    Plus,
    Trash2,
} from "lucide-react";

import FormField from "../../../components/ui/FormField";
import Input from "../../../components/ui/Input";

import type { ResumeFormValues } from "../types/resume.types";


function Certifications() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<ResumeFormValues>();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "certifications",
    });


    const addCertification = () => {
        append({
            name: "",
            issuing_organization: "",
            issue_date: "",
            expiry_date: "",
            credential_id: "",
            credential_url: "",
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

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                        <Award size={21} />
                    </div>

                    <div>

                        <h3 className="text-xl font-extrabold tracking-tight text-emerald-700">
                            Certifications
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            Add certifications, licenses, and professional
                            credentials that strengthen your resume.
                        </p>

                    </div>

                </div>

            </div>


            {/* ===================================================== */}
            {/* CERTIFICATION LIST */}
            {/* ===================================================== */}

            <div className="space-y-6">

                {fields.map((field, index) => {

                    const certificationErrors =
                        errors.certifications?.[index];


                    return (
                        <div
                            key={field.id}
                            className="overflow-hidden rounded-3xl border border-emerald-100 bg-emerald-50/40 shadow-sm"
                        >


                            {/* ================================================= */}
                            {/* CARD HEADER */}
                            {/* ================================================= */}

                            <div className="flex items-center justify-between gap-4 border-b border-emerald-100 bg-white/80 px-5 py-4 sm:px-6">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-sm font-extrabold text-emerald-700">
                                        {String(index + 1).padStart(
                                            2,
                                            "0",
                                        )}
                                    </div>

                                    <div>

                                        <h4 className="font-extrabold text-slate-900">
                                            Certification {index + 1}
                                        </h4>

                                        <p className="mt-0.5 text-xs text-slate-500">
                                            Add your professional credential details.
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    aria-label={`Remove certification ${index + 1}`}
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


                                {/* Certification Details */}

                                <div>

                                    <div className="mb-5">

                                        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                            Certification Details
                                        </h5>

                                    </div>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* Name */}

                                        <FormField
                                            label="Certification Name"
                                            error={
                                                certificationErrors?.name
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. AWS Certified Developer"
                                                {...register(
                                                    `certifications.${index}.name`,
                                                    {
                                                        required:
                                                            "Certification name is required.",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Certification name must contain at least 2 characters.",
                                                        },
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Certification name cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>


                                        {/* Organization */}

                                        <FormField
                                            label="Issuing Organization"
                                            error={
                                                certificationErrors
                                                    ?.issuing_organization
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. Amazon Web Services"
                                                {...register(
                                                    `certifications.${index}.issuing_organization`,
                                                    {
                                                        required:
                                                            "Issuing organization is required.",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Organization name must contain at least 2 characters.",
                                                        },
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Organization name cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>

                                    </div>

                                </div>


                                {/* Dates */}

                                <div>

                                    <h5 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        Certification Period
                                    </h5>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* Issue Date */}

                                        <FormField
                                            label="Issue Date"
                                            error={
                                                certificationErrors
                                                    ?.issue_date
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                type="date"
                                                {...register(
                                                    `certifications.${index}.issue_date`,
                                                    {
                                                        required:
                                                            "Issue date is required.",
                                                    },
                                                )}
                                            />

                                        </FormField>


                                        {/* Expiry Date */}

                                        <FormField
                                            label="Expiry Date"
                                            error={
                                                certificationErrors
                                                    ?.expiry_date
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                type="date"
                                                {...register(
                                                    `certifications.${index}.expiry_date`,
                                                )}
                                            />

                                            <p className="mt-1.5 text-xs text-slate-400">
                                                Leave blank if the certification
                                                does not expire.
                                            </p>

                                        </FormField>

                                    </div>

                                </div>


                                {/* Credential */}

                                <div>

                                    <h5 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        Credential Information
                                    </h5>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* Credential ID */}

                                        <FormField
                                            label="Credential ID"
                                            error={
                                                certificationErrors
                                                    ?.credential_id
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. ABC123456"
                                                {...register(
                                                    `certifications.${index}.credential_id`,
                                                    {
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Credential ID cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>


                                        {/* Credential URL */}

                                        <FormField
                                            label="Credential URL"
                                            error={
                                                certificationErrors
                                                    ?.credential_url
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                type="url"
                                                placeholder="https://example.com/verify"
                                                {...register(
                                                    `certifications.${index}.credential_url`,
                                                    {
                                                        pattern: {
                                                            value:
                                                                /^https?:\/\/.+/,
                                                            message:
                                                                "Please enter a valid URL starting with http:// or https://.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>

                                    </div>

                                </div>


                                {/* Description */}

                                <div>

                                    <div className="mb-5">

                                        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                            Description
                                        </h5>

                                        <p className="mt-1 text-xs text-slate-500">
                                            Add any relevant details about
                                            the certification.
                                        </p>

                                    </div>


                                    <FormField
                                        label="Certification Description"
                                        error={
                                            certificationErrors
                                                ?.description
                                                ?.message
                                        }
                                    >

                                        <textarea
                                            {...register(
                                                `certifications.${index}.description`,
                                                {
                                                    maxLength: {
                                                        value: 2000,
                                                        message:
                                                            "Description cannot exceed 2000 characters.",
                                                    },
                                                },
                                            )}
                                            rows={6}
                                            placeholder="Describe what you learned, what the certification covers, or any relevant specialization..."
                                            className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100"
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

                <div className="rounded-3xl border border-dashed border-emerald-200 bg-emerald-50/50 px-6 py-12 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600">

                        <Award size={28} />

                    </div>

                    <h4 className="mt-5 text-lg font-extrabold text-slate-900">
                        No certifications added yet
                    </h4>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Add certifications, licenses, courses, or professional
                        credentials that are relevant to your career.
                    </p>

                </div>

            )}


            {/* ===================================================== */}
            {/* ADD CERTIFICATION */}
            {/* ===================================================== */}

            <button
                type="button"
                onClick={addCertification}
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-emerald-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg"
            >

                <Plus size={18} />

                Add Certification

            </button>


            {/* ===================================================== */}
            {/* TIP */}
            {/* ===================================================== */}

            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-5">

                <div className="flex gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-sm">
                        🎓
                    </div>

                    <div>

                        <p className="text-sm font-bold text-emerald-800">
                            Add relevant credentials
                        </p>

                        <p className="mt-1 text-sm leading-6 text-emerald-700/80">
                            Prioritize certifications that are relevant to
                            the role you are applying for. Include your
                            credential ID or verification link when available.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default Certifications;