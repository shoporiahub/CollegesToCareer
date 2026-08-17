import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
    X,
    Home,
    FileText,
    BadgeDollarSign,
    Mail,
    CircleHelp,
    LayoutDashboard,
} from "lucide-react";

import { useAuthStore } from "../../features/auth/store/auth.store";

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
    const navigate = useNavigate();

    const isAuthenticated = useAuthStore(
        (state) => state.isAuthenticated,
    );

    const user = useAuthStore(
        (state) => state.user,
    );

    const logout = useAuthStore(
        (state) => state.logout,
    );

    useEffect(() => {
        document.body.style.overflow = isOpen
            ? "hidden"
            : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    const handleLogout = () => {
        logout();
        onClose();
        navigate("/");
    };

    return (
        <div
            className={`fixed inset-0 z-[100] transition-all duration-300 ${
                isOpen
                    ? "visible opacity-100"
                    : "invisible opacity-0"
            }`}
        >
            {/* Overlay */}

            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />

            {/* Drawer */}

            <aside
                className={`absolute right-0 top-0 flex h-full w-80 max-w-[88vw] flex-col overflow-hidden bg-white shadow-2xl transition-transform duration-300 ${
                    isOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                }`}
            >
                {/* Header */}

                <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 px-6 pb-8 pt-6 text-white">

                    <div className="mb-8 flex items-center justify-between">

                        <div className="flex items-center gap-3">

                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold">
                                R
                            </div>

                            <span className="text-xl font-bold">
                                ResumeAI
                            </span>

                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close menu"
                            className="rounded-xl p-2 transition hover:bg-white/10"
                        >
                            <X size={24} />
                        </button>

                    </div>

                    <h2 className="text-2xl font-extrabold">
                        Build Your Career
                    </h2>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                        Create professional, ATS-friendly resumes
                        in minutes.
                    </p>

                    <div className="mt-5 inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-blue-100">
                        AI • Professional • ATS Friendly
                    </div>

                </div>

                {/* Navigation */}

                <div className="flex-1 space-y-2 overflow-y-auto px-4 py-6">

                    {navigation.map((item) => {

                        const Icon = item.icon;

                        return (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                onClick={onClose}
                                className={({ isActive }) =>
                                    `flex items-center gap-4 rounded-2xl px-4 py-3 text-base font-semibold transition-all duration-200 ${
                                        isActive
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                                    }`
                                }
                            >
                                <Icon size={20} />

                                <span>
                                    {item.label}
                                </span>
                            </NavLink>
                        );
                    })}

                    {isAuthenticated && (
                        <NavLink
                            to="/dashboard"
                            onClick={onClose}
                            className={({ isActive }) =>
                                `flex items-center gap-4 rounded-2xl px-4 py-3 text-base font-semibold transition ${
                                    isActive
                                        ? "bg-blue-600 text-white"
                                        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                                }`
                            }
                        >
                            <LayoutDashboard size={20} />

                            <span>
                                Dashboard
                            </span>
                        </NavLink>
                    )}

                </div>

                {/* Footer */}

                <div className="border-t border-slate-200 bg-slate-50 p-5">

                    {!isAuthenticated ? (

                        <div className="space-y-3">

                            <button
                                type="button"
                                onClick={() => {
                                    onClose();
                                    navigate("/login");
                                }}
                                className="w-full rounded-xl border border-slate-300 bg-white py-3 font-semibold text-slate-800 transition hover:bg-slate-100 active:scale-[0.98]"
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    onClose();
                                    navigate("/register");
                                }}
                                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-lg transition hover:bg-blue-700 active:scale-[0.98]"
                            >
                                Create Free Account
                            </button>

                        </div>

                    ) : (

                        <div className="space-y-4">

                            {/* User Card */}

                            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

                                <div className="flex items-center gap-4">

                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">

                                        {user?.first_name
                                            ?.charAt(0)
                                            .toUpperCase()}

                                    </div>

                                    <div className="min-w-0">

                                        <p className="truncate font-semibold text-slate-900">

                                            {user?.first_name}{" "}
                                            {user?.last_name}

                                        </p>

                                        <p className="truncate text-sm text-slate-500">
                                            {user?.email}
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <button
                                type="button"
                                onClick={handleLogout}
                                className="w-full rounded-xl bg-red-500 py-3 font-semibold text-white transition hover:bg-red-600 active:scale-[0.98]"
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