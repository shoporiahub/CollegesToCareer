import { z } from "zod";

export const registerSchema = z.object({
    first_name: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(100, "First name must be less than 100 characters"),

    last_name: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .max(100, "Last name must be less than 100 characters"),

    email: z.email("Enter a valid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(128, "Password must be less than 128 characters"),
});

export const loginSchema = z.object({
    email: z.email("Enter a valid email address"),

    password: z
        .string()
        .min(8, "Password must be at least 8 characters"),
});

export type RegisterFormData = z.infer<
    typeof registerSchema
>;

export type LoginFormData = z.infer<
    typeof loginSchema
>;