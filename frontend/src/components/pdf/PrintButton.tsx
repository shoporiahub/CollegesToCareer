type Props = {
    onClick: () => void;
};

function PrintButton({
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2 hover:bg-slate-100"
        >
            🖨 Print
        </button>
    );
}

export default PrintButton;