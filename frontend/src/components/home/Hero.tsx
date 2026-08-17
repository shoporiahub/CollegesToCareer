import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import heroImage from "../../assets/heroimag3.png";

function Hero() {
    const navigate = useNavigate();

    return (
        <section className="relative overflow-hidden bg-[#fffdf5]">

            <div className="flex h-[650px] w-full items-start px-6 sm:px-10 lg:px-16 xl:px-20">

                {/* LEFT SIDE */}

                <div className="flex w-full items-center lg:min-h-[620px] lg:w-[48%]">

                    <div className="max-w-2xl">

                        <h1 className="text-5xl font-extrabold leading-[1.03] tracking-tight text-slate-950 sm:text-6xl lg:text-[68px] xl:text-[74px]">

                            Your Dream Job
                            <br />

                            Starts Here

                        </h1>

                        <p className="mt-7 max-w-xl text-xl leading-9 text-slate-700 sm:text-2xl">

                            Craft Your Future. Stand Out with a Stellar
                            Resume!

                        </p>

                        <button
                            type="button"
                            onClick={() =>
                                navigate("/resume-builder")
                            }
                            className="mt-9 inline-flex items-center gap-3 rounded-full bg-blue-500 px-20 py-5 text-lg font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl"
                        >

                            Create your Resume

                            <ArrowRight size={21} />

                        </button>

                    </div>

                </div>


                {/* RIGHT SIDE */}

                <div className="relative hidden h-[650px] w-[52%] lg:block">

                    {/* TOP LEFT CARD */}

                    {/* <div className="absolute left-0 top-8 z-30 w-48 rounded-3xl bg-[#ffd166] px-5 py-5 shadow-xl">

                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                            <span className="text-lg font-bold text-blue-600">
                                ✓
                            </span>
                        </div>

                        <p className="text-sm font-medium leading-6 text-slate-900">
                            Craft Your Future.
                            <br />
                            Stand Out with a
                            <br />
                            Stellar Resume!
                        </p>

                    </div> */}


                    {/* TOP RIGHT CARD */}

                    {/* <div className="absolute right-0 top-2 z-30 w-48 rounded-3xl bg-[#ffd166] px-5 py-5 shadow-xl">

                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                            <span className="text-lg font-bold text-blue-600">
                                ★
                            </span>
                        </div>

                        <p className="text-sm font-medium leading-6 text-slate-900">
                            Learn skills that
                            <br />
                            will make you
                            <br />
                            stand out.
                        </p>

                    </div> */}


                    {/* CENTER CHARACTER */}

                    <div className="absolute left-1/2 top-[46%] z-20 w-[520px] -translate-x-1/2 -translate-y-1/2 xl:w-[560px]">

                        <img
                            src={heroImage}
                            alt="Professional preparing for a career"
                            className="w-full object-contain"
                        />

                    </div>


                    {/* BOTTOM LEFT CARD */}

                    {/* <div className="absolute bottom-8 left-0 z-30 w-48 rounded-3xl border-2 border-blue-500 bg-[#ffd166] px-5 py-5 shadow-xl">

                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                            <span className="text-lg font-bold text-blue-600">
                                ✓
                            </span>
                        </div>

                        <p className="text-sm font-medium leading-6 text-slate-900">
                            Build a resume
                            <br />
                            that gets you
                            <br />
                            noticed.
                        </p>

                    </div> */}


                    {/* BOTTOM RIGHT CARD */}

                    {/* <div className="absolute bottom-8 right-0 z-30 w-48 rounded-3xl bg-[#ffd166] px-5 py-5 shadow-xl">

                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-white">
                            <span className="text-lg font-bold text-blue-600">
                                →
                            </span>
                        </div>

                        <p className="text-sm font-medium leading-6 text-slate-900">
                            Get ready for
                            <br />
                            your dream
                            <br />
                            career.
                        </p>

                    </div> */}

                </div>

            </div>

        </section>
    );
}

export default Hero;