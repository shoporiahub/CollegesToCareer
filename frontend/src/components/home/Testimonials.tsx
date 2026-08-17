import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Software Engineering Student",
        message:
            "I built my resume in less than 15 minutes. The design looked professional and helped me apply confidently for internships.",
    },
    {
        name: "Priya Verma",
        role: "Frontend Developer",
        message:
            "The resume builder is simple, clean, and easy to use. I especially liked the modern layouts and PDF quality.",
    },
    {
        name: "Aditya Singh",
        role: "Computer Science Student",
        message:
            "Instead of spending hours formatting in Word, I simply filled in my details and downloaded a polished resume.",
    },
];

function Testimonials() {
    return (
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-7xl px-6">

                {/* Header */}

                <div className="mx-auto max-w-3xl text-center">

                    <h2 className="mt-6 text-5xl font-bold text-slate-900">
                        Trusted by Students
                    </h2>

                    <p className="mt-6 text-lg leading-8 text-slate-600">
                        Thousands of students are building professional resumes
                        and applying for internships and jobs with confidence.
                    </p>

                </div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">

                    {testimonials.map((item) => (

                        <div
                            key={item.name}
                            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >

                            <div className="flex gap-1">

                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={18}
                                        className="fill-yellow-400 text-yellow-400"
                                    />
                                ))}

                            </div>

                            <p className="mt-6 leading-8 text-slate-600">
                                "{item.message}"
                            </p>

                            <div className="mt-8">

                                <h4 className="text-lg font-bold text-slate-900">
                                    {item.name}
                                </h4>

                                <p className="text-slate-500">
                                    {item.role}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}

export default Testimonials;