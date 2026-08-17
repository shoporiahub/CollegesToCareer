import api from "../../../services/api";

export interface ExperienceRequest {
    company: string;
    position: string;
    employment_type?: string;
    location?: string;
    start_date: string;
    end_date?: string;
    is_current?: boolean;
    description?: string;
}

export interface ExperienceResponse
    extends ExperienceRequest {
    id: number;
    resume_id: number;
}

export async function createExperience(
    resumeId: number,
    data: ExperienceRequest,
): Promise<ExperienceResponse> {
    const response = await api.post(
        `/experiences/resume/${resumeId}`,
        data,
    );

    return response.data;
}

export async function getExperiences(
    resumeId: number,
): Promise<ExperienceResponse[]> {
    const response = await api.get(
        `/experiences/resume/${resumeId}`,
    );

    return response.data;
}

export async function updateExperience(
    experienceId: number,
    data: Partial<ExperienceRequest>,
): Promise<ExperienceResponse> {
    const response = await api.put(
        `/experiences/${experienceId}`,
        data,
    );

    return response.data;
}

export async function deleteExperience(
    experienceId: number,
): Promise<void> {
    await api.delete(
        `/experiences/${experienceId}`,
    );
}