import {
    useState,
} from "react";

import {
    useForm,
} from "react-hook-form";

import {
    CheckCircle,
    Clock3,
    Mail,
    MapPin,
    Send,
} from "lucide-react";

import Layout from "../../components/layout/Layout";

import {
    createContact,
} from "../../services/contact.service";

import helpimage from "../../assets/helpimage.png";


type ContactFormData = {
    fullName: string;
    email: string;
    subject: string;
    message: string;
};


function ContactPage() {

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
    } = useForm<ContactFormData>();


    /* =========================================================
     * SUBMIT
     * ========================================================= */

    const onSubmit = async (
        data: ContactFormData,
    ) => {

        try {

            await createContact({
                full_name:
                    data.fullName,

                email:
                    data.email,

                subject:
                    data.subject,

                message:
                    data.message,
            });


            reset();

            setShowToast(
                true,
            );


            setTimeout(() => {

                setShowToast(
                    false,
                );

            }, 4000);

        } catch (error) {

            console.error(
                error,
            );

            alert(
                "Failed to send message.",
            );

        }

    };


    return (

        <Layout>

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
                        sm:right-6
                        sm:top-24
                    "
                >

                    <div
                        className="
                            flex
                            items-start
                            gap-3
                            rounded-2xl
                            border
                            border-emerald-200
                            bg-white
                            px-4
                            py-4
                            shadow-2xl
                            sm:gap-4
                            sm:px-6
                            sm:py-5
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
                                bg-emerald-50
                            "
                        >

                            <CheckCircle
                                size={22}
                                className="text-emerald-600"
                            />

                        </div>


                        <div>

                            <h3
                                className="
                                    font-semibold
                                    text-slate-900
                                "
                            >
                                Message Sent
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
                                Thanks for reaching out.
                                We'll get back to you as
                                soon as possible.
                            </p>

                        </div>

                    </div>

                </div>

            )}


            {/* ================================================= */}
            {/* HERO */}
            {/* ================================================= */}

            <section
                className="
                    relative
                    w-full
                    overflow-hidden
                    bg-white
                    py-6
                    sm:py-8
                    lg:py-10
                "
            >

                {/* Background Decorations */}

                <div
                    className="
                        pointer-events-none
                        absolute
                        -left-40
                        -top-40
                        h-80
                        w-80
                        rounded-full
                        bg-indigo-100/60
                        blur-3xl
                    "
                />


                <div
                    className="
                        pointer-events-none
                        absolute
                        -bottom-40
                        -right-40
                        h-80
                        w-80
                        rounded-full
                        bg-violet-100/60
                        blur-3xl
                    "
                />


                {/* Image */}

                <div
                    className="
                        relative
                        mx-auto
                        w-full
                        max-w-7xl
                        px-4
                        sm:px-6
                        lg:px-8
                    "
                >

                    <div
                        className="
                            w-full
                            overflow-hidden
                            rounded-2xl
                            border
                            border-slate-200
                            shadow-lg
                            sm:rounded-3xl
                            sm:shadow-xl
                        "
                    >

                        <img
                            src={helpimage}
                            alt="College to Career Support"
                            className="
                                block
                                h-[220px]
                                w-full
                                object-cover
                                object-center
                                sm:h-[280px]
                                md:h-[340px]
                                lg:h-[420px]
                            "
                        />

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* CONTACT CONTENT */}
            {/* ================================================= */}

            <section
                className="
                    w-full
                    overflow-hidden
                    bg-slate-50
                    py-16
                    sm:py-20
                    lg:py-24
                "
            >

                <div
                    className="
                        mx-auto
                        grid
                        w-full
                        max-w-7xl
                        min-w-0
                        gap-10
                        px-4
                        sm:px-6
                        lg:grid-cols-[0.85fr_1.15fr]
                        lg:gap-12
                        lg:px-8
                    "
                >

                    {/* ================================================= */}
                    {/* CONTACT INFORMATION */}
                    {/* ================================================= */}

                    <div
                        className="
                            flex
                            min-w-0
                            flex-col
                            justify-center
                        "
                    >

                        <span
                            className="
                                text-sm
                                font-semibold
                                uppercase
                                tracking-wider
                                text-indigo-600
                            "
                        >
                            Contact Support
                        </span>


                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-bold
                                tracking-tight
                                text-slate-900
                                sm:text-4xl
                            "
                        >
                            Let's start a conversation.
                        </h2>


                        <p
                            className="
                                mt-5
                                max-w-lg
                                text-base
                                leading-7
                                text-slate-600
                                sm:mt-6
                                sm:text-lg
                                sm:leading-8
                            "
                        >
                            Whether you're having trouble
                            with your resume, need assistance
                            with your account, or simply want
                            to give us feedback, our team is
                            here to help.
                        </p>


                        {/* Contact Details */}

                        <div
                            className="
                                mt-8
                                space-y-6
                                sm:mt-10
                                sm:space-y-7
                            "
                        >

                            {/* Email */}

                            <div
                                className="
                                    flex
                                    min-w-0
                                    items-start
                                    gap-3
                                    sm:gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-indigo-100
                                        sm:h-12
                                        sm:w-12
                                    "
                                >

                                    <Mail
                                        size={21}
                                        className="text-indigo-600"
                                    />

                                </div>


                                <div
                                    className="
                                        min-w-0
                                    "
                                >

                                    <h3
                                        className="
                                            font-semibold
                                            text-slate-900
                                        "
                                    >
                                        Email
                                    </h3>


                                    <p
                                        className="
                                            mt-1
                                            break-all
                                            text-sm
                                            text-slate-600
                                            sm:text-base
                                        "
                                    >
                                        support@collegetocareer.com
                                    </p>

                                </div>

                            </div>


                            {/* Location */}

                            <div
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    sm:gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-violet-100
                                        sm:h-12
                                        sm:w-12
                                    "
                                >

                                    <MapPin
                                        size={21}
                                        className="text-violet-600"
                                    />

                                </div>


                                <div>

                                    <h3
                                        className="
                                            font-semibold
                                            text-slate-900
                                        "
                                    >
                                        Location
                                    </h3>


                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-slate-600
                                            sm:text-base
                                        "
                                    >
                                        India
                                    </p>

                                </div>

                            </div>


                            {/* Support Hours */}

                            <div
                                className="
                                    flex
                                    items-start
                                    gap-3
                                    sm:gap-4
                                "
                            >

                                <div
                                    className="
                                        flex
                                        h-11
                                        w-11
                                        shrink-0
                                        items-center
                                        justify-center
                                        rounded-xl
                                        bg-fuchsia-100
                                        sm:h-12
                                        sm:w-12
                                    "
                                >

                                    <Clock3
                                        size={21}
                                        className="text-fuchsia-600"
                                    />

                                </div>


                                <div>

                                    <h3
                                        className="
                                            font-semibold
                                            text-slate-900
                                        "
                                    >
                                        Support Hours
                                    </h3>


                                    <p
                                        className="
                                            mt-1
                                            text-sm
                                            text-slate-600
                                            sm:text-base
                                        "
                                    >
                                        Monday - Saturday
                                    </p>


                                    <p
                                        className="
                                            text-sm
                                            text-slate-600
                                            sm:text-base
                                        "
                                    >
                                        9:00 AM - 6:00 PM
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>


                    {/* ================================================= */}
                    {/* FORM */}
                    {/* ================================================= */}

                    <div
                        className="
                            min-w-0
                            rounded-2xl
                            border
                            border-slate-200
                            bg-white
                            p-5
                            shadow-sm
                            sm:rounded-3xl
                            sm:p-8
                            lg:p-10
                        "
                    >

                        <div>

                            <h2
                                className="
                                    text-2xl
                                    font-bold
                                    text-slate-900
                                    sm:text-3xl
                                "
                            >
                                Send us a Message
                            </h2>


                            <p
                                className="
                                    mt-2
                                    text-sm
                                    text-slate-600
                                    sm:mt-3
                                    sm:text-base
                                "
                            >
                                Fill out the form and we'll
                                get back to you.
                            </p>

                        </div>


                        <form
                            onSubmit={
                                handleSubmit(
                                    onSubmit,
                                )
                            }
                            className="
                                mt-6
                                space-y-5
                                sm:mt-8
                                sm:space-y-6
                            "
                        >

                            {/* Full Name */}

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
                                        "fullName",
                                        {
                                            required:
                                                "Full name is required",
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
                                        focus:border-indigo-500
                                        focus:ring-4
                                        focus:ring-indigo-100
                                    "
                                />


                                {errors.fullName && (

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-red-500
                                        "
                                    >
                                        {
                                            errors
                                                .fullName
                                                .message
                                        }
                                    </p>

                                )}

                            </div>


                            {/* Email */}

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
                                    Email Address
                                </label>


                                <input
                                    {...register(
                                        "email",
                                        {
                                            required:
                                                "Email is required",
                                        },
                                    )}
                                    type="email"
                                    placeholder="you@example.com"
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
                                        focus:border-indigo-500
                                        focus:ring-4
                                        focus:ring-indigo-100
                                    "
                                />


                                {errors.email && (

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-red-500
                                        "
                                    >
                                        {
                                            errors
                                                .email
                                                .message
                                        }
                                    </p>

                                )}

                            </div>


                            {/* Subject */}

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
                                    Subject
                                </label>


                                <input
                                    {...register(
                                        "subject",
                                        {
                                            required:
                                                "Subject is required",
                                        },
                                    )}
                                    type="text"
                                    placeholder="How can we help?"
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
                                        focus:border-indigo-500
                                        focus:ring-4
                                        focus:ring-indigo-100
                                    "
                                />


                                {errors.subject && (

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-red-500
                                        "
                                    >
                                        {
                                            errors
                                                .subject
                                                .message
                                        }
                                    </p>

                                )}

                            </div>


                            {/* Message */}

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
                                    Message
                                </label>


                                <textarea
                                    {...register(
                                        "message",
                                        {
                                            required:
                                                "Message is required",
                                        },
                                    )}
                                    rows={6}
                                    placeholder="Tell us how we can help..."
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
                                        focus:border-indigo-500
                                        focus:ring-4
                                        focus:ring-indigo-100
                                    "
                                />


                                {errors.message && (

                                    <p
                                        className="
                                            mt-2
                                            text-sm
                                            text-red-500
                                        "
                                    >
                                        {
                                            errors
                                                .message
                                                .message
                                        }
                                    </p>

                                )}

                            </div>


                            {/* Submit */}

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
                                    gap-2
                                    rounded-xl
                                    bg-indigo-600
                                    py-4
                                    text-base
                                    font-semibold
                                    text-white
                                    shadow-sm
                                    transition-all
                                    duration-200
                                    hover:bg-indigo-700
                                    hover:shadow-md
                                    disabled:cursor-not-allowed
                                    disabled:opacity-60
                                "
                            >

                                <Send
                                    size={18}
                                />

                                {
                                    isSubmitting
                                        ? "Sending..."
                                        : "Send Message"
                                }

                            </button>

                        </form>

                    </div>

                </div>

            </section>

        </Layout>
    );
}


export default ContactPage;