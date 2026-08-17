type Props = {
    onClick: () => void;
};

function DownloadButton({
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
            ⬇ Download PDF
        </button>
    );
}

export default DownloadButton;