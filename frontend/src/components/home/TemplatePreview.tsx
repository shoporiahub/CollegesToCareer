import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
    getTemplates,
    type Template,
} from "../../services/template.service";


function TemplatePreview() {

    console.log("TemplatePreview rendered");

    const [templates, setTemplates] = useState<Template[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        async function loadTemplates() {

            try {
                const data = await getTemplates();


                const activeTemplates = data
                    .filter((template) => template.is_active)
                    .sort(
                        (a, b) =>
                            a.sort_order - b.sort_order,
                    );

                setTemplates(activeTemplates.slice(0, 4));
            } catch (error) {
                console.error(
                    "Failed to load templates:",
                    error,
                );
            } finally {
                setLoading(false);
            }
        }

        loadTemplates();
    }, []);

    return (
        <section className="bg-white px-6 py-20 sm:px-10 lg:px-16 lg:py-24 xl:px-20">

            {/* Header */}

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

                <div className="max-w-3xl">

                    <h2 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                        Choose a Resume Template
                    </h2>

                </div>

                {/* Desktop CTA */}

                <Link
                    to="/templates"
                    className="hidden shrink-0 items-center gap-3 rounded-xl border-2 border-slate-200 bg-white px-6 py-3.5 font-bold text-slate-800 transition-all duration-200 hover:border-blue-500 hover:text-blue-600 lg:flex"
                >
                    View All Templates

                    <ArrowRight size={19} />
                </Link>

            </div>


            {/* Template Cards */}

            <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                {loading ? (

                    Array.from({ length: 4 }).map(
                        (_, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-3xl border border-slate-200 bg-white"
                            >
                                <div className="aspect-[3/4] animate-pulse bg-slate-100" />

                                <div className="p-6">
                                    <div className="h-6 w-32 animate-pulse rounded bg-slate-100" />

                                    <div className="mt-6 h-12 animate-pulse rounded-xl bg-slate-100" />
                                </div>
                            </div>
                        ),
                    )

                ) : (

                    templates.map((template) => (

                        <Link
                            key={template.id}
                            to={`/templates/${template.slug}`}
                            className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
                        >

                            {/* Template Preview */}

                            <div className="relative overflow-hidden bg-slate-100 p-4">

                                <div className="absolute left-7 top-7 z-10 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-sm backdrop-blur">
                                    Preview
                                </div>

                                <div className="overflow-hidden rounded-2xl bg-white shadow-md">

                                    <img
                                        src={template.image}
                                        alt={`${template.name} resume template`}
                                        className="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                    />

                                </div>

                            </div>


                            {/* Card Content */}

                            <div className="p-6">

                                <div className="flex items-start justify-between gap-4">

                                    <div>

                                        <h3 className="text-xl font-extrabold text-slate-900">
                                            {template.name}
                                        </h3>

                                    </div>

                                </div>


                                {/* Footer */}

                                <div className="mt-6 flex items-center justify-end border-t border-slate-100 pt-5">

                                    <div className="flex items-center gap-3 rounded-xl bg-blue-50 px-5 py-3 text-base font-bold text-blue-600 transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white">

                                        View Template

                                        <ArrowRight
                                            size={20}
                                            className="transition-transform duration-200 group-hover:translate-x-1"
                                        />

                                    </div>

                                </div>

                            </div>

                        </Link>

                    ))

                )}

            </div>


            {/* Mobile CTA */}

            <div className="mt-10 flex justify-center lg:hidden">

                <Link
                    to="/templates"
                    className="inline-flex items-center gap-3 rounded-xl bg-blue-600 px-7 py-3.5 font-bold text-white shadow-md shadow-blue-100 transition hover:bg-blue-700"
                >
                    View All Templates

                    <ArrowRight size={18} />
                </Link>

            </div>

        </section>
    );
}

export default TemplatePreview;