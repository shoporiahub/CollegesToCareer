import { useNavigate } from "react-router-dom";


interface ResumeBuilderHeaderProps {
    isSubmitting: boolean;
}


function ResumeBuilderHeader({
    isSubmitting,
}: ResumeBuilderHeaderProps) {

    const navigate =
        useNavigate();


    return (
        <header className="border-b border-slate-200 bg-white">

            <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6">

                {/* ================================================= */}
                {/* BRAND */}
                {/* ================================================= */}

                <div>

                    <p className="text-sm font-medium text-blue-600">
                        College to Career
                    </p>

                    <h1 className="text-xl font-bold text-slate-900">
                        Create Your Resume
                    </h1>

                </div>


                {/* ================================================= */}
                {/* EXIT */}
                {/* ================================================= */}

                <button
                    type="button"
                    onClick={() =>
                        navigate("/dashboard")
                    }
                    disabled={isSubmitting}
                    className="
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        px-4
                        py-2.5
                        text-sm
                        font-semibold
                        text-slate-700
                        transition
                        hover:bg-slate-50
                        disabled:cursor-not-allowed
                        disabled:opacity-50
                    "
                >
                    Exit
                </button>

            </div>

        </header>
    );
}


export default ResumeBuilderHeader;