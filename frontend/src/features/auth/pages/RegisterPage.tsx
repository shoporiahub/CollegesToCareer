import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    registerSchema,
    type RegisterFormData,
} from "../schemas/auth.schema";

import { useAuthStore } from "../store/auth.store";

import Input from "../../../components/ui/Input";
import FormField from "../../../components/ui/FormField";
import Button from "../../../components/ui/Button";

import registerImage from "../../../assets/authimage.png";

function RegisterPage() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const redirect = searchParams.get("redirect");

    const registerUser = useAuthStore(
        (state) => state.register,
    );

    const loading = useAuthStore(
        (state) => state.loading,
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
    });

    const onSubmit = async (
        data: RegisterFormData,
    ) => {
        try {
            await registerUser(data);

            navigate(redirect ?? "/");
        } catch (error) {
            console.error(error);

            alert("Registration failed");
        }
    };

    return (
        <div className="min-h-screen lg:grid lg:grid-cols-2">

            {/* Left - Registration Form */}

            <div className="flex min-h-screen items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16 xl:px-24">

                <div className="w-full max-w-lg">

                    {/* Logo */}


                    {/* Heading */}

                    <div>

                        <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
                            Get Started
                        </span>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                            Create Your Account
                        </h1>

                        <p className="mt-4 leading-7 text-slate-500">
                            Create your ResumeAI account and start
                            building professional resumes.
                        </p>

                    </div>

                    {/* Form */}

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-10 space-y-6"
                    >

                        {/* First Name */}

                        <FormField
                            label="First Name"
                            error={errors.first_name?.message}
                        >
                            <Input
                                placeholder="Enter your first name"
                                autoComplete="given-name"
                                {...register("first_name")}
                            />
                        </FormField>

                        {/* Last Name */}

                        <FormField
                            label="Last Name"
                            error={errors.last_name?.message}
                        >
                            <Input
                                placeholder="Enter your last name"
                                autoComplete="family-name"
                                {...register("last_name")}
                            />
                        </FormField>

                        {/* Email */}

                        <FormField
                            label="Email Address"
                            error={errors.email?.message}
                        >
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                autoComplete="email"
                                {...register("email")}
                            />
                        </FormField>

                        {/* Password */}

                        <FormField
                            label="Password"
                            error={errors.password?.message}
                        >
                            <Input
                                type="password"
                                placeholder="Create a strong password"
                                autoComplete="new-password"
                                {...register("password")}
                            />
                        </FormField>

                        {/* Submit */}

                        <Button
                            type="submit"
                            disabled={loading}
                            className="h-12 w-full cursor-pointer rounded-xl text-base font-semibold"
                        >
                            {loading
                                ? "Creating Account..."
                                : "Create Account"}
                        </Button>

                    </form>

                    {/* Footer */}

                    <div className="mt-8 border-t border-slate-200 pt-6 text-center">

                        <p className="text-slate-600">
                            Already have an account?
                        </p>

                        <Link
                            to={
                                redirect
                                    ? `/login?redirect=${encodeURIComponent(redirect)}`
                                    : "/login"
                            }
                            className="mt-2 inline-block font-semibold text-blue-600 transition hover:text-blue-700"
                        >
                            Sign In →
                        </Link>

                        <div className="mt-4">

                            <Link
                                to="/"
                                className="text-sm font-medium text-slate-500 transition hover:text-blue-600"
                            >
                                ← Back to Home
                            </Link>

                        </div>

                    </div>

                    <p className="mt-8 text-center text-sm text-slate-400">
                        Build professional resumes.
                        Prepare for your next opportunity.
                    </p>

                </div>

            </div>

            {/* Right - Image */}

            <div className="relative hidden min-h-screen overflow-hidden bg-slate-900 lg:block">

                <img
                    src={registerImage}
                    alt="ResumeAI resume builder"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-12 xl:p-16">

                    <h2 className="max-w-xl text-4xl font-bold leading-tight text-white xl:text-5xl">
                        Create a resume
                        <br />
                        you're proud of.
                    </h2>

                    <p className="mt-5 max-w-lg text-lg leading-8 text-slate-200">
                        Build a professional, ATS-friendly resume
                        with modern templates and AI-powered
                        assistance.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default RegisterPage;