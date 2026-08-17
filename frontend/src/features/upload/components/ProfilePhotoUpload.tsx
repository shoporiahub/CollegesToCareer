import { useRef, useState } from "react";
import { useFormContext } from "react-hook-form";

import type { BiodataSchema } from "../../../schemas/biodata.schema";
import { uploadProfilePhoto } from "../services/upload.service";

function ProfilePhotoUpload() {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState("");

    const {
        setValue,
        watch,
        formState: { errors },
    } = useFormContext<BiodataSchema>();

    const profilePhotoUrl = watch("profilePhotoUrl");

    async function handleFileChange(
        event: React.ChangeEvent<HTMLInputElement>
    ) {
        const file = event.target.files?.[0];

        if (!file) return;

        setUploadError("");

        try {
            setUploading(true);

            setValue("profilePhoto", file, {
                shouldDirty: true,
                shouldValidate: true,
            });

            const url = await uploadProfilePhoto(file);

            setValue("profilePhotoUrl", url, {
                shouldDirty: true,
            });
        } catch (error) {
            console.error(error);

            setUploadError("Failed to upload image.");
        } finally {
            setUploading(false);
        }
    }

    return (
        <div className="mb-12 rounded-2xl border border-slate-200 bg-slate-50 p-6">

            <div className="flex flex-col items-center gap-6 md:flex-row">

                <div className="flex-shrink-0">

                    <img
                        src={
                            profilePhotoUrl ||
                            "https://placehold.co/200x200/e2e8f0/64748b?text=Photo"
                        }
                        alt="Profile"
                        className="h-32 w-32 rounded-full border-4 border-white object-cover shadow-md"
                    />

                </div>

                <div className="flex-1">

                    <h3 className="text-lg font-semibold text-slate-900">
                        Profile Photo
                    </h3>

                    {/* <p className="mt-1 text-sm text-slate-500">
                        Upload a clear passport-size photograph.
                        JPG, PNG or WEBP formats are supported.
                    </p> */}

                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={uploading}
                        className="mt-5 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {uploading ? "Uploading..." : "Change Photo"}
                    </button>

                    {uploadError && (
                        <p className="mt-3 text-sm font-medium text-red-500">
                            {uploadError}
                        </p>
                    )}

                    {errors.profilePhoto && (
                        <p className="mt-3 text-sm font-medium text-red-500">
                            {errors.profilePhoto.message}
                        </p>
                    )}

                </div>

            </div>

        </div>
    );
}

export default ProfilePhotoUpload;