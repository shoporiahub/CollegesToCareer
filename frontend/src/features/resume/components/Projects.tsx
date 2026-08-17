import { useFieldArray, useFormContext } from "react-hook-form";
import {
    FolderKanban,
    Plus,
    Trash2,
} from "lucide-react";

import FormField from "../../../components/ui/FormField";
import Input from "../../../components/ui/Input";

import type { ResumeFormValues } from "../types/resume.types";


function Projects() {
    const {
        register,
        control,
        formState: { errors },
    } = useFormContext<ResumeFormValues>();


    const { fields, append, remove } = useFieldArray({
        control,
        name: "projects",
    });


    const addProject = () => {
        append({
            title: "",
            organization: "",
            technologies: "",
            github_url: "",
            live_url: "",
            start_date: "",
            end_date: "",
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

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                        <FolderKanban size={21} />
                    </div>

                    <div>

                        <h3 className="text-xl font-extrabold tracking-tight text-violet-700">
                            Projects
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-slate-500">
                            Showcase projects that demonstrate your skills,
                            experience, and technical abilities.
                        </p>

                    </div>

                </div>

            </div>


            {/* ===================================================== */}
            {/* PROJECT LIST */}
            {/* ===================================================== */}

            <div className="space-y-6">

                {fields.map((field, index) => {

                    const projectErrors =
                        errors.projects?.[index];


                    return (
                        <div
                            key={field.id}
                            className="overflow-hidden rounded-3xl border border-violet-100 bg-violet-50/40 shadow-sm"
                        >


                            {/* ================================================= */}
                            {/* CARD HEADER */}
                            {/* ================================================= */}

                            <div className="flex items-center justify-between gap-4 border-b border-violet-100 bg-white/80 px-5 py-4 sm:px-6">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-sm font-extrabold text-violet-700">
                                        {String(index + 1).padStart(
                                            2,
                                            "0",
                                        )}
                                    </div>

                                    <div>

                                        <h4 className="font-extrabold text-slate-900">
                                            Project {index + 1}
                                        </h4>

                                        <p className="mt-0.5 text-xs text-slate-500">
                                            Add details about your project.
                                        </p>

                                    </div>

                                </div>


                                <button
                                    type="button"
                                    onClick={() => remove(index)}
                                    aria-label={`Remove project ${index + 1}`}
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


                                {/* Project Details */}

                                <div>

                                    <h5 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        Project Details
                                    </h5>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* Project Title */}

                                        <FormField
                                            label="Project Title"
                                            error={
                                                projectErrors?.title
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. AI Resume Builder"
                                                {...register(
                                                    `projects.${index}.title`,
                                                    {
                                                        required:
                                                            "Project title is required.",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Project title must contain at least 2 characters.",
                                                        },
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Project title cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>


                                        {/* Organization */}

                                        <FormField
                                            label="Organization"
                                            error={
                                                projectErrors
                                                    ?.organization
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                placeholder="e.g. Personal Project"
                                                {...register(
                                                    `projects.${index}.organization`,
                                                    {
                                                        required:
                                                            "Organization is required.",
                                                        minLength: {
                                                            value: 2,
                                                            message:
                                                                "Organization must contain at least 2 characters.",
                                                        },
                                                        maxLength: {
                                                            value: 255,
                                                            message:
                                                                "Organization cannot exceed 255 characters.",
                                                        },
                                                    },
                                                )}
                                            />

                                        </FormField>

                                    </div>

                                </div>


                                {/* Technologies */}

                                <div>

                                    <div className="mb-5">

                                        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                            Technologies
                                        </h5>

                                        <p className="mt-1 text-xs text-slate-500">
                                            List the technologies, frameworks,
                                            and tools you used.
                                        </p>

                                    </div>


                                    <FormField
                                        label="Technologies"
                                        error={
                                            projectErrors?.technologies
                                                ?.message
                                        }
                                    >

                                        <Input
                                            placeholder="e.g. React, TypeScript, FastAPI, PostgreSQL"
                                            {...register(
                                                `projects.${index}.technologies`,
                                                {
                                                    required:
                                                        "Technologies are required.",
                                                    minLength: {
                                                        value: 2,
                                                        message:
                                                            "Please enter at least one technology.",
                                                    },
                                                    maxLength: {
                                                        value: 500,
                                                        message:
                                                            "Technologies cannot exceed 500 characters.",
                                                    },
                                                },
                                            )}
                                        />

                                    </FormField>

                                    <p className="mt-2 text-xs text-slate-400">
                                        Separate technologies with commas.
                                    </p>

                                </div>


                                {/* URLs */}

                                <div>

                                    <h5 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        Project Links
                                    </h5>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* GitHub */}

                                        <FormField
                                            label="GitHub URL"
                                            error={
                                                projectErrors?.github_url
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                type="url"
                                                placeholder="https://github.com/username/project"
                                                {...register(
                                                    `projects.${index}.github_url`,
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


                                        {/* Live URL */}

                                        <FormField
                                            label="Live Project URL"
                                            error={
                                                projectErrors?.live_url
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                type="url"
                                                placeholder="https://example.com"
                                                {...register(
                                                    `projects.${index}.live_url`,
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


                                {/* Dates */}

                                <div>

                                    <h5 className="mb-5 text-sm font-bold uppercase tracking-wider text-slate-400">
                                        Project Period
                                    </h5>


                                    <div className="grid gap-6 md:grid-cols-2">


                                        {/* Start Date */}

                                        <FormField
                                            label="Start Date"
                                            error={
                                                projectErrors?.start_date
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                type="date"
                                                {...register(
                                                    `projects.${index}.start_date`,
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
                                                projectErrors?.end_date
                                                    ?.message
                                            }
                                        >

                                            <Input
                                                type="date"
                                                {...register(
                                                    `projects.${index}.end_date`,
                                                )}
                                            />

                                            <p className="mt-1.5 text-xs text-slate-400">
                                                Leave blank if the project
                                                is still in progress.
                                            </p>

                                        </FormField>

                                    </div>

                                </div>


                                {/* Description */}

                                <div>

                                    <div className="mb-5">

                                        <h5 className="text-sm font-bold uppercase tracking-wider text-slate-400">
                                            Project Description
                                        </h5>

                                        <p className="mt-1 text-xs text-slate-500">
                                            Explain what you built, the problem
                                            it solved, and your contribution.
                                        </p>

                                    </div>


                                    <FormField
                                        label="Description"
                                        error={
                                            projectErrors?.description
                                                ?.message
                                        }
                                    >

                                        <textarea
                                            {...register(
                                                `projects.${index}.description`,
                                                {
                                                    required:
                                                        "Project description is required.",
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
                                            placeholder="Describe what you built, the problem it solved, your contribution, and the result..."
                                            className="w-full resize-y rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-slate-400 focus:border-violet-600 focus:ring-4 focus:ring-violet-100"
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

                <div className="rounded-3xl border border-dashed border-violet-200 bg-violet-50/50 px-6 py-12 text-center">

                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">

                        <FolderKanban size={28} />

                    </div>

                    <h4 className="mt-5 text-lg font-extrabold text-slate-900">
                        No projects added yet
                    </h4>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                        Add projects that demonstrate your strongest skills
                        and practical experience.
                    </p>

                </div>

            )}


            {/* ===================================================== */}
            {/* ADD PROJECT */}
            {/* ===================================================== */}

            <button
                type="button"
                onClick={addProject}
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white shadow-md shadow-violet-100 transition-all duration-200 hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-lg"
            >

                <Plus size={18} />

                Add Project

            </button>


            {/* ===================================================== */}
            {/* TIP */}
            {/* ===================================================== */}

            <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">

                <div className="flex gap-3">

                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-100 text-sm">
                        💻
                    </div>

                    <div>

                        <p className="text-sm font-bold text-violet-800">
                            Make your projects stand out
                        </p>

                        <p className="mt-1 text-sm leading-6 text-violet-700/80">
                            Focus on what you built, the technologies you
                            used, the problem you solved, and the impact
                            your project had.
                        </p>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default Projects;