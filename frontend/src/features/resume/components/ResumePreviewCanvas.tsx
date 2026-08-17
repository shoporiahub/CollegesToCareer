import {
    useEffect,
    useRef,
} from "react";


interface ResumePreviewCanvasProps {
    html: string;
}


function ResumePreviewCanvas({
    html,
}: ResumePreviewCanvasProps) {

    const iframeRef =
        useRef<HTMLIFrameElement>(null);


    /*
     * =========================================================
     * PRINT
     * =========================================================
     */

    useEffect(() => {

        const handlePrint = () => {

            const iframe =
                iframeRef.current;


            if (!iframe) {
                return;
            }


            iframe.contentWindow?.focus();

            iframe.contentWindow?.print();

        };


        window.addEventListener(
            "resume-print",
            handlePrint,
        );


        return () => {

            window.removeEventListener(
                "resume-print",
                handlePrint,
            );

        };

    }, []);


    return (

        <section className="w-full">

            {/*
             * =====================================================
             * PREVIEW FRAME
             * =====================================================
             */}

            <div
                className="
                    w-full
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/80
                    bg-white/60
                    p-3
                    shadow-[0_20px_60px_rgba(15,23,42,0.10)]
                    backdrop-blur-xl
                    sm:p-5
                "
            >

                {/*
                 * =================================================
                 * A4 WORKSPACE
                 * =================================================
                 */}

                <div
                    className="
                        flex
                        w-full
                        justify-center
                        overflow-auto
                        rounded-[22px]
                        bg-gradient-to-br
                        from-slate-200
                        via-slate-100
                        to-slate-200
                        p-4
                        sm:p-7
                        lg:p-10
                    "
                >

                    {/*
                     * =============================================
                     * A4 PAGE
                     *
                     * A4 ratio:
                     *
                     * 210 / 297
                     *
                     * At 794px width:
                     *
                     * 794 × 297 / 210
                     * ≈ 1123px
                     * =============================================
                     */}

                    <div
                        className="
                            relative
                            w-full
                            max-w-[794px]
                            shrink-0
                            overflow-hidden
                            bg-white
                            shadow-[0_25px_70px_rgba(15,23,42,0.20)]
                        "
                        style={{
                            aspectRatio:
                                "210 / 297",
                        }}
                    >

                        <iframe
                            ref={
                                iframeRef
                            }
                            srcDoc={
                                html
                            }
                            title="Resume Preview"
                            className="
                                absolute
                                inset-0
                                h-full
                                w-full
                                border-0
                                bg-white
                            "
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}


export default ResumePreviewCanvas;