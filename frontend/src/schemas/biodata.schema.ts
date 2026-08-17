import { z } from "zod";

export const biodataSchema = z.object({
    fullName: z.string().min(2, "Full name is required"),

    gender: z.string().min(1, "Gender is required"),

    dateOfBirth: z.string().min(1, "Date of birth is required"),

    age: z.coerce
        .number()
        .min(18, "Age must be at least 18"),

    religion: z.string().min(1, "Religion is required"),

    caste: z.string().min(1, "Caste is required"),

    height: z.string().min(1, "Height is required"),

    weight: z.coerce
        .number()
        .min(20, "Weight must be at least 20 kg")
        .max(300, "Weight is too high"),

    mobile: z
        .string()
        .regex(/^[6-9]\d{9}$/, "Enter a valid mobile number"),

    email: z.string().email("Enter a valid email"),

    city: z.string().min(1, "City is required"),

    state: z.string().min(1, "State is required"),

    country: z.string().min(1, "Country is required"),

    fatherName: z.string().min(1, "Father's name is required"),

    motherName: z.string().min(1, "Mother's name is required"),

    siblings: z.string(),

    familyType: z.string().min(1, "Family type is required"),

    highestQualification: z
        .string()
        .min(1, "Highest qualification is required"),

    occupation: z
        .string()
        .min(1, "Occupation is required"),

    college: z.string(),

    university: z.string(),

    company: z.string(),

    annualIncome: z.string(),

    preferredAge: z.string().min(1, "Preferred age is required"),

    preferredHeight: z.string().min(1, "Preferred height is required"),

    preferredReligion: z.string().min(1, "Preferred religion is required"),

    preferredCaste: z.string().optional(),

    preferredEducation: z.string().min(1, "Preferred education is required"),

    preferredOccupation: z.string().optional(),

    preferredLocation: z.string().min(1, "Preferred location is required"),

    expectations: z.string().optional(),

    profilePhoto: z
        .instanceof(File)
        .nullable()
        .optional()
        .refine(
            (file) => file == null || file.size <= 5 * 1024 * 1024,
            "Maximum file size is 5 MB"
        )
        .refine(
            (file) =>
                file == null ||
                ["image/jpeg", "image/png", "image/webp"].includes(file.type),
            "Only JPG, PNG and WEBP images are allowed"
        ),

    profilePhotoUrl: z.string().url().optional(),
});

export type BiodataSchema = z.output<typeof biodataSchema>;
export type BiodataFormValues = z.input<typeof biodataSchema>;