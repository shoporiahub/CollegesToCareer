type Props = {
    photoUrl?: string | null;
    fullName?: string;
    headline?: string;
    city?: string;
};

function ReviewPhotoCard({
    photoUrl,
    fullName,
    headline,
    city,
}: Props) {

    return (
        <div
            className="
                overflow-hidden
                rounded-3xl
                border
                border-slate-200
                bg-white
                shadow-sm
            "
        >

            {/* ================================================= */}
            {/* HEADER */}
            {/* ================================================= */}

            <div
                className="
                    bg-gradient-to-r
                    from-blue-600
                    to-blue-700
                    px-6
                    py-5
                "
            >

                <h2
                    className="
                        text-lg
                        font-semibold
                        text-white
                    "
                >
                    Resume Preview
                </h2>


                <p
                    className="
                        mt-1
                        text-sm
                        text-blue-100
                    "
                >
                    This information will appear on your resume.
                </p>

            </div>


            {/* ================================================= */}
            {/* BODY */}
            {/* ================================================= */}

            <div className="p-6 sm:p-8">

                <div
                    className="
                        flex
                        flex-col
                        items-center
                        text-center
                    "
                >

                    {/* Profile Photo */}

                    <img
                        src={
                            photoUrl ||
                            "https://placehold.co/300x300/e2e8f0/64748b?text=Photo"
                        }
                        alt={
                            fullName
                                ? `${fullName} profile`
                                : "Profile"
                        }
                        className="
                            h-32
                            w-32
                            rounded-full
                            border-4
                            border-slate-100
                            object-cover
                            shadow-lg
                            sm:h-40
                            sm:w-40
                        "
                    />


                    {/* Name */}

                    <h3
                        className="
                            mt-6
                            text-2xl
                            font-bold
                            text-slate-900
                        "
                    >
                        {fullName || "Your Name"}
                    </h3>


                    {/* Headline */}

                    {headline && (

                        <p
                            className="
                                mt-2
                                max-w-sm
                                text-sm
                                leading-6
                                text-slate-500
                            "
                        >
                            {headline}
                        </p>

                    )}


                    {/* Location */}

                    {city && (

                        <p
                            className="
                                mt-2
                                text-sm
                                text-slate-500
                            "
                        >
                            📍 {city}
                        </p>

                    )}


                    {/* Status */}

                    <span
                        className="
                            mt-6
                            rounded-full
                            bg-green-100
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-green-700
                        "
                    >
                        ✓ Ready for Review
                    </span>

                </div>


                {/* ================================================= */}
                {/* STATUS */}
                {/* ================================================= */}

                <div
                    className="
                        mt-8
                        border-t
                        border-slate-200
                        pt-6
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between
                        "
                    >

                        <span
                            className="
                                text-sm
                                text-slate-500
                            "
                        >
                            Resume Status
                        </span>


                        <span
                            className="
                                font-semibold
                                text-green-600
                            "
                        >
                            Ready
                        </span>

                    </div>

                </div>

            </div>

        </div>
    );
}


export default ReviewPhotoCard;