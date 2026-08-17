export type ResumeFormValues = {
    // Resume
    title: string;

    first_name: string;
    last_name: string;

    email: string;
    phone: string;

    headline?: string;
    summary?: string;

    address?: string;
    city?: string;
    state?: string;
    country?: string;
    pincode?: string;

    linkedin_url?: string;
    github_url?: string;
    portfolio_url?: string;
    website_url?: string;

    profile_photo?: string;

    template_id: string;
    theme: string;
    font: string;

    is_default: boolean;

    // Experience
    experiences: {
        company: string;
        position: string;

        employment_type?: string;
        location?: string;

        start_date: string;
        end_date?: string;

        is_current: boolean;

        description?: string;
    }[];

    // Education
    educations: {
        institution: string;
        degree: string;

        field_of_study?: string;

        start_date: string;
        end_date?: string;

        grade?: string;
        description?: string;
    }[];

    // Projects
    projects: {
        title: string;

        organization?: string;
        technologies?: string;

        github_url?: string;
        live_url?: string;

        start_date?: string;
        end_date?: string;

        description?: string;
    }[];

    // Skills
    skills: {
        name: string;

        category?: string;
        proficiency?: string;
    }[];

    // Certifications
    certifications: {
        name: string;

        issuing_organization: string;

        issue_date?: string;
        expiry_date?: string;

        credential_id?: string;
        credential_url?: string;

        description?: string;
    }[];

    // Languages
    languages: {
        name: string;
        proficiency: string;
    }[];

    // Achievements
    achievements: {
        title: string;

        issuer?: string;
        achievement_date?: string;

        description?: string;
    }[];
};