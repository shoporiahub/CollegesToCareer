import type { RefObject } from "react";
import { useReactToPrint } from "react-to-print";

function usePrintBiodata(
    contentRef: RefObject<HTMLDivElement | null>
) {
    const handlePrint = useReactToPrint({
        contentRef,
        documentTitle: "Marriage Biodata",
        pageStyle: `
            @page {
                size: A4;
                margin: 12mm;
            }

            @media print {
                body {
                    -webkit-print-color-adjust: exact;
                    print-color-adjust: exact;
                }
            }
        `,
    });

    return handlePrint;
}

export default usePrintBiodata;