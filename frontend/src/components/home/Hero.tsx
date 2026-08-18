import {
    ArrowRight,
} from "lucide-react";

import {
    useNavigate,
} from "react-router-dom";

import heroImage from "../../assets/heroimag3.png";


function Hero() {

    const navigate =
        useNavigate();


    return (

        <section
            className="
                relative
                overflow-hidden
                bg-[#fffdf5]
            "
        >

            {/* ================================================= */}
            {/* HERO CONTAINER */}
            {/* ================================================= */}

            <div
                className="
                    mx-auto
                    flex
                    w-full
                    max-w-[1600px]
                    flex-col
                    px-5
                    py-12
                    sm:px-8
                    sm:py-16
                    lg:h-[650px]
                    lg:flex-row
                    lg:items-start
                    lg:px-16
                    lg:py-0
                    xl:px-20
                "
            >

                {/* ================================================= */}
                {/* LEFT SIDE */}
                {/* ================================================= */}

                <div
                    className="
                        flex
                        w-full
                        items-center
                        lg:min-h-[620px]
                        lg:w-[48%]
                    "
                >

                    <div
                        className="
                            w-full
                            max-w-2xl
                        "
                    >

                        {/* Heading */}

                        <h1
                            className="
                                text-4xl
                                font-extrabold
                                leading-[1.05]
                                tracking-tight
                                text-slate-950
                                sm:text-5xl
                                md:text-6xl
                                lg:text-[68px]
                                xl:text-[74px]
                            "
                        >

                            Your Dream Job
                            <br />

                            Starts Here

                        </h1>


                        {/* Description */}

                        <p
                            className="
                                mt-5
                                max-w-xl
                                text-base
                                leading-7
                                text-slate-700
                                sm:mt-6
                                sm:text-xl
                                sm:leading-8
                                md:text-2xl
                                md:leading-9
                            "
                        >

                            Craft Your Future. Stand Out with a
                            Stellar Resume!

                        </p>


                        {/* CTA */}

                        <button
                            type="button"
                            onClick={() =>
                                navigate(
                                    "/resume-builder",
                                )
                            }
                            className="
                                mt-7
                                inline-flex
                                w-full
                                items-center
                                justify-center
                                gap-3
                                rounded-full
                                bg-blue-500
                                px-7
                                py-4
                                text-base
                                font-bold
                                text-white
                                shadow-lg
                                shadow-blue-200
                                transition-all
                                duration-300
                                hover:-translate-y-1
                                hover:bg-blue-600
                                hover:shadow-xl
                                sm:mt-8
                                sm:w-auto
                                sm:px-12
                                sm:py-4
                                sm:text-lg
                                lg:px-16
                                lg:py-5
                                xl:px-20
                            "
                        >

                            Create your Resume

                            <ArrowRight
                                size={20}
                            />

                        </button>

                    </div>

                </div>


                {/* ================================================= */}
                {/* RIGHT / MOBILE IMAGE */}
                {/* ================================================= */}

                <div
                    className="
                        relative
                        mt-8
                        flex
                        w-full
                        items-center
                        justify-center
                        lg:hidden
                    "
                >

                    <div
                        className="
                            relative
                            w-full
                            max-w-[430px]
                            sm:max-w-[500px]
                        "
                    >

                        <img
                            src={heroImage}
                            alt="Professional preparing for a career"
                            className="
                                h-auto
                                w-full
                                object-contain
                            "
                        />

                    </div>

                </div>


                {/* ================================================= */}
                {/* DESKTOP IMAGE */}
                {/* ================================================= */}

                <div
                    className="
                        relative
                        hidden
                        h-[650px]
                        w-[52%]
                        lg:block
                    "
                >

                    <div
                        className="
                            absolute
                            left-1/2
                            top-[46%]
                            z-20
                            w-[520px]
                            -translate-x-1/2
                            -translate-y-1/2
                            xl:w-[560px]
                        "
                    >

                        <img
                            src={heroImage}
                            alt="Professional preparing for a career"
                            className="
                                w-full
                                object-contain
                            "
                        />

                    </div>

                </div>

            </div>

        </section>
    );
}


export default Hero;