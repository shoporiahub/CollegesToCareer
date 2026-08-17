import Layout from "../../components/layout/Layout";
import TemplateCard from "../../components/templates/TemplateCard";
import { useTemplates } from "../../hooks/useTemplates";

function TemplatesPage() {
    const { templates, loading } = useTemplates();

    if (loading) {
        return (
            <Layout>

                <div className="flex min-h-[60vh] items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

                    <p className="text-2xl font-semibold text-white">
                        Loading Templates...
                    </p>

                </div>

            </Layout>
        );
    }

    return (
        <Layout>

            {/* Hero */}

            <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-28">

                <div className="mx-auto max-w-7xl px-8">

                    <div className="mx-auto max-w-3xl text-center">

                        {/* <span className="inline-flex rounded-full bg-blue-500/20 px-4 py-2 text-sm font-semibold text-blue-200">

                            Resume Templates

                        </span> */}

                        <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white">

                            Choose Your Perfect

                            <span className="text-blue-300">

                                {" "}Resume Template

                            </span>

                        </h1>

                        <p className="mt-6 text-lg leading-8 text-slate-300">

                            Explore professionally designed resume templates
                            built for students, graduates, developers, and
                            experienced professionals. Choose a template and
                            start building your resume today.

                        </p>

                    </div>

                    {/* Templates */}

                    <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

                        {templates.map((template) => (

                            <TemplateCard
                                key={template.id}
                                slug={template.slug}
                                name={template.name}
                                price={template.price}
                                description={template.description}
                                image={template.image}
                            />

                        ))}

                    </div>

                </div>

            </section>

        </Layout>
    );
}

export default TemplatesPage;