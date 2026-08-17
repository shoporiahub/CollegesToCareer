import type { LabelHTMLAttributes } from "react";

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

function Label({ className = "", ...props }: LabelProps) {
    return (
        <label
            {...props}
            className={`mb-1 block text-sm font-medium ${className}`}
        />
    );
}

export default Label;