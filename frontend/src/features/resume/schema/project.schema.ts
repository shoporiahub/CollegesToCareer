import { z } from "zod";

export const projectSchema = z.object({
    title: z
        .string()
        .min(2, "Project title must be at least 2 characters")
        .max(255, "Project title is too long"),

    organization: z
        .string()
        .optional()
        .or(z.literal("")),

    technologies: z
        .string()
        .optional()
        .or(z.literal("")),

    github_url: z
        .string()
        .optional()
        .or(z.literal("")),

    live_url: z
        .string()
        .optional()
        .or(z.literal("")),

    start_date: z
        .string()
        .optional()
        .or(z.literal("")),

    end_date: z
        .string()
        .optional()
        .or(z.literal("")),

    description: z
        .string()
        .optional()
        .or(z.literal("")),
});

export type ProjectFormValues = z.infer<
    typeof projectSchema
>;