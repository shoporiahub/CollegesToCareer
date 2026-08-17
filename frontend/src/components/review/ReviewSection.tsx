type Item = {
    label: string;
    value?: string | number | null;
};

type Props = {
    title: string;
    items: Item[];
};

function ReviewSection({
    title,
    items,
}: Props) {

    return (

        <section className="rounded-3xl border border-slate-200 bg-white shadow-sm">

            <div className="border-b border-slate-100 px-8 py-5">

                <h3 className="text-xl font-bold text-slate-900">
                    {title}
                </h3>

            </div>

            <div className="divide-y divide-slate-100">

                {items.map((item) => (

                    <div
                        key={item.label}
                        className="grid grid-cols-[220px_1fr] gap-6 px-8 py-4"
                    >

                        <p className="font-medium text-slate-500">
                            {item.label}
                        </p>

                        <p className="font-semibold text-slate-900">

                            {item.value || (
                                <span className="italic text-slate-400">
                                    Not Provided
                                </span>
                            )}

                        </p>

                    </div>

                ))}

            </div>

        </section>

    );

}

export default ReviewSection;