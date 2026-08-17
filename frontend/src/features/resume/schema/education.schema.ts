import { z } from "zod";

export const educationSchema = z.object({
    institution: z
        .string()
        .min(2, "Institution must be at least 2 characters")
        .max(255, "Institution name is too long"),

    degree: z
        .string()
        .min(2, "Degree must be at least 2 characters")
        .max(255, "Degree is too long"),

    field_of_study: z
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

    grade: z
        .string()
        .optional()
        .or(z.literal("")),

    description: z
        .string()
        .optional()
        .or(z.literal("")),
});

export type EducationFormValues = z.infer<
    typeof educationSchema
>;