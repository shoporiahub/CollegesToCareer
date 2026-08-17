import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Home/HomePage";
import TemplatesPage from "../pages/Templates/TemplatesPage";
import TemplateDetailsPage from "../pages/TemplateDetails/TemplateDetailsPage";
import PricingPage from "../pages/Pricing/PricingPage";
import HowItWorksPage from "../pages/HowItWorks/HowItWorksPage";
import FAQPage from "../pages/FAQ/FAQPage";
import ContactPage from "../pages/Contact/ContactPage";
import LoginPage from "../features/auth/pages/LoginPage";
import RegisterPage from "../features/auth/pages/RegisterPage";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import ProtectedRoute from "../features/auth/components/ProtectedRoute";
import PaymentPageWrapper from "../pages/paymentPageWrapper";
import RootLayout from "../components/RootLayout";
import PrivacyPolicyPage from "../pages/PrivacyPolicy/PrivacyPolicyPage";
import TermsOfServicePage from "../pages/TermOfService/TermOfServicePage";
import WriteReviewPage from "../pages/Review/ReviewPage";
import ResumeBuilderPage from "../features/resume/pages/ResumeBuilderPage";
import ResumePreviewPage from "../features/resume/pages/ResumePreviewPage";
import AboutPage from "../pages/About/AboutPage";

const router = createBrowserRouter([
    {
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/templates",
                element: <TemplatesPage />,
            },
            {
                path: "/templates/:slug",
                element: <TemplateDetailsPage />,
            },
            {
                path: "/pricing",
                element: <PricingPage />,
            },
            {
                path: "/how-it-works",
                element: <HowItWorksPage />,
            },
            {
                path: "/faq",
                element: <FAQPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/dashboard",
                element: (
                    <ProtectedRoute>
                        <DashboardPage />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/payment",
                element: (
                    <ProtectedRoute>
                        <PaymentPageWrapper />
                    </ProtectedRoute>
                ),
            },
            {
                path: "/terms-of-service",
                element: <TermsOfServicePage />,
            },
            {
                path: "/privacypolicy",
                element: <PrivacyPolicyPage />,
            },

            {
                path: "/privacy-policy",
                element: <PrivacyPolicyPage />,
            },

            {
                path: "/privacy",
                element: <PrivacyPolicyPage />,
            },
            {
                path: "/termofservice",
                element: <TermsOfServicePage />,
            },
            {
                path: "/writeReview",
                element: (
                    <WriteReviewPage />
                )
            },
            {
                path: "/terms-of-service",
                element: <TermsOfServicePage />,
            },
            {
                path: "/terms",
                element: <TermsOfServicePage />,
            },
            {
                path: "/resume-builder",
                element: (
                    <ResumeBuilderPage />
                ),
            },
            {
                path: "/resume-preview/:resumeId",
                element: (
                    <ResumePreviewPage />
                ),
            },
            {
                path: "/resume-builder/:resumeId",
                element: (
                    <ResumeBuilderPage />
                ),
            },
        ]
    }

]);

export default router;