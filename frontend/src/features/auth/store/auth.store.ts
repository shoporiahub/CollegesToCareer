import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
    login as loginApi,
    register as registerApi,
    getCurrentUser,
    type LoginRequest,
    type RegisterRequest,
    type User,
} from "../api/auth.service";


interface AuthState {
    user: User | null;

    token: string | null;

    isAuthenticated: boolean;

    loading: boolean;

    login: (
        data: LoginRequest,
    ) => Promise<void>;

    register: (
        data: RegisterRequest,
    ) => Promise<void>;

    fetchCurrentUser: () => Promise<void>;

    logout: () => void;
}


export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({

            user: null,

            token: null,

            isAuthenticated: false,

            loading: false,


            /*
             * =====================================================
             * LOGIN
             * =====================================================
             */

            async login(data) {

                set({
                    loading: true,
                });

                try {

                    const response =
                        await loginApi(data);

                    const accessToken =
                        response.token.access_token;


                    localStorage.setItem(
                        "access_token",
                        accessToken,
                    );


                    set({
                        user: response.user,

                        token: accessToken,

                        isAuthenticated: true,

                        loading: false,
                    });

                } catch (error) {

                    set({
                        loading: false,
                    });

                    throw error;
                }
            },


            /*
             * =====================================================
             * REGISTER
             * =====================================================
             */

            async register(data) {

                set({
                    loading: true,
                });

                try {

                    const response =
                        await registerApi(data);

                    const accessToken =
                        response.token.access_token;


                    localStorage.setItem(
                        "access_token",
                        accessToken,
                    );


                    set({
                        user: response.user,

                        token: accessToken,

                        isAuthenticated: true,

                        loading: false,
                    });

                } catch (error) {

                    set({
                        loading: false,
                    });

                    throw error;
                }
            },


            /*
             * =====================================================
             * VALIDATE / RESTORE SESSION
             * =====================================================
             */

            async fetchCurrentUser() {

                set({
                    loading: true,
                });


                const accessToken =
                    localStorage.getItem(
                        "access_token",
                    );


                /*
                 * No token.
                 */
                if (!accessToken) {

                    set({

                        user: null,

                        token: null,

                        isAuthenticated: false,

                        loading: false,

                    });

                    return;
                }


                try {

                    /*
                     * This request validates the JWT
                     * against the backend.
                     */
                    const user =
                        await getCurrentUser();


                    /*
                     * JWT is valid.
                     */
                    set({

                        user,

                        token: accessToken,

                        isAuthenticated: true,

                        loading: false,

                    });

                } catch (error) {

                    console.error(
                        "Authentication validation failed:",
                        error,
                    );


                    /*
                     * JWT is expired/invalid.
                     */
                    localStorage.removeItem(
                        "access_token",
                    );


                    set({

                        user: null,

                        token: null,

                        isAuthenticated: false,

                        loading: false,

                    });

                }

            },


            /*
             * =====================================================
             * LOGOUT
             * =====================================================
             */

            logout() {

                localStorage.removeItem(
                    "access_token",
                );


                set({

                    user: null,

                    token: null,

                    isAuthenticated: false,

                    loading: false,

                });

            },

        }),


        {
            name: "auth-storage",

            partialize: (state) => ({

                user: state.user,

                token: state.token,

                isAuthenticated:
                    state.isAuthenticated,

            }),

        },
    ),
);