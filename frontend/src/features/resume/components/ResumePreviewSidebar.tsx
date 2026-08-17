import {
    Loader2,
} from "lucide-react";

import type {
    Template,
} from "../../../services/template.service";


interface ResumePreviewSidebarProps {

    templates: Template[];

    selectedTemplateId: string;

    templateLoading: boolean;

    changingTemplate: string | null;

    onTemplateChange: (
        templateId: string,
    ) => void;

}


function ResumePreviewSidebar({
    templates,
    selectedTemplateId,
    templateLoading,
    changingTemplate,
    onTemplateChange,
}: ResumePreviewSidebarProps) {


    const otherTemplates =
        templates.filter(
            (
                template,
            ) =>
                template.id !==
                selectedTemplateId,
        );


    return (

        <aside>

            <div
                className="
                    sticky
                    top-24
                "
            >

                {/* =================================================
                 * OTHER TEMPLATES
                 * ================================================= */}

                <div
                    className="
                        rounded-3xl
                        border
                        border-slate-200
                        bg-white
                        p-6
                        shadow-sm
                    "
                >

                    {/* =================================================
                     * HEADER
                     * ================================================= */}

                    <div>


                        <h3
                            className="
                                mt-1
                                text-xl
                                font-black
                                text-slate-950
                            "
                        >
                            Other Templates
                        </h3>


                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-slate-500
                            "
                        >
                            Try another design without losing
                            your resume information.
                        </p>

                    </div>


                    {/* =================================================
                     * LOADING
                     * ================================================= */}

                    {templateLoading ? (

                        <div
                            className="
                                flex
                                justify-center
                                py-10
                            "
                        >

                            <Loader2
                                size={26}
                                className="
                                    animate-spin
                                    text-blue-600
                                "
                            />

                        </div>

                    ) : otherTemplates.length === 0 ? (

                        /* =================================================
                         * EMPTY
                         * ================================================= */

                        <div
                            className="
                                mt-6
                                rounded-2xl
                                bg-slate-50
                                px-4
                                py-5
                                text-center
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    text-slate-500
                                "
                            >
                                No other templates available.
                            </p>

                        </div>

                    ) : (

                        /* =================================================
                         * TEMPLATE LIST
                         * ================================================= */

                        <div
                            className="
                                mt-6
                                space-y-4
                            "
                        >

                            {otherTemplates
                                .slice(0, 5)
                                .map(
                                    (
                                        template,
                                    ) => {

                                        const isChanging =
                                            changingTemplate ===
                                            template.id;


                                        return (

                                            <button
                                                key={
                                                    template.id
                                                }
                                                type="button"
                                                onClick={() =>
                                                    onTemplateChange(
                                                        template.id,
                                                    )
                                                }
                                                disabled={
                                                    changingTemplate !==
                                                    null
                                                }
                                                className="
                                                    group
                                                    w-full
                                                    overflow-hidden
                                                    rounded-2xl
                                                    border
                                                    border-slate-200
                                                    bg-slate-50
                                                    text-left
                                                    transition-all
                                                    duration-200
                                                    hover:-translate-y-0.5
                                                    hover:border-blue-300
                                                    hover:bg-blue-50
                                                    hover:shadow-md
                                                    disabled:cursor-not-allowed
                                                    disabled:opacity-60
                                                "
                                            >

                                                <div
                                                    className="
                                                        flex
                                                        gap-4
                                                        p-3
                                                    "
                                                >

                                                    {/* =================================================
                                                     * TEMPLATE IMAGE
                                                     * ================================================= */}

                                                    <div
                                                        className="
                                                            h-28
                                                            w-[86px]
                                                            shrink-0
                                                            overflow-hidden
                                                            rounded-xl
                                                            border
                                                            border-slate-200
                                                            bg-white
                                                            shadow-sm
                                                        "
                                                    >

                                                        <img
                                                            src={
                                                                template.image
                                                            }
                                                            alt={`${template.name} resume template`}
                                                            className="
                                                                h-full
                                                                w-full
                                                                object-cover
                                                                object-top
                                                                transition
                                                                duration-300
                                                                group-hover:scale-105
                                                            "
                                                        />

                                                    </div>


                                                    {/* =================================================
                                                     * TEMPLATE INFO
                                                     * ================================================= */}

                                                    <div
                                                        className="
                                                            min-w-0
                                                            flex-1
                                                            py-1
                                                        "
                                                    >

                                                        <h4
                                                            className="
                                                                font-bold
                                                                text-slate-900
                                                            "
                                                        >
                                                            {
                                                                template.name
                                                            }
                                                        </h4>


                                                        <p
                                                            className="
                                                                mt-1
                                                                line-clamp-3
                                                                text-xs
                                                                leading-5
                                                                text-slate-500
                                                            "
                                                        >
                                                            {
                                                                template.description
                                                            }
                                                        </p>


                                                        {/* =================================================
                                                         * ACTION
                                                         * ================================================= */}

                                                        <div
                                                            className="
                                                                mt-3
                                                            "
                                                        >

                                                            {isChanging ? (

                                                                <span
                                                                    className="
                                                                        inline-flex
                                                                        items-center
                                                                        gap-1.5
                                                                        text-xs
                                                                        font-bold
                                                                        text-blue-600
                                                                    "
                                                                >

                                                                    <Loader2
                                                                        size={13}
                                                                        className="
                                                                            animate-spin
                                                                        "
                                                                    />

                                                                    Applying...

                                                                </span>

                                                            ) : (

                                                                <span
                                                                    className="
                                                                        text-xs
                                                                        font-black
                                                                        text-blue-600
                                                                    "
                                                                >
                                                                    Use Template →
                                                                </span>

                                                            )}

                                                        </div>

                                                    </div>

                                                </div>

                                            </button>

                                        );

                                    },
                                )}

                        </div>

                    )}

                </div>

            </div>

        </aside>

    );

}


export default ResumePreviewSidebar;