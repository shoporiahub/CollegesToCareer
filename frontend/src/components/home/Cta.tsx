import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CTA() {
    const navigate = useNavigate();

    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 px-12 py-20 text-center">

                    {/* Background Blur */}

                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                    <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

                    <div className="relative">

                        <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white">
                            Start Your Career Journey
                        </span>

                        <h2 className="mx-auto mt-8 max-w-4xl text-5xl font-bold leading-tight text-white">
                            Build a Resume That
                            <br />
                            Gets You Interview Ready
                        </h2>

                        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-indigo-100">
                            Create a professional, ATS-friendly resume in
                            minutes. Choose a design, fill in your details,
                            and download a recruiter-ready PDF.
                        </p>

                        <div className="mt-12 flex justify-center gap-5">

                            <button
                                onClick={() =>
                                    navigate("/resume-builder")
                                }
                                className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 font-semibold text-indigo-700 transition-all duration-300 hover:scale-105"
                            >
                                Start Building

                                <ArrowRight size={18} />
                            </button>

                            <button
                                onClick={() =>
                                    navigate("/templates")
                                }
                                className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10"
                            >
                                Explore Designs
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default CTA;