import api from "../../../services/api";

export async function downloadPdf(template: string) {
    return await api.post(
        "/document/pdf",
        { template },
        {
            responseType: "blob",
        }
    );
}