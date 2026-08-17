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
                    h-[76px]
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-8
                    sm:px-9
                "
            >

                {/* ================================================= */}
                {/* LEFT */}
                {/* ================================================= */}

                <button
                    type="button"
                    onClick={handleEdit}
                    className="
                        inline-flex
                        items-center
                        gap-2
                        rounded-xl
                        border
                        border-slate-200
                        bg-white
                        px-4
                        py-2.5
                        text-sm
                        font-bold
                        text-slate-700
                        transition
                        hover:border-blue-200
                        hover:bg-blue-50
                        hover:text-blue-700
                    "
                >

                    <ArrowLeft
                        size={18}
                    />

                    <span className="hidden sm:inline">
                        Edit Resume
                    </span>

                </button>


                {/* ================================================= */}
                {/* CENTER */}
                {/* ================================================= */}

                <div className="hidden text-center sm:block">

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
                {/* RIGHT */}
                {/* ================================================= */}

                <div className="flex items-center gap-2">

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
                            gap-2
                            rounded-xl
                            bg-blue-600
                            px-4
                            py-2.5
                            text-sm
                            font-bold
                            text-white
                            shadow-sm
                            transition
                            hover:bg-blue-700
                            hover:shadow-md
                            disabled:cursor-not-allowed
                            disabled:opacity-60
                        "
                    >

                        {downloading ? (

                            <Loader2
                                size={18}
                                className="animate-spin"
                            />

                        ) : (

                            <Download
                                size={18}
                            />

                        )}

                        <span>
                            {downloading
                                ? "Preparing..."
                                : "Download PDF"}
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
                            gap-2
                            rounded-xl
                            border
                            border-slate-300
                            bg-white
                            px-4
                            py-2.5
                            text-sm
                            font-bold
                            text-slate-700
                            transition
                            hover:border-blue-300
                            hover:bg-blue-50
                            hover:text-blue-700
                            disabled:cursor-not-allowed
                            disabled:opacity-50
                        "
                    >

                        <Printer
                            size={18}
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