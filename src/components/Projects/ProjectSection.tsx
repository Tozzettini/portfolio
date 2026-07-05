import ProjectCard from "./ProjectCard";
import FadeIn from "../ui/FadeIn";

const projects = [
    {
        title: "AI Anomaly Detection Device",
        description: "Led a team of 5 to build a physical AI device on a Jetson Nano for real-time print anomaly detection, as a university project with Robert GmbH (Exact Colours). Implemented a CNN model deployed fully on-premises and oversaw UI design and end-to-end project execution.",
        technologies: ["Jetson Nano", "CNN", "Python", "Computer Vision"],
    },
    {
        title: "LinguaDaily",
        description: "A native Android app for daily vocabulary learning across languages, with real-time word updates via a self-hosted backend. Shipped to the Google Play Store.",
        technologies: ["Kotlin", "Android"],
        liveLink: "https://play.google.com/store/apps/details?id=com.joostleo.linguadailyapp&hl=en",
    },
    {
        title: "Dharma Home",
        description: "Migrated a client's static site to a custom WordPress theme for a yoga studio, collaborating directly with a non-technical stakeholder on design and content.",
        technologies: ["WordPress", "PHP"],
        liveLink: "https://dharmahome.it/",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="md:py-16 py-8 w-full border-b-3 border-foreground">
             <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <span className="font-mono inline-block px-2 py-1 text-[10px] font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-3 select-none">
                            My Portfolio
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground select-none uppercase font-mono mb-3">Featured Projects</h2>
                        <div className="w-16 h-1 bg-foreground mx-auto mb-3" />
                        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-medium">
                            A selection of projects where I've turned complex problems into elegant solutions.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
                    {projects.map((project, index) => (
                        <FadeIn key={index} delay={index * 0.15}>
                            <ProjectCard
                                {...project}
                            />
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
