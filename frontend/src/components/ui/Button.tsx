import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "danger";

type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    size?: Size;
    fullWidth?: boolean;
    loading?: boolean;
}

const variantClasses: Record<Variant, string> = {
    primary:
        "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

    secondary:
        "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-500",

    outline:
        "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100 focus:ring-slate-500",

    danger:
        "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
};

const sizeClasses: Record<Size, string> = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
};

function Button({
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    loading = false,
    disabled,
    className = "",
    ...props
}: ButtonProps) {
    return (
        <button
            {...props}
            disabled={disabled || loading}
            className={`
                inline-flex items-center justify-center
                rounded-lg
                font-medium
                transition-colors
                duration-200
                focus:outline-none
                focus:ring-2
                disabled:cursor-not-allowed
                disabled:opacity-60
                ${variantClasses[variant]}
                ${sizeClasses[size]}
                ${fullWidth ? "w-full" : ""}
                ${className}
            `}
        >
            {loading ? "Loading..." : children}
        </button>
    );
}

export default Button;