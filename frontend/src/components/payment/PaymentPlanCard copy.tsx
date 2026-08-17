import { CheckCircle } from "lucide-react";

type Props = {
    plan: {
        name: string;
        price: string;
        period: string;
        description: string;
        features: string[];
    };
};

function PaymentPlanCard({ plan }: Props) {
    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
            <div className="p-8">
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                            Selected Plan
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-slate-900">
                            {plan.name}
                        </h2>

                        <p className="mt-3 leading-7 text-slate-500">
                            {plan.description}
                        </p>
                    </div>

                    <div className="shrink-0 text-right">
                        <p className="text-4xl font-bold text-blue-600">
                            {plan.price}
                        </p>

                        {plan.period && (
                            <p className="mt-1 text-sm text-slate-500">
                                {plan.period}
                            </p>
                        )}
                    </div>
                </div>

                <div className="mt-8 border-t border-slate-200 pt-8">
                    <h3 className="mb-5 text-lg font-semibold text-slate-900">
                        What's Included
                    </h3>

                    <div className="space-y-4">
                        {plan.features.map((feature) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle
                                    size={20}
                                    className="shrink-0 text-green-600"
                                />

                                <span className="text-slate-700">
                                    {feature}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaymentPlanCard;