import { X } from "lucide-react";

import ResumePreviewSidebar from "./ResumePreviewSidebar";

import type { Template } from "../../../services/template.service";


type ResumeTemplateDrawerProps = {
    isOpen: boolean;
    onClose: () => void;

    templates: Template[];

    selectedTemplateId: string;

    templateLoading: boolean;

    changingTemplate: string | null;

    onTemplateChange: (
        templateId: string,
    ) => void;
};


function ResumeTemplateDrawer({
    isOpen,
    onClose,
    templates,
    selectedTemplateId,
    templateLoading,
    changingTemplate,
    onTemplateChange,
}: ResumeTemplateDrawerProps) {

    return (
        <div
            className={`
                fixed
                inset-0
                z-[100]
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
                aria-label="Close templates"
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
            {/* DRAWER */}
            {/* ================================================= */}

            <aside
                className={`
                    absolute
                    bottom-0
                    right-0
                    top-0
                    flex
                    w-[88%]
                    max-w-[420px]
                    flex-col
                    bg-slate-50
                    shadow-2xl
                    transition-transform
                    duration-300
                    ${isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <div
                    className="
                        flex
                        shrink-0
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
                                text-lg
                                font-extrabold
                                text-slate-900
                            "
                        >
                            Resume Templates
                        </h2>

                        <p
                            className="
                                mt-1
                                text-xs
                                text-slate-500
                            "
                        >
                            Choose a template for your resume.
                        </p>

                    </div>


                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close templates"
                        className="
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            text-slate-500
                            transition
                            hover:bg-slate-100
                            hover:text-slate-900
                        "
                    >
                        <X size={22} />
                    </button>

                </div>


                {/* ================================================= */}
                {/* TEMPLATES */}
                {/* ================================================= */}

                <div
                    className="
                        flex-1
                        overflow-y-auto
                        p-4
                    "
                >

                    <ResumePreviewSidebar
                        templates={templates}
                        selectedTemplateId={
                            selectedTemplateId
                        }
                        templateLoading={
                            templateLoading
                        }
                        changingTemplate={
                            changingTemplate
                        }
                        onTemplateChange={
                            onTemplateChange
                        }
                    />

                </div>

            </aside>

        </div>
    );
}


export default ResumeTemplateDrawer;