import ExperienceCard from "./ExperienceCard";
import FadeIn from "../ui/FadeIn";

const experiences = [
    {
        role: "Solution Engineer Intern",
        company: "Viking Office Direct (RAJA Group)",
        companyLink: "https://www.vikingoffice.eu/",
        companyLogo: "/logos/viking.png",
        duration: "Feb 2026 - Jul 2026",
        description: "Designed and delivered an automated product onboarding pipeline for the Pricing team, reducing processing time from up to 60 minutes to under 5 minutes and projecting €17,250 in annual savings. Implemented schema-driven validation that eliminated a 40% onboarding error rate, with an adapter-based architecture enabling live system integration without structural changes.",
        technologies: ["Python", "SQL", "Excel/VBA", "React"],
    },
    {
        role: "Software Engineer (Part-time)",
        company: "Beech Applications B.V.",
        companyLink: "https://www.beech.it/en/",
        companyLogo: "/logos/beech.png",
        duration: "Apr 2025 - Apr 2026",
        description: "Owned full-cycle delivery of a custom e-commerce web solution, handling client communications, design, development, and deployment; leveraged AI tooling to accelerate development and iteration cycles. Migrated a Laravel static website to a WordPress theme, collaborating with non-technical stakeholders.",
        technologies: ["Laravel", "WordPress" , "React"],
    },
    {
        role: "Software Engineer Intern",
        company: "Beech Applications B.V.",
        companyLink: "https://www.beech.it/en/",
        companyLogo: "/logos/beech.png",
        duration: "Sept 2024 - Mar 2025",
        description: "Built the foundation of a production e-commerce platform, optimizing bundle size and page load speed to deliver a fast and responsive user experience.",
        technologies: [ "Vue" , "SQL" , "HTML5" , "CSS"],
    },
    {
        role: "Data Scientist and Analyst Intern",
        company: "Canon Production Printing Netherlands B.V.",
        companyLink: "https://global.canon/",
        companyLogo: "/logos/canon.png",
        duration: "Jan 2024 - Jul 2024",
        description: "Engineered and trained predictive AI models in a Scrum team of 3 to support business forecasting and reduce lead times between external suppliers and internal warehouse operations.",
        technologies: ["Python", "Pandas", "Scikit-learn"],
    },
];

export default function Experience() {
    return (
        <section id="experience" className="md:py-16 py-8 w-full border-b-3 border-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <span className="font-mono inline-block px-2 py-1 text-[10px] font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-3 select-none">
                            My Path
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground select-none uppercase font-mono">Experience</h2>
                        <div className="w-10 h-1.5 bg-foreground mx-auto mt-2 mb-3" />
                        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-medium">
                            My professional journey and the technical milestones I've achieved along the way.
                        </p>
                    </div>
                </FadeIn>

                {/* Timeline Layout with Single Left Vertical Robust Line */}
                <div className="relative max-w-3xl mx-auto">
                    {/* Continuous Vertical Timeline Track */}
                    <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-0.5 bg-foreground" />

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <FadeIn key={index} delay={index * 0.2}>
                                <div className="relative flex items-start">
                                    {/* Robust Solid Timeline Circle Marker */}
                                    <div className="absolute left-3 sm:left-5 w-4 h-4 rounded-full bg-background border-3 border-foreground transform -translate-x-1/2 top-6 z-10 shadow-[2px_2px_0px_var(--foreground)]" />

                                    {/* Experience Card Wrapper */}
                                    <div className="w-full ml-7 sm:ml-10">
                                        <ExperienceCard
                                            {...exp}
                                        />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
