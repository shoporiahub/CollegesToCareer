import {
    useEffect,
    useRef,
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
import ResumeAIButton from "../components/ResumeAIButton";
import ResumeAIBottomSheet from "../components/ResumeAIBottomSheet";


/* =========================================================
 * DEFAULT TEMPLATE
 * ========================================================= */

const DEFAULT_TEMPLATE_ID =
    "tpl_Og1bMn";


/* =========================================================
 * LOCAL STORAGE
 * ========================================================= */

const RESUME_DRAFT_KEY =
    "resume_builder_draft";


const RESUME_DRAFT_STEP_KEY =
    "resume_builder_draft_step";


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
     * MOBILE AI
     * ===================================================== */

    const [
        isAIOpen,
        setIsAIOpen,
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
        watch,
    } = methods;


    /* =====================================================
     * DRAFT RESTORE CONTROL
     * ===================================================== */

    const draftRestored =
        useRef(false);


    /* =====================================================
     * LOAD EXISTING RESUME
     * ===================================================== */

    useEffect(() => {

        if (!resumeId) {
            return;
        }


        const id =
            resumeId;


        async function loadResume() {

            try {

                setIsLoadingResume(
                    true,
                );

                setSubmitError(
                    null,
                );


                const resume =
                    await getResumeDetail(
                        id,
                    );


                /*
                 * Convert backend response
                 * into the exact shape expected
                 * by React Hook Form.
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
                 * Populate form.
                 */

                reset(
                    formValues,
                );


                /*
                 * Keep the selected template
                 * available for other pages.
                 */

                if (
                    formValues.template_id
                ) {

                    localStorage.setItem(
                        "selected_template_id",
                        formValues.template_id,
                    );

                }

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
     * RESTORE ANONYMOUS DRAFT
     * ===================================================== */

    useEffect(() => {

        /*
         * Existing resumes must always load
         * from the backend.
         */

        if (resumeId) {
            return;
        }


        /*
         * Prevent duplicate restore.
         */

        if (
            draftRestored.current
        ) {
            return;
        }


        draftRestored.current =
            true;


        try {

            const savedDraft =
                localStorage.getItem(
                    RESUME_DRAFT_KEY,
                );


            if (savedDraft) {

                const parsedDraft =
                    JSON.parse(
                        savedDraft,
                    );


                /*
                 * Merge the draft with
                 * default values so newly
                 * added fields don't break
                 * older drafts.
                 */

                reset({
                    ...defaultValues,
                    ...parsedDraft,
                });

            }


            /*
             * Restore the step the user
             * was previously on.
             */

            const savedStep =
                localStorage.getItem(
                    RESUME_DRAFT_STEP_KEY,
                );


            if (savedStep) {

                const parsedStep =
                    Number(
                        savedStep,
                    );


                if (
                    Number.isInteger(
                        parsedStep,
                    ) &&
                    parsedStep >= 0 &&
                    parsedStep <
                        RESUME_STEPS.length
                ) {

                    setCurrentStep(
                        parsedStep,
                    );

                }

            }

        } catch (error) {

            console.error(
                "Failed to restore resume draft:",
                error,
            );

        }

    }, [
        resumeId,
        reset,
    ]);


    /* =====================================================
     * AUTO SAVE FORM
     * ===================================================== */

    useEffect(() => {

        /*
         * Never save an existing resume
         * into the anonymous draft.
         */

        if (resumeId) {
            return;
        }


        const subscription =
            watch((values) => {

                try {

                    localStorage.setItem(
                        RESUME_DRAFT_KEY,
                        JSON.stringify(
                            values,
                        ),
                    );

                } catch (error) {

                    console.error(
                        "Failed to save resume draft:",
                        error,
                    );

                }

            });


        return () => {

            subscription.unsubscribe();

        };

    }, [
        resumeId,
        watch,
    ]);


    /* =====================================================
     * SAVE CURRENT STEP
     * ===================================================== */

    useEffect(() => {

        if (resumeId) {
            return;
        }


        try {

            localStorage.setItem(
                RESUME_DRAFT_STEP_KEY,
                String(
                    currentStep,
                ),
            );

        } catch (error) {

            console.error(
                "Failed to save resume step:",
                error,
            );

        }

    }, [
        currentStep,
        resumeId,
    ]);


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
                (previous) =>
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

            if (
                currentStep === 0
            ) {
                return;
            }


            setCurrentStep(
                (previous) =>
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
        async (
            index: number,
        ) => {

            /*
             * Don't allow users to jump
             * ahead.
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
     * TEMPLATE
     * ===================================================== */

    const getSelectedTemplateId =
        (
            formData?: ResumeFormValues,
        ): string => {

            /*
             * 1. Form value
             */

            const formTemplate =
                formData?.template_id
                    ?.trim() || "";


            /*
             * 2. Stored template
             */

            const storedTemplate =
                localStorage
                    .getItem(
                        "selected_template_id",
                    )
                    ?.trim() || "";


            /*
             * 3. Default
             */

            return (
                formTemplate ||
                storedTemplate ||
                DEFAULT_TEMPLATE_ID
            );

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
                    getSelectedTemplateId(
                        data,
                    );


                if (!templateId) {

                    setSubmitError(
                        "Please select a resume template before continuing.",
                    );

                    return;

                }


                /*
                 * Final resume data.
                 */

                const resumeData:
                    ResumeFormValues = {

                    ...data,

                    template_id:
                        templateId,

                };


                /*
                 * Always save the latest
                 * version before authentication.
                 */

                if (!resumeId) {

                    localStorage.setItem(
                        RESUME_DRAFT_KEY,
                        JSON.stringify(
                            resumeData,
                        ),
                    );

                }


                /* =================================================
                 * AUTHENTICATION CHECK
                 * ================================================= */

                const token =
                    localStorage.getItem(
                        "access_token",
                    );


                /*
                 * NEW USER / LOGGED OUT USER
                 *
                 * Do NOT call POST /resumes.
                 *
                 * The API would return 401 and
                 * the Axios interceptor would
                 * redirect to login.
                 */

                if (
                    !token &&
                    !resumeId
                ) {

                    navigate(
                        "/login?redirect=/resume-builder",
                    );

                    return;

                }


                /* =================================================
                 * UPDATE EXISTING RESUME
                 * ================================================= */

                if (resumeId) {

                    const updatedResume =
                        await updateResume(
                            resumeId,
                            resumeData,
                        );


                    /*
                     * Keep selected template
                     * synchronized.
                     */

                    localStorage.setItem(
                        "selected_template_id",
                        templateId,
                    );


                    navigate(
                        `/resume-preview/${updatedResume.id}`,
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


                /*
                 * Resume is now permanently
                 * stored in the database.
                 *
                 * Remove anonymous draft.
                 */

                localStorage.removeItem(
                    RESUME_DRAFT_KEY,
                );

                localStorage.removeItem(
                    RESUME_DRAFT_STEP_KEY,
                );


                /*
                 * Keep selected template.
                 */

                localStorage.setItem(
                    "selected_template_id",
                    templateId,
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
     * LOADING EXISTING RESUME
     * ===================================================== */

    if (
        resumeId &&
        isLoadingResume
    ) {

        return (

            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    bg-slate-50
                    px-6
                "
            >

                <div className="text-center">

                    <div
                        className="
                            mx-auto
                            h-10
                            w-10
                            animate-spin
                            rounded-full
                            border-4
                            border-slate-200
                            border-t-blue-600
                        "
                    />

                    <p
                        className="
                            mt-4
                            text-sm
                            font-semibold
                            text-slate-600
                        "
                    >
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

        <div
            className="
                min-h-screen
                overflow-x-hidden
                bg-slate-50
            "
        >

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
                        w-full
                        max-w-[1600px]
                        flex-col
                        gap-6
                        px-4
                        py-6
                        sm:px-6
                        sm:py-8
                        lg:flex-row
                        lg:gap-8
                    "
                >

                    {/* ================================================= */}
                    {/* LEFT - STEPS */}
                    {/* ================================================= */}

                    <div
                        className="
                            w-full
                            lg:w-[220px]
                            lg:shrink-0
                        "
                    >

                        <ResumeBuilderSteps
                            currentStep={
                                currentStep
                            }
                            onStepClick={
                                handleStepClick
                            }
                        />

                    </div>


                    {/* ================================================= */}
                    {/* CENTER - FORM */}
                    {/* ================================================= */}

                    <div
                        className="
                            min-w-0
                            w-full
                            flex-1
                        "
                    >

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

                    </div>


                    {/* ================================================= */}
                    {/* DESKTOP AI */}
                    {/* ================================================= */}

                    <aside
                        className="
                            hidden
                            w-full
                            shrink-0
                            lg:block
                            lg:w-[360px]
                            xl:sticky
                            xl:top-24
                            xl:self-start
                        "
                    >

                        <ResumeBuilderAI />

                    </aside>

                </div>


                {/* ================================================= */}
                {/* MOBILE AI BUTTON */}
                {/* ================================================= */}

                <ResumeAIButton
                    onClick={() =>
                        setIsAIOpen(true)
                    }
                />


                {/* ================================================= */}
                {/* MOBILE AI BOTTOM SHEET */}
                {/* ================================================= */}

                <ResumeAIBottomSheet
                    isOpen={
                        isAIOpen
                    }
                    onClose={() =>
                        setIsAIOpen(false)
                    }
                />

            </FormProvider>

        </div>

    );

}


export default ResumeBuilderPage;