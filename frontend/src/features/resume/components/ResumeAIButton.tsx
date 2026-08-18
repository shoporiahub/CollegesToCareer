import { Bot } from "lucide-react";


type ResumeAIButtonProps = {
    onClick: () => void;
};


function ResumeAIButton({
    onClick,
}: ResumeAIButtonProps) {

    return (
        <button
            type="button"
            onClick={onClick}
            aria-label="Open College to Career AI"
            className="
                fixed
                bottom-6
                right-5
                z-40
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-blue-600
                text-white
                shadow-xl
                shadow-blue-300/50
                transition-all
                duration-200
                hover:bg-blue-700
                hover:scale-105
                active:scale-95
                lg:hidden
            "
        >
            <Bot size={26} />
        </button>
    );
}


export default ResumeAIButton;