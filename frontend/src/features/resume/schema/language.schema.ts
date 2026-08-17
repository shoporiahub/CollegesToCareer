import { z } from "zod";

export const languageSchema = z.object({
    name: z
        .string()
        .min(2, "Language must be at least 2 characters")
        .max(100, "Language name is too long"),

    proficiency: z
        .string()
        .min(1, "Proficiency is required")
        .max(50, "Proficiency is too long"),
});

export type LanguageFormValues = z.infer<
    typeof languageSchema
>;