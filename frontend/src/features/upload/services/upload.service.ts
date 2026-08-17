import api from "../../../services/api";

export interface UploadResponse {
    message: string;
    url: string;
}

export async function uploadProfilePhoto(
    file: File
): Promise<string> {
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post<UploadResponse>(
        "/upload/profile-photo",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data.url;
}