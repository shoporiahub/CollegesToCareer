import api from "./api";

export type TemplateHighlight = {
    id: string;
    template_id: string;
    highlight: string;
    sort_order: number;
};

export type Template = {
    id: string;
    name: string;
    slug: string;
    image: string;
    template_text: string;
    description: string;
    price: number;
    is_active: boolean;
    sort_order: number;
    highlights: TemplateHighlight[];
};

export async function getTemplates(): Promise<Template[]> {
    const response = await api.get<Template[]>("/templates");

    return response.data;
}

export async function getTemplateById(
    templateId: string,
): Promise<Template> {
    const response = await api.get<Template>(
        `/templates/${templateId}`,
    );

    return response.data;
}

export async function getTemplateBySlug(
    slug: string,
): Promise<Template | undefined> {
    const templates = await getTemplates();

    return templates.find(
        (template) => template.slug === slug,
    );
}