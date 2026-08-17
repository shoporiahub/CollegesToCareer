import api from "../../../services/api";

export interface ResumeCreateRequest {
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

    template?: string;
    theme?: string;
    font?: string;

    is_default?: boolean;
}

export interface ResumeResponse
    extends ResumeCreateRequest {
    id: number;
}

export interface ResumeFullResponse
    extends ResumeResponse {
    educations: unknown[];
    experiences: unknown[];
    projects: unknown[];
    skills: unknown[];
    certifications: unknown[];
    achievements: unknown[];
    languages: unknown[];
}

export async function createResume(
    data: ResumeCreateRequest,
): Promise<ResumeResponse> {

    const response = await api.post(
        "/resumes",
        data,
    );

    return response.data;
}

export async function getResumes(): Promise<
    ResumeResponse[]
> {

    const response = await api.get(
        "/resumes",
    );

    return response.data;
}

export async function getResume(
    resumeId: number,
): Promise<ResumeResponse> {

    const response = await api.get(
        `/resumes/${resumeId}`,
    );

    return response.data;
}

export async function updateResume(
    resumeId: number,
    data: Partial<ResumeCreateRequest>,
): Promise<ResumeResponse> {

    const response = await api.put(
        `/resumes/${resumeId}`,
        data,
    );

    return response.data;
}

export async function deleteResume(
    resumeId: number,
): Promise<void> {

    await api.delete(
        `/resumes/${resumeId}`,
    );
}

export async function getResumeFull(
    resumeId: number,
): Promise<ResumeFullResponse> {

    const response = await api.get(
        `/resumes/${resumeId}/full`,
    );

    return response.data;
}