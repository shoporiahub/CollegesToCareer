import api from "./api";

export type CreateReviewRequest = {
    name: string;
    place: string;
    rating: number;
    review: string;
};

export async function createReview(
    data: CreateReviewRequest,
) {
    const response = await api.post("/reviews", data);

    return response.data;
}