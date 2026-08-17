export type StepColor =
    | "blue"
    | "violet"
    | "amber"
    | "emerald";


export type Step = {
    number: string;
    title: string;
    description: string;
    color: StepColor;
};


export const STEPS: Step[] = [
    {
        number: "01",

        title: "Create Your Account",

        description:
            "Create your College to Career account and get started on building your professional resume.",

        color: "blue",
    },

    {
        number: "02",

        title: "Add Your Details",

        description:
            "Add your education, experience, projects, skills, certifications, and other career information.",

        color: "violet",
    },

    {
        number: "03",

        title: "Choose a Template",

        description:
            "Choose a professionally designed resume template that matches your career goals and personal style.",

        color: "amber",
    },

    {
        number: "04",

        title: "Download Your Resume",

        description:
            "Preview your resume, make your final changes, and download a professionally formatted PDF ready to share.",

        color: "emerald",
    },
];