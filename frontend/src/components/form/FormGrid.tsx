import type { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function FormGrid({ children }: Props) {
    return (
        <div className="grid gap-6 md:grid-cols-2">
            {children}
        </div>
    );
}

export default FormGrid;