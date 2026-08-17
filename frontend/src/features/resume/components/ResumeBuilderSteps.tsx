import { Check } from "lucide-react";

import { RESUME_STEPS } from "../constants/resumeSteps";


interface ResumeBuilderStepsProps {

    currentStep: number;

    onStepClick: (
        index: number,
    ) => void;

}


function ResumeBuilderSteps({
    currentStep,
    onStepClick,
}: ResumeBuilderStepsProps) {

    return (
        <aside className="hidden w-64 shrink-0 lg:block">

            <div className="sticky top-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                {/* ================================================= */}
                {/* TITLE */}
                {/* ================================================= */}

                <div className="mb-6 px-3">

                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Resume Sections
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                        Complete your resume step by step
                    </p>

                </div>


                {/* ================================================= */}
                {/* STEPS */}
                {/* ================================================= */}

                <nav className="space-y-1">

                    {RESUME_STEPS.map(
                        (
                            step,
                            index,
                        ) => {

                            const isActive =
                                index ===
                                currentStep;


                            const isCompleted =
                                index <
                                currentStep;


                            const isClickable =
                                index <=
                                currentStep;


                            return (
                                <div
                                    key={step.id}
                                    className="relative"
                                >

                                    {/* Connecting line */}

                                    {index <
                                        RESUME_STEPS.length -
                                        1 && (

                                            <span
                                                className={`absolute left-[19px] top-11 h-[calc(100%-20px)] w-px ${isCompleted
                                                        ? "bg-blue-600"
                                                        : "bg-slate-200"
                                                    }`}
                                            />

                                        )}


                                    {/* Step */}

                                    <button
                                        type="button"
                                        disabled={
                                            !isClickable
                                        }
                                        onClick={() =>
                                            onStepClick(
                                                index,
                                            )
                                        }
                                        className={`relative flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition ${isActive
                                                ? "bg-blue-50 text-blue-700"
                                                : isCompleted
                                                    ? "text-slate-700 hover:bg-slate-50"
                                                    : "text-slate-400"
                                            }`}
                                    >

                                        {/* Number / Check */}

                                        <span
                                            className={`relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${isActive
                                                    ? "border-2 border-blue-600 bg-blue-600 text-white"
                                                    : isCompleted
                                                        ? "border border-blue-600 bg-white text-blue-600"
                                                        : "border border-slate-300 bg-white text-slate-400"
                                                }`}
                                        >

                                            {isCompleted ? (

                                                <Check
                                                    size={17}
                                                />

                                            ) : (

                                                index + 1

                                            )}

                                        </span>


                                        {/* Step title */}

                                        <span
                                            className={`text-sm ${isActive
                                                    ? "font-semibold"
                                                    : "font-medium"
                                                }`}
                                        >
                                            {step.title}
                                        </span>

                                    </button>

                                </div>
                            );
                        },
                    )}

                </nav>

            </div>

        </aside>
    );
}


export default ResumeBuilderSteps;