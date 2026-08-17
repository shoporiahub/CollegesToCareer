import type { BiodataSchema } from "../../schemas/biodata.schema";

import ModernTemplate from "../templates/ModernTemplate/ModernTemplate";
import ElegantTemplate from "../templates/ElegantTemplate/ElegantTemplate";
import GraceTemplate from "../templates/GraceTemplate";
import RoyalTemplate from "../templates/RoyalTemplate";


type Props = {
    template: "elegant" | "modern" | "royal" | "luxury" | "signature"
    data: BiodataSchema;
};

function TemplateRenderer({
    template,
    data,
}: Props) {
    switch (template) {
        case "elegant":
            return <ModernTemplate data={data} />;

        case "modern":
            return <ElegantTemplate data={data} />;

        case "royal":
            return <GraceTemplate data={data} />;

        case "luxury":
            return <RoyalTemplate data={data} />

        default:
            return <ElegantTemplate data={data} />;
    }
}

export default TemplateRenderer;