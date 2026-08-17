import type { BiodataSchema } from "../../schemas/biodata.schema";

export type ReviewItem = {
    label: string;
    value?: string | number | null;
};

export type ReviewSectionData = {
    title: string;
    items: ReviewItem[];
};

export function getReviewSections(
    values: Partial<BiodataSchema>
): ReviewSectionData[] {
    return [
        {
            title: "👤 Personal Details",
            items: [
                { label: "Full Name", value: values.fullName },
                { label: "Gender", value: values.gender },
                { label: "Date of Birth", value: values.dateOfBirth },
                { label: "Age", value: values.age },
                { label: "Religion", value: values.religion },
                { label: "Caste", value: values.caste },
                { label: "Height", value: values.height },
                { label: "Weight", value: values.weight },
            ],
        },
        {
            title: "📞 Contact Details",
            items: [
                { label: "Mobile", value: values.mobile },
                { label: "Email", value: values.email },
                { label: "City", value: values.city },
                { label: "State", value: values.state },
                { label: "Country", value: values.country },
            ],
        },
        {
            title: "👨‍👩‍👧 Family Details",
            items: [
                { label: "Father", value: values.fatherName },
                { label: "Mother", value: values.motherName },
                { label: "Siblings", value: values.siblings },
                { label: "Family Type", value: values.familyType },
            ],
        },
        {
            title: "🎓 Education & Career",
            items: [
                { label: "Highest Qualification", value: values.highestQualification },
                { label: "College", value: values.college },
                { label: "University", value: values.university },
                { label: "Occupation", value: values.occupation },
                { label: "Company", value: values.company },
                { label: "Annual Income", value: values.annualIncome },
            ],
        },
        {
            title: "❤️ Partner Preferences",
            items: [
                { label: "Preferred Age", value: values.preferredAge },
                { label: "Preferred Height", value: values.preferredHeight },
                { label: "Preferred Religion", value: values.preferredReligion },
                { label: "Preferred Caste", value: values.preferredCaste },
                { label: "Preferred Education", value: values.preferredEducation },
                { label: "Preferred Occupation", value: values.preferredOccupation },
                { label: "Preferred Location", value: values.preferredLocation },
                { label: "Expectations", value: values.expectations },
            ],
        },
    ];
}