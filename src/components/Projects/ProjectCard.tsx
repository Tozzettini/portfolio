import { FaFolder } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

interface ProjectProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink?: string;
    liveLink?: string;
    image?: string;
    imagePosition?: string;
    imageFit?: "cover" | "contain";
    imageZoom?: number;
}

export default function ProjectCard({ title, description, technologies, githubLink, liveLink, image, imagePosition = "center", imageFit = "cover", imageZoom = 1 }: ProjectProps) {
    return (
        <div className="group relative w-full aspect-square overflow-hidden bg-card text-foreground border-3 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_0px_var(--foreground)] transition-all duration-300 ease-out select-none">

            {/* Image or Placeholder */}
            {image ? (
                <div className={`absolute inset-0 overflow-hidden ${imageFit === "contain" ? "bg-white" : ""}`}>
                    <div className="w-full h-full" style={{ transform: `scale(${imageZoom})`, transformOrigin: "center" }}>
                        <img
                            src={image}
                            alt={title}
                            style={{ objectPosition: imagePosition, objectFit: imageFit }}
                            className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                </div>
            ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-background text-foreground/40">
                    <FaFolder size={32} />
                </div>
            )}

            {/* Default State: Title Bar */}
            <div className="absolute inset-x-0 bottom-0 bg-foreground text-background px-2.5 py-2.5 border-t-2 border-foreground transition-opacity duration-200 group-hover:opacity-0">
                <h3 className="font-mono text-xs sm:text-sm font-black uppercase tracking-wide leading-snug line-clamp-2">
                    {title}
                </h3>
            </div>

            {/* Hover State: Description Panel */}
            <div className="absolute inset-0 flex flex-col justify-end bg-foreground/95 text-background p-3 sm:p-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <h3 className="font-mono text-sm sm:text-base font-black uppercase tracking-wide mb-1.5">
                    {title}
                </h3>
                <p className="text-[11px] sm:text-xs leading-snug font-medium mb-2 line-clamp-5">
                    {description}
                </p>

                {/* Action Links + Technologies */}
                <div className="flex items-start gap-1.5">
                    {/* Links: fixed, never wrap */}
                    <div className="flex items-center gap-1.5 shrink-0">
                        {githubLink && (
                            <a
                                href={githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 border-2 border-background text-background hover:bg-background hover:text-foreground transition-all cursor-pointer flex items-center justify-center"
                                title="View Code"
                            >
                                <FaGithub size={14} />
                            </a>
                        )}
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-1.5 border-2 border-background text-background hover:bg-background hover:text-foreground transition-all cursor-pointer flex items-center justify-center"
                                title="View Live Site"
                            >
                                <FiExternalLink size={14} />
                            </a>
                        )}
                    </div>

                    {/* Technologies: own wrapping box, stacks vertically if it runs out of width */}
                    <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 min-w-0">
                        {technologies.map((tech, index) => (
                            <span
                                key={index}
                                className="shrink-0 px-1.5 py-px text-[9px] leading-none font-mono font-black uppercase bg-background text-foreground border border-background select-none"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
