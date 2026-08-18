import api from "../../../../services/api";


export type AIRequest = {
    question: string;
};


export type AIResponse = {
    answer: string;
};


export async function askAI(
    question: string,
): Promise<AIResponse> {

    const response =
        await api.post<AIResponse>(
            "/ai/ask",
            {
                question,
            },
        );


    return response.data;
}