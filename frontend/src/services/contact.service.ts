import api from "./api";


export type CreateContactRequest = {
    full_name: string;
    email: string;
    subject: string;
    message: string;
};

export async function createContact(
    data: CreateContactRequest,
) {
    const response = await api.post("/contact", data);

    return response.data;
}