import { z } from "zod";

export const certificationSchema = z.object({
    name: z
        .string()
        .min(2, "Certification name must be at least 2 characters")
        .max(255, "Certification name is too long"),

    issuing_organization: z
        .string()
        .min(2, "Issuing organization is required"),

    issue_date: z
        .string()
        .optional()
        .or(z.literal("")),

    expiry_date: z
        .string()
        .optional()
        .or(z.literal("")),

    credential_id: z
        .string()
        .optional()
        .or(z.literal("")),

    credential_url: z
        .string()
        .optional()
        .or(z.literal("")),

    description: z
        .string()
        .optional()
        .or(z.literal("")),
});

export type CertificationFormValues = z.infer<
    typeof certificationSchema
>;