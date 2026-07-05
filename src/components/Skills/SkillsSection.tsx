import { TypeScript, JavaScript, Python,
    Docker, Git, PostgreSQL,
    React, Nodejs, HTML5, CSS,
    Php, Java, Cplusplus, Kotlin, VueJs, Laravel, FastAPI,
    Supabase, Vercel, Render } from "../ui/DevIcons"
import { Database, Boxes } from "lucide-react"
import SkillCard from "./SkillCard"
import FadeIn from "../ui/FadeIn"

const categories = [
    {
        title: "Languages",
        skills: [
            { name: "Python", Icon: Python },
            { name: "JavaScript", Icon: JavaScript },
            { name: "TypeScript", Icon: TypeScript },
            { name: "Java", Icon: Java },
            { name: "C++", Icon: Cplusplus },
            { name: "Kotlin", Icon: Kotlin },
            { name: "SQL", Icon: Database },
            { name: "PHP", Icon: Php }
        ]
    },
    {
        title: "Frontend",
        skills: [
            { name: "HTML5", Icon: HTML5 },
            { name: "CSS", Icon: CSS },
            { name: "React.js", Icon: React },
            { name: "React Native", Icon: React },
            { name: "Vue.js", Icon: VueJs }
        ]
    },
    {
        title: "Backend",
        skills: [
            { name: "Node.js", Icon: Nodejs },
            { name: "Laravel", Icon: Laravel },
            { name: "FastAPI", Icon: FastAPI }
        ]
    },
    {
        title: "Database",
        skills: [
            { name: "PostgreSQL", Icon: PostgreSQL },
            { name: "NoSQL", Icon: Boxes },
            { name: "Supabase", Icon: Supabase },
            { name: "Vercel", Icon: Vercel },
            { name: "Render", Icon: Render }
        ]
    },
    {
        title: "Tools",
        skills: [
            { name: "Docker", Icon: Docker },
            { name: "Git", Icon: Git }
        ]
    }
]

export default function Skills() {
    return (
        <section id="skills" className="md:py-16 py-8 w-full border-b-3 border-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <FadeIn>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground select-none uppercase font-mono">My Tech Stack</h2>
                        <div className="w-14 h-1.5 bg-foreground mx-auto mt-2" />
                        <p className="text-muted-foreground text-sm sm:text-base mt-3 font-medium">Technical tools which bring my ideas to life.</p>
                    </div>
                </FadeIn>

                {categories.map((category, index) => (
                    <div key={index} className="flex flex-col md:flex-row items-stretch gap-4 md:gap-5 mb-8 border-b-2 border-dashed border-foreground/15 pb-5 last:border-b-0 last:pb-0">
                        {/* Category Left Header Block */}
                        <div className="w-full md:w-1/4 shrink-0 flex items-center md:items-start">
                            <FadeIn delay={index * 0.1}>
                                <div className="inline-flex items-center gap-2 bg-foreground text-background px-3 py-1.5 border-2 border-foreground shadow-[2px_2px_0px_var(--foreground)] font-mono text-xs sm:text-sm font-black uppercase tracking-wider select-none">
                                    {category.title}
                                </div>
                            </FadeIn>
                        </div>

                        {/* Category Skills Grid Box */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:flex xl:flex-wrap gap-3 w-full justify-start items-center">
                            {category.skills.map((skill, idx) => (
                                <FadeIn key={idx} delay={(index * 0.1) + (idx * 0.05)} className="w-full xl:w-auto">
                                    <SkillCard {...skill} />
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
