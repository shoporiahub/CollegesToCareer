import { z } from "zod";

export const experienceSchema = z.object({
    company: z
        .string()
        .min(2, "Company name must be at least 2 characters")
        .max(255, "Company name is too long"),

    position: z
        .string()
        .min(2, "Position must be at least 2 characters")
        .max(255, "Position is too long"),

    employment_type: z
        .string()
        .optional()
        .or(z.literal("")),

    location: z
        .string()
        .optional()
        .or(z.literal("")),

    start_date: z
        .string()
        .min(1, "Start date is required"),

    end_date: z
        .string()
        .optional()
        .or(z.literal("")),

    is_current: z.boolean().default(false),

    description: z
        .string()
        .optional()
        .or(z.literal("")),
});

export type ExperienceFormValues = z.infer<
    typeof experienceSchema
>;