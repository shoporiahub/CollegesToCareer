import api from "./api";

export async function getHealth() {
    const response = await api.get("/");

    return response.data;
}