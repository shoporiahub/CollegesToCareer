import { useEffect, useState } from "react";
import type { Template } from "../constants/templates";
import { getTemplates } from "../services/template.service";

export function useTemplates() {
    const [templates, setTemplates] = useState<Template[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadTemplates() {
            const data = await getTemplates();
            setTemplates(data);
            setLoading(false);
        }

        loadTemplates();
    }, []);

    return {
        templates,
        loading,
    };
}