import { Link } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import StepCard from "../../components/how-it-works/StepCard";
import { STEPS } from "../../components/how-it-works/steps";


function HowItWorksPage() {
    return (
        <Layout>

            {/* Hero */}

            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-28">

                <div className="mx-auto max-w-6xl px-8 text-center">

                    <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
                        How It Works
                    </span>

                    <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white lg:text-6xl">

                        Build Your Professional Resume

                        <span className="text-blue-300">
                            {" "}in 4 Simple Steps
                        </span>

                    </h1>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">

                        Create a professional, ATS-friendly resume without
                        spending hours formatting documents. Add your details,
                        choose a template, and download your finished PDF.

                    </p>

                </div>

            </section>


            {/* Steps */}

            <section className="bg-slate-50 py-28">

                <div className="mx-auto max-w-7xl px-8">

                    <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

                        {STEPS.map((step) => (
                            <StepCard
                                key={step.number}
                                {...step}
                            />
                        ))}

                    </div>

                </div>

            </section>


            {/* Why Choose College to Career */}

            <section className="bg-white py-28">

                <div className="mx-auto max-w-6xl px-8">

                    <div className="text-center">

                        <h2 className="text-4xl font-extrabold text-slate-900">
                            Why Choose College to Career?
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

                            Everything you need to create a professional
                            resume that helps you present your skills,
                            experience, and career journey with confidence.

                        </p>

                    </div>


                    {/* Feature Cards */}

                    <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                        {/* Fast */}

                        <div className="group rounded-3xl border border-amber-100 bg-amber-50 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-100 text-5xl transition-transform duration-300 group-hover:scale-110">
                                ⚡
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                Fast
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                Build a professional resume in minutes
                                instead of spending hours formatting it.
                            </p>

                        </div>


                        {/* Templates */}

                        <div className="group rounded-3xl border border-blue-100 bg-blue-50 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-100 text-5xl transition-transform duration-300 group-hover:scale-110">
                                🎨
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                Professional Templates
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                Choose from professionally designed
                                resume templates for different career paths.
                            </p>

                        </div>


                        {/* AI */}

                        <div className="group rounded-3xl border border-violet-100 bg-violet-50 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-100 text-5xl transition-transform duration-300 group-hover:scale-110">
                                🤖
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                AI Assisted
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                Get AI-powered assistance while creating
                                and improving your resume content.
                            </p>

                        </div>


                        {/* PDF */}

                        <div className="group rounded-3xl border border-emerald-100 bg-emerald-50 p-8 text-center shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-100 text-5xl transition-transform duration-300 group-hover:scale-110">
                                📄
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                PDF Ready
                            </h3>

                            <p className="mt-4 leading-7 text-slate-600">
                                Generate a professionally formatted PDF
                                ready to download, print, or share.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}

            <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 py-24">

                <div className="mx-auto max-w-4xl px-8 text-center">

                    <h2 className="text-5xl font-extrabold text-white">
                        Ready to Build Your Resume?
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-300">

                        Create a professional resume, choose a template,
                        and download your PDF in minutes.

                    </p>

                    <Link
                        to="/resume-builder"
                        className="mt-10 inline-block rounded-2xl bg-white px-10 py-4 text-lg font-bold text-blue-800 transition hover:scale-105 hover:bg-slate-100"
                    >
                        Create Your Resume
                    </Link>

                </div>

            </section>

        </Layout>
    );
}


export default HowItWorksPage;