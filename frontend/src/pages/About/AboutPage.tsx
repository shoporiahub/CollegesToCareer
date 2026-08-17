import Layout from "../../components/layout/Layout";

import AboutHero from "./components/AboutHero";
import AboutMission from "./components/AboutMission";
import AboutFeatures from "./components/AboutFeatures";
import AboutCTA from "./components/AboutCTA";


function AboutPage() {
    return (
        <Layout>

            <main>
                <AboutHero />

                <AboutMission />

                <AboutFeatures />

                <AboutCTA />
            </main>

        </Layout>
    );
}


export default AboutPage;