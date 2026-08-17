import { z } from "zod";

export const achievementSchema = z.object({
    title: z
        .string()
        .min(2, "Achievement title must be at least 2 characters")
        .max(255, "Achievement title is too long"),

    issuer: z
        .string()
        .optional()
        .or(z.literal("")),

    achievement_date: z
        .string()
        .optional()
        .or(z.literal("")),

    description: z
        .string()
        .optional()
        .or(z.literal("")),
});

export type AchievementFormValues = z.infer<
    typeof achievementSchema
>;