function ReviewGenerateCard() {
    return (
        <div
            className="
                overflow-hidden
                rounded-3xl
                bg-gradient-to-br
                from-blue-600
                via-blue-700
                to-slate-900
                shadow-xl
            "
        >

            <div className="p-6 sm:p-8">

                {/* Icon */}

                <div
                    className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-2xl
                        bg-white/15
                        text-3xl
                    "
                >
                    📄
                </div>


                {/* Heading */}

                <h2
                    className="
                        mt-6
                        text-2xl
                        font-bold
                        text-white
                    "
                >
                    Ready to Create Your Resume?
                </h2>


                {/* Description */}

                <p
                    className="
                        mt-3
                        text-sm
                        leading-6
                        text-blue-100
                    "
                >
                    Review all your information carefully before
                    generating your resume. Make sure your education,
                    skills, experience, and contact details are correct.
                    Once you're ready, generate your professional resume.
                </p>


                {/* Features */}

                <div className="mt-8 space-y-3">

                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            text-sm
                            text-blue-100
                        "
                    >

                        <span className="text-lg">
                            ✓
                        </span>

                        <span>
                            Professional Resume Design
                        </span>

                    </div>


                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            text-sm
                            text-blue-100
                        "
                    >

                        <span className="text-lg">
                            ✓
                        </span>

                        <span>
                            High-Quality PDF
                        </span>

                    </div>


                    <div
                        className="
                            flex
                            items-center
                            gap-3
                            text-sm
                            text-blue-100
                        "
                    >

                        <span className="text-lg">
                            ✓
                        </span>

                        <span>
                            Edit Your Resume Anytime
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default ReviewGenerateCard;