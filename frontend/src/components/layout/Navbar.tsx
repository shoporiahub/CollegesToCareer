import { useState } from "react";

import {
    Menu,
} from "lucide-react";

import {
    NavLink,
    useNavigate,
} from "react-router-dom";

import {
    NAVIGATION,
} from "../../constants/navigation";

import {
    useAuthStore,
} from "../../features/auth/store/auth.store";

import HamburgerMenu from "./HamburgerMenu";

import logo from "../../assets/application_logo.png";


function Navbar() {

    const navigate =
        useNavigate();


    const [
        isMenuOpen,
        setIsMenuOpen,
    ] = useState(false);


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


    const handleLogout = () => {

        logout();

        navigate("/");

    };


    /*
     * Home is represented by the logo,
     * so it doesn't need to appear in
     * the navigation.
     */

    const navigationItems =
        NAVIGATION.filter(
            (item) =>
                item.href !== "/",
        );


    return (
        <>

            <nav
                className="
                    sticky
                    top-0
                    z-50
                    border-b
                    border-slate-200
                    bg-white
                    shadow-sm
                "
            >

                {/* ================================================= */}
                {/* NAVBAR CONTENT */}
                {/* ================================================= */}

                <div
                    className="
                        flex
                        h-[68px]
                        w-full
                        items-center
                        justify-between
                        px-4
                        sm:h-[76px]
                        sm:px-6
                        lg:h-[82px]
                        lg:px-10
                        xl:px-16
                    "
                >

                    {/* ================================================= */}
                    {/* LOGO */}
                    {/* ================================================= */}

                    <NavLink
                        to="/"
                        className="
                            flex
                            shrink-0
                            items-center
                            transition-opacity
                            duration-200
                            hover:opacity-90
                        "
                    >

                        <img
                            src={logo}
                            alt="College to Career"
                            className="
                                h-14
                                w-auto
                                object-contain
                                sm:h-16
                                lg:h-20
                                xl:h-24
                            "
                        />

                    </NavLink>


                    {/* ================================================= */}
                    {/* DESKTOP NAVIGATION */}
                    {/* ================================================= */}

                    <div
                        className="
                            hidden
                            items-center
                            gap-7
                            lg:flex
                            xl:gap-9
                        "
                    >

                        {navigationItems.map(
                            (item) => (

                                <NavLink
                                    key={
                                        item.href
                                    }
                                    to={
                                        item.href
                                    }
                                    className={({
                                        isActive,
                                    }) =>
                                        `
                                        text-[16px]
                                        font-bold
                                        text-blue-600
                                        transition-all
                                        duration-200
                                        hover:text-blue-800
                                        ${isActive
                                            ? "text-blue-800"
                                            : ""
                                        }
                                        `
                                    }
                                >

                                    {
                                        item.label
                                    }

                                </NavLink>

                            ),
                        )}

                    </div>


                    {/* ================================================= */}
                    {/* DESKTOP ACTIONS */}
                    {/* ================================================= */}

                    <div
                        className="
                            hidden
                            items-center
                            gap-3
                            lg:flex
                        "
                    >

                        {!isAuthenticated ? (

                            <>

                                {/* Login */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate(
                                            "/login",
                                        )
                                    }
                                    className="
                                        rounded-xl
                                        border
                                        border-blue-200
                                        bg-blue-50
                                        px-5
                                        py-3
                                        text-[16px]
                                        font-bold
                                        text-blue-600
                                        transition-all
                                        duration-200
                                        hover:border-blue-600
                                        hover:bg-blue-600
                                        hover:text-white
                                    "
                                >

                                    Login / Register

                                </button>


                                {/* Create Resume */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate(
                                            "/resume-builder",
                                        )
                                    }
                                    className="
                                        rounded-xl
                                        border
                                        border-blue-200
                                        bg-white
                                        px-6
                                        py-3
                                        text-[16px]
                                        font-bold
                                        text-blue-600
                                        shadow-md
                                        transition-all
                                        duration-200
                                        hover:bg-blue-50
                                        hover:shadow-lg
                                    "
                                >

                                    Create Resume

                                </button>

                            </>

                        ) : (

                            <>

                                {/* Dashboard */}

                                <button
                                    type="button"
                                    onClick={() =>
                                        navigate(
                                            "/dashboard",
                                        )
                                    }
                                    className="
                                        rounded-xl
                                        border
                                        border-blue-200
                                        bg-blue-50
                                        px-5
                                        py-3
                                        text-[16px]
                                        font-bold
                                        text-blue-600
                                        transition-all
                                        duration-200
                                        hover:border-blue-600
                                        hover:bg-blue-600
                                        hover:text-white
                                    "
                                >

                                    Hi,{" "}
                                    {
                                        user?.first_name
                                    }

                                </button>


                                {/* Logout */}

                                <button
                                    type="button"
                                    onClick={
                                        handleLogout
                                    }
                                    className="
                                        rounded-xl
                                        border
                                        border-red-200
                                        bg-white
                                        px-5
                                        py-3
                                        text-[16px]
                                        font-semibold
                                        text-red-600
                                        transition
                                        hover:bg-red-50
                                    "
                                >

                                    Logout

                                </button>

                            </>

                        )}

                    </div>


                    {/* ================================================= */}
                    {/* MOBILE MENU BUTTON */}
                    {/* ================================================= */}

                    <button
                        type="button"
                        aria-label="Open navigation menu"
                        aria-expanded={
                            isMenuOpen
                        }
                        onClick={() =>
                            setIsMenuOpen(
                                true,
                            )
                        }
                        className="
                            flex
                            h-11
                            w-11
                            items-center
                            justify-center
                            rounded-xl
                            border
                            border-slate-200
                            bg-white
                            text-slate-800
                            shadow-sm
                            transition-all
                            duration-200
                            hover:border-blue-200
                            hover:bg-blue-50
                            hover:text-blue-600
                            active:scale-95
                            lg:hidden
                        "
                    >

                        <Menu
                            size={25}
                            strokeWidth={2.2}
                        />

                    </button>

                </div>

            </nav>


            {/* ================================================= */}
            {/* MOBILE MENU */}
            {/* ================================================= */}

            <HamburgerMenu
                isOpen={
                    isMenuOpen
                }
                onClose={() =>
                    setIsMenuOpen(
                        false,
                    )
                }
            />

        </>
    );
}


export default Navbar;