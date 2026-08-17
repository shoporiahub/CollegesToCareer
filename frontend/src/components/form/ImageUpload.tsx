import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

type ImageUploadProps = {
    value: File | null;
    onChange: (file: File | null) => void;
    error?: string;
};

function ImageUpload({
    value,
    onChange,
    error,
}: ImageUploadProps) {
    const [preview, setPreview] = useState<string | null>(null);

    useEffect(() => {
        if (!value) {
            setPreview(null);
            return;
        }

        const objectUrl = URL.createObjectURL(value);

        setPreview(objectUrl);

        return () => {
            URL.revokeObjectURL(objectUrl);
        };
    }, [value]);

    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length > 0) {
                onChange(acceptedFiles[0]);
            }
        },
        [onChange]
    );

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        open,
        fileRejections,
    } = useDropzone({
        onDrop,
        multiple: false,
        noClick: true,
        maxFiles: 1,
        maxSize: 5 * 1024 * 1024,
        accept: {
            "image/jpeg": [],
            "image/png": [],
            "image/webp": [],
        },
    });

    return (
        <div className="space-y-3">
            {!value ? (
                <div
                    {...getRootProps()}
                    className={`w-full overflow-hidden rounded-xl border-2 border-dashed p-6 sm:p-10 text-center transition-all
                        ${isDragActive
                            ? "border-blue-500 bg-blue-50"
                            : "border-slate-300 hover:border-blue-500"
                        }`}
                >
                    <input {...getInputProps()} />

                    <div className="space-y-4">
                        <div className="text-5xl">📷</div>

                        <div>
                            <h3 className="text-lg font-semibold text-slate-800">
                                Upload Profile Photo
                            </h3>

                            <p className="mt-2 text-slate-500">
                                Drag & drop your image here
                            </p>

                            <p className="text-slate-500">
                                or
                            </p>

                            <button
                                type="button"
                                onClick={open}
                                className="mt-3 rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                            >
                                Browse Files
                            </button>
                        </div>

                        <div className="text-sm text-slate-400">
                            JPG • PNG • WEBP
                            <br />
                            Maximum size: 5 MB
                        </div>
                    </div>
                </div>
            ) : (
                <div className="rounded-xl border border-slate-300 p-6">
                    <div className="flex flex-col items-center">
                        <img
                            src={preview ?? ""}
                            alt="Profile Preview"
                            className="h-48 w-48 rounded-xl border object-cover shadow"
                        />

                        <p className="mt-4 font-medium text-slate-800">
                            {value.name}
                        </p>

                        <p className="mt-1 text-sm text-slate-500">
                            {(value.size / 1024 / 1024).toFixed(2)} MB
                        </p>

                        <div className="mt-6 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                            <button
                                type="button"
                                onClick={open}
                                className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
                            >
                                Change Photo
                            </button>

                            <button
                                type="button"
                                onClick={() => onChange(null)}
                                className="rounded-lg bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
                            >
                                Remove Photo
                            </button>
                        </div>
                    </div>

                    <input {...getInputProps()} />
                </div>
            )}

            {fileRejections.length > 0 && (
                <p className="text-sm text-red-500">
                    {fileRejections[0].errors[0].message}
                </p>
            )}

            {error && (
                <p className="text-sm text-red-500">
                    {error}
                </p>
            )}
        </div>
    );
}

export default ImageUpload;