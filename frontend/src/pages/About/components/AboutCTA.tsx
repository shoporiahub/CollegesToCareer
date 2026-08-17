import {
    ArrowRight,
    Sparkles,
} from "lucide-react";

import {
    useNavigate,
} from "react-router-dom";


function AboutCTA() {

    const navigate =
        useNavigate();


    return (
        <section className="bg-white">
            <div
                className="
                    mx-auto
                    max-w-7xl
                    px-6
                    py-20
                    lg:px-8
                    lg:py-24
                "
            >
                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        bg-gradient-to-br
                        from-blue-600
                        via-indigo-600
                        to-violet-600
                        px-7
                        py-14
                        text-center
                        shadow-xl
                        sm:px-12
                        sm:py-16
                    "
                >
                    {/* Decorative background */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -left-24
                            -top-24
                            h-64
                            w-64
                            rounded-full
                            bg-white/10
                            blur-3xl
                        "
                    />

                    <div
                        className="
                            pointer-events-none
                            absolute
                            -bottom-32
                            -right-20
                            h-72
                            w-72
                            rounded-full
                            bg-violet-300/20
                            blur-3xl
                        "
                    />


                    {/* Content */}

                    <div className="relative">
                        <div
                            className="
                                mx-auto
                                flex
                                h-12
                                w-12
                                items-center
                                justify-center
                                rounded-2xl
                                bg-white/15
                                text-white
                            "
                        >
                            <Sparkles
                                size={23}
                            />
                        </div>


                        <h2
                            className="
                                mx-auto
                                mt-6
                                max-w-2xl
                                text-3xl
                                font-black
                                tracking-tight
                                text-white
                                sm:text-4xl
                            "
                        >
                            Your career journey
                            starts here.
                        </h2>


                        <p
                            className="
                                mx-auto
                                mt-4
                                max-w-xl
                                text-sm
                                leading-6
                                text-blue-100
                                sm:text-base
                                sm:leading-7
                            "
                        >
                            Start building a professional resume
                            and take the first step toward your
                            career with College to Career.
                        </p>


                        <button
                            type="button"
                            onClick={() =>
                                navigate(
                                    "/resume-builder",
                                )
                            }
                            className="
                                mt-8
                                inline-flex
                                items-center
                                gap-2
                                rounded-xl
                                bg-white
                                px-6
                                py-3.5
                                text-sm
                                font-black
                                text-blue-700
                                shadow-sm
                                transition
                                hover:bg-blue-50
                                hover:shadow-md
                            "
                        >
                            Build Your Resume

                            <ArrowRight
                                size={18}
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default AboutCTA;