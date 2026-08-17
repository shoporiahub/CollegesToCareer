import { z } from "zod";

export const resumeSchema = z.object({
    title: z
        .string()
        .min(2, "Resume title must be at least 2 characters")
        .max(255, "Resume title is too long"),

    first_name: z
        .string()
        .min(2, "First name must be at least 2 characters")
        .max(100, "First name is too long"),

    last_name: z
        .string()
        .min(2, "Last name must be at least 2 characters")
        .max(100, "Last name is too long"),

    email: z.email("Enter a valid email address"),

    phone: z
        .string()
        .min(8, "Phone number must be at least 8 characters")
        .max(20, "Phone number is too long"),

    headline: z
        .string()
        .max(255, "Headline is too long")
        .optional()
        .or(z.literal("")),

    summary: z
        .string()
        .optional()
        .or(z.literal("")),

    address: z
        .string()
        .optional()
        .or(z.literal("")),

    city: z
        .string()
        .optional()
        .or(z.literal("")),

    state: z
        .string()
        .optional()
        .or(z.literal("")),

    country: z
        .string()
        .optional()
        .or(z.literal("")),

    pincode: z
        .string()
        .max(20, "Pincode is too long")
        .optional()
        .or(z.literal("")),

    linkedin_url: z
        .string()
        .optional()
        .or(z.literal("")),

    github_url: z
        .string()
        .optional()
        .or(z.literal("")),

    portfolio_url: z
        .string()
        .optional()
        .or(z.literal("")),

    website_url: z
        .string()
        .optional()
        .or(z.literal("")),

    profile_photo: z
        .string()
        .optional()
        .or(z.literal("")),

    template: z
        .string()
        .default("modern"),

    theme: z
        .string()
        .default("blue"),

    font: z
        .string()
        .default("inter"),

    is_default: z
        .boolean()
        .default(false),
});

export type ResumeFormValues = z.infer<typeof resumeSchema>;