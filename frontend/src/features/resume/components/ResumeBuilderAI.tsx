import {
    Copy,
    Loader2,
    RotateCcw,
    Send,
    Check,
} from "lucide-react";

import {
    useState,
} from "react";

import {
    askAI,
} from "../ai/api/ai.api";


const QUICK_QUESTIONS = [
    "How can I improve my resume?",
    "Improve my professional summary",
    "What skills should I add?",
    "How can I make my resume better?",
];


function ResumeBuilderAI() {

    const [
        question,
        setQuestion,
    ] = useState("");


    const [
        answer,
        setAnswer,
    ] = useState<string | null>(null);


    const [
        askedQuestion,
        setAskedQuestion,
    ] = useState("");


    const [
        loading,
        setLoading,
    ] = useState(false);


    const [
        copied,
        setCopied,
    ] = useState(false);


    const handleAsk = async () => {

        const trimmedQuestion =
            question.trim();


        if (
            !trimmedQuestion ||
            loading
        ) {
            return;
        }


        try {

            setLoading(true);

            setAnswer(null);

            setAskedQuestion(
                trimmedQuestion,
            );


            const response =
                await askAI(
                    trimmedQuestion,
                );


            setAnswer(
                response.answer,
            );

        } catch (error) {

            console.error(
                "AI request failed:",
                error,
            );

            setAnswer(
                "Sorry, we couldn't process your question right now. Please try again.",
            );

        } finally {

            setLoading(false);

        }

    };


    const handleQuickQuestion = (
        value: string,
    ) => {

        setQuestion(value);

    };


    const handleAskAgain = () => {

        setAnswer(null);

        setCopied(false);

    };


    const handleCopy = async () => {

        if (!answer) {
            return;
        }


        try {

            await navigator.clipboard.writeText(
                answer,
            );


            setCopied(true);


            setTimeout(() => {

                setCopied(false);

            }, 2000);

        } catch (error) {

            console.error(
                "Failed to copy answer:",
                error,
            );

        }

    };


    /*
     * =========================================================
     * ANSWER VIEW
     * =========================================================
     */

    if (answer !== null) {

        return (

            <div
                className="
                    overflow-hidden
                    rounded-3xl
                    border
                    border-blue-100
                    bg-white
                    shadow-sm
                "
            >

                {/* Header */}

                <div
                    className="
                        bg-gradient-to-r
                        from-blue-600
                        to-indigo-600
                        px-6
                        py-5
                    "
                >

                    <h2
                        className="
                            text-lg
                            font-bold
                            text-white
                        "
                    >
                        College to Career AI
                    </h2>

                    <p
                        className="
                            mt-1
                            text-sm
                            text-blue-100
                        "
                    >
                        Here's what our AI recommends.
                    </p>

                </div>


                <div className="p-6">

                    {/* Question */}

                    <div>

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-wider
                                text-slate-400
                            "
                        >
                            You asked
                        </p>


                        <div
                            className="
                                mt-2
                                rounded-2xl
                                bg-slate-50
                                px-4
                                py-3
                                text-sm
                                leading-6
                                text-slate-700
                            "
                        >
                            {askedQuestion}
                        </div>

                    </div>


                    {/* Answer */}

                    <div className="mt-6">

                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-wider
                                text-blue-600
                            "
                        >
                            AI Answer
                        </p>


                        <div
                            className="
                                mt-3
                                whitespace-pre-wrap
                                rounded-2xl
                                border
                                border-slate-200
                                bg-white
                                p-5
                                text-sm
                                leading-7
                                text-slate-700
                            "
                        >
                            {answer}
                        </div>

                    </div>


                    {/* Actions */}

                    <div
                        className="
                            mt-6
                            flex
                            flex-col
                            gap-3
                            sm:flex-row
                        "
                    >

                        <button
                            type="button"
                            onClick={
                                handleCopy
                            }
                            className="
                                inline-flex
                                flex-1
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                border
                                border-slate-200
                                bg-white
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-slate-700
                                transition
                                hover:border-blue-200
                                hover:bg-blue-50
                                hover:text-blue-700
                            "
                        >

                            {copied ? (

                                <>
                                    <Check
                                        size={17}
                                    />

                                    Copied
                                </>

                            ) : (

                                <>
                                    <Copy
                                        size={17}
                                    />

                                    Copy Answer
                                </>

                            )}

                        </button>


                        <button
                            type="button"
                            onClick={
                                handleAskAgain
                            }
                            className="
                                inline-flex
                                flex-1
                                items-center
                                justify-center
                                gap-2
                                rounded-xl
                                bg-blue-600
                                px-4
                                py-3
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-blue-700
                            "
                        >

                            <RotateCcw
                                size={17}
                            />

                            Ask Again

                        </button>

                    </div>

                </div>

            </div>

        );

    }


    /*
     * =========================================================
     * QUESTION VIEW
     * =========================================================
     */

    return (

        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
            "
        >

            {/* Header */}

            <div
                className="
                    bg-gradient-to-r
                    from-blue-600
                    to-indigo-600
                    px-6
                    py-5
                "
            >

                <h2
                    className="
                        text-lg
                        font-bold
                        text-white
                    "
                >
                    College to Career AI
                </h2>

                <p
                    className="
                        mt-1
                        text-sm
                        text-blue-100
                    "
                >
                    Get help with your resume and career.
                </p>

            </div>


            <div className="p-6">

                {/* Quick Questions */}

                <div>

                    <p
                        className="
                            text-sm
                            font-semibold
                            text-slate-700
                        "
                    >
                        Quick questions
                    </p>


                    <div
                        className="
                            mt-3
                            flex
                            flex-wrap
                            gap-2
                        "
                    >

                        {QUICK_QUESTIONS.map(
                            (item) => (

                                <button
                                    key={item}
                                    type="button"
                                    onClick={() =>
                                        handleQuickQuestion(
                                            item,
                                        )
                                    }
                                    className="
                                        rounded-full
                                        border
                                        border-slate-200
                                        bg-slate-50
                                        px-4
                                        py-2
                                        text-xs
                                        font-semibold
                                        text-slate-600
                                        transition
                                        hover:border-blue-200
                                        hover:bg-blue-50
                                        hover:text-blue-700
                                    "
                                >
                                    {item}
                                </button>

                            ),
                        )}

                    </div>

                </div>


                {/* Input */}

                <div className="mt-6">

                    <label
                        htmlFor="resume-ai-question"
                        className="
                            mb-2
                            block
                            text-sm
                            font-semibold
                            text-slate-700
                        "
                    >
                        Ask anything
                    </label>


                    <textarea
                        id="resume-ai-question"
                        value={question}
                        onChange={(event) =>
                            setQuestion(
                                event.target.value,
                            )
                        }
                        onKeyDown={(event) => {

                            if (
                                event.key === "Enter" &&
                                !event.shiftKey
                            ) {

                                event.preventDefault();

                                handleAsk();

                            }

                        }}
                        placeholder="Ask AI about your resume or career..."
                        rows={4}
                        disabled={loading}
                        className="
                            w-full
                            resize-none
                            rounded-2xl
                            border
                            border-slate-200
                            bg-slate-50
                            px-4
                            py-3
                            text-sm
                            leading-6
                            text-slate-800
                            outline-none
                            transition
                            placeholder:text-slate-400
                            focus:border-blue-400
                            focus:bg-white
                            focus:ring-4
                            focus:ring-blue-100
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    />


                    <p
                        className="
                            mt-2
                            text-xs
                            text-slate-400
                        "
                    >
                        Press Enter to ask. Use Shift + Enter
                        for a new line.
                    </p>

                </div>


                {/* Ask Button */}

                <button
                    type="button"
                    onClick={handleAsk}
                    disabled={
                        !question.trim() ||
                        loading
                    }
                    className="
                        mt-5
                        inline-flex
                        w-full
                        items-center
                        justify-center
                        gap-2
                        rounded-xl
                        bg-blue-600
                        px-5
                        py-3.5
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
                                size={18}
                                className="animate-spin"
                            />

                            Thinking...
                        </>

                    ) : (

                        <>
                            <Send
                                size={18}
                            />

                            Ask AI
                        </>

                    )}

                </button>

            </div>

        </div>

    );
}


export default ResumeBuilderAI;