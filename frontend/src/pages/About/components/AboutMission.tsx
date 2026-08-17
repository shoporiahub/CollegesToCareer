function AboutMission() {
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
                        grid
                        gap-12
                        lg:grid-cols-2
                        lg:items-center
                    "
                >
                    {/* Left */}

                    <div>
                        <p
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.2em]
                                text-blue-600
                            "
                        >
                            Why We Exist
                        </p>

                        <h2
                            className="
                                mt-4
                                text-3xl
                                font-black
                                tracking-tight
                                text-slate-950
                                sm:text-4xl
                            "
                        >
                            Starting a career
                            shouldn't feel
                            overwhelming.
                        </h2>

                        <p
                            className="
                                mt-6
                                text-base
                                leading-7
                                text-slate-600
                            "
                        >
                            For many students, the transition
                            from college to professional life
                            can be confusing. Building a strong
                            resume, understanding what employers
                            look for, and knowing what steps to
                            take next are not always easy.
                        </p>

                        <p
                            className="
                                mt-4
                                text-base
                                leading-7
                                text-slate-600
                            "
                        >
                            College to Career is being built to
                            make that journey simpler by bringing
                            the tools, resources, and guidance
                            students need into one place.
                        </p>
                    </div>


                    {/* Right */}

                    <div
                        className="
                            rounded-3xl
                            border
                            border-blue-100
                            bg-gradient-to-br
                            from-blue-50
                            via-white
                            to-violet-50
                            p-8
                            shadow-sm
                            sm:p-10
                        "
                    >
                        <p
                            className="
                                text-sm
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-blue-600
                            "
                        >
                            Our Mission
                        </p>

                        <h3
                            className="
                                mt-4
                                text-2xl
                                font-black
                                leading-tight
                                text-slate-950
                                sm:text-3xl
                            "
                        >
                            Make the journey from
                            college to career
                            easier.
                        </h3>

                        <p
                            className="
                                mt-5
                                text-base
                                leading-7
                                text-slate-600
                            "
                        >
                            Our goal is to help students become
                            better prepared for the professional
                            world — starting with the way they
                            present themselves and continuing
                            through the guidance they receive.
                        </p>

                        <div
                            className="
                                mt-8
                                h-1
                                w-16
                                rounded-full
                                bg-blue-600
                            "
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMission;