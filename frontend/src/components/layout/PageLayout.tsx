import type { ReactNode } from "react";

type Props = {
    title: string;
    description?: string;
    children: ReactNode;
};

function PageLayout({
    title,
    description,
    children,
}: Props) {
    return (
        <main className="mx-auto max-w-7xl px-6 py-16">
            <div className="mb-12">
                <h1 className="text-4xl font-bold text-slate-900">
                    {title}
                </h1>

                {description && (
                    <p className="mt-4 max-w-3xl text-lg text-slate-600">
                        {description}
                    </p>
                )}
            </div>

            {children}
        </main>
    );
}

export default PageLayout;