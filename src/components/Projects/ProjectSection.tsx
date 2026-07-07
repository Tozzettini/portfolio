import ProjectCard from "./ProjectCard";
import FadeIn from "../ui/FadeIn";

const projects = [
    {
        title: "AI Anomaly Detection Device",
        description: "Led a 5-person team building a physical AI device on a Jetson Nano for real-time print anomaly detection.",
        technologies: ["Jetson Nano", "CNN", "Python"],
        liveLink: "https://www.linkedin.com/feed/update/urn:li:activity:7407007242698321921/",
        image: "/anomaly.jpeg",
    },
    {
        title: "LinguaDaily",
        description: "A native Android app for daily vocabulary learning across languages, with real-time updates via a self-hosted backend.",
        technologies: ["Kotlin", "Android", "SQL"],
        liveLink: "https://play.google.com/store/apps/details?id=com.joostleo.linguadailyapp&hl=en",
        image: "/LinguaDaily.jpg",
    },
    {
        title: "Pricing Automation Tool",
        description: "Built an automated onboarding pipeline for the Pricing team, cutting processing time from 60 minutes to under 5.",
        technologies: ["React", "Python", "API" , "NoSQL"],
        liveLink: "https://graduation-sigma-two.vercel.app/",
        image: "/Viking_logo.png",
        imageFit: "contain" as const,
    },
    {
        title: "Dharma Home",
        description: "Migrated a yoga studio's static site to a custom WordPress theme, working directly with a non-technical stakeholder.",
        technologies: ["WordPress", "PHP"],
        liveLink: "https://dharmahome.it/",
        image: "/dharmahome.jpg",
        imagePosition: "80% 35%",
    },
    {
        title: "Crypto Tax Calculator",
        description: "A tailored crypto tax-declaration workflow built for TFC as a freelance project; demo on request.",
        technologies: ["Python", "blockchain", "solana" , "crypto"],
        image: "/TFC.jpeg",
        imageFit: "contain" as const,
        imageZoom: 1.4,
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
                        <p className="text-[10px] text-muted-foreground/50 italic mt-1.5 select-none">
                            Non-NDA projects only
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
