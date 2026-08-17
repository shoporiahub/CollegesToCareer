function ReviewGenerateCard() {
    return (
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 shadow-xl">

            <div className="p-8">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl">
                    📄
                </div>

                <h2 className="mt-6 text-2xl font-bold text-white">
                    Ready to Generate
                </h2>

                <p className="mt-3 text-sm leading-6 text-blue-100">
                    Please review all your information carefully. When you're
                    satisfied, click the <strong>Generate Biodata</strong> button
                    below the review section to create your premium marriage
                    biodata.
                </p>

                <div className="mt-8 space-y-3">

                    <div className="flex items-center gap-3 text-sm text-blue-100">
                        <span className="text-lg">✓</span>
                        <span>Premium Design</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-blue-100">
                        <span className="text-lg">✓</span>
                        <span>Printable PDF</span>
                    </div>

                    <div className="flex items-center gap-3 text-sm text-blue-100">
                        <span className="text-lg">✓</span>
                        <span>Edit Anytime</span>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default ReviewGenerateCard;