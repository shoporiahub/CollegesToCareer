import api from "./api";

export async function createOrder(item: string) {
    const response = await api.post("/payment/create-order", {
        item,
    });

    return response.data;
}