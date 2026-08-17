import { useState } from "react";

type Props = {
    question: string;
    answer: string;
};

function FAQItem({
    question,
    answer,
}: Props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="rounded-xl border border-slate-200 bg-white">
            <button
                onClick={() => setOpen(!open)}
                className="flex w-full items-center justify-between p-6 text-left"
            >
                <h3 className="font-semibold text-slate-900">
                    {question}
                </h3>

                <span className="cursor-pointer text-xl">
                    {open ? "−" : "+"}
                </span>
            </button>

            {open && (
                <div className="border-t border-slate-200 px-6 py-5 text-slate-600">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default FAQItem;