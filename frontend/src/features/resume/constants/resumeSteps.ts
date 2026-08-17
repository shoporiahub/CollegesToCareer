import PersonalInformation from "../components/PersonalInformation";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Certifications from "../components/Certifications";
import Languages from "../components/Languages";
import Achievements from "../components/Achievements";

export const RESUME_STEPS = [
    {
        id: "personal",
        title: "Personal Information",
        description: "Basic information and contact details",
        component: PersonalInformation,
    },
    {
        id: "experience",
        title: "Experience",
        description: "Your professional experience",
        component: Experience,
    },
    {
        id: "education",
        title: "Education",
        description: "Your educational background",
        component: Education,
    },
    {
        id: "projects",
        title: "Projects",
        description: "Projects that showcase your skills",
        component: Projects,
    },
    {
        id: "skills",
        title: "Skills",
        description: "Technical and professional skills",
        component: Skills,
    },
    {
        id: "certifications",
        title: "Certifications",
        description: "Professional certifications and credentials",
        component: Certifications,
    },
    {
        id: "languages",
        title: "Languages",
        description: "Languages and proficiency",
        component: Languages,
    },
    {
        id: "achievements",
        title: "Achievements",
        description: "Awards and accomplishments",
        component: Achievements,
    },
];