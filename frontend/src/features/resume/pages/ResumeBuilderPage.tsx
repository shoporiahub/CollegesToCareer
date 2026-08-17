import {
    useEffect,
    useState,
} from "react";

import {
    FormProvider,
    useForm,
} from "react-hook-form";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    RESUME_STEPS,
} from "../constants/resumeSteps";

import type {
    ResumeFormValues,
} from "../types/resume.types";

import {
    createResume,
    getResumeDetail,
    updateResume,
} from "../../../services/resume.service";

import ResumeBuilderHeader from "../components/ResumeBuilderHeader";

import ResumeBuilderSteps from "../components/ResumeBuilderSteps";

import ResumeBuilderForm from "../components/ResumeBuilderForm";

import ResumeBuilderAI from "../components/ResumeBuilderAI";


/* =========================================================
 * DEFAULT TEMPLATE
 * ========================================================= */

const DEFAULT_TEMPLATE_ID =
    "tpl_Og1bMn";


/* =========================================================
 * DEFAULT VALUES
 * ========================================================= */

const defaultValues: ResumeFormValues = {

    title: "My Resume",

    first_name: "",
    last_name: "",

    email: "",
    phone: "",

    headline: "",
    summary: "",

    address: "",
    city: "",
    state: "",
    country: "",
    pincode: "",

    linkedin_url: "",
    github_url: "",
    portfolio_url: "",
    website_url: "",

    profile_photo: "",

    template_id:
        DEFAULT_TEMPLATE_ID,

    theme: "blue",

    font: "inter",

    is_default: false,

    experiences: [],

    educations: [],

    projects: [],

    skills: [],

    certifications: [],

    languages: [],

    achievements: [],
};


/* =========================================================
 * COMPONENT
 * ========================================================= */

function ResumeBuilderPage() {

    const navigate =
        useNavigate();


    const {
        resumeId,
    } = useParams();


    /* =====================================================
     * STEP
     * ===================================================== */

    const [
        currentStep,
        setCurrentStep,
    ] = useState(0);


    /* =====================================================
     * AI
     * ===================================================== */

    const [
        aiPrompt,
        setAiPrompt,
    ] = useState("");


    const [
        aiLoading,
        setAiLoading,
    ] = useState(false);


    /* =====================================================
     * SUBMIT
     * ===================================================== */

    const [
        isSubmitting,
        setIsSubmitting,
    ] = useState(false);


    const [
        submitError,
        setSubmitError,
    ] = useState<string | null>(
        null,
    );


    /* =====================================================
     * LOAD
     * ===================================================== */

    const [
        isLoadingResume,
        setIsLoadingResume,
    ] = useState(false);


    /* =====================================================
     * FORM
     * ===================================================== */

    const methods =
        useForm<ResumeFormValues>({
            defaultValues,
            mode: "onBlur",
        });


    const {
        handleSubmit,
        trigger,
        reset,
    } = methods;


    /* =====================================================
     * LOAD EXISTING RESUME
     * ===================================================== */

    useEffect(() => {

        if (!resumeId) {
            return;
        }


        const id = resumeId;


        async function loadResume() {

            try {

                setIsLoadingResume(
                    true,
                );

                setSubmitError(
                    null,
                );


                console.log(
                    "Loading resume:",
                    id,
                );


                const resume =
                    await getResumeDetail(
                        id,
                    );


                console.log(
                    "Resume loaded:",
                    resume,
                );


                /*
                 * Convert backend response
                 * into the exact shape expected
                 * by React Hook Form.
                 *
                 * Backend may return null for
                 * optional fields.
                 *
                 * Form expects empty strings.
                 */

                const formValues:
                    ResumeFormValues = {

                    title:
                        resume.title ??
                        "My Resume",


                    first_name:
                        resume.first_name ??
                        "",


                    last_name:
                        resume.last_name ??
                        "",


                    email:
                        resume.email ??
                        "",


                    phone:
                        resume.phone ??
                        "",


                    headline:
                        resume.headline ??
                        "",


                    summary:
                        resume.summary ??
                        "",


                    address:
                        resume.address ??
                        "",


                    city:
                        resume.city ??
                        "",


                    state:
                        resume.state ??
                        "",


                    country:
                        resume.country ??
                        "",


                    pincode:
                        resume.pincode ??
                        "",


                    linkedin_url:
                        resume.linkedin_url ??
                        "",


                    github_url:
                        resume.github_url ??
                        "",


                    portfolio_url:
                        resume.portfolio_url ??
                        "",


                    website_url:
                        resume.website_url ??
                        "",


                    profile_photo:
                        resume.profile_photo ??
                        "",


                    template_id:
                        resume.template_id ??
                        DEFAULT_TEMPLATE_ID,


                    theme:
                        resume.theme ??
                        "blue",


                    font:
                        resume.font ??
                        "inter",


                    is_default:
                        resume.is_default ??
                        false,


                    experiences:
                        resume.experiences ??
                        [],


                    educations:
                        resume.educations ??
                        [],


                    projects:
                        resume.projects ??
                        [],


                    skills:
                        resume.skills ??
                        [],


                    certifications:
                        resume.certifications ??
                        [],


                    languages:
                        resume.languages ??
                        [],


                    achievements:
                        resume.achievements ??
                        [],

                };


                /*
                 * Keep the existing template
                 * as the selected template.
                 */

                if (
                    formValues.template_id
                ) {

                    localStorage.setItem(
                        "selected_template_id",
                        formValues.template_id,
                    );

                }


                /*
                 * Populate the entire form.
                 */

                reset(
                    formValues,
                );


                console.log(
                    "Resume form populated.",
                );

            } catch (error) {

                console.error(
                    "Failed to load resume:",
                    error,
                );


                setSubmitError(
                    "We couldn't load this resume. Please try again.",
                );

            } finally {

                setIsLoadingResume(
                    false,
                );

            }

        }


        loadResume();

    }, [
        resumeId,
        reset,
    ]);


    /* =====================================================
     * GET SELECTED TEMPLATE
     * ===================================================== */

    const getSelectedTemplateId =
        (): string => {

            /*
             * When editing, the template
             * comes from the loaded resume.
             *
             * The form already contains it,
             * so we don't need to replace it
             * with localStorage.
             */

            if (resumeId) {

                const currentValues =
                    methods.getValues(
                        "template_id",
                    );


                if (
                    currentValues?.trim()
                ) {

                    return currentValues.trim();

                }

            }


            /*
             * New resume:
             *
             * 1. localStorage
             * 2. default template
             */

            const storedTemplateId =
                localStorage
                    .getItem(
                        "selected_template_id",
                    )
                    ?.trim() || "";


            return (
                storedTemplateId ||
                DEFAULT_TEMPLATE_ID
            ).trim();

        };


    /* =====================================================
     * NEXT
     * ===================================================== */

    const handleNext =
        async () => {

            const isValid =
                await trigger();


            if (!isValid) {
                return;
            }


            const isLastStep =
                currentStep ===
                RESUME_STEPS.length - 1;


            if (isLastStep) {
                return;
            }


            setCurrentStep(
                (
                    previous,
                ) =>
                    previous + 1,
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        };


    /* =====================================================
     * PREVIOUS
     * ===================================================== */

    const handlePrevious =
        () => {

            const isFirstStep =
                currentStep === 0;


            if (isFirstStep) {
                return;
            }


            setCurrentStep(
                (
                    previous,
                ) =>
                    previous - 1,
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        };


    /* =====================================================
     * STEP CLICK
     * ===================================================== */

    const handleStepClick =
        (
            index: number,
        ) => {

            /*
             * Don't allow jumping
             * to future steps.
             */

            if (
                index >
                currentStep
            ) {

                return;

            }


            setCurrentStep(
                index,
            );


            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        };


    /* =====================================================
     * SUBMIT
     * ===================================================== */

    const onSubmit =
        async (
            data: ResumeFormValues,
        ) => {

            try {

                setSubmitError(
                    null,
                );

                setIsSubmitting(
                    true,
                );


                /*
                 * Resolve template.
                 */

                const templateId =
                    getSelectedTemplateId();


                console.log(
                    "Selected template ID:",
                    templateId,
                );


                /*
                 * Safety check.
                 */

                if (!templateId) {

                    setSubmitError(
                        "Please select a resume template before continuing.",
                    );

                    return;

                }


                /*
                 * Build final form data.
                 *
                 * This is especially important
                 * for new resumes because the
                 * template comes from localStorage.
                 */

                const resumeData:
                    ResumeFormValues = {

                    ...data,

                    template_id:
                        templateId,

                };


                /*
                 * Keep selected template
                 * in localStorage.
                 */

                localStorage.setItem(
                    "selected_template_id",
                    templateId,
                );


                console.log(
                    resumeId
                        ? "Updating resume:"
                        : "Creating resume:",
                    resumeData,
                );


                /* =================================================
                 * EDIT EXISTING RESUME
                 * ================================================= */

                if (resumeId) {

                    const resume =
                        await updateResume(
                            resumeId,
                            resumeData,
                        );


                    console.log(
                        "Resume updated:",
                        resume,
                    );


                    navigate(
                        `/resume-preview/${resumeId}`,
                    );


                    return;
                }


                /* =================================================
                 * CREATE NEW RESUME
                 * ================================================= */

                const resume =
                    await createResume(
                        resumeData,
                    );


                console.log(
                    "Resume created:",
                    resume,
                );


                navigate(
                    `/resume-preview/${resume.id}`,
                );

            } catch (error) {

                console.error(
                    resumeId
                        ? "Failed to update resume:"
                        : "Failed to create resume:",
                    error,
                );


                setSubmitError(
                    resumeId
                        ? "We couldn't update your resume. Please try again."
                        : "We couldn't create your resume. Please check your information and try again.",
                );

            } finally {

                setIsSubmitting(
                    false,
                );

            }

        };


    /* =====================================================
     * AI
     * ===================================================== */

    const handleAskAI =
        async () => {

            if (
                !aiPrompt.trim()
            ) {

                return;

            }


            try {

                setAiLoading(
                    true,
                );


                /*
                 * AI integration will
                 * be connected here.
                 */

                console.log(
                    "AI request:",
                    aiPrompt,
                );

            } finally {

                setAiLoading(
                    false,
                );

            }

        };


    /* =====================================================
     * LOADING EXISTING RESUME
     * ===================================================== */

    if (
        resumeId &&
        isLoadingResume
    ) {

        return (

            <div className="flex min-h-screen items-center justify-center bg-slate-50">

                <div className="text-center">

                    <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

                    <p className="mt-4 text-sm font-semibold text-slate-600">

                        Loading your resume...

                    </p>

                </div>

            </div>

        );

    }


    /* =====================================================
     * RENDER
     * ===================================================== */

    return (

        <div className="min-h-screen bg-slate-50">


            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <ResumeBuilderHeader
                isSubmitting={
                    isSubmitting
                }
            />


            {/* ================================================= */}
            {/* FORM PROVIDER */}
            {/* ================================================= */}

            <FormProvider
                {...methods}
            >

                <div
                    className="
                        mx-auto
                        flex
                        max-w-[1600px]
                        gap-8
                        px-6
                        py-8
                    "
                >


                    {/* ================================================= */}
                    {/* LEFT */}
                    {/* ================================================= */}

                    <ResumeBuilderSteps
                        currentStep={
                            currentStep
                        }
                        onStepClick={
                            handleStepClick
                        }
                    />


                    {/* ================================================= */}
                    {/* CENTER */}
                    {/* ================================================= */}

                    <ResumeBuilderForm
                        currentStep={
                            currentStep
                        }
                        isSubmitting={
                            isSubmitting
                        }
                        submitError={
                            submitError
                        }
                        onNext={
                            handleNext
                        }
                        onPrevious={
                            handlePrevious
                        }
                        onSubmit={
                            handleSubmit(
                                onSubmit,
                            )
                        }
                    />


                    {/* ================================================= */}
                    {/* RIGHT */}
                    {/* ================================================= */}

                    <ResumeBuilderAI
                        prompt={
                            aiPrompt
                        }
                        onPromptChange={
                            setAiPrompt
                        }
                        onGenerate={
                            handleAskAI
                        }
                        loading={
                            aiLoading
                        }
                    />

                </div>

            </FormProvider>

        </div>

    );

}


export default ResumeBuilderPage;