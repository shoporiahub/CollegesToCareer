import {
    FileText,
    GraduationCap,
    Users,
} from "lucide-react";


const features = [
    {
        icon: FileText,
        title: "Build a Better Resume",
        description:
            "Create a professional resume that clearly presents your skills, education, experience, and projects.",
    },
    {
        icon: GraduationCap,
        title: "Prepare for Your Career",
        description:
            "Get practical resources and tools designed to help you understand what it takes to move from college into the professional world.",
    },
    {
        icon: Users,
        title: "Learn From Experienced Professionals",
        description:
            "Connect with seniors and professionals who have already gone through the journey and can share practical career insights.",
    },
];


function AboutFeatures() {
    return (
        <section className="bg-slate-50">
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
                {/* Header */}

                <div className="max-w-2xl">
                    <p
                        className="
                            text-sm
                            font-bold
                            uppercase
                            tracking-[0.2em]
                            text-blue-600
                        "
                    >
                        What We're Building
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
                        Everything you need to
                        take the next step.
                    </h2>

                    <p
                        className="
                            mt-5
                            text-base
                            leading-7
                            text-slate-600
                        "
                    >
                        We're building College to Career around
                        the real challenges students face when
                        preparing for their professional journey.
                    </p>
                </div>


                {/* Features */}

                <div
                    className="
                        mt-12
                        grid
                        gap-6
                        md:grid-cols-3
                    "
                >
                    {features.map(
                        ({
                            icon: Icon,
                            title,
                            description,
                        }) => (
                            <div
                                key={title}
                                className="
                                    rounded-3xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-7
                                    shadow-sm
                                    transition
                                    duration-200
                                    hover:-translate-y-1
                                    hover:shadow-md
                                "
                            >
                                {/* Icon */}

                                <div
                                    className="
                                        flex
                                        h-12
                                        w-12
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-blue-50
                                        text-blue-600
                                    "
                                >
                                    <Icon
                                        size={23}
                                    />
                                </div>


                                {/* Content */}

                                <h3
                                    className="
                                        mt-6
                                        text-xl
                                        font-black
                                        text-slate-950
                                    "
                                >
                                    {title}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        text-sm
                                        leading-6
                                        text-slate-600
                                    "
                                >
                                    {description}
                                </p>
                            </div>
                        ),
                    )}
                </div>
            </div>
        </section>
    );
}


export default AboutFeatures;