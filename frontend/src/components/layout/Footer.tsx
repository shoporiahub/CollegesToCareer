import {
    Mail,
    MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../../assets/application_logo.png";
function Footer() {
    return (
        <footer className="bg-slate-950 text-white">

            <div className="w-full px-6 py-16 sm:px-10 lg:px-16 lg:py-20 xl:px-20">

                <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">

                    {/* Brand */}

                    <div>

                        <Link
                            to="/"
                            className="inline-flex items-center gap-3"
                        >

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl">
                                <img src={logo} alt="Logo" />
                            </div>

                            <div>

                                <h2 className="text-2xl font-extrabold tracking-tight text-white">
                                    Colleges
                                </h2>

                                <p className="font-bold text-blue-400">
                                    to Career
                                </p>

                            </div>

                        </Link>


                        <p className="mt-6 max-w-md text-base leading-8 text-slate-400">
                            Build professional resumes that help students,
                            fresh graduates, and professionals stand out
                            in today's competitive job market.
                        </p>


                        {/* Contact */}

                        <div className="mt-8 space-y-4">

                            <div className="flex items-center gap-3 text-slate-400">

                                <Mail
                                    size={18}
                                    className="shrink-0 text-blue-400"
                                />

                                <span>
                                    collegestocareer.com
                                </span>

                            </div>

                            <div className="flex items-center gap-3 text-slate-400">

                                <MapPin
                                    size={18}
                                    className="shrink-0 text-blue-400"
                                />

                                <span>
                                    India
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* Product */}

                    <div>

                        <h3 className="text-base font-bold text-white">
                            Product
                        </h3>

                        <div className="mt-6 space-y-4">

                            <Link
                                to="/resume-builder"
                                className="block text-slate-400 transition-colors hover:text-blue-400"
                            >
                                Resume Builder
                            </Link>

                            <Link
                                to="/templates"
                                className="block text-slate-400 transition-colors hover:text-blue-400"
                            >
                                Resume Designs
                            </Link>

                            <Link
                                to="/pricing"
                                className="block text-slate-400 transition-colors hover:text-blue-400"
                            >
                                Pricing
                            </Link>

                        </div>

                    </div>


                    {/* Company */}

                    <div>

                        <h3 className="text-base font-bold text-white">
                            Company
                        </h3>

                        <div className="mt-6 space-y-4">

                            <Link
                                to="/about"
                                className="block text-slate-400 transition-colors hover:text-blue-400"
                            >
                                About
                            </Link>

                            <Link
                                to="/contact"
                                className="block text-slate-400 transition-colors hover:text-blue-400"
                            >
                                Contact
                            </Link>

                            <Link
                                to="/faq"
                                className="block text-slate-400 transition-colors hover:text-blue-400"
                            >
                                FAQs
                            </Link>

                        </div>

                    </div>


                    {/* Legal */}

                    <div>

                        <h3 className="text-base font-bold text-white">
                            Legal
                        </h3>

                        <div className="mt-6 space-y-4">

                            <Link
                                to="/privacy-policy"
                                className="block text-slate-400 transition-colors hover:text-blue-400"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                to="/terms-of-service"
                                className="block text-slate-400 transition-colors hover:text-blue-400"
                            >
                                Terms of Service
                            </Link>

                        </div>

                    </div>

                </div>


                {/* Bottom */}

                <div className="mt-16 flex flex-col gap-4 border-t border-slate-800 pt-8 sm:flex-row sm:items-center sm:justify-between">

                    <p className="text-sm text-slate-500">
                        © 2026 Colleges to Career. All rights reserved.
                    </p>

                    <p className="text-sm font-medium text-slate-500">
                        Build Your Resume. Launch Your Career.
                    </p>

                </div>

            </div>

        </footer>
    );
}

export default Footer;