import api from "../../../services/api";

export interface ProjectRequest {
    title: string;
    organization?: string;
    technologies?: string;
    github_url?: string;
    live_url?: string;
    start_date?: string;
    end_date?: string;
    description?: string;
}

export interface ProjectResponse
    extends ProjectRequest {
    id: number;
    resume_id: number;
}

export async function createProject(
    resumeId: number,
    data: ProjectRequest,
): Promise<ProjectResponse> {
    const response = await api.post(
        `/projects/resume/${resumeId}`,
        data,
    );

    return response.data;
}

export async function getProjects(
    resumeId: number,
): Promise<ProjectResponse[]> {
    const response = await api.get(
        `/projects/resume/${resumeId}`,
    );

    return response.data;
}

export async function updateProject(
    projectId: number,
    data: Partial<ProjectRequest>,
): Promise<ProjectResponse> {
    const response = await api.put(
        `/projects/${projectId}`,
        data,
    );

    return response.data;
}

export async function deleteProject(
    projectId: number,
): Promise<void> {
    await api.delete(
        `/projects/${projectId}`,
    );
}