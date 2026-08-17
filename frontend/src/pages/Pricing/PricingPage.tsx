import { Link } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import PricingCard from "../../components/pricing/PricingCard";
import { PLANS } from "../../components/pricing/plans";

function PricingPage() {
    return (
        <Layout>
            {/* Hero */}

            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
                <div className="mx-auto max-w-7xl px-6 py-24 text-center">
                    <span className="rounded-full bg-blue-500/20 px-5 py-2 text-sm font-semibold text-blue-200">
                        Pricing
                    </span>

                    <h1 className="mt-8 text-5xl font-bold tracking-tight text-white lg:text-6xl">
                        Simple Pricing for
                        <span className="block text-blue-400">
                            Every Family
                        </span>
                    </h1>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
                        Whether you're creating your first marriage biodata or
                        generating multiple premium designs, choose the plan
                        that's right for you.
                    </p>
                </div>
            </section>

            {/* Pricing */}

            <section className="bg-white py-24">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid gap-8 lg:grid-cols-3">
                        {PLANS.map((plan) => (
                            <PricingCard
                                key={plan.name}
                                {...plan}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}

            <section className="bg-slate-50 py-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-slate-900">
                            Why Choose Vivah Craft?
                        </h2>

                        <p className="mt-4 text-lg text-slate-600">
                            Everything you need to create a beautiful marriage
                            biodata.
                        </p>
                    </div>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="text-4xl">🎨</div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Premium Designs
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Beautiful professionally designed marriage
                                biodatas.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="text-4xl">⚡</div>

                            <h3 className="mt-5 text-xl font-semibold">
                                AI Powered
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Generate elegant biodatas in minutes.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="text-4xl">📄</div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Print Ready
                            </h3>

                            <p className="mt-3 text-slate-600">
                                High-quality PDF downloads ready for printing.
                            </p>
                        </div>

                        <div className="rounded-3xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                            <div className="text-4xl">🔒</div>

                            <h3 className="mt-5 text-xl font-semibold">
                                Secure
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Your information remains safe and private.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Guarantee */}

            <section className="py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="rounded-3xl border border-slate-200 bg-white p-12 text-center shadow-sm">
                        <div className="text-5xl">💙</div>

                        <h2 className="mt-6 text-4xl font-bold text-slate-900">
                            No Hidden Charges
                        </h2>

                        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
                            Start with the Free plan and upgrade only when you
                            need more biodata generations. Cancel anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}

            <section className="pb-24">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-16 text-center shadow-xl">
                        <h2 className="text-4xl font-bold text-white">
                            Ready to Create Your Biodata?
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
                            Create premium marriage biodatas with beautiful AI
                            designs in minutes.
                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">
                            <Link
                                to="/templates"
                                className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:shadow-lg"
                            >
                                Explore Templates
                            </Link>

                            <Link
                                to="/register"
                                className="rounded-xl border border-white/30 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                            >
                                Get Started Free
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}

export default PricingPage;