import {
    useEffect,
} from "react";

import {
    NavLink,
    useNavigate,
} from "react-router-dom";

import {
    X,
    Home,
    FileText,
    BadgeDollarSign,
    Mail,
    CircleHelp,
    LayoutDashboard,
} from "lucide-react";

import {
    useAuthStore,
} from "../../features/auth/store/auth.store";

import logo from "../../assets/application_logo.png";


type Props = {
    isOpen: boolean;
    onClose: () => void;
};


const navigation = [
    {
        label: "Home",
        href: "/",
        icon: Home,
    },
    {
        label: "Templates",
        href: "/templates",
        icon: FileText,
    },
    {
        label: "Pricing",
        href: "/pricing",
        icon: BadgeDollarSign,
    },
    {
        label: "FAQ",
        href: "/faq",
        icon: CircleHelp,
    },
    {
        label: "Contact",
        href: "/contact",
        icon: Mail,
    },
];


function HamburgerMenu({
    isOpen,
    onClose,
}: Props) {

    const navigate =
        useNavigate();


    const isAuthenticated =
        useAuthStore(
            (state) =>
                state.isAuthenticated,
        );


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
     * LOCK BODY SCROLL
     * ========================================================= */

    useEffect(() => {

        if (isOpen) {

            document.body.style.overflow =
                "hidden";

        } else {

            document.body.style.overflow =
                "";

        }


        return () => {

            document.body.style.overflow =
                "";

        };

    }, [isOpen]);


    /* =========================================================
     * LOGOUT
     * ========================================================= */

    const handleLogout = () => {

        logout();

        onClose();

        navigate("/");

    };


    /* =========================================================
     * RENDER
     * ========================================================= */

    return (

        <div
            className={`
                fixed
                inset-0
                z-[100]
                transition-all
                duration-300
                ${isOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
                }
            `}
        >

            {/* ================================================= */}
            {/* OVERLAY */}
            {/* ================================================= */}

            <div
                onClick={
                    onClose
                }
                className="
                    absolute
                    inset-0
                    bg-slate-950/50
                    backdrop-blur-sm
                "
            />


            {/* ================================================= */}
            {/* DRAWER */}
            {/* ================================================= */}

            <aside
                className={`
                    absolute
                    right-0
                    top-0
                    flex
                    h-full
                    w-[340px]
                    max-w-[88vw]
                    flex-col
                    overflow-hidden
                    bg-white
                    shadow-2xl
                    transition-transform
                    duration-300
                    ${isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >

                {/* ================================================= */}
                {/* HEADER */}
                {/* ================================================= */}

                <div
                    className="
                        bg-gradient-to-br
                        from-slate-950
                        via-blue-950
                        to-blue-800
                        px-5
                        pb-7
                        pt-5
                        text-white
                    "
                >

                    {/* Top */}

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >

                        {/* Logo */}

                        <NavLink
                            to="/"
                            onClick={
                                onClose
                            }
                            className="
                                flex
                                items-center
                            "
                        >

                            <img
                                src={logo}
                                alt="College to Career"
                                className="
                                    h-14
                                    w-auto
                                    object-contain
                                "
                            />

                        </NavLink>


                        {/* Close */}

                        <button
                            type="button"
                            onClick={
                                onClose
                            }
                            aria-label="Close navigation menu"
                            className="
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-xl
                                border
                                border-white/10
                                bg-white/10
                                text-white
                                transition
                                hover:bg-white/20
                                active:scale-95
                            "
                        >

                            <X
                                size={23}
                            />

                        </button>

                    </div>


                    {/* Heading */}

                    <div className="mt-6">

                        <h2
                            className="
                                text-2xl
                                font-extrabold
                                tracking-tight
                            "
                        >
                            Build Your Career
                        </h2>


                        <p
                            className="
                                mt-2
                                text-sm
                                leading-6
                                text-blue-100
                            "
                        >
                            Build your resume, explore
                            opportunities, and take the
                            next step toward your career.
                        </p>


                        <div
                            className="
                                mt-5
                                inline-flex
                                rounded-full
                                border
                                border-white/10
                                bg-white/10
                                px-4
                                py-2
                                text-xs
                                font-semibold
                                tracking-wide
                                text-blue-100
                            "
                        >
                            College • Career • Growth
                        </div>

                    </div>

                </div>


                {/* ================================================= */}
                {/* NAVIGATION */}
                {/* ================================================= */}

                <div
                    className="
                        flex-1
                        space-y-2
                        overflow-y-auto
                        px-4
                        py-5
                    "
                >

                    {navigation.map(
                        (item) => {

                            const Icon =
                                item.icon;


                            return (

                                <NavLink
                                    key={
                                        item.href
                                    }
                                    to={
                                        item.href
                                    }
                                    onClick={
                                        onClose
                                    }
                                    className={({
                                        isActive,
                                    }) =>
                                        `
                                        flex
                                        items-center
                                        gap-4
                                        rounded-2xl
                                        px-4
                                        py-3.5
                                        text-base
                                        font-semibold
                                        transition-all
                                        duration-200
                                        ${isActive
                                            ? `
                                                    bg-blue-600
                                                    text-white
                                                    shadow-md
                                                  `
                                            : `
                                                    text-slate-700
                                                    hover:bg-blue-50
                                                    hover:text-blue-600
                                                  `
                                        }
                                        `
                                    }
                                >

                                    <Icon
                                        size={20}
                                        strokeWidth={2}
                                    />

                                    <span>
                                        {
                                            item.label
                                        }
                                    </span>

                                </NavLink>

                            );

                        },
                    )}


                    {/* Dashboard */}

                    {isAuthenticated && (

                        <NavLink
                            to="/dashboard"
                            onClick={
                                onClose
                            }
                            className={({
                                isActive,
                            }) =>
                                `
                                flex
                                items-center
                                gap-4
                                rounded-2xl
                                px-4
                                py-3.5
                                text-base
                                font-semibold
                                transition
                                ${isActive
                                    ? `
                                            bg-blue-600
                                            text-white
                                            shadow-md
                                          `
                                    : `
                                            text-slate-700
                                            hover:bg-blue-50
                                            hover:text-blue-600
                                          `
                                }
                                `
                            }
                        >

                            <LayoutDashboard
                                size={20}
                            />

                            <span>
                                Dashboard
                            </span>

                        </NavLink>

                    )}

                </div>


                {/* ================================================= */}
                {/* FOOTER */}
                {/* ================================================= */}

                <div
                    className="
                        border-t
                        border-slate-200
                        bg-slate-50
                        p-4
                    "
                >

                    {!isAuthenticated ? (

                        <div
                            className="
                                space-y-3
                            "
                        >

                            {/* Login */}

                            <button
                                type="button"
                                onClick={() => {

                                    onClose();

                                    navigate(
                                        "/login",
                                    );

                                }}
                                className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-300
                                    bg-white
                                    py-3
                                    font-semibold
                                    text-slate-800
                                    transition
                                    hover:border-blue-200
                                    hover:bg-blue-50
                                    hover:text-blue-700
                                    active:scale-[0.98]
                                "
                            >
                                Login
                            </button>


                            {/* Create Account */}

                            <button
                                type="button"
                                onClick={() => {

                                    onClose();

                                    navigate(
                                        "/register",
                                    );

                                }}
                                className="
                                    w-full
                                    rounded-xl
                                    bg-blue-600
                                    py-3
                                    font-semibold
                                    text-white
                                    shadow-md
                                    transition
                                    hover:bg-blue-700
                                    active:scale-[0.98]
                                "
                            >
                                Create Free Account
                            </button>

                        </div>

                    ) : (

                        <div
                            className="
                                space-y-3
                            "
                        >

                            {/* User */}

                            <div
                                className="
                                    rounded-2xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-4
                                    shadow-sm
                                "
                            >

                                <div
                                    className="
                                        flex
                                        items-center
                                        gap-3
                                    "
                                >

                                    <div
                                        className="
                                            flex
                                            h-11
                                            w-11
                                            shrink-0
                                            items-center
                                            justify-center
                                            rounded-full
                                            bg-blue-600
                                            text-base
                                            font-bold
                                            text-white
                                        "
                                    >

                                        {user?.first_name
                                            ?.charAt(0)
                                            .toUpperCase()}

                                    </div>


                                    <div
                                        className="
                                            min-w-0
                                        "
                                    >

                                        <p
                                            className="
                                                truncate
                                                font-semibold
                                                text-slate-900
                                            "
                                        >
                                            {
                                                user?.first_name
                                            }{" "}
                                            {
                                                user?.last_name
                                            }
                                        </p>


                                        <p
                                            className="
                                                truncate
                                                text-sm
                                                text-slate-500
                                            "
                                        >
                                            {
                                                user?.email
                                            }
                                        </p>

                                    </div>

                                </div>

                            </div>


                            {/* Logout */}

                            <button
                                type="button"
                                onClick={
                                    handleLogout
                                }
                                className="
                                    w-full
                                    rounded-xl
                                    bg-red-500
                                    py-3
                                    font-semibold
                                    text-white
                                    transition
                                    hover:bg-red-600
                                    active:scale-[0.98]
                                "
                            >
                                Logout
                            </button>

                        </div>

                    )}

                </div>

            </aside>

        </div>
    );
}


export default HamburgerMenu;