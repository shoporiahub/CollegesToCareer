import type {
    FieldError,
    FieldPath,
    FieldValues,
    UseFormRegister,
} from "react-hook-form";

type TextareaFieldProps<T extends FieldValues> = {
    label: string;
    name: FieldPath<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
    placeholder?: string;
    rows?: number;
    required?: boolean;
};

function TextareaField<T extends FieldValues>({
    label,
    name,
    register,
    error,
    placeholder,
    rows = 4,
    required = false,
}: TextareaFieldProps<T>) {
    return (
        <div>
            <label className="mb-2 block text-sm font-semibold text-slate-700">
                {label}

                {required && (
                    <span className="ml-1 text-red-500">*</span>
                )}
            </label>

            <textarea
                {...register(name)}
                rows={rows}
                placeholder={placeholder}
                className={`w-full resize-none rounded-lg border px-4 py-3 outline-none transition
                    ${
                        error
                            ? "border-red-500 focus:ring-2 focus:ring-red-200"
                            : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
                    }`}
            />

            {error && (
                <p className="mt-2 text-sm text-red-500">
                    {error.message}
                </p>
            )}
        </div>
    );
}

export default TextareaField;