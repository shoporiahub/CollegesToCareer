import type { Step } from "./steps";


const colorStyles = {
    blue: {
        card: "border-blue-100 bg-blue-50",
        number: "bg-blue-100 text-blue-600",
    },

    violet: {
        card: "border-violet-100 bg-violet-50",
        number: "bg-violet-100 text-violet-600",
    },

    amber: {
        card: "border-amber-100 bg-amber-50",
        number: "bg-amber-100 text-amber-600",
    },

    emerald: {
        card: "border-emerald-100 bg-emerald-50",
        number: "bg-emerald-100 text-emerald-600",
    },
};


type StepCardProps = Step;


function StepCard({
    number,
    title,
    description,
    color,
}: StepCardProps) {

    const styles = colorStyles[color];

    return (
        <div
            className={`rounded-3xl border p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.card}`}
        >

            <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl text-lg font-extrabold ${styles.number}`}
            >
                {number}
            </div>

            <h3 className="mt-7 text-2xl font-bold text-slate-900">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-slate-600">
                {description}
            </p>

        </div>
    );
}


export default StepCard;