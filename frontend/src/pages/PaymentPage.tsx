import PaymentSummary from "../components/payment/PaymentSummary";
import PaymentPlanCard from "../components/payment/PaymentPlanCard";

type Props = {
    paymentSummary: any;
    planCard?: any;
};

function PaymentPage({
    planCard,
    paymentSummary,
}: Props) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
            <div className="mx-auto max-w-7xl px-6 py-16">
                {/* Hero */}

                <div className="mb-14 text-center">
                    <span className="rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">
                        Secure Checkout
                    </span>

                    <h1 className="mt-6 text-5xl font-bold text-white">
                        Complete Your Purchase
                    </h1>

                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
                        Review your order and complete your payment securely.
                    </p>
                </div>

                {/* Content */}

                <div
                    className={`grid gap-8 ${
                        planCard
                            ? "lg:grid-cols-[420px_1fr]"
                            : "mx-auto max-w-2xl"
                    }`}
                >
                    {planCard && (
                        <PaymentPlanCard
                            planCard={planCard}
                        />
                    )}

                    <PaymentSummary
                        paymentSummary={paymentSummary}
                    />
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;