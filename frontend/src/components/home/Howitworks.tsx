import {
    ArrowRight,
    FileText,
    LayoutTemplate,
    Download,
} from "lucide-react";

const steps = [
    {
        step: "01",
        icon: LayoutTemplate,
        title: "Choose a Resume Design",
        description:
            "Browse professionally designed resume layouts and choose the one that best matches your career goals.",
    },
    {
        step: "02",
        icon: FileText,
        title: "Fill in Your Details",
        description:
            "Add your education, skills, projects, experience, and achievements using our simple resume builder.",
    },
    {
        step: "03",
        icon: Download,
        title: "Download Your Resume",
        description:
            "Preview your resume and download a professional PDF that's ready to apply for internships and jobs.",
    },
];

function HowItWorks() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">

                    <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
                        How It Works
                    </span>

                    <h2 className="mt-6 text-5xl font-bold text-slate-900">
                        Build Your Resume
                        <br />
                        In 3 Simple Steps
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Creating a professional resume has never been easier.
                        Pick a design, enter your details, and download a
                        recruiter-ready resume in just a few minutes.
                    </p>

                </div>

                {/* Steps */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <div
                                key={step.step}
                                className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Step Number */}

                                <div className="absolute right-8 top-8 text-5xl font-extrabold text-slate-100">
                                    {step.step}
                                </div>

                                {/* Icon */}

                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50">
                                    <Icon
                                        className="text-indigo-600"
                                        size={30}
                                    />
                                </div>

                                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                                    {step.title}
                                </h3>

                                <p className="mt-5 leading-8 text-slate-600">
                                    {step.description}
                                </p>

                                {index < steps.length - 1 && (
                                    <ArrowRight
                                        className="absolute -right-5 top-1/2 hidden -translate-y-1/2 text-slate-300 xl:block"
                                        size={28}
                                    />
                                )}
                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}

export default HowItWorks;