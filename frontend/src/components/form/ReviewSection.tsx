type ReviewItem = {
    label: string;
    value?: string | number | null;
};

type Props = {
    title: string;
    items: ReviewItem[];
};

function ReviewSection({ title, items }: Props) {
    return (
        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}

            <div className="border-b border-slate-200 px-8 py-5">

                <h2 className="text-xl font-semibold text-slate-900">
                    {title}
                </h2>

            </div>

            {/* Content */}

            <div className="divide-y divide-slate-100">

                {items.map(({ label, value }) => (

                    <div
                        key={label}
                        className="grid gap-3 px-8 py-5 md:grid-cols-[220px_1fr]"
                    >

                        <div className="text-sm font-medium text-slate-500">
                            {label}
                        </div>

                        <div>

                            {value ? (

                                <p className="font-medium text-slate-900 break-words">
                                    {value}
                                </p>

                            ) : (

                                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-500">
                                    Not Provided
                                </span>

                            )}

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default ReviewSection;