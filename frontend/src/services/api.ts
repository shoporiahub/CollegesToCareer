import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});


/*
 * =========================================================
 * Add access token to every request
 * =========================================================
 */

api.interceptors.request.use(
    (config) => {

        const token =
            localStorage.getItem(
                "access_token",
            );

        if (token) {

            config.headers.Authorization =
                `Bearer ${token}`;

        }

        return config;
    },
);


/*
 * =========================================================
 * Handle authentication errors
 * =========================================================
 */

api.interceptors.response.use(
    (response) => {
        return response;
    },

    (error) => {

        if (
            error.response?.status === 401
        ) {

            /*
             * Remove stale/invalid token.
             */
            localStorage.removeItem(
                "access_token",
            );


            /*
             * Remove any stored authentication
             * state if your application uses it.
             */
            localStorage.removeItem(
                "auth-storage",
            );


            /*
             * Redirect to login.
             *
             * Avoid redirecting if already
             * on the login page.
             */
            if (
                window.location.pathname !==
                "/login"
            ) {

                window.location.href =
                    "/login";

            }

        }

        return Promise.reject(
            error,
        );
    },
);


export default api;