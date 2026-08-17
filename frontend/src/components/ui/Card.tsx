import type { HTMLAttributes, ReactNode } from "react";

type Variant = "default" | "outlined" | "elevated";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    variant?: Variant;
    padding?: "none" | "sm" | "md" | "lg";
}

const variantClasses: Record<Variant, string> = {
    default: "bg-white border border-slate-200",
    outlined: "border-2 border-slate-300 bg-white",
    elevated: "bg-white shadow-lg",
};

const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

function Card({
    children,
    variant = "default",
    padding = "md",
    className = "",
    ...props
}: CardProps) {
    return (
        <div
            {...props}
            className={`
                rounded-2xl
                transition-shadow
                duration-200
                ${variantClasses[variant]}
                ${paddingClasses[padding]}
                ${className}
            `}
        >
            {children}
        </div>
    );
}

export default Card;