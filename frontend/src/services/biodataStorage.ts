import type { BiodataSchema } from "../schemas/biodata.schema";

const STORAGE_KEY = "biodata";

export function saveBiodata(data: BiodataSchema) {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
}

export function getBiodata(): BiodataSchema | null {
    const data = localStorage.getItem(STORAGE_KEY);

    if (!data) return null;

    return JSON.parse(data);
}

export function clearBiodata() {
    localStorage.removeItem(STORAGE_KEY);
}