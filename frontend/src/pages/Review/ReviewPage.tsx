import {
    useState,
} from "react";

import {
    Star,
} from "lucide-react";

import {
    useForm,
} from "react-hook-form";

import {
    createReview,
} from "../../services/review.service";


type ReviewFormData = {
    name: string;
    place: string;
    review: string;
};


function WriteReviewPage() {

    const [
        rating,
        setRating,
    ] = useState(5);


    const [
        showToast,
        setShowToast,
    ] = useState(false);


    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<ReviewFormData>();


    /* =========================================================
     * SUBMIT REVIEW
     * ========================================================= */

    const onSubmit = async (
        data: ReviewFormData,
    ) => {

        try {

            await createReview({
                ...data,
                rating,
            });


            setShowToast(
                true,
            );


            reset();

            setRating(5);


            setTimeout(() => {

                setShowToast(
                    false,
                );

            }, 4000);

        } catch (error) {

            console.error(
                error,
            );

        }

    };


    return (

        <section
            className="
                min-h-screen
                w-full
                overflow-hidden
                bg-gradient-to-br
                from-slate-50
                via-blue-50
                to-white
                py-14
                sm:py-20
                lg:py-24
            "
        >

            {/* ================================================= */}
            {/* SUCCESS TOAST */}
            {/* ================================================= */}

            {showToast && (

                <div
                    className="
                        fixed
                        right-4
                        top-20
                        z-50
                        max-w-[calc(100vw-32px)]
                        animate-in
                        slide-in-from-top
                        duration-300
                        sm:right-6
                        sm:top-6
                    "
                >

                    <div
                        className="
                            rounded-2xl
                            border
                            border-emerald-200
                            bg-white
                            px-4
                            py-4
                            shadow-2xl
                            sm:px-6
                        "
                    >

                        <div
                            className="
                                flex
                                items-start
                                gap-3
                            "
                        >

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    shrink-0
                                    items-center
                                    justify-center
                                    rounded-full
                                    bg-emerald-100
                                    text-lg
                                "
                            >
                                ✓
                            </div>


                            <div>

                                <h3
                                    className="
                                        font-semibold
                                        text-slate-900
                                    "
                                >
                                    Thank You!
                                </h3>


                                <p
                                    className="
                                        mt-1
                                        max-w-xs
                                        text-sm
                                        leading-6
                                        text-slate-600
                                    "
                                >
                                    Your review has been submitted
                                    successfully. We appreciate your
                                    valuable feedback.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            )}


            {/* ================================================= */}
            {/* CONTAINER */}
            {/* ================================================= */}

            <div
                className="
                    mx-auto
                    w-full
                    max-w-3xl
                    px-4
                    sm:px-6
                "
            >

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <div
                    className="
                        text-center
                    "
                >

                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-blue-100
                            px-4
                            py-2
                            text-xs
                            font-semibold
                            text-blue-700
                            sm:text-sm
                        "
                    >
                        Share Your Feedback
                    </span>


                    <h1
                        className="
                            mt-5
                            text-3xl
                            font-extrabold
                            tracking-tight
                            text-slate-900
                            sm:mt-6
                            sm:text-5xl
                        "
                    >
                        Share Your Experience
                    </h1>


                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-base
                            leading-7
                            text-slate-600
                            sm:mt-6
                            sm:text-lg
                            sm:leading-8
                        "
                    >
                        Have you used College to Career to build
                        your resume? Share your experience and
                        help other students and graduates discover
                        a better way to prepare for their careers.
                    </p>

                </div>


                {/* ================================================= */}
                {/* FORM CARD */}
                {/* ================================================= */}

                <div
                    className="
                        mt-10
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        p-5
                        shadow-xl
                        sm:mt-14
                        sm:rounded-3xl
                        sm:p-8
                        lg:p-10
                    "
                >

                    <form
                        onSubmit={
                            handleSubmit(
                                onSubmit,
                            )
                        }
                        className="
                            space-y-6
                            sm:space-y-8
                        "
                    >

                        {/* ================================================= */}
                        {/* NAME */}
                        {/* ================================================= */}

                        <div>

                            <label
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Full Name
                            </label>


                            <input
                                {...register(
                                    "name",
                                    {
                                        required:
                                            "Name is required",
                                    },
                                )}
                                type="text"
                                placeholder="Enter your full name"
                                className="
                                    block
                                    w-full
                                    min-w-0
                                    rounded-xl
                                    border
                                    border-slate-300
                                    bg-white
                                    px-4
                                    py-3.5
                                    text-slate-900
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-blue-600
                                    focus:ring-4
                                    focus:ring-blue-100
                                "
                            />


                            {errors.name && (

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        text-red-500
                                    "
                                >
                                    {
                                        errors
                                            .name
                                            .message
                                    }
                                </p>

                            )}

                        </div>


                        {/* ================================================= */}
                        {/* CITY */}
                        {/* ================================================= */}

                        <div>

                            <label
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                City / Location
                            </label>


                            <input
                                {...register(
                                    "place",
                                    {
                                        required:
                                            "City is required",
                                    },
                                )}
                                type="text"
                                placeholder="Delhi, Mumbai, Bengaluru..."
                                className="
                                    block
                                    w-full
                                    min-w-0
                                    rounded-xl
                                    border
                                    border-slate-300
                                    bg-white
                                    px-4
                                    py-3.5
                                    text-slate-900
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-blue-600
                                    focus:ring-4
                                    focus:ring-blue-100
                                "
                            />


                            {errors.place && (

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        text-red-500
                                    "
                                >
                                    {
                                        errors
                                            .place
                                            .message
                                    }
                                </p>

                            )}

                        </div>


                        {/* ================================================= */}
                        {/* RATING */}
                        {/* ================================================= */}

                        <div>

                            <label
                                className="
                                    mb-4
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                How would you rate College to Career?
                            </label>


                            <div
                                className="
                                    flex
                                    gap-1
                                    sm:gap-2
                                "
                            >

                                {[1, 2, 3, 4, 5].map(
                                    (star) => (

                                        <button
                                            key={
                                                star
                                            }
                                            type="button"
                                            aria-label={`Rate ${star} out of 5`}
                                            onClick={() =>
                                                setRating(
                                                    star,
                                                )
                                            }
                                            className="
                                                rounded-lg
                                                p-1
                                                transition
                                                hover:scale-110
                                                focus:outline-none
                                                focus:ring-2
                                                focus:ring-blue-200
                                            "
                                        >

                                            <Star
                                                size={
                                                    30
                                                }
                                                className={
                                                    star <=
                                                        rating
                                                        ? "fill-yellow-400 text-yellow-400"
                                                        : "text-slate-300"
                                                }
                                            />

                                        </button>

                                    ),
                                )}

                            </div>


                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-slate-500
                                "
                            >
                                {rating} out of 5
                            </p>

                        </div>


                        {/* ================================================= */}
                        {/* REVIEW */}
                        {/* ================================================= */}

                        <div>

                            <label
                                className="
                                    mb-2
                                    block
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Your Review
                            </label>


                            <textarea
                                {...register(
                                    "review",
                                    {
                                        required:
                                            "Review is required",
                                    },
                                )}
                                rows={6}
                                placeholder="Tell us about your experience using College to Career..."
                                className="
                                    block
                                    w-full
                                    min-w-0
                                    resize-none
                                    rounded-xl
                                    border
                                    border-slate-300
                                    bg-white
                                    px-4
                                    py-3.5
                                    text-slate-900
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-blue-600
                                    focus:ring-4
                                    focus:ring-blue-100
                                "
                            />


                            {errors.review && (

                                <p
                                    className="
                                        mt-2
                                        text-sm
                                        text-red-500
                                    "
                                >
                                    {
                                        errors
                                            .review
                                            .message
                                    }
                                </p>

                            )}

                        </div>


                        {/* ================================================= */}
                        {/* SUBMIT */}
                        {/* ================================================= */}

                        <button
                            type="submit"
                            disabled={
                                isSubmitting
                            }
                            className="
                                flex
                                w-full
                                cursor-pointer
                                items-center
                                justify-center
                                rounded-xl
                                bg-blue-600
                                py-3.5
                                text-base
                                font-semibold
                                text-white
                                shadow-sm
                                transition
                                hover:bg-blue-700
                                hover:shadow-md
                                disabled:cursor-not-allowed
                                disabled:opacity-60
                                sm:py-4
                                sm:text-lg
                            "
                        >

                            {isSubmitting
                                ? "Submitting..."
                                : "Submit Review"}

                        </button>

                    </form>

                </div>

            </div>

        </section>
    );
}


export default WriteReviewPage;