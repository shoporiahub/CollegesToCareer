type Props = {
    title: string;
    description?: string;
};

function SectionTitle({
    title,
    description,
}: Props) {
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-slate-800">
                {title}
            </h2>

            {description && (
                <p className="mt-2 text-slate-500">
                    {description}
                </p>
            )}
        </div>
    );
}

export default SectionTitle;