import { useNavigate } from "react-router-dom";

type Props = {
    name: string;
    price: string;
    period: string;
    description: string;
    features: string[];
    buttonText: string;
    featured: boolean;
};

function PricingCard({
    name,
    price,
    period,
    description,
    features,
    buttonText,
    featured,
}: Props) {

    const navigate = useNavigate();

    const paymnetView = () => {
        if (name === "Free") {
            navigate("/templates");
        } else if (name === "Premium") {
            navigate("/payment?plan=premium");
        } else if (name === "Ultimate") {
            navigate("/payment?plan=ultimate");
        }
    }
    return (
        <div
            className={`rounded-2xl border p-8 ${featured
                    ? "border-blue-600 shadow-lg"
                    : "border-slate-200"
                }`}
        >
            {featured && (
                <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600">
                    Most Popular
                </span>
            )}

            <h3 className="mt-4 text-2xl font-bold">{name}</h3>

            <div className="mt-6 flex items-end">
                <span className="text-5xl font-bold">{price}</span>

                <span className="ml-2 text-slate-500">
                    {period}
                </span>
            </div>

            <p className="mt-4 text-slate-600">
                {description}
            </p>

            <ul className="mt-8 space-y-3">
                {features.map((feature) => (
                    <li
                        key={feature}
                        className="text-slate-700"
                    >
                        ✓ {feature}
                    </li>
                ))}
            </ul>

            <button
                className={`cursor-pointer mt-10 w-full rounded-xl px-5 py-3 font-semibold transition ${featured
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "border border-slate-300 hover:bg-slate-100"
                    }`}
                onClick={paymnetView}
            >
                {buttonText}
            </button>
        </div>
    );
}

export default PricingCard;