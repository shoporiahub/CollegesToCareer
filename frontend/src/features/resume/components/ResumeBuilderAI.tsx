import {
    Bot,
    Loader2,
    Sparkles,
} from "lucide-react";


interface ResumeBuilderAIProps {

    prompt: string;

    onPromptChange: (
        value: string,
    ) => void;

    onGenerate: () => void;

    loading: boolean;

    disabled?: boolean;

}


function ResumeBuilderAI({
    prompt,
    onPromptChange,
    onGenerate,
    loading,
    disabled = false,
}: ResumeBuilderAIProps) {

    const quickPrompts = [
        "Improve my professional summary",
        "Make my experience more professional",
        "Improve my project descriptions",
        "Suggest better skills for my profile",
    ];


    const handleQuickPrompt = (
        value: string,
    ) => {

        onPromptChange(value);

    };


    return (
        <aside className="hidden w-80 shrink-0 xl:block">

            <div className="sticky top-8">

                <div
                    className="
                        overflow-hidden
                        rounded-2xl
                        border
                        border-slate-200
                        bg-white
                        shadow-sm
                    "
                >

                    {/* ================================================= */}
                    {/* HEADER */}
                    {/* ================================================= */}

                    <div
                        className="
                            border-b
                            border-slate-200
                            bg-gradient-to-r
                            from-blue-50
                            to-indigo-50
                            p-5
                        "
                    >

                        <div className="flex items-center gap-3">

                            <div
                                className="
                                    flex
                                    h-10
                                    w-10
                                    items-center
                                    justify-center
                                    rounded-xl
                                    bg-blue-600
                                    text-white
                                    shadow-sm
                                "
                            >

                                <Bot
                                    size={20}
                                />

                            </div>


                            <div>

                                <h2
                                    className="
                                        text-base
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    Resume AI
                                </h2>

                                <p
                                    className="
                                        text-xs
                                        text-slate-500
                                    "
                                >
                                    Improve your resume with AI
                                </p>

                            </div>

                        </div>

                    </div>


                    {/* ================================================= */}
                    {/* CONTENT */}
                    {/* ================================================= */}

                    <div className="p-5">

                        <div className="mb-5">

                            <div className="flex items-center gap-2">

                                <Sparkles
                                    size={16}
                                    className="text-blue-600"
                                />

                                <p
                                    className="
                                        text-sm
                                        font-semibold
                                        text-slate-800
                                    "
                                >
                                    What would you like to improve?
                                </p>

                            </div>

                            <p
                                className="
                                    mt-1
                                    text-xs
                                    leading-5
                                    text-slate-500
                                "
                            >
                                Tell AI what you want to improve
                                and we'll help make your resume stronger.
                            </p>

                        </div>


                        {/* ================================================= */}
                        {/* QUICK PROMPTS */}
                        {/* ================================================= */}

                        <div className="space-y-2">

                            <p
                                className="
                                    text-xs
                                    font-semibold
                                    uppercase
                                    tracking-wide
                                    text-slate-400
                                "
                            >
                                Quick suggestions
                            </p>


                            {quickPrompts.map(
                                (
                                    quickPrompt,
                                ) => (

                                    <button
                                        key={
                                            quickPrompt
                                        }
                                        type="button"
                                        onClick={() =>
                                            handleQuickPrompt(
                                                quickPrompt,
                                            )
                                        }
                                        disabled={
                                            loading ||
                                            disabled
                                        }
                                        className="
                                            w-full
                                            rounded-xl
                                            border
                                            border-slate-200
                                            bg-slate-50
                                            px-3
                                            py-2.5
                                            text-left
                                            text-xs
                                            font-medium
                                            leading-5
                                            text-slate-600
                                            transition
                                            hover:border-blue-200
                                            hover:bg-blue-50
                                            hover:text-blue-700
                                            disabled:cursor-not-allowed
                                            disabled:opacity-50
                                        "
                                    >

                                        {quickPrompt}

                                    </button>

                                ),
                            )}

                        </div>


                        {/* ================================================= */}
                        {/* PROMPT */}
                        {/* ================================================= */}

                        <div className="mt-5">

                            <label
                                htmlFor="resume-ai-prompt"
                                className="
                                    text-xs
                                    font-semibold
                                    text-slate-700
                                "
                            >
                                Your request
                            </label>


                            <textarea
                                id="resume-ai-prompt"
                                value={prompt}
                                onChange={(event) =>
                                    onPromptChange(
                                        event.target.value,
                                    )
                                }
                                disabled={
                                    loading ||
                                    disabled
                                }
                                placeholder="Example: Make my professional summary more concise and impactful..."
                                rows={5}
                                className="
                                    mt-2
                                    w-full
                                    resize-none
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-3
                                    py-3
                                    text-sm
                                    leading-6
                                    text-slate-800
                                    outline-none
                                    transition
                                    placeholder:text-slate-400
                                    focus:border-blue-500
                                    focus:ring-2
                                    focus:ring-blue-100
                                    disabled:cursor-not-allowed
                                    disabled:bg-slate-50
                                "
                            />

                        </div>


                        {/* ================================================= */}
                        {/* GENERATE */}
                        {/* ================================================= */}

                        <button
                            type="button"
                            onClick={onGenerate}
                            disabled={
                                loading ||
                                disabled ||
                                !prompt.trim()
                            }
                            className="
                                mt-4
                                flex
                                w-full
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-blue-600
                                px-4
                                py-3
                                text-sm
                                font-bold
                                text-white
                                shadow-sm
                                transition
                                hover:bg-blue-700
                                hover:shadow-md
                                disabled:cursor-not-allowed
                                disabled:opacity-50
                            "
                        >

                            {loading ? (

                                <>
                                    <Loader2
                                        size={17}
                                        className="animate-spin"
                                    />

                                    Improving...
                                </>

                            ) : (

                                <>
                                    <Sparkles
                                        size={17}
                                    />

                                    Improve with AI
                                </>

                            )}

                        </button>

                    </div>

                </div>

            </div>

        </aside>
    );
}


export default ResumeBuilderAI;