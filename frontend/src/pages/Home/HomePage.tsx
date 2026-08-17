import Layout from "../../components/layout/Layout";
import Hero from "../../components/home/Hero";
import Features from "../../components/home/Features";
import TemplatePreview from "../../components/home/TemplatePreview";
import FAQ from "../../components/home/FAQ";
import Testimonials from "../../components/home/Testimonials";
import Stats from "../../components/home/Stats";
// import HowItWorks from "../../components/home/Howitworks";
import Cta from "../../components/home/Cta";



function HomePage() {
    return (
        <Layout>
            <Hero />
            <Stats />
            <TemplatePreview />
            <Features />
            {/* <HowItWorks /> */}
            <Testimonials />
            <FAQ />
            <Cta />
        </Layout>
    );
}

export default HomePage;