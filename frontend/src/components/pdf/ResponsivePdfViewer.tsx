import {
    type ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";

type Props = {
    children: ReactNode;
};

const A4_WIDTH = 794;
const A4_HEIGHT = 1123;

function ResponsivePdfViewer({ children }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);

    const [scale, setScale] = useState(1);

    const [isPrinting, setIsPrinting] = useState(false);

    useEffect(() => {
        const beforePrint = () => setIsPrinting(true);
        const afterPrint = () => setIsPrinting(false);

        window.addEventListener("beforeprint", beforePrint);
        window.addEventListener("afterprint", afterPrint);

        return () => {
            window.removeEventListener("beforeprint", beforePrint);
            window.removeEventListener("afterprint", afterPrint);
        };
    }, []);

    useEffect(() => {
        const container = containerRef.current;

        if (!container) return;

        const calculateScale = () => {

            if (isPrinting) {
                setScale(1);
                return;
            }

            const availableWidth =
                container.clientWidth - 24;

            const newScale = Math.min(
                1,
                availableWidth / A4_WIDTH
            );

            setScale(newScale);
        };

        calculateScale();

        const observer = new ResizeObserver(calculateScale);

        observer.observe(container);

        return () => observer.disconnect();

    }, [isPrinting]);

    return (
        <div
            className={
                isPrinting
                    ? "bg-white"
                    : "min-h-screen bg-slate-200 py-4 sm:py-6 lg:py-10"
            }
        >
            <div
                ref={containerRef}
                className={
                    isPrinting
                        ? "flex justify-center"
                        : "mx-auto flex max-w-7xl justify-center px-3 sm:px-6 lg:px-8"
                }
            >
                <div
                    style={{
                        width: A4_WIDTH * scale,
                        height: A4_HEIGHT * scale,
                    }}
                >
                    <div
                        style={{
                            width: A4_WIDTH,
                            transform: `scale(${scale})`,
                            transformOrigin: "top left",
                            boxShadow: isPrinting
                                ? "none"
                                : "0 15px 35px rgba(0,0,0,.18)",
                            borderRadius: isPrinting
                                ? 0
                                : 12,
                            overflow: "hidden",
                        }}
                    >
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResponsivePdfViewer;