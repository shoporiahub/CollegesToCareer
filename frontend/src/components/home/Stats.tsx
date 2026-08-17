function Stats() {
    return (
        <section className="bg-[#fffdf5] px-6 sm:px-10 lg:px-16 xl:px-20">

            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

                {/* Resume Designs */}

                <div className="group rounded-3xl border border-blue-100 bg-blue-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500 text-xl font-bold text-white">
                        ✦
                    </div> */}

                    <h3 className="mt-6 text-4xl font-extrabold text-blue-600">
                        10+
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-slate-800">
                        Resume Designs
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Choose from professional designs built for modern job applications.
                    </p>

                </div>


                {/* ATS Optimized */}

                <div className="group rounded-3xl border border-violet-100 bg-violet-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                    {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500 text-xl font-bold text-white">
                        ✓
                    </div> */}

                    <h3 className="mt-6 text-4xl font-extrabold text-violet-600">
                        ATS
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-slate-800">
                        Optimized
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Create resumes designed to work better with applicant tracking systems.
                    </p>

                </div>


                {/* PDF */}

                <div className="group rounded-3xl border border-amber-100 bg-amber-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500 text-xl font-bold text-white">
                            ↓
                        </div> */}

                    <h3 className="mt-6 text-4xl font-extrabold text-amber-600">
                        PDF
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-slate-800">
                        Instant Download
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Download your finished resume as a professional PDF whenever you need it.
                    </p>

                </div>


                {/* Free */}

                <div className="group rounded-3xl border border-emerald-100 bg-emerald-50 p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                        {/* <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-xl font-bold text-white">
                            $
                        </div> */}

                    <h3 className="mt-6 text-4xl font-extrabold text-emerald-600">
                        100%
                    </h3>

                    <p className="mt-2 text-lg font-semibold text-slate-800">
                        Free to Start
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        Start building your resume without paying upfront.
                    </p>

                </div>

            </div>

        </section>
    );
}

export default Stats;