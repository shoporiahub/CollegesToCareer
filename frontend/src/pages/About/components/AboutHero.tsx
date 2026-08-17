function AboutHero() {
    return (
        <section className="relative overflow-hidden bg-slate-50">
            {/* Background */}

            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
                        absolute
                        -left-40
                        -top-40
                        h-[500px]
                        w-[500px]
                        rounded-full
                        bg-blue-300/30
                        blur-[120px]
                    "
                />

                <div
                    className="
                        absolute
                        -right-40
                        top-20
                        h-[450px]
                        w-[450px]
                        rounded-full
                        bg-violet-300/25
                        blur-[120px]
                    "
                />
            </div>

            <div
                className="
                    relative
                    mx-auto
                    max-w-7xl
                    px-6
                    py-20
                    text-center
                    sm:py-24
                    lg:px-8
                    lg:py-28
                "
            >
                <p
                    className="
                        text-sm
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-blue-600
                    "
                >
                    About College to Career
                </p>

                <h1
                    className="
                        mx-auto
                        mt-5
                        max-w-4xl
                        text-4xl
                        font-black
                        tracking-tight
                        text-slate-950
                        sm:text-5xl
                        lg:text-6xl
                    "
                >
                    From College to Career,
                    <span className="block text-blue-600">
                        We're With You.
                    </span>
                </h1>

                <p
                    className="
                        mx-auto
                        mt-6
                        max-w-2xl
                        text-base
                        leading-7
                        text-slate-600
                        sm:text-lg
                        sm:leading-8
                    "
                >
                    College to Career is built to help students
                    move from college life to professional life
                    with greater confidence, better preparation,
                    and practical career guidance.
                </p>
            </div>
        </section>
    );
}

export default AboutHero;