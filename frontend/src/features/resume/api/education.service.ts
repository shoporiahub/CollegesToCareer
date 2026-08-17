import api from "../../../services/api";

export interface EducationRequest {
    institution: string;
    degree: string;
    field_of_study?: string;
    start_date: string;
    end_date?: string;
    grade?: string;
    description?: string;
}

export interface EducationResponse
    extends EducationRequest {
    id: number;
    resume_id: number;
}

export async function createEducation(
    resumeId: number,
    data: EducationRequest,
): Promise<EducationResponse> {
    const response = await api.post(
        `/educations/resume/${resumeId}`,
        data,
    );

    return response.data;
}

export async function getEducations(
    resumeId: number,
): Promise<EducationResponse[]> {
    const response = await api.get(
        `/educations/resume/${resumeId}`,
    );

    return response.data;
}

export async function updateEducation(
    educationId: number,
    data: Partial<EducationRequest>,
): Promise<EducationResponse> {
    const response = await api.put(
        `/educations/${educationId}`,
        data,
    );

    return response.data;
}

export async function deleteEducation(
    educationId: number,
): Promise<void> {
    await api.delete(
        `/educations/${educationId}`,
    );
}