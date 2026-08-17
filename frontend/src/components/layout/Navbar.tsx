import { useState } from "react";
import { Menu } from "lucide-react";
import { NavLink, useNavigate } from "react-router-dom";

import { NAVIGATION } from "../../constants/navigation";
import { useAuthStore } from "../../features/auth/store/auth.store";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../../assets/application_logo.png";

function Navbar() {
    const navigate = useNavigate();

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isAuthenticated = useAuthStore(
        (state) => state.isAuthenticated,
    );

    const user = useAuthStore(
        (state) => state.user,
    );

    const logout = useAuthStore(
        (state) => state.logout,
    );

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    /*
     * Home is represented by the logo,
     * so it doesn't need to appear in the navigation.
     */
    const navigationItems = NAVIGATION.filter(
        (item) => item.href !== "/",
    );

    return (
        <>
            <nav className="sticky top-0 z-50 bg-white shadow-md">

                {/* Navbar Content */}

                <div className="flex h-[82px] w-full items-center justify-between px-6 sm:px-10 lg:px-16 xl:px-20">

                    {/* Logo */}

                    <NavLink
                        to="/"
                        className="flex shrink-0 items-center transition-opacity duration-200 hover:opacity-90"
                    >
                        <img
                            src={logo}
                            alt="ResumeAI"
                            className="h-24 w-auto object-contain"
                        />
                    </NavLink>

                    {/* Desktop Navigation */}

                    <div className="hidden items-center gap-9 lg:flex">

                        {navigationItems.map((item) => (
                            <NavLink
                                key={item.href}
                                to={item.href}
                                className={({ isActive }) =>
                                    `text-[18px] font-bold text-blue-600 transition-all duration-200 hover:text-[20px] ${isActive ? "text-blue-700" : ""
                                    }`
                                }
                            >
                                {item.label}
                            </NavLink>
                        ))}

                    </div>

                    {/* Desktop Actions */}

                    <div className="hidden items-center gap-3 lg:flex">

                        {!isAuthenticated ? (
                            <>
                                <button
                                    type="button"
                                    onClick={() => navigate("/login")}
                                    className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-[16px] font-bold text-blue-600 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                >
                                    Login / Register
                                </button>

                                <button
                                    type="button"
                                    onClick={() => navigate("/resume-builder")}
                                    className="rounded-xl border border-blue-200 bg-white px-6 py-3 text-[16px] font-bold text-blue-600 shadow-md transition-all duration-200 hover:bg-blue-50 hover:shadow-lg"
                                >
                                    Create Resume
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate("/dashboard")
                                    }
                                    className="rounded-xl border border-blue-200 bg-blue-50 px-5 py-3 text-[16px] font-bold text-blue-600 transition-all duration-200 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                                >
                                    Hi, {user?.first_name}
                                </button>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="rounded-xl border border-red-200 bg-white px-5 py-3 text-[16px] font-semibold text-red-600 transition hover:bg-red-50"
                                >
                                    Logout
                                </button>
                            </>
                        )}

                    </div>

                    {/* Mobile Menu */}

                    <button
                        type="button"
                        aria-label="Open navigation menu"
                        onClick={() =>
                            setIsMenuOpen(true)
                        }
                        className="rounded-xl p-2.5 text-white transition hover:bg-white/10 lg:hidden"
                    >
                        <Menu size={30} />
                    </button>

                </div>

            </nav>

            <HamburgerMenu
                isOpen={isMenuOpen}
                onClose={() =>
                    setIsMenuOpen(false)
                }
            />
        </>
    );
}

export default Navbar;