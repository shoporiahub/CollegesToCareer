import { Link } from "react-router-dom";

import Layout from "../../components/layout/Layout";
import PricingCard from "../../components/pricing/PricingCard";
import { PLANS } from "../../components/pricing/plans";


function PricingPage() {

    return (

        <Layout>

            {/* ================================================= */}
            {/* HERO */}
            {/* ================================================= */}

            <section
                className="
                    bg-gradient-to-br
                    from-slate-950
                    via-blue-950
                    to-slate-900
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-7xl
                        px-6
                        py-20
                        text-center
                        sm:py-24
                    "
                >

                    <span
                        className="
                            inline-flex
                            rounded-full
                            bg-blue-500/20
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-blue-200
                        "
                    >
                        Simple & Transparent Pricing
                    </span>


                    <h1
                        className="
                            mt-8
                            text-4xl
                            font-extrabold
                            tracking-tight
                            text-white
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >

                        Build Your Resume.

                        <span
                            className="
                                block
                                text-blue-400
                            "
                        >
                            Start Your Career.
                        </span>

                    </h1>


                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-3xl
                            text-base
                            leading-7
                            text-slate-300
                            sm:text-lg
                            sm:leading-8
                        "
                    >
                        Choose a plan that fits your career journey.
                        Create professional resumes, explore modern
                        templates, and get ready for your next opportunity.
                    </p>

                </div>

            </section>


            {/* ================================================= */}
            {/* PRICING */}
            {/* ================================================= */}

            <section
                className="
                    bg-white
                    py-20
                    sm:py-24
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-7xl
                        px-6
                    "
                >

                    <div
                        className="
                            grid
                            gap-8
                            lg:grid-cols-3
                        "
                    >

                        {PLANS.map(
                            (plan) => (

                                <PricingCard
                                    key={
                                        plan.name
                                    }
                                    {...plan}
                                />

                            ),
                        )}

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* FEATURES */}
            {/* ================================================= */}

            <section
                className="
                    bg-slate-50
                    py-20
                    sm:py-24
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-6xl
                        px-6
                    "
                >

                    <div
                        className="
                            text-center
                        "
                    >

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-slate-900
                                sm:text-4xl
                            "
                        >
                            Everything You Need to Start Your Career
                        </h2>


                        <p
                            className="
                                mt-4
                                text-base
                                text-slate-600
                                sm:text-lg
                            "
                        >
                            Build a resume that represents your skills,
                            experience, and career goals.
                        </p>

                    </div>


                    <div
                        className="
                            mt-12
                            grid
                            gap-6
                            sm:mt-16
                            md:grid-cols-2
                            lg:grid-cols-4
                        "
                    >

                        {/* Professional Templates */}

                        <div
                            className="
                                rounded-3xl
                                bg-white
                                p-7
                                shadow-sm
                                transition
                                hover:-translate-y-1
                                hover:shadow-lg
                                sm:p-8
                            "
                        >

                            <div
                                className="
                                    text-4xl
                                "
                            >
                                🎨
                            </div>


                            <h3
                                className="
                                    mt-5
                                    text-xl
                                    font-semibold
                                    text-slate-900
                                "
                            >
                                Professional Templates
                            </h3>


                            <p
                                className="
                                    mt-3
                                    text-slate-600
                                "
                            >
                                Choose from professionally designed
                                resume templates for students,
                                graduates, and professionals.
                            </p>

                        </div>


                        {/* ATS Friendly */}

                        <div
                            className="
                                rounded-3xl
                                bg-white
                                p-7
                                shadow-sm
                                transition
                                hover:-translate-y-1
                                hover:shadow-lg
                                sm:p-8
                            "
                        >

                            <div
                                className="
                                    text-4xl
                                "
                            >
                                🎯
                            </div>


                            <h3
                                className="
                                    mt-5
                                    text-xl
                                    font-semibold
                                    text-slate-900
                                "
                            >
                                ATS-Friendly
                            </h3>


                            <p
                                className="
                                    mt-3
                                    text-slate-600
                                "
                            >
                                Create clean and professional resumes
                                designed to be easy for recruiters
                                and applicant tracking systems to read.
                            </p>

                        </div>


                        {/* PDF */}

                        <div
                            className="
                                rounded-3xl
                                bg-white
                                p-7
                                shadow-sm
                                transition
                                hover:-translate-y-1
                                hover:shadow-lg
                                sm:p-8
                            "
                        >

                            <div
                                className="
                                    text-4xl
                                "
                            >
                                📄
                            </div>


                            <h3
                                className="
                                    mt-5
                                    text-xl
                                    font-semibold
                                    text-slate-900
                                "
                            >
                                High-Quality PDF
                            </h3>


                            <p
                                className="
                                    mt-3
                                    text-slate-600
                                "
                            >
                                Download a polished PDF resume that
                                is ready to send to recruiters,
                                companies, and internship programs.
                            </p>

                        </div>


                        {/* Secure */}

                        <div
                            className="
                                rounded-3xl
                                bg-white
                                p-7
                                shadow-sm
                                transition
                                hover:-translate-y-1
                                hover:shadow-lg
                                sm:p-8
                            "
                        >

                            <div
                                className="
                                    text-4xl
                                "
                            >
                                🔒
                            </div>


                            <h3
                                className="
                                    mt-5
                                    text-xl
                                    font-semibold
                                    text-slate-900
                                "
                            >
                                Your Information is Safe
                            </h3>


                            <p
                                className="
                                    mt-3
                                    text-slate-600
                                "
                            >
                                Your resume information stays associated
                                with your account so you can return and
                                continue working on it.
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* VALUE SECTION */}
            {/* ================================================= */}

            <section
                className="
                    bg-white
                    py-20
                    sm:py-24
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-5xl
                        px-6
                    "
                >

                    <div
                        className="
                            rounded-3xl
                            border
                            border-slate-200
                            bg-white
                            p-8
                            text-center
                            shadow-sm
                            sm:p-12
                        "
                    >

                        <div
                            className="
                                text-5xl
                            "
                        >
                            💙
                        </div>


                        <h2
                            className="
                                mt-6
                                text-3xl
                                font-bold
                                text-slate-900
                                sm:text-4xl
                            "
                        >
                            Start Building Your Career for Free
                        </h2>


                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-3xl
                                text-base
                                leading-7
                                text-slate-600
                                sm:text-lg
                            "
                        >
                            Start with the free option and create your
                            resume without committing to a paid plan.
                            Upgrade when you need additional features
                            or premium templates.
                        </p>

                    </div>

                </div>

            </section>


            {/* ================================================= */}
            {/* CTA */}
            {/* ================================================= */}

            <section
                className="
                    pb-20
                    sm:pb-24
                "
            >

                <div
                    className="
                        mx-auto
                        max-w-6xl
                        px-6
                    "
                >

                    <div
                        className="
                            rounded-3xl
                            bg-gradient-to-r
                            from-blue-600
                            to-blue-700
                            px-6
                            py-12
                            text-center
                            shadow-xl
                            sm:px-10
                            sm:py-16
                        "
                    >

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-white
                                sm:text-4xl
                            "
                        >
                            Ready to Build Your Resume?
                        </h2>


                        <p
                            className="
                                mx-auto
                                mt-5
                                max-w-2xl
                                text-base
                                leading-7
                                text-blue-100
                                sm:text-lg
                            "
                        >
                            Choose a professional template and start
                            building a resume that helps you take
                            the next step toward your career.
                        </p>


                        <div
                            className="
                                mt-8
                                flex
                                flex-col
                                justify-center
                                gap-3
                                sm:mt-10
                                sm:flex-row
                                sm:gap-4
                            "
                        >

                            <Link
                                to="/templates"
                                className="
                                    rounded-xl
                                    bg-white
                                    px-8
                                    py-4
                                    font-semibold
                                    text-blue-700
                                    transition
                                    hover:shadow-lg
                                "
                            >
                                Explore Templates
                            </Link>


                            <Link
                                to="/resume-builder"
                                className="
                                    rounded-xl
                                    border
                                    border-white/30
                                    px-8
                                    py-4
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-white/10
                                "
                            >
                                Build My Resume
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </Layout>

    );
}


export default PricingPage;