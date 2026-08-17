import api from "./api";

import type {
    ResumeFormValues,
} from "../features/resume/types/resume.types";


/* =========================================================
 * RESUME RESPONSE
 * ========================================================= */

export type ResumeResponse = {

    id: string;

    title: string;

    first_name: string;
    last_name: string;

    email: string;
    phone: string;

    headline: string | null;
    summary: string | null;

    address: string | null;
    city: string | null;
    state: string | null;
    country: string | null;
    pincode: string | null;

    linkedin_url: string | null;
    github_url: string | null;
    portfolio_url: string | null;
    website_url: string | null;

    profile_photo: string | null;

    template_id: string;

    theme: string;
    font: string;

    status: string;

    is_default: boolean;
};


/* =========================================================
 * FULL RESUME RESPONSE
 * ========================================================= */

export type ResumeDetailResponse =
    ResumeResponse & {

        experiences:
        ResumeFormValues["experiences"];

        educations:
        ResumeFormValues["educations"];

        projects:
        ResumeFormValues["projects"];

        skills:
        ResumeFormValues["skills"];

        certifications:
        ResumeFormValues["certifications"];

        languages:
        ResumeFormValues["languages"];

        achievements:
        ResumeFormValues["achievements"];
    };


/* =========================================================
 * RESUME UPDATE DATA
 * ========================================================= */

export type ResumeUpdateData = {

    title?: string;

    first_name?: string;
    last_name?: string;

    email?: string;
    phone?: string;

    headline?: string | null;
    summary?: string | null;

    address?: string | null;
    city?: string | null;
    state?: string | null;
    country?: string | null;
    pincode?: string | null;

    linkedin_url?: string | null;
    github_url?: string | null;
    portfolio_url?: string | null;
    website_url?: string | null;

    profile_photo?: string | null;

    template_id?: string;

    theme?: string;
    font?: string;

    is_default?: boolean;
};


/* =========================================================
 * CREATE RESUME
 * ========================================================= */

/**
 * Create a new resume.
 */
export async function createResume(
    data: ResumeFormValues,
): Promise<ResumeResponse> {

    const response =
        await api.post<ResumeResponse>(
            "/resumes",
            data,
        );

    return response.data;
}


/* =========================================================
 * GET RESUME
 * ========================================================= */

/**
 * Get basic resume information.
 */
export async function getResume(
    resumeId: string,
): Promise<ResumeResponse> {

    const response =
        await api.get<ResumeResponse>(
            `/resumes/${resumeId}`,
        );

    return response.data;
}


/* =========================================================
 * GET COMPLETE RESUME
 * ========================================================= */

/**
 * Get the complete resume including
 * experiences, education, projects,
 * skills, certifications, languages,
 * and achievements.
 */
export async function getResumeDetail(
    resumeId: string,
): Promise<ResumeDetailResponse> {

    const response =
        await api.get<ResumeDetailResponse>(
            `/resumes/${resumeId}/full`,
        );

    return response.data;
}


/* =========================================================
 * UPDATE RESUME
 * ========================================================= */

/**
 * Update an existing resume.
 */
export async function updateResume(
    resumeId: string,
    data: ResumeUpdateData,
): Promise<ResumeResponse> {

    const response =
        await api.put<ResumeResponse>(
            `/resumes/${resumeId}`,
            data,
        );

    return response.data;
}


/* =========================================================
 * DELETE RESUME
 * ========================================================= */

/**
 * Delete a resume.
 */
export async function deleteResume(
    resumeId: string,
): Promise<void> {

    await api.delete(
        `/resumes/${resumeId}`,
    );
}