import PrintButton from "./PrintButton";
import DownloadButton from "./DownloadButton";

type Template =
    | "elegant"
    | "modern"
    | "royal"
    | "luxury"
    | "signature";

type Props = {
    template: Template;
    onTemplateChange: (template: Template) => void;
    onPrint: () => void;
    onDownload: () => void;
    requiresPayment: boolean;
    onContinue: () => void;
};

function PreviewToolbar({
    template,
    onTemplateChange,
    onPrint,
    onDownload,
    requiresPayment,
    onContinue,
}: Props) {
    const templates: Template[] = [
        "elegant",
        "modern",
        "royal",
        "luxury",
        "signature",
    ];

    return (
        <div className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">

            <div className="mx-auto max-w-7xl p-4">

                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    {/* Mobile Select */}

                    <div className="lg:hidden">

                        <label className="mb-2 block text-sm font-medium text-slate-600">
                            Template
                        </label>

                        <select
                            value={template}
                            onChange={(e) =>
                                onTemplateChange(
                                    e.target.value as Template
                                )
                            }
                            className="h-11 w-full rounded-xl border border-slate-300 bg-white px-4"
                        >
                            {templates.map((item) => (
                                <option
                                    key={item}
                                    value={item}
                                >
                                    {item.charAt(0).toUpperCase() +
                                        item.slice(1)}
                                </option>
                            ))}
                        </select>

                    </div>

                    {/* Desktop Templates */}

                    <div className="hidden flex-wrap gap-3 lg:flex">

                        {templates.map((item) => (

                            <button
                                key={item}
                                type="button"
                                onClick={() =>
                                    onTemplateChange(item)
                                }
                                className={`rounded-xl px-5 py-2 font-medium capitalize transition ${template === item
                                        ? "bg-blue-600 text-white"
                                        : "border border-slate-300 bg-white hover:bg-slate-100"
                                    }`}
                            >
                                {item}
                            </button>

                        ))}

                    </div>

                    {/* Actions */}

                    <div className="flex flex-col gap-3 sm:flex-row">

                        {requiresPayment ? (

                            <button
                                type="button"
                                onClick={onContinue}
                                className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 sm:w-auto"
                            >
                                Continue to Payment →
                            </button>

                        ) : (

                            <>
                                <DownloadButton
                                    onClick={onDownload}
                                />
                                <PrintButton
                                    onClick={onPrint}
                                />


                            </>

                        )}

                    </div>

                </div>

            </div>

        </div>
    );
}

export default PreviewToolbar;