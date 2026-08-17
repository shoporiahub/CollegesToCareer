import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Link,
    useNavigate,
    useSearchParams,
} from "react-router-dom";

import {
    loginSchema,
    type LoginFormData,
} from "../schemas/auth.schema";

import { useAuthStore } from "../store/auth.store";

import loginImage from "../../../assets/authimage.png";

function LoginPage() {
    const navigate = useNavigate();

    const [searchParams] = useSearchParams();

    const redirect = searchParams.get("redirect");

    const login = useAuthStore(
        (state) => state.login,
    );

    const loading = useAuthStore(
        (state) => state.loading,
    );

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (
        data: LoginFormData,
    ) => {
        try {
            await login(data);

            navigate(redirect ?? "/");
        } catch (error) {
            console.error(error);

            alert("Invalid email or password");
        }
    };

    return (
        <div className="min-h-screen lg:grid lg:grid-cols-2">

            {/* Left - Login */}

            <div className="flex min-h-screen items-center justify-center bg-white px-6 py-12 sm:px-10 lg:px-16 xl:px-24">

                <div className="w-full max-w-md">

                    {/* Logo */}

                    <div className="mb-10">

                    </div>

                    {/* Heading */}

                    <div>

                        <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                            Welcome Back

                        </h1>

                        <p className="mt-4 leading-7 text-slate-500">
                            Sign in to your account to continue
                        </p>

                    </div>

                    {/* Form */}

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="mt-10 space-y-6"
                    >

                        {/* Email */}

                        <div>

                            <label
                                htmlFor="email"
                                className="mb-2 block font-medium text-slate-700"
                            >
                                Email Address
                            </label>

                            <input
                                id="email"
                                type="email"
                                autoComplete="email"
                                {...register("email")}
                                placeholder="Enter your email"
                                className={`h-12 w-full rounded-xl border px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${errors.email
                                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                                    : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                                    }`}
                            />

                            {errors.email && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.email.message}
                                </p>
                            )}

                        </div>

                        {/* Password */}

                        <div>

                            <label
                                htmlFor="password"
                                className="mb-2 block font-medium text-slate-700"
                            >
                                Password
                            </label>

                            <input
                                id="password"
                                type="password"
                                autoComplete="current-password"
                                {...register("password")}
                                placeholder="Enter your password"
                                className={`h-12 w-full rounded-xl border px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 ${errors.password
                                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                                    : "border-slate-300 focus:border-blue-600 focus:ring-blue-100"
                                    }`}
                            />

                            {errors.password && (
                                <p className="mt-2 text-sm text-red-500">
                                    {errors.password.message}
                                </p>
                            )}

                        </div>

                        {/* Submit */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="h-12 w-full rounded-xl bg-blue-600 text-base font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                        >
                            {loading
                                ? "Signing in..."
                                : "Sign In"}
                        </button>

                    </form>

                    {/* Register */}

                    <div className="mt-8 border-t border-slate-200 pt-6 text-center">

                        <p className="text-slate-600">
                            Don't have a account?
                        </p>

                        <Link
                            to={
                                redirect
                                    ? `/register?redirect=${encodeURIComponent(redirect)}`
                                    : "/register"
                            }
                            className="mt-2 inline-block font-semibold text-blue-600 transition hover:text-blue-700"
                        >
                            Create Your Account →
                        </Link>

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
                    src={loginImage}
                    alt="ResumeAI"
                    className="absolute inset-0 h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-12 xl:p-16">

                    <h2 className="max-w-xl text-4xl font-bold leading-tight text-white xl:text-5xl">
                        Build a resume
                        <br />
                        that gets noticed.
                    </h2>

                    <p className="mt-5 max-w-lg text-lg leading-8 text-slate-200">
                        Create professional, ATS-friendly resumes
                        with modern templates and AI-powered
                        assistance.
                    </p>

                </div>

            </div>

        </div>
    );
}

export default LoginPage;