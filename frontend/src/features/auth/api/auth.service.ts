import api from "../../../services/api";

export interface RegisterRequest {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    is_active: boolean;
    is_verified: boolean;
}

export interface TokenResponse {
    access_token: string;
    token_type: string;
}

export interface AuthResponse {
    user: User;
    token: TokenResponse;
}

export const register = async (
    data: RegisterRequest,
): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>(
        "/auth/register",
        data,
    );

    return response.data;
};

export const login = async (
    data: LoginRequest,
): Promise<AuthResponse> => {
    const response = await api.post<AuthResponse>(
        "/auth/login",
        data,
    );

    return response.data;
};

export const getCurrentUser = async (): Promise<User> => {
    const response = await api.get<User>(
        "/auth/me",
    );

    return response.data;
};