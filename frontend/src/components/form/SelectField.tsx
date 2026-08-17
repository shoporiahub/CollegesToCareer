import type {
    FieldError,
    FieldPath,
    FieldValues,
    UseFormRegister,
} from "react-hook-form";

type Option = {
    label: string;
    value: string;
};

type SelectFieldProps<T extends FieldValues> = {
    label: string;
    name: FieldPath<T>;
    register: UseFormRegister<T>;
    error?: FieldError;
    options: Option[];
    placeholder?: string;
    required?: boolean;
};

function SelectField<T extends FieldValues>({
    label,
    name,
    register,
    error,
    options,
    placeholder = "Select an option",
    required = false,
}: SelectFieldProps<T>) {
    return (
        <div className="space-y-2">

            <label className="block text-sm font-semibold tracking-wide text-slate-700">
                {label}

                {required && (
                    <span className="ml-1 text-blue-600">*</span>
                )}
            </label>

            <select
                {...register(name)}
                className={`
                            h-12
                            w-full
                            rounded-xl
                            border
                            bg-white
                            px-4
                            text-base
                            text-slate-900
                            outline-none
                            transition-all
                            duration-200
        ${error
                        ? "border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                        : "border-slate-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
                    }
    `}
            >
                <option value="">
                    {placeholder}
                </option>

                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>
                ))}

            </select>

            {error && (
                <p className="text-sm font-medium text-red-500">
                    {error.message}
                </p>
            )}

        </div>
    );
}

export default SelectField;