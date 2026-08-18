import {
    ArrowLeft,
    Download,
    Loader2,
    Printer,
} from "lucide-react";

import {
    useNavigate,
} from "react-router-dom";


interface ResumePreviewHeaderProps {

    resumeId: string;

    onPrint: () => void;

    onDownload: () => void;

    downloading: boolean;

    canExport: boolean;

}


function ResumePreviewHeader({
    resumeId,
    onPrint,
    onDownload,
    downloading,
    canExport,
}: ResumePreviewHeaderProps) {

    const navigate =
        useNavigate();


    const handleEdit = () => {

        navigate(
            `/resume-builder/${resumeId}`,
        );

    };


    return (

        <header
            className="
                sticky
                top-0
                z-40
                border-b
                border-slate-200/80
                bg-white/90
                backdrop-blur-xl
            "
        >

            <div
                className="
                    flex
                    h-[68px]
                    w-full
                    items-center
                    justify-between
                    gap-2
                    px-3
                    sm:h-[76px]
                    sm:gap-4
                    sm:px-9
                    lg:px-8
                "
            >

                {/* ================================================= */}
                {/* LEFT - EDIT */}
                {/* ================================================= */}

                <button
                    type="button"
                    onClick={handleEdit}
                    className="
                        inline-flex
                        shrink-0
                        items-center
                        gap-1.5
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-3
                        py-2.5
                        text-xs
                        font-bold
                        text-slate-700
                        transition
                        hover:border-blue-200
                        hover:bg-blue-50
                        hover:text-blue-700
                        sm:gap-2
                        sm:px-4
                        sm:text-sm
                    "
                >

                    <ArrowLeft
                        size={18}
                    />

                    <span>
                        Edit Resume
                    </span>

                </button>


                {/* ================================================= */}
                {/* CENTER */}
                {/* ================================================= */}

                <div
                    className="
                        hidden
                        flex-1
                        text-center
                        sm:block
                    "
                >

                    <h2
                        className="
                            text-lg
                            font-black
                            text-slate-950
                        "
                    >
                        Resume Preview
                    </h2>

                </div>


                {/* ================================================= */}
                {/* RIGHT ACTIONS */}
                {/* ================================================= */}

                <div
                    className="
                        flex
                        shrink-0
                        items-center
                        gap-1.5
                        sm:gap-2
                    "
                >

                    {/* Download */}

                    <button
                        type="button"
                        onClick={onDownload}
                        disabled={
                            !canExport ||
                            downloading
                        }
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-3
                            py-2.5
                            text-xs
                            font-bold
                            text-white
                            shadow-sm
                            transition
                            hover:bg-blue-700
                            hover:shadow-md
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                            sm:px-4
                            sm:text-sm
                        "
                    >

                        {downloading ? (

                            <Loader2
                                size={17}
                                className="animate-spin"
                            />

                        ) : (

                            <Download
                                size={17}
                            />

                        )}

                        <span>
                            {downloading
                                ? "Preparing..."
                                : "Download"}
                        </span>

                    </button>


                    {/* Print */}

                    <button
                        type="button"
                        onClick={onPrint}
                        disabled={
                            !canExport ||
                            downloading
                        }
                        className="
                            inline-flex
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            border
                            border-slate-300
                            bg-white
                            px-3
                            py-2.5
                            text-xs
                            font-bold
                            text-slate-700
                            transition
                            hover:border-blue-300
                            hover:bg-blue-50
                            hover:text-blue-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                            sm:px-4
                            sm:text-sm
                        "
                    >

                        <Printer
                            size={17}
                        />

                        <span>
                            Print
                        </span>

                    </button>

                </div>

            </div>

        </header>
    );
}


export default ResumePreviewHeader;