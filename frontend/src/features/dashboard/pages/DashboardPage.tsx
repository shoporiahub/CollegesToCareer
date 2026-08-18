import {
    useNavigate,
} from "react-router-dom";

import {
    Plus,
    User,
    LogOut,
    FileText,
    ArrowRight,
} from "lucide-react";

import Card from "../../../components/ui/Card";

import Button from "../../../components/ui/Button";

import {
    useAuthStore,
} from "../../auth/store/auth.store";


function DashboardPage() {

    const navigate =
        useNavigate();


    const user =
        useAuthStore(
            (state) =>
                state.user,
        );


    const logout =
        useAuthStore(
            (state) =>
                state.logout,
        );


    /* =========================================================
     * USER NAME
     * ========================================================= */

    const fullName =
        [
            user?.first_name,
            user?.last_name,
        ]
            .filter(Boolean)
            .join(" ") ||
        "there";


    /* =========================================================
     * LOGOUT
     * ========================================================= */

    const handleLogout = () => {

        logout();

        navigate(
            "/login",
        );

    };


    return (

        <div
            className="
                min-h-screen
                w-full
                overflow-hidden
                bg-gradient-to-br
                from-slate-100
                via-blue-50
                to-slate-100
                py-8
                sm:py-12
            "
        >

            <div
                className="
                    mx-auto
                    w-full
                    max-w-5xl
                    px-4
                    sm:px-6
                "
            >

                {/* ================================================= */}
                {/* HERO */}
                {/* ================================================= */}

                <div
                    className="
                        rounded-2xl
                        bg-gradient-to-r
                        from-slate-950
                        via-blue-950
                        to-slate-900
                        p-6
                        text-white
                        shadow-2xl
                        sm:rounded-3xl
                        sm:p-10
                    "
                >

                    <p
                        className="
                            text-sm
                            font-semibold
                            text-blue-300
                        "
                    >
                        College to Career
                    </p>


                    <h1
                        className="
                            mt-3
                            text-3xl
                            font-extrabold
                            tracking-tight
                            sm:text-4xl
                        "
                    >
                        Welcome back,{" "}
                        {fullName} 👋
                    </h1>


                    <p
                        className="
                            mt-4
                            max-w-2xl
                            text-sm
                            leading-6
                            text-slate-300
                            sm:text-lg
                            sm:leading-8
                        "
                    >
                        Build a professional resume,
                        showcase your skills, and take
                        the next step toward your career.
                    </p>

                </div>


                {/* ================================================= */}
                {/* PROFILE */}
                {/* ================================================= */}

                <Card
                    className="
                        mt-6
                        rounded-2xl
                        border
                        border-white/50
                        bg-white/80
                        p-5
                        shadow-xl
                        backdrop-blur
                        sm:mt-8
                        sm:rounded-3xl
                        sm:p-8
                    "
                >

                    <div
                        className="
                            mb-6
                            flex
                            items-center
                            gap-3
                        "
                    >

                        <div
                            className="
                                rounded-full
                                bg-blue-100
                                p-3
                            "
                        >

                            <User
                                className="text-blue-700"
                                size={22}
                            />

                        </div>


                        <h2
                            className="
                                text-xl
                                font-semibold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            Profile Information
                        </h2>

                    </div>


                    <div
                        className="
                            grid
                            gap-5
                            sm:grid-cols-2
                        "
                    >

                        {/* Name */}

                        <div
                            className="
                                min-w-0
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    text-slate-500
                                "
                            >
                                Name
                            </p>


                            <p
                                className="
                                    mt-1
                                    truncate
                                    text-base
                                    font-semibold
                                    text-slate-900
                                    sm:text-lg
                                "
                            >
                                {fullName}
                            </p>

                        </div>


                        {/* Email */}

                        <div
                            className="
                                min-w-0
                            "
                        >

                            <p
                                className="
                                    text-sm
                                    text-slate-500
                                "
                            >
                                Email
                            </p>


                            <p
                                className="
                                    mt-1
                                    break-all
                                    text-base
                                    font-semibold
                                    text-slate-900
                                    sm:text-lg
                                "
                            >
                                {user?.email}
                            </p>

                        </div>


                        {/* Verification */}

                        <div>

                            <p
                                className="
                                    text-sm
                                    text-slate-500
                                "
                            >
                                Account Status
                            </p>


                            <p
                                className="
                                    mt-1
                                    text-base
                                    font-semibold
                                    text-slate-900
                                    sm:text-lg
                                "
                            >
                                {user?.is_verified
                                    ? "Verified"
                                    : "Not Verified"}
                            </p>

                        </div>


                        {/* Account */}

                        <div>

                            <p
                                className="
                                    text-sm
                                    text-slate-500
                                "
                            >
                                Account
                            </p>


                            <p
                                className="
                                    mt-1
                                    text-base
                                    font-semibold
                                    text-slate-900
                                    sm:text-lg
                                "
                            >
                                {user?.is_active
                                    ? "Active"
                                    : "Inactive"}
                            </p>

                        </div>

                    </div>

                </Card>


                {/* ================================================= */}
                {/* QUICK ACTIONS */}
                {/* ================================================= */}

                <Card
                    className="
                        mt-6
                        rounded-2xl
                        border
                        border-white/50
                        bg-white/80
                        p-5
                        shadow-xl
                        backdrop-blur
                        sm:mt-8
                        sm:rounded-3xl
                        sm:p-8
                    "
                >

                    <h2
                        className="
                            text-xl
                            font-semibold
                            text-slate-900
                            sm:text-2xl
                        "
                    >
                        Quick Actions
                    </h2>


                    <p
                        className="
                            mt-2
                            text-sm
                            text-slate-500
                        "
                    >
                        Continue working on your career profile
                        or create a new resume.
                    </p>


                    <div
                        className="
                            mt-6
                            grid
                            gap-3
                            sm:flex
                            sm:flex-wrap
                        "
                    >

                        {/* Create Resume */}

                        <Button
                            onClick={() =>
                                navigate(
                                    "/resume-builder",
                                )
                            }
                            className="
                                w-full
                                cursor-pointer
                                sm:w-auto
                            "
                        >

                            <Plus
                                size={18}
                            />

                            Create Resume

                        </Button>


                        {/* Templates */}

                        <Button
                            variant="outline"
                            onClick={() =>
                                navigate(
                                    "/templates",
                                )
                            }
                            className="
                                w-full
                                cursor-pointer
                                sm:w-auto
                            "
                        >

                            <FileText
                                size={18}
                            />

                            Explore Templates

                            <ArrowRight
                                size={16}
                            />

                        </Button>


                        {/* Logout */}

                        <Button
                            variant="outline"
                            onClick={
                                handleLogout
                            }
                            className="
                                w-full
                                cursor-pointer
                                sm:w-auto
                            "
                        >

                            <LogOut
                                size={18}
                            />

                            Logout

                        </Button>

                    </div>

                </Card>

            </div>

        </div>
    );
}


export default DashboardPage;