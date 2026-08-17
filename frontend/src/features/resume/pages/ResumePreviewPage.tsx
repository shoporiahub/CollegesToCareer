import {
    useEffect,
    useState,
} from "react";

import {
    Loader2,
} from "lucide-react";

import {
    Link,
    useNavigate,
    useParams,
} from "react-router-dom";


import {
    getTemplates,
} from "../../../services/template.service";

import {
    getResume,
    updateResume,
} from "../../../services/resume.service";

import {
    downloadResumePdf,
    getResumePreview,
} from "../../../services/render.service";

import type {
    Template,
} from "../../../services/template.service";


import ResumePreviewHeader from "../components/ResumePreviewHeader";

import ResumePreviewWorkspace from "../components/ResumePreviewWorkspace";


function ResumePreviewPage() {

    const {
        resumeId,
    } = useParams<{
        resumeId: string;
    }>();


    const navigate =
        useNavigate();


    const [html, setHtml] =
        useState<string>("");


    const [templates, setTemplates] =
        useState<Template[]>([]);


    const [
        selectedTemplateId,
        setSelectedTemplateId,
    ] = useState<string>("");


    const [loading, setLoading] =
        useState(true);


    const [
        templateLoading,
        setTemplateLoading,
    ] = useState(true);


    const [
        changingTemplate,
        setChangingTemplate,
    ] = useState<string | null>(null);


    const [downloading, setDownloading] =
        useState(false);


    const [error, setError] =
        useState<string | null>(null);


    /*
     * =========================================================
     * LOAD RESUME + TEMPLATES
     * =========================================================
     */

    useEffect(() => {

        if (!resumeId?.trim()) {

            setError(
                "Resume ID is missing.",
            );

            setLoading(false);

            return;

        }


        const loadPage =
            async () => {

                try {

                    setLoading(true);

                    setTemplateLoading(
                        true,
                    );

                    setError(null);


                    /*
                     * Get resume.
                     */

                    const resume =
                        await getResume(
                            resumeId,
                        );


                    /*
                     * Get available templates.
                     */

                    const templateData =
                        await getTemplates();


                    const activeTemplates =
                        templateData.filter(
                            (
                                template,
                            ) =>
                                template.is_active,
                        );


                    if (
                        activeTemplates.length ===
                        0
                    ) {

                        throw new Error(
                            "No active resume templates are available.",
                        );

                    }


                    setTemplates(
                        activeTemplates,
                    );


                    /*
                     * =================================================
                     * DETERMINE TEMPLATE
                     * =================================================
                     *
                     * Priority:
                     *
                     * 1. localStorage
                     * 2. resume.template_id
                     * 3. first active template
                     *
                     * We also make sure the ID is
                     * not empty and actually exists.
                     */

                    const storedTemplateId =
                        localStorage
                            .getItem(
                                "selected_template_id",
                            )
                            ?.trim() || "";


                    const resumeTemplateId =
                        typeof resume.template_id ===
                            "string"
                            ? resume.template_id.trim()
                            : "";


                    const templateExists =
                        (
                            templateId: string,
                        ) => {

                            if (
                                !templateId
                            ) {

                                return false;

                            }


                            return activeTemplates.some(
                                (
                                    template,
                                ) =>
                                    template.id ===
                                    templateId,
                            );

                        };


                    let finalTemplateId =
                        "";


                    /*
                     * 1. localStorage
                     */

                    if (
                        templateExists(
                            storedTemplateId,
                        )
                    ) {

                        finalTemplateId =
                            storedTemplateId;

                    }


                    /*
                     * 2. Resume template
                     */

                    else if (
                        templateExists(
                            resumeTemplateId,
                        )
                    ) {

                        finalTemplateId =
                            resumeTemplateId;

                    }


                    /*
                     * 3. First active template
                     */

                    else {

                        finalTemplateId =
                            activeTemplates[0]
                                .id;

                    }


                    /*
                     * Final safety check.
                     */

                    if (
                        !templateExists(
                            finalTemplateId,
                        )
                    ) {

                        throw new Error(
                            "A valid resume template could not be selected.",
                        );

                    }


                    /*
                     * Save selected template.
                     */

                    localStorage.setItem(
                        "selected_template_id",
                        finalTemplateId,
                    );


                    setSelectedTemplateId(
                        finalTemplateId,
                    );


                    /*
                     * Render resume.
                     */

                    const resumeHtml =
                        await getResumePreview(
                            resumeId,
                            finalTemplateId,
                        );


                    setHtml(
                        resumeHtml,
                    );

                } catch (err) {

                    console.error(
                        "Failed to load resume preview:",
                        err,
                    );


                    setError(
                        err instanceof Error
                            ? err.message
                            : "Unable to load your resume preview.",
                    );

                } finally {

                    setLoading(false);

                    setTemplateLoading(
                        false,
                    );

                }

            };


        loadPage();

    }, [resumeId]);


    /*
     * =========================================================
     * DOWNLOAD PDF
     * =========================================================
     */

    const handleDownload =
        async () => {

            const cleanResumeId =
                resumeId?.trim() || "";


            const cleanTemplateId =
                selectedTemplateId
                    ?.trim() || "";


            if (
                !cleanResumeId ||
                !cleanTemplateId
            ) {

                setError(
                    "Resume ID or template ID is missing.",
                );

                return;

            }


            try {

                setDownloading(
                    true,
                );

                setError(null);


                const blob =
                    await downloadResumePdf(
                        cleanResumeId,
                        cleanTemplateId,
                    );


                const url =
                    window.URL.createObjectURL(
                        blob,
                    );


                const link =
                    document.createElement(
                        "a",
                    );


                link.href =
                    url;


                link.download =
                    `resume_${cleanResumeId}.pdf`;


                document.body.appendChild(
                    link,
                );


                link.click();


                link.remove();


                window.URL.revokeObjectURL(
                    url,
                );

            } catch (err) {

                console.error(
                    "Failed to download resume:",
                    err,
                );


                setError(
                    "Unable to download the resume PDF.",
                );

            } finally {

                setDownloading(
                    false,
                );

            }

        };


    /*
     * =========================================================
     * PRINT
     * =========================================================
     */

    const handlePrint = () => {

        window.dispatchEvent(
            new CustomEvent(
                "resume-print",
            ),
        );

    };


    /*
     * =========================================================
     * CHANGE TEMPLATE
     * =========================================================
     */

    const handleTemplateChange =
        async (
            templateId: string,
        ) => {

            const cleanResumeId =
                resumeId?.trim() || "";


            const cleanTemplateId =
                templateId?.trim() || "";


            /*
             * Validate IDs.
             */

            if (
                !cleanResumeId ||
                !cleanTemplateId
            ) {

                setError(
                    "Resume ID or template ID is missing.",
                );

                return;

            }


            /*
             * Make sure template exists.
             */

            const templateExists =
                templates.some(
                    (
                        template,
                    ) =>
                        template.id ===
                        cleanTemplateId,
                );


            if (
                !templateExists
            ) {

                setError(
                    "The selected template is not available.",
                );

                return;

            }


            /*
             * Already selected.
             */

            if (
                cleanTemplateId ===
                selectedTemplateId
            ) {

                return;

            }


            try {

                setChangingTemplate(
                    cleanTemplateId,
                );

                setError(null);


                /*
                 * Update backend.
                 */

                await updateResume(
                    cleanResumeId,
                    {
                        template_id:
                            cleanTemplateId,
                    },
                );


                /*
                 * Save locally.
                 */

                localStorage.setItem(
                    "selected_template_id",
                    cleanTemplateId,
                );


                /*
                 * Update state.
                 */

                setSelectedTemplateId(
                    cleanTemplateId,
                );


                /*
                 * Render new template.
                 */

                const updatedHtml =
                    await getResumePreview(
                        cleanResumeId,
                        cleanTemplateId,
                    );


                setHtml(
                    updatedHtml,
                );

            } catch (err) {

                console.error(
                    "Failed to change template:",
                    err,
                );


                setError(
                    "Unable to change the resume template.",
                );

            } finally {

                setChangingTemplate(
                    null,
                );

            }

        };


    /*
     * =========================================================
     * LOADING
     * =========================================================
     */

    if (loading) {

        return (

            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    bg-slate-100
                "
            >

                <div className="text-center">

                    <Loader2
                        size={40}
                        className="
                            mx-auto
                            animate-spin
                            text-blue-600
                        "
                    />


                    <h2
                        className="
                            mt-5
                            text-xl
                            font-extrabold
                            text-slate-900
                        "
                    >
                        Preparing your resume
                    </h2>


                    <p
                        className="
                            mt-2
                            text-sm
                            text-slate-500
                        "
                    >
                        Your resume is being rendered.
                    </p>

                </div>

            </div>

        );

    }


    /*
     * =========================================================
     * ERROR
     * =========================================================
     */

    if (
        error &&
        !html
    ) {

        return (

            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    bg-slate-100
                    px-6
                "
            >

                <div
                    className="
                        max-w-md
                        text-center
                    "
                >

                    <div
                        className="
                            mx-auto
                            flex
                            h-16
                            w-16
                            items-center
                            justify-center
                            rounded-2xl
                            bg-red-50
                            text-2xl
                            font-bold
                            text-red-500
                        "
                    >
                        !
                    </div>


                    <h1
                        className="
                            mt-6
                            text-2xl
                            font-extrabold
                            text-slate-900
                        "
                    >
                        Preview unavailable
                    </h1>


                    <p
                        className="
                            mt-3
                            leading-7
                            text-slate-500
                        "
                    >
                        {error}
                    </p>


                    <Link
                        to="/resume-builder"
                        className="
                            mt-7
                            inline-flex
                            items-center
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-6
                            py-3
                            font-bold
                            text-white
                            transition
                            hover:bg-blue-700
                        "
                    >
                        Back to Resume Builder
                    </Link>

                </div>

            </div>

        );

    }


    /*
     * =========================================================
     * PAGE
     * =========================================================
     */

    return (

        <div
            className="
                min-h-screen
                bg-slate-100
            "
        >

            {/* =====================================================
             * HEADER
             * ===================================================== */}

            <ResumePreviewHeader
                onPrint={
                    handlePrint
                }
                onDownload={
                    handleDownload
                }
                downloading={
                    downloading
                }
                canExport={
                    Boolean(
                        html &&
                        selectedTemplateId,
                    )
                }
                resumeId={resumeId || ""}
            />


            {/* =====================================================
             * ERROR MESSAGE
             * ===================================================== */}

            {error && (

                <div
                    className="
                        relative
                        z-20
                        w-full
                        px-8
                        pt-5
                    "
                >

                    <div
                        className="
                            rounded-2xl
                            border
                            border-red-200
                            bg-red-50
                            px-5
                            py-3
                            text-sm
                            font-medium
                            text-red-700
                            shadow-sm
                        "
                    >
                        {error}
                    </div>

                </div>

            )}


            {/* =====================================================
             * WORKSPACE
             * ===================================================== */}

            <ResumePreviewWorkspace
                html={html}
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
                    handleTemplateChange
                }
            />

        </div>

    );

}


export default ResumePreviewPage;