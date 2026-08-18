import type { Template } from "../../../services/template.service";

import ResumePreviewCanvas from "./ResumePreviewCanvas";
import ResumePreviewSidebar from "./ResumePreviewSidebar";

interface ResumePreviewWorkspaceProps {
    html: string;

    templates: Template[];

    selectedTemplateId: string;

    templateLoading: boolean;

    changingTemplate: string | null;

    onTemplateChange: (
        templateId: string,
    ) => void;
}

function ResumePreviewWorkspace({
    html,
    templates,
    selectedTemplateId,
    templateLoading,
    changingTemplate,
    onTemplateChange,
}: ResumePreviewWorkspaceProps) {
    return (
        <main
            className="
                relative
                min-h-[calc(100vh-76px)]
                overflow-hidden
            "
        >
            {/* =====================================================
             * COLORFUL BACKGROUND
             * ===================================================== */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    overflow-hidden
                "
            >
                {/* Blue */}

                <div
                    className="
                        absolute
                        -left-52
                        -top-52
                        h-[600px]
                        w-[600px]
                        rounded-full
                        bg-blue-300/40
                        blur-[120px]
                    "
                />

                {/* Violet */}

                <div
                    className="
                        absolute
                        -right-48
                        top-10
                        h-[560px]
                        w-[560px]
                        rounded-full
                        bg-violet-300/35
                        blur-[120px]
                    "
                />

                {/* Cyan */}

                <div
                    className="
                        absolute
                        bottom-[-300px]
                        left-[30%]
                        h-[600px]
                        w-[600px]
                        rounded-full
                        bg-cyan-300/25
                        blur-[130px]
                    "
                />

                {/* Pink */}

                <div
                    className="
                        absolute
                        bottom-[-350px]
                        right-[25%]
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-pink-300/20
                        blur-[120px]
                    "
                />
            </div>

            {/* =====================================================
             * CONTENT
             * ===================================================== */}

            <div
                className="
                    relative
                    mx-auto
                    w-full
                    max-w-[1500px]
                    px-4
                    py-6
                    sm:px-8
                    sm:py-8
                    lg:py-10
                "
            >
                {/* =================================================
                 * TITLE
                 * ================================================= */}

                <div className="mb-7">
                    <h1
                        className="
                            text-3xl
                            font-black
                            tracking-tight
                            text-slate-950
                            sm:text-4xl
                        "
                    >
                        Your resume is ready
                    </h1>

                    <p
                        className="
                            mt-2
                            max-w-2xl
                            text-sm
                            leading-6
                            text-slate-600
                            sm:text-base
                        "
                    >
                        Review your resume, make changes if needed,
                        then export it as a PDF.
                    </p>
                </div>

                {/* =================================================
                 * PREVIEW + SIDEBAR
                 * ================================================= */}

                <div
                    className="
                        grid
                        items-start
                        gap-7
                        xl:grid-cols-[minmax(0,1fr)_320px]
                    "
                >
                    {/* =================================================
                     * RESUME PREVIEW
                     * ================================================= */}

                    <section className="min-w-0">
                        <ResumePreviewCanvas
                            html={html}
                        />
                    </section>

                    {/* =================================================
                     * DESKTOP SIDEBAR
                     *
                     * Hidden on mobile/tablet.
                     * Visible from xl and above.
                     * ================================================= */}

                    <aside
                        className="
                            hidden
                            min-w-0
                            xl:sticky
                            xl:top-6
                            xl:block
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
                    </aside>
                </div>
            </div>
        </main>
    );
}

export default ResumePreviewWorkspace;