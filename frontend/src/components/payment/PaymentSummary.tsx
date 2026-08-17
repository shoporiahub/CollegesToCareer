import { ShieldCheck } from "lucide-react";

import { createOrder } from "../../services/payment.service";


function PaymentSummary({ paymentSummary }: { paymentSummary: any }) {

    const handlePayment = async () => {
        try {
            const order = await createOrder("premium");

            const options = {
                key: order.key,
                amount: order.amount,
                currency: order.currency,
                name: "DocCraft AI",
                description: "Premium Marriage Biodata",
                order_id: order.order_id,

                handler: function (response: any) {
                    console.log("Payment Successful");

                    console.log(response);
                },

                prefill: {
                    name: "Daniyaal",
                    email: "",
                    contact: "",
                },

                theme: {
                    color: "#2563eb",
                },
            };

            const razorpay = new window.Razorpay(options);

            razorpay.open();
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">

            {/* Heading */}

            <h2 className="text-2xl font-bold text-slate-900">
                Order Summary
            </h2>

            <p className="mt-2 text-slate-500">
                Review your purchase before proceeding to payment.
            </p>

            {/* Summary */}

            <div className="mt-10 space-y-5">

                <div className="flex items-center justify-between">

                    <span className="text-slate-600">
                        {paymentSummary.templateKey}
                    </span>

                    <span className="font-semibold text-slate-900">
                        {paymentSummary.templateName}
                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <span className="text-slate-600">
                        {paymentSummary.priceKey}
                    </span>

                    <span className="font-semibold text-slate-900">
                        {paymentSummary.priceValue}
                    </span>

                </div>

                <div className="flex items-center justify-between">

                    <span className="text-slate-600">
                        {paymentSummary.gstKey}
                    </span>

                    <span className="font-semibold text-green-600">
                        {paymentSummary.gstValue}
                    </span>

                </div>

            </div>

            {/* Divider */}

            <div className="my-8 border-t border-slate-200" />

            {/* Total */}

            <div className="flex items-center justify-between">

                <span className="text-xl font-semibold text-slate-900">
                    {paymentSummary.TotalKey}
                </span>

                <span className="text-3xl font-bold text-blue-600">
                    {paymentSummary.totalValue}
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
                            payment gateway. Your card details are never stored.
                        </p>

                    </div>

                </div>

            </div>

            {/* Pay Button */}

            <button
                type="button"
                className="mt-10 w-full rounded-2xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700"
                onClick={handlePayment}
            >
                Pay {paymentSummary.totalValue}
            </button>

            {/* Footer */}

            <p className="mt-6 text-center text-sm text-slate-500">
                By continuing, you agree to our Terms & Conditions and Privacy
                Policy.
            </p>

        </div>
    );
}

export default PaymentSummary;