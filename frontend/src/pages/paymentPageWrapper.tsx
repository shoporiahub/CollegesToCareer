import { Navigate, useLocation } from "react-router-dom";
import PaymentPage from "./PaymentPage";
import { PAYMENT_PLANS } from "./Payment/constant";

function PaymentPageWrapper() {
    const { search } = useLocation();

    const params = new URLSearchParams(search);

    const selectedName =
        params.get("template")?.toLowerCase() ??
        params.get("plan")?.toLowerCase();

    const plan = PAYMENT_PLANS.find(
        (p) => p.planName.toLowerCase() === selectedName
    );

    if (!plan) {
        return <Navigate to="/pricing" replace />;
    }

    return (
        <PaymentPage
            planCard={plan.planCard}
            paymentSummary={plan.paymentSummary}
        />
    );
}

export default PaymentPageWrapper;