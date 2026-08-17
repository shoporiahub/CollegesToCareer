import { ShieldCheck } from "lucide-react";

type Props = {
    plan: {
        name: string;
        price: string;
        period: string;
        description: string;
        features: string[];
    };
};

function PaymentSummary({ plan }: Props) {
    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
            {/* Heading */}

            <h2 className="text-2xl font-bold text-slate-900">
                Order Summary
            </h2>

            <p className="mt-2 text-slate-500">
                Review your subscription before proceeding to payment.
            </p>

            {/* Summary */}

            <div className="mt-10 space-y-5">
                <div className="flex items-center justify-between">
                    <span className="text-slate-600">
                        Plan
                    </span>

                    <span className="font-semibold text-slate-900">
                        {plan.name}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-slate-600">
                        Billing
                    </span>

                    <span className="font-semibold text-slate-900">
                        {plan.price}
                        {plan.period}
                    </span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-slate-600">
                        GST
                    </span>

                    <span className="font-semibold text-green-600">
                        Included
                    </span>
                </div>
            </div>

            {/* Divider */}

            <div className="my-8 border-t border-slate-200" />

            {/* Total */}

            <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-slate-900">
                    Total
                </span>

                <span className="text-3xl font-bold text-blue-600">
                    {plan.price}
                    <span className="text-base font-medium text-slate-500">
                        {plan.period}
                    </span>
                </span>
            </div>

            {/* Security */}

            <div className="mt-10 rounded-2xl bg-green-50 p-5">
                <div className="flex items-start gap-4">
                    <ShieldCheck
                        className="mt-1 text-green-600"
                        size={26}
                    />

                    <div>
                        <h3 className="font-semibold text-green-800">
                            Secure Checkout
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-green-700">
                            Your payment is processed securely using an encrypted
                            payment gateway. Your payment information is never
                            stored on our servers.
                        </p>
                    </div>
                </div>
            </div>

            {/* Pay Button */}

            <button
                type="button"
                className="mt-10 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
            >
                Subscribe for {plan.price}
            </button>

            {/* Footer */}

            <p className="mt-6 text-center text-sm text-slate-500">
                By continuing, you agree to our Terms of Service and Privacy
                Policy.
            </p>
        </div>
    );
}

export default PaymentSummary;