import api from "./api";


export async function getResumePreview(
    resumeId: string,
    templateId: string,
): Promise<string> {

    const response =
        await api.get<string>(
            `/render/resume/${resumeId}`,
            {
                params: {
                    template_id:
                        templateId,
                },

                responseType: "text",
            },
        );


    return response.data;
}


export async function downloadResumePdf(
    resumeId: string,
    templateId: string,
): Promise<Blob> {

    const response =
        await api.get<Blob>(
            `/render/resume/${resumeId}/pdf`,
            {
                params: {
                    template_id:
                        templateId,
                },

                responseType: "blob",
            },
        );


    return response.data;
}