import type {
    FieldError,
    FieldPath,
    FieldValues,
    UseFormRegister,
} from "react-hook-form";

type InputFieldProps<T extends FieldValues> = {
    label: string;
    name: FieldPath<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
    type?: React.HTMLInputTypeAttribute;
    placeholder?: string;
    required?: boolean;
};

function InputField<T extends FieldValues>({
    label,
    name,
    register,
    error,
    type = "text",
    placeholder,
    required = false,
}: InputFieldProps<T>) {
    return (
        <div className="space-y-2">

            <label className="text-sm font-semibold text-slate-700">

                {label}

                {required && (
                    <span className="ml-1 text-red-500">*</span>
                )}

            </label>

            <input
                type={type}
                placeholder={placeholder}
                {...register(name)}
                className={`
                    h-12
                    w-full
                    rounded-xl
                    border
                    px-4
                    text-base
                    text-slate-900
                    placeholder:text-slate-400
                    transition-all
                    duration-200
                    outline-none

                    ${
                        error
                            ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                            : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    }
                `}
            />

            {error && (
                <p className="text-sm text-red-500">
                    {error.message}
                </p>
            )}

        </div>
    );
}

export default InputField;