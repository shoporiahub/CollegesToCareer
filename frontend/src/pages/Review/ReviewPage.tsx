import { useState } from "react";
import { Star } from "lucide-react";
import { useForm } from "react-hook-form";

import { createReview } from "../../services/review.service";

type ReviewFormData = {
    name: string;
    place: string;
    review: string;
};

function WriteReviewPage() {
    const [rating, setRating] = useState(5);

    const [showToast, setShowToast] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ReviewFormData>();

    const onSubmit = async (data: ReviewFormData) => {
        try {
            await createReview({
                ...data,
                rating,
            });

            setShowToast(true);

            reset();
            setRating(5);

            setTimeout(() => {
                setShowToast(false);
            }, 4000);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white py-24">

            {/* Success Toast */}

            {showToast && (
                <div className="fixed right-6 top-6 z-50 animate-in slide-in-from-top duration-300">
                    <div className="rounded-2xl border border-green-200 bg-white px-6 py-4 shadow-2xl">
                        <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg">
                                ✅
                            </div>

                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    Thank You!
                                </h3>

                                <p className="mt-1 text-sm text-slate-600">
                                    Your review has been submitted successfully.
                                    We appreciate your valuable feedback.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className="mx-auto max-w-3xl px-6">

                {/* Header */}

                <div className="text-center">

                    <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                        Customer Reviews
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold text-slate-900">
                        Share Your Experience
                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                        Thank you for choosing VivahCraft. Your review helps
                        thousands of families discover a better way to create
                        beautiful marriage biodatas.
                    </p>

                </div>

                {/* Form */}

                <div className="mt-14 rounded-3xl bg-white p-10 shadow-xl">

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-8"
                    >

                        {/* Name */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Full Name
                            </label>

                            <input
                                {...register("name", {
                                    required: "Name is required",
                                })}
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                            />

                            {errors.name && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.name.message}
                                </p>
                            )}

                        </div>

                        {/* Place */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                City / Place
                            </label>

                            <input
                                {...register("place", {
                                    required: "City is required",
                                })}
                                type="text"
                                placeholder="Delhi, Mumbai, Ahmedabad..."
                                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                            />

                            {errors.place && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.place.message}
                                </p>
                            )}

                        </div>

                        {/* Rating */}

                        <div>

                            <label className="mb-4 block text-sm font-semibold text-slate-700">
                                Rating
                            </label>

                            <div className="flex gap-2">

                                {[1, 2, 3, 4, 5].map((star) => (

                                    <button
                                        key={star}
                                        type="button"
                                        onClick={() => setRating(star)}
                                        className="transition hover:scale-110"
                                    >
                                        <Star
                                            size={34}
                                            className={
                                                star <= rating
                                                    ? "fill-yellow-400 text-yellow-400"
                                                    : "text-slate-300"
                                            }
                                        />
                                    </button>

                                ))}

                            </div>

                        </div>

                        {/* Review */}

                        <div>

                            <label className="mb-2 block text-sm font-semibold text-slate-700">
                                Your Review
                            </label>

                            <textarea
                                {...register("review", {
                                    required: "Review is required",
                                })}
                                rows={6}
                                placeholder="Tell us about your experience using VivahCraft..."
                                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600"
                            />

                            {errors.review && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.review.message}
                                </p>
                            )}

                        </div>

                        {/* Submit */}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="cursor-pointer w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
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