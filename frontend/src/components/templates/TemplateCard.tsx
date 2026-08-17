import { Link } from "react-router-dom";

type TemplateCardProps = {
    slug: string;
    name: string;
    price: number;
    description: string;
    image: string;
};

function TemplateCard({
    slug,
    name,
    price,
    description,
    image,
}: TemplateCardProps) {
    return (
        <Link
            to={`/templates/${slug}`}
            className="group block overflow-hidden rounded-3xl bg-white/10 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-3 hover:shadow-blue-500/30"
        >
            {/* Image */}

            <div className="flex h-[460px] items-center justify-center bg-white">
                <img
                    src={image}
                    alt={name}
                    className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                />
            </div>

            {/* Content */}

            <div className="p-8">
                <h2 className="text-3xl font-bold text-white">
                    {name}
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                    {description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                    {price > 0 && <span className="text-xl font-bold text-blue-300">
                        ₹{price}
                    </span>}

                    <span className="rounded-full bg-yellow-400 px-3 py-1 text-sm font-bold text-slate-900">
                        ★ 5.0
                    </span>
                </div>

                <div className="mt-8 flex items-center justify-center rounded-xl bg-white py-4 text-lg font-bold text-blue-800 transition duration-300 group-hover:bg-slate-100">
                    Preview Template →
                </div>
            </div>
        </Link>
    );
}

export default TemplateCard;