import { LayoutTemplate } from "lucide-react";

type ResumeTemplateButtonProps = {
    onClick: () => void;
};

function ResumeTemplateButton({
    onClick,
}: ResumeTemplateButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Open resume templates"
            className="
                fixed
                bottom-5
                right-5
                z-40
                flex
                items-center
                gap-2
                rounded-full
                bg-blue-600
                px-5
                py-3.5
                text-sm
                font-bold
                text-white
                shadow-xl
                shadow-blue-200
                transition-all
                duration-200
                hover:bg-blue-700
                active:scale-95
                lg:hidden
            "
        >
            <LayoutTemplate size={19} />

            <span>
                Templates
            </span>
        </button>
    );
}

export default ResumeTemplateButton;