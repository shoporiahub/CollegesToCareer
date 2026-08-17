import { useNavigate } from "react-router-dom";

import FAQItem from "../../components/faq/FAQItem";
import Layout from "../../components/layout/Layout";
import { FAQS } from "../../constants/faq";

function FAQPage() {
    const navigate = useNavigate();

    return (
        <Layout>

            {/* Hero */}

            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-24">

                <div className="mx-auto max-w-4xl px-6 text-center">

                    <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">

                        Help Center

                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white">

                        Frequently Asked

                        <span className="text-blue-300">

                            {" "}Questions

                        </span>

                    </h1>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">

                        Find answers to the most common questions about
                        ResumeAI, resume creation, templates, AI assistance,
                        PDF downloads, and your account.

                    </p>

                </div>

            </section>

            {/* FAQ */}

            <section className="bg-slate-50 py-20">

                <div className="mx-auto max-w-4xl px-6">

                    <div className="mb-12 text-center">

                        <h2 className="text-3xl font-bold text-slate-900">

                            Everything You Need to Know

                        </h2>

                        <p className="mt-3 text-slate-600">

                            Can't find what you're looking for?
                            Contact our support team.

                        </p>

                    </div>

                    <div className="space-y-5">

                        {FAQS.map((faq) => (
                            <FAQItem
                                key={faq.question}
                                {...faq}
                            />
                        ))}

                    </div>

                </div>

            </section>

            {/* CTA */}

            <section className="bg-white py-20">

                <div className="mx-auto max-w-4xl px-6">

                    <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-12 text-center shadow-xl">

                        <h2 className="text-3xl font-bold text-white">

                            Still Have Questions?

                        </h2>

                        <p className="mx-auto mt-4 max-w-2xl text-blue-100">

                            Can't find the answer you're looking for?
                            Our support team is here to help.

                        </p>

                        <button
                            type="button"
                            onClick={() => navigate("/contact")}
                            className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-blue-700 transition hover:-translate-y-0.5 hover:bg-blue-50"
                        >

                            Contact Us

                        </button>

                    </div>

                </div>

            </section>

        </Layout>
    );
}

export default FAQPage;