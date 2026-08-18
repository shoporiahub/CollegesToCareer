import {
    X,
} from "lucide-react";

import ResumeBuilderAI from "./ResumeBuilderAI";


type ResumeAIBottomSheetProps = {
    isOpen: boolean;
    onClose: () => void;
};


function ResumeAIBottomSheet({
    isOpen,
    onClose,
}: ResumeAIBottomSheetProps) {

    return (
        <div
            className={`
                fixed
                inset-0
                z-50
                lg:hidden
                ${isOpen
                    ? "visible"
                    : "invisible"
                }
            `}
        >

            {/* ================================================= */}
            {/* OVERLAY */}
            {/* ================================================= */}

            <button
                type="button"
                aria-label="Close College to Career AI"
                onClick={onClose}
                className={`
                    absolute
                    inset-0
                    w-full
                    bg-black/40
                    backdrop-blur-sm
                    transition-opacity
                    duration-300
                    ${isOpen
                        ? "opacity-100"
                        : "opacity-0"
                    }
                `}
            />


            {/* ================================================= */}
            {/* BOTTOM SHEET */}
            {/* ================================================= */}

            <div
                className={`
                    absolute
                    bottom-0
                    left-0
                    right-0
                    max-h-[88vh]
                    overflow-y-auto
                    rounded-t-3xl
                    bg-slate-50
                    shadow-2xl
                    transition-transform
                    duration-300
                    ${isOpen
                        ? "translate-y-0"
                        : "translate-y-full"
                    }
                `}
            >

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <div
                    className="
                        sticky
                        top-0
                        z-10
                        flex
                        items-center
                        justify-between
                        border-b
                        border-slate-200
                        bg-white
                        px-5
                        py-4
                    "
                >

                    <div>

                        <h2
                            className="
                                text-base
                                font-bold
                                text-slate-900
                            "
                        >
                            College to Career AI
                        </h2>

                        <p
                            className="
                                mt-0.5
                                text-xs
                                text-slate-500
                            "
                        >
                            Get help with your resume and career.
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close AI"
                        className="
                            flex
                            h-9
                            w-9
                            items-center
                            justify-center
                            rounded-full
                            text-slate-500
                            transition
                            hover:bg-slate-100
                            hover:text-slate-900
                        "
                    >
                        <X size={21} />
                    </button>

                </div>


                {/* ================================================= */}
                {/* AI CONTENT */}
                {/* ================================================= */}

                <div className="p-4">

                    <ResumeBuilderAI />

                </div>

            </div>

        </div>
    );
}


export default ResumeAIBottomSheet;