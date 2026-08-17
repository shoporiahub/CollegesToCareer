import { useState } from "react";
import type { UseFormTrigger } from "react-hook-form";

import type { BiodataFormValues } from "../schemas/biodata.schema";
import { FORM_STEPS } from "../constants/formSteps";

type UseBiodataStepperProps = {
    trigger: UseFormTrigger<BiodataFormValues>;
};

function useBiodataStepper({
    trigger,
}: UseBiodataStepperProps) {
    const [currentStep, setCurrentStep] = useState(0);

    const totalSteps = FORM_STEPS.length;

    async function nextStep() {
        const fields = FORM_STEPS[currentStep].fields;

        const isValid =
            fields.length === 0
                ? true
                : await trigger(fields);

        if (!isValid) {
            return;
        }

        if (currentStep < totalSteps - 1) {
            setCurrentStep((prev) => prev + 1);
        }
    }

    function previousStep() {
        if (currentStep > 0) {
            setCurrentStep((prev) => prev - 1);
        }
    }

    function goToStep(step: number) {
        if (step >= 0 && step < totalSteps) {
            setCurrentStep(step);
        }
    }

    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === totalSteps - 1;

    const progress = Math.round(
        ((currentStep + 1) / totalSteps) * 100
    );

    return {
        currentStep,
        totalSteps,
        progress,
        isFirstStep,
        isLastStep,
        nextStep,
        previousStep,
        goToStep,
    };
}

export default useBiodataStepper;