import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Is College to Career free to use?",
        answer:
            "Yes. You can create and download professional resumes for free. Additional premium features may be introduced in the future.",
    },
    {
        question: "Are the resume designs ATS-friendly?",
        answer:
            "Yes. Our resume designs are created with clean layouts and proper formatting to improve compatibility with Applicant Tracking Systems (ATS).",
    },
    {
        question: "Can I edit my resume later?",
        answer:
            "Absolutely. Save your progress and continue editing your resume whenever you need to make updates.",
    },
    {
        question: "Can I download my resume as a PDF?",
        answer:
            "Yes. Once your resume is ready, you can download a high-quality PDF that's ready to share with recruiters and employers.",
    },
    {
        question: "Do I need design skills?",
        answer:
            "Not at all. Simply fill in your information and we'll handle the layout and formatting for you.",
    },
    {
        question: "Can experienced professionals also use this platform?",
        answer:
            "Yes. Whether you're a student, fresher, or experienced professional, our resume builder is designed to help you create a polished resume.",
    },
];

function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="bg-blue-50/60 px-6 sm:px-10 lg:px-16 xl:px-20">

            {/* Header */}

            <div className="mx-auto max-w-3xl text-center">

                <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                    Got Questions?
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                    Everything you need to know before building your
                    professional resume.
                </p>

            </div>


            {/* FAQ List */}

            <div className="mx-auto mt-14 max-w-4xl space-y-4">

                {faqs.map((faq, index) => {
                    const isOpen = activeIndex === index;

                    return (
                        <div
                            key={faq.question}
                            className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                                isOpen
                                    ? "border-blue-200 shadow-md"
                                    : "border-slate-200 shadow-sm hover:border-blue-200 hover:shadow-md"
                            }`}
                        >

                            {/* Question */}

                            <button
                                type="button"
                                onClick={() =>
                                    setActiveIndex(
                                        isOpen ? null : index
                                    )
                                }
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-7"
                            >

                                <h3
                                    className={`text-base font-bold transition-colors sm:text-lg ${
                                        isOpen
                                            ? "text-blue-600"
                                            : "text-slate-900"
                                    }`}
                                >
                                    {faq.question}
                                </h3>

                                <div
                                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                                        isOpen
                                            ? "bg-blue-600 text-white"
                                            : "bg-blue-50 text-blue-600"
                                    }`}
                                >
                                    <ChevronDown
                                        size={20}
                                        className={`transition-transform duration-300 ${
                                            isOpen
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </div>

                            </button>


                            {/* Answer */}

                            <div
                                className={`grid transition-all duration-300 ${
                                    isOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                }`}
                            >

                                <div className="overflow-hidden">

                                    <div className="border-t border-slate-100 px-6 pb-6 pt-5 sm:px-7">

                                        <p className="max-w-3xl text-base leading-7 text-slate-600">
                                            {faq.answer}
                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                })}

            </div>

        </section>
    );
}

export default FAQ;