import {
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

import {
    RESUME_STEPS,
} from "../constants/resumeSteps";


interface ResumeBuilderFormProps {

    currentStep: number;

    isSubmitting: boolean;

    submitError: string | null;

    onNext: () => void;

    onPrevious: () => void;

    onSubmit: (
        event: React.FormEvent<HTMLFormElement>,
    ) => void;

}


function ResumeBuilderForm({
    currentStep,
    isSubmitting,
    submitError,
    onNext,
    onPrevious,
    onSubmit,
}: ResumeBuilderFormProps) {

    const CurrentStep =
        RESUME_STEPS[
            currentStep
        ].component;


    const isFirstStep =
        currentStep === 0;


    const isLastStep =
        currentStep ===
        RESUME_STEPS.length - 1;


    return (
        <main className="min-w-0 flex-1">

            {/* ================================================= */}
            {/* MOBILE PROGRESS */}
            {/* ================================================= */}

            <div className="mb-6 lg:hidden">

                <div className="mb-2 flex items-center justify-between">

                    <span className="text-sm font-semibold text-slate-700">

                        Step{" "}

                        {currentStep + 1}

                        {" "}

                        of{" "}

                        {RESUME_STEPS.length}

                    </span>


                    <span className="text-sm text-slate-500">

                        {
                            RESUME_STEPS[
                                currentStep
                            ].title
                        }

                    </span>

                </div>


                <div className="h-2 overflow-hidden rounded-full bg-slate-200">

                    <div
                        className="
                            h-full
                            rounded-full
                            bg-blue-600
                            transition-all
                            duration-300
                        "
                        style={{
                            width: `${(
                                    (currentStep + 1) /
                                    RESUME_STEPS.length
                                ) * 100
                                }%`,
                        }}
                    />

                </div>

            </div>


            {/* ================================================= */}
            {/* ERROR */}
            {/* ================================================= */}

            {submitError && (

                <div
                    className="
                        mb-6
                        rounded-2xl
                        border
                        border-red-200
                        bg-red-50
                        px-5
                        py-4
                    "
                >

                    <p
                        className="
                            text-sm
                            font-medium
                            text-red-700
                        "
                    >
                        {submitError}
                    </p>

                </div>

            )}


            {/* ================================================= */}
            {/* FORM */}
            {/* ================================================= */}

            <form
                onSubmit={onSubmit}
            >

                <div
                    className="
                        overflow-hidden
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                    "
                >

                    {/* ================================================= */}
                    {/* CURRENT STEP */}
                    {/* ================================================= */}

                    <div
                        className="
                            p-6
                            sm:p-8
                            lg:p-10
                        "
                    >

                        <CurrentStep />

                    </div>


                    {/* ================================================= */}
                    {/* NAVIGATION */}
                    {/* ================================================= */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                            border-t
                            border-slate-200
                            px-6
                            py-5
                            sm:px-8
                            lg:px-10
                        "
                    >

                        {/* ================================================= */}
                        {/* PREVIOUS */}
                        {/* ================================================= */}

                        <button
                            type="button"
                            onClick={onPrevious}
                            disabled={
                                isFirstStep ||
                                isSubmitting
                            }
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-300
                                bg-white
                                px-5
                                py-3
                                text-sm
                                font-semibold
                                text-slate-700
                                transition
                                hover:bg-slate-50
                                disabled:cursor-not-allowed
                                disabled:opacity-40
                            "
                        >

                            <ArrowLeft
                                size={18}
                            />

                            Previous

                        </button>


                        {/* ================================================= */}
                        {/* NEXT / SUBMIT */}
                        {/* ================================================= */}

                        {!isLastStep ? (

                            <button
                                type="button"
                                onClick={onNext}
                                disabled={isSubmitting}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-blue-600
                                    px-6
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-sm
                                    transition
                                    hover:bg-blue-700
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            >

                                Continue

                                <ArrowRight
                                    size={18}
                                />

                            </button>

                        ) : (

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-xl
                                    bg-blue-600
                                    px-6
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-white
                                    shadow-sm
                                    transition
                                    hover:bg-blue-700
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            >

                                {isSubmitting
                                    ? "Creating Resume..."
                                    : "Review Resume"}

                                <ArrowRight
                                    size={18}
                                />

                            </button>

                        )}

                    </div>

                </div>

            </form>

        </main>
    );
}


export default ResumeBuilderForm;