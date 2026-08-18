import {
    ShieldCheck,
} from "lucide-react";

import {
    createOrder,
} from "../../services/payment.service";

import {
    useAuthStore,
} from "../../features/auth/store/auth.store";


interface PaymentSummaryProps {
    paymentSummary: any;
}


function PaymentSummary({
    paymentSummary,
}: PaymentSummaryProps) {

    const user =
        useAuthStore(
            (state) =>
                state.user,
        );


    /* =========================================================
     * PAYMENT
     * ========================================================= */

    const handlePayment = async () => {

        try {

            const order =
                await createOrder(
                    "premium",
                );


            const options = {

                key:
                    order.key,

                amount:
                    order.amount,

                currency:
                    order.currency,

                name:
                    "College to Career",

                description:
                    "Premium Resume",

                order_id:
                    order.order_id,


                handler:
                    function (
                        response: any,
                    ) {

                        console.log(
                            "Payment Successful",
                        );

                        console.log(
                            response,
                        );

                    },


                prefill: {

                    name:
                        [
                            user?.first_name,
                            user?.last_name,
                        ]
                            .filter(Boolean)
                            .join(" "),

                    email:
                        user?.email || "",

                    contact:
                        "",
                },


                theme: {

                    color:
                        "#2563eb",

                },

            };


            const razorpay =
                new window.Razorpay(
                    options,
                );


            razorpay.open();

        } catch (err) {

            console.error(
                "Payment failed:",
                err,
            );

        }

    };


    return (

        <div
            className="
                w-full
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-5
                shadow-xl
                sm:rounded-3xl
                sm:p-8
            "
        >

            {/* ================================================= */}
            {/* HEADING */}
            {/* ================================================= */}

            <h2
                className="
                    text-2xl
                    font-bold
                    text-slate-900
                    sm:text-3xl
                "
            >
                Order Summary
            </h2>


            <p
                className="
                    mt-2
                    text-sm
                    leading-6
                    text-slate-500
                    sm:text-base
                "
            >
                Review your purchase before proceeding
                to payment.
            </p>


            {/* ================================================= */}
            {/* SUMMARY */}
            {/* ================================================= */}

            <div
                className="
                    mt-8
                    space-y-5
                    sm:mt-10
                "
            >

                {/* Template */}

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-4
                    "
                >

                    <span
                        className="
                            text-sm
                            text-slate-600
                            sm:text-base
                        "
                    >
                        {paymentSummary.templateKey}
                    </span>


                    <span
                        className="
                            text-right
                            text-sm
                            font-semibold
                            text-slate-900
                            sm:text-base
                        "
                    >
                        {paymentSummary.templateName}
                    </span>

                </div>


                {/* Price */}

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-4
                    "
                >

                    <span
                        className="
                            text-sm
                            text-slate-600
                            sm:text-base
                        "
                    >
                        {paymentSummary.priceKey}
                    </span>


                    <span
                        className="
                            text-right
                            text-sm
                            font-semibold
                            text-slate-900
                            sm:text-base
                        "
                    >
                        {paymentSummary.priceValue}
                    </span>

                </div>


                {/* GST */}

                <div
                    className="
                        flex
                        items-start
                        justify-between
                        gap-4
                    "
                >

                    <span
                        className="
                            text-sm
                            text-slate-600
                            sm:text-base
                        "
                    >
                        {paymentSummary.gstKey}
                    </span>


                    <span
                        className="
                            text-right
                            text-sm
                            font-semibold
                            text-green-600
                            sm:text-base
                        "
                    >
                        {paymentSummary.gstValue}
                    </span>

                </div>

            </div>


            {/* ================================================= */}
            {/* DIVIDER */}
            {/* ================================================= */}

            <div
                className="
                    my-7
                    border-t
                    border-slate-200
                    sm:my-8
                "
            />


            {/* ================================================= */}
            {/* TOTAL */}
            {/* ================================================= */}

            <div
                className="
                    flex
                    items-center
                    justify-between
                    gap-4
                "
            >

                <span
                    className="
                        text-lg
                        font-semibold
                        text-slate-900
                        sm:text-xl
                    "
                >
                    {paymentSummary.TotalKey}
                </span>


                <span
                    className="
                        text-2xl
                        font-bold
                        text-blue-600
                        sm:text-3xl
                    "
                >
                    {paymentSummary.totalValue}
                </span>

            </div>


            {/* ================================================= */}
            {/* SECURITY */}
            {/* ================================================= */}

            <div
                className="
                    mt-8
                    rounded-2xl
                    bg-green-50
                    p-4
                    sm:mt-10
                    sm:p-5
                "
            >

                <div
                    className="
                        flex
                        items-start
                        gap-3
                        sm:gap-4
                    "
                >

                    <ShieldCheck
                        className="
                            mt-0.5
                            shrink-0
                            text-green-600
                        "
                        size={24}
                    />


                    <div>

                        <h3
                            className="
                                font-semibold
                                text-green-800
                            "
                        >
                            Secure Checkout
                        </h3>


                        <p
                            className="
                                mt-1
                                text-sm
                                leading-6
                                text-green-700
                            "
                        >
                            Your payment is securely processed
                            through Razorpay. Your payment details
                            are handled by the payment gateway.
                        </p>

                    </div>

                </div>

            </div>


            {/* ================================================= */}
            {/* PAY BUTTON */}
            {/* ================================================= */}

            <button
                type="button"
                className="
                    mt-8
                    w-full
                    rounded-2xl
                    bg-blue-600
                    py-4
                    text-base
                    font-semibold
                    text-white
                    shadow-sm
                    transition
                    hover:bg-blue-700
                    hover:shadow-md
                    sm:mt-10
                    sm:text-lg
                "
                onClick={
                    handlePayment
                }
            >
                Pay {paymentSummary.totalValue}
            </button>


            {/* ================================================= */}
            {/* FOOTER */}
            {/* ================================================= */}

            <p
                className="
                    mt-5
                    text-center
                    text-xs
                    leading-5
                    text-slate-500
                    sm:mt-6
                    sm:text-sm
                "
            >
                By continuing, you agree to our Terms &
                Conditions and Privacy Policy.
            </p>

        </div>

    );
}


export default PaymentSummary;