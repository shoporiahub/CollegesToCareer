import {
    Brain,
    Download,
    FileCheck,
    LayoutTemplate,
    PencilLine,
    Save,
} from "lucide-react";

const features = [
    {
        icon: LayoutTemplate,
        title: "Professional Resume Designs",
        description:
            "Choose from modern resume designs created for students, fresh graduates, and professionals.",
        cardClass:
            "border-blue-100 bg-blue-50",
        iconClass:
            "bg-blue-500 text-white",
        hoverClass:
            "hover:border-blue-200",
    },
    {
        icon: FileCheck,
        title: "ATS Friendly",
        description:
            "Our resume layouts are designed to improve readability for Applicant Tracking Systems.",
        cardClass:
            "border-violet-100 bg-violet-50",
        iconClass:
            "bg-violet-500 text-white",
        hoverClass:
            "hover:border-violet-200",
    },
    {
        icon: PencilLine,
        title: "Easy to Customize",
        description:
            "Edit every section effortlessly and build your resume without any design skills.",
        cardClass:
            "border-emerald-100 bg-emerald-50",
        iconClass:
            "bg-emerald-500 text-white",
        hoverClass:
            "hover:border-emerald-200",
    },
    {
        icon: Download,
        title: "Download PDF",
        description:
            "Export a clean, professional PDF that's ready to share with recruiters.",
        cardClass:
            "border-amber-100 bg-amber-50",
        iconClass:
            "bg-amber-500 text-white",
        hoverClass:
            "hover:border-amber-200",
    },
    {
        icon: Save,
        title: "Save Your Progress",
        description:
            "Your resume is securely saved, so you can continue editing whenever you want.",
        cardClass:
            "border-rose-100 bg-rose-50",
        iconClass:
            "bg-rose-500 text-white",
        hoverClass:
            "hover:border-rose-200",
    },
    {
        icon: Brain,
        title: "AI Resume Assistant",
        description:
            "Coming soon — get AI-powered suggestions to improve your resume and increase your interview chances.",
        cardClass:
            "border-cyan-100 bg-cyan-50",
        iconClass:
            "bg-cyan-500 text-white",
        hoverClass:
            "hover:border-cyan-200",
        comingSoon: true,
    },
];

function Features() {
    return (
        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-20">

            {/* Header */}

            <div className="mx-auto max-w-3xl text-center">

                <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    Everything You Need
                    <br />
                    To Build a Better Resume
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                    We make resume building simple, professional, and
                    recruiter-friendly, helping students create resumes
                    that stand out in today's competitive job market.
                </p>

            </div>


            {/* Feature Grid */}

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className={`group rounded-3xl border p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${feature.cardClass} ${feature.hoverClass}`}
                        >

                            {/* Icon */}

                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm transition-transform duration-300 group-hover:scale-105 ${feature.iconClass}`}
                            >
                                <Icon size={28} />
                            </div>


                            {/* Title */}

                            <div className="mt-7 flex flex-wrap items-center gap-3">

                                <h3 className="text-xl font-extrabold text-slate-900">
                                    {feature.title}
                                </h3>

                                {feature.comingSoon && (
                                    <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-bold text-cyan-700 shadow-sm">
                                        Coming Soon
                                    </span>
                                )}

                            </div>


                            {/* Description */}

                            <p className="mt-4 text-base leading-7 text-slate-600">
                                {feature.description}
                            </p>

                        </div>
                    );
                })}

            </div>

        </section>
    );
}

export default Features;