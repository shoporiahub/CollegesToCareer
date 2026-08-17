type Props = {
    photoUrl?: string | null;
    fullName?: string;
    gender?: string;
    age?: number;
    city?: string;
};

function ReviewPhotoCard({
    photoUrl,
    fullName,
    gender,
    age,
    city,
}: Props) {
    return (
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}

            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-5">

                <h2 className="text-lg font-semibold text-white">
                    Profile Preview
                </h2>

                <p className="mt-1 text-sm text-blue-100">
                    This information will appear on your biodata.
                </p>

            </div>

            {/* Body */}

            <div className="p-8">

                <div className="flex flex-col items-center">

                    <img
                        src={
                            photoUrl ||
                            "https://placehold.co/300x300/e2e8f0/64748b?text=Photo"
                        }
                        alt="Profile"
                        className="h-40 w-40 rounded-full border-4 border-slate-100 object-cover shadow-lg"
                    />

                    <h3 className="mt-6 text-2xl font-bold text-slate-900 text-center">
                        {fullName || "Your Name"}
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        {[gender, age ? `${age} Years` : null]
                            .filter(Boolean)
                            .join(" • ")}
                    </p>

                    {city && (
                        <p className="mt-1 text-sm text-slate-500">
                            📍 {city}
                        </p>
                    )}

                    <span className="mt-6 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                        ✓ Ready for Generation
                    </span>

                </div>

                <div className="mt-8 border-t border-slate-200 pt-6">

                    <div className="flex items-center justify-between">

                        <span className="text-sm text-slate-500">
                            Status
                        </span>

                        <span className="font-semibold text-green-600">
                            Complete
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default ReviewPhotoCard;