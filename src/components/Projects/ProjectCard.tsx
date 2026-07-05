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
}

export default function ProjectCard({ title, description, technologies, githubLink, liveLink, image }: ProjectProps) {
    return (
        <div className="group relative w-full h-full flex flex-col">
            {/* Neubrutalist Card Container */}
            <div className="relative flex flex-col grow bg-card text-foreground border-4 border-foreground shadow-[6px_6px_0px_0px_var(--foreground)] group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0px_0px_var(--foreground)] transition-all duration-300 ease-out overflow-hidden">
                
                {/* Image Section / Placeholder with physical line divider */}
                <div className="relative h-48 overflow-hidden bg-background border-b-4 border-foreground select-none">
                    {image ? (
                        <img 
                            src={image} 
                            alt={title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-foreground/40">
                            <FaFolder size={44} />
                        </div>
                    )}
                    
                    {/* Floating Action Links (Always visible and styled as Neubrutalist action triggers) */}
                    <div className="absolute top-3 right-3 flex items-center gap-2">
                        {githubLink && (
                            <a 
                                href={githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 border-2 border-foreground bg-card text-foreground shadow-[2px_2px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
                                title="View Code"
                            >
                                <FaGithub size={16} />
                            </a>
                        )}
                        {liveLink && (
                            <a 
                                href={liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 border-2 border-foreground bg-card text-foreground shadow-[2px_2px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer flex items-center justify-center"
                                title="View Live Site"
                            >
                                <FiExternalLink size={16} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col grow p-6 sm:p-7">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3">
                        {title}
                    </h3>

                    {/* Description Paragraph */}
                    <p className="text-foreground/80 leading-relaxed font-medium text-sm sm:text-md mb-6 grow">
                        {description}
                    </p>

                    {/* Horizontal blueprint separator */}
                    <div className="w-full h-0.5 border-b-2 border-dashed border-foreground/15 my-4 mt-auto" />

                    {/* Technologies Monospace Badges */}
                    <div className="flex flex-wrap gap-2 mt-2">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-2.5 py-1 text-xs font-mono font-black uppercase bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-colors select-none"
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
