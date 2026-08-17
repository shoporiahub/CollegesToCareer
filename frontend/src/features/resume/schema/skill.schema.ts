import { z } from "zod";

export const skillSchema = z.object({
    name: z
        .string()
        .min(2, "Skill must be at least 2 characters")
        .max(100, "Skill name is too long"),

    category: z
        .string()
        .optional()
        .or(z.literal("")),

    proficiency: z
        .string()
        .optional()
        .or(z.literal("")),
});

export type SkillFormValues = z.infer<
    typeof skillSchema
>;