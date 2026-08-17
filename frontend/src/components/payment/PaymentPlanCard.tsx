import { CheckCircle } from "lucide-react";

function PaymentPlanCard({ planCard }: { planCard: any }) {

    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">


            <div className="p-8">

                <div className="flex items-start justify-between">

                    <div>

                        <h2 className="text-3xl font-bold text-slate-900">
                           {planCard.template}
                        </h2>

                        <p className="mt-2 text-slate-500">
                            {planCard.description}
                        </p>

                    </div>

                    <span className="text-3xl font-bold text-blue-600">
                        {planCard.price}
                    </span>

                </div>

                <div className="mt-8 border-t border-slate-200 pt-8">

                    <h3 className="mb-5 text-lg font-semibold text-slate-900">
                        What's Included
                    </h3>

                    <div className="space-y-4">

                        {[
                            "High-quality PDF",
                            "Unlimited Prints",
                            "Modern Premium Design",
                            "A4 Print Ready",
                            "Lifetime Access",
                        ].map((feature) => (
                            <div
                                key={feature}
                                className="flex items-center gap-3"
                            >
                                <CheckCircle
                                    size={20}
                                    className="text-green-600"
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