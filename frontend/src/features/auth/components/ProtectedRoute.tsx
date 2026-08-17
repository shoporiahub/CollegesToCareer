import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import type { ReactNode } from "react";

import { useAuthStore } from "../store/auth.store";


interface Props {
    children: ReactNode;
}


function ProtectedRoute({
    children,
}: Props) {

    const {
        user,
        loading,
        fetchCurrentUser,
    } = useAuthStore();


    const token =
        localStorage.getItem(
            "access_token",
        );


    useEffect(() => {

        /*
         * If there is a token, always validate
         * it against the backend.
         *
         * We do NOT check `user` here because
         * Zustand may have restored an old user
         * from localStorage.
         */
        if (!token) {
            return;
        }


        fetchCurrentUser();

    }, [
        token,
        fetchCurrentUser,
    ]);


    /*
     * No token means the user is not logged in.
     */
    if (!token) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }


    /*
     * Wait while the backend validates
     * the persisted session.
     */
    if (loading) {

        return (
            <div className="flex min-h-screen items-center justify-center">

                <div className="text-center">

                    <div className="mx-auto h-8 w-8 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600" />

                    <p className="mt-4 text-sm font-medium text-slate-600">
                        Checking your session...
                    </p>

                </div>

            </div>
        );

    }


    /*
     * Token existed but backend rejected it.
     *
     * fetchCurrentUser() calls logout(), which
     * clears the Zustand state and token.
     */
    if (!user) {

        return (
            <Navigate
                to="/login"
                replace
            />
        );

    }


    return <>{children}</>;
}


export default ProtectedRoute;