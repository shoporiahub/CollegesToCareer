import api from "../../../services/api";

export interface SkillRequest {
    name: string;
    category?: string;
    proficiency?: string;
}

export interface SkillResponse
    extends SkillRequest {
    id: number;
    resume_id: number;
}

export async function createSkill(
    resumeId: number,
    data: SkillRequest,
): Promise<SkillResponse> {
    const response = await api.post(
        `/skills/resume/${resumeId}`,
        data,
    );

    return response.data;
}

export async function getSkills(
    resumeId: number,
): Promise<SkillResponse[]> {
    const response = await api.get(
        `/skills/resume/${resumeId}`,
    );

    return response.data;
}

export async function updateSkill(
    skillId: number,
    data: Partial<SkillRequest>,
): Promise<SkillResponse> {
    const response = await api.put(
        `/skills/${skillId}`,
        data,
    );

    return response.data;
}

export async function deleteSkill(
    skillId: number,
): Promise<void> {
    await api.delete(
        `/skills/${skillId}`,
    );
}