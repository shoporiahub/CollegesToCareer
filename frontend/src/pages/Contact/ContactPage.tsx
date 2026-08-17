import { useState } from "react";
import { useForm } from "react-hook-form";
import {
    CheckCircle,
    Clock3,
    Mail,
    MapPin,
    Send,
} from "lucide-react";

import Layout from "../../components/layout/Layout";
import { createContact } from "../../services/contact.service";
import helpimage from "../../assets/helpimage.png";

type ContactFormData = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};

function ContactPage() {
    const [showToast, setShowToast] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        try {
            await createContact({
                full_name: data.fullName,
                email: data.email,
                subject: data.subject,
                message: data.message,
            });

            reset();
            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
            }, 4000);
        } catch (error) {
            console.error(error);
            alert("Failed to send message.");
        }
    };

    return (
        <Layout>

            {/* Success Toast */}

            {showToast && (
                <div className="fixed right-6 top-24 z-50">
                    <div className="flex items-start gap-4 rounded-2xl border border-emerald-200 bg-white px-6 py-5 shadow-2xl">

                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50">
                            <CheckCircle
                                size={22}
                                className="text-emerald-600"
                            />
                        </div>

                        <div>
                            <h3 className="font-semibold text-slate-900">
                                Message Sent
                            </h3>

                            <p className="mt-1 max-w-xs text-sm leading-6 text-slate-600">
                                Thanks for reaching out. We'll get back to you
                                as soon as possible.
                            </p>
                        </div>

                    </div>
                </div>
            )}

            {/* Hero */}

            {/* Hero */}

            {/* Hero */}

            {/* Hero */}

            {/* Hero */}

            <section className="relative bg-white py-8 lg:py-10">

                {/* Background Decorations */}

                <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />

                {/* Hero Image */}

                <div className="relative mx-auto w-[calc(100%-48px)]">

                    <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl">

                        <img
                            src={helpimage}
                            alt="ResumeAI Support"
                            className="h-[320px] w-full object-cover lg:h-[420px]"
                        />

                    </div>

                </div>

            </section>

            {/* Contact Content */}

            <section className="bg-slate-50 py-24">

                <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr]">

                    {/* Contact Information */}

                    <div className="flex flex-col justify-center">

                        <span className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                            Contact Support
                        </span>

                        <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
                            Let's start a conversation.
                        </h2>

                        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
                            Whether you're having trouble with your resume,
                            need assistance with your account, or simply want
                            to give us feedback, our team is here to help.
                        </p>

                        <div className="mt-10 space-y-7">

                            {/* Email */}

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-100">
                                    <Mail
                                        size={21}
                                        className="text-indigo-600"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Email
                                    </h3>

                                    <p className="mt-1 text-slate-600">
                                        support@collegetocareer.com
                                    </p>
                                </div>

                            </div>

                            {/* Location */}

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-100">
                                    <MapPin
                                        size={21}
                                        className="text-violet-600"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Location
                                    </h3>

                                    <p className="mt-1 text-slate-600">
                                        India
                                    </p>
                                </div>

                            </div>

                            {/* Support Hours */}

                            <div className="flex items-start gap-4">

                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-fuchsia-100">
                                    <Clock3
                                        size={21}
                                        className="text-fuchsia-600"
                                    />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-slate-900">
                                        Support Hours
                                    </h3>

                                    <p className="mt-1 text-slate-600">
                                        Monday - Saturday
                                    </p>

                                    <p className="text-slate-600">
                                        9:00 AM - 6:00 PM
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Form */}

                    <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">

                        <div>
                            <h2 className="text-3xl font-bold text-slate-900">
                                Send us a Message
                            </h2>

                            <p className="mt-3 text-slate-600">
                                Fill out the form and we'll get back to you.
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className="mt-8 space-y-6"
                        >

                            {/* Full Name */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Full Name
                                </label>

                                <input
                                    {...register("fullName", {
                                        required: "Full name is required",
                                    })}
                                    type="text"
                                    placeholder="Enter your full name"
                                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                                />

                                {errors.fullName && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.fullName.message}
                                    </p>
                                )}

                            </div>

                            {/* Email */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Email Address
                                </label>

                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                    })}
                                    type="email"
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                                />

                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}

                            </div>

                            {/* Subject */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Subject
                                </label>

                                <input
                                    {...register("subject", {
                                        required: "Subject is required",
                                    })}
                                    type="text"
                                    placeholder="How can we help?"
                                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                                />

                                {errors.subject && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.subject.message}
                                    </p>
                                )}

                            </div>

                            {/* Message */}

                            <div>

                                <label className="mb-2 block text-sm font-semibold text-slate-700">
                                    Message
                                </label>

                                <textarea
                                    {...register("message", {
                                        required: "Message is required",
                                    })}
                                    rows={6}
                                    placeholder="Tell us how we can help..."
                                    className="w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
                                />

                                {errors.message && (
                                    <p className="mt-2 text-sm text-red-500">
                                        {errors.message.message}
                                    </p>
                                )}

                            </div>

                            {/* Submit */}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-indigo-700 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                <Send size={18} />

                                {isSubmitting
                                    ? "Sending..."
                                    : "Send Message"}
                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </Layout>
    );
}

export default ContactPage;