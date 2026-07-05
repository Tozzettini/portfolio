"use client"
import { Tooltip, TooltipTrigger, TooltipContent } from "../ui/tooltip"

interface InstitutionInfo {
    name: string
    link: string
    tooltipDescription: string
}

interface HonorInfo {
    name: string
    years: string
    tooltipDescription: string
}

interface AchievementsInfo {
    gpa?: string
    honors?: HonorInfo[]
}

interface EducationCardProps {
    year: string
    title: string
    institution?: InstitutionInfo
    degree?: string
    achievements?: AchievementsInfo
    description: string
    isHighlight?: boolean
}

export default function EducationCard({ year, title, institution, degree, achievements, description, isHighlight }: EducationCardProps) {
    return (
        <div className="relative group w-full">
            {/* Neubrutalist Card Container */}
            <div className={`
                relative p-4 md:p-5 rounded-none bg-card text-foreground
                border-3 border-foreground
                shadow-[4px_4px_0px_0px_var(--foreground)]
                group-hover:-translate-x-1 group-hover:-translate-y-1
                group-hover:shadow-[7px_7px_0px_0px_var(--foreground)]
                active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_0px_var(--foreground)]
                transition-all duration-300 ease-out
                ${isHighlight ? 'ring-3 ring-offset-2 ring-foreground/20' : ''}
            `}>

                <div className="relative z-10 flex flex-col gap-2 pr-2 sm:pr-24">
                    {/* Year + Current Badge (Positioned at Top-Right Corner) */}
                    <div className="sm:absolute sm:top-0 sm:right-0 flex items-center gap-2 mb-2 sm:mb-0 sm:translate-y-[-2px]">
                        <span className="font-mono text-[10px] font-black tracking-widest uppercase bg-foreground/10 px-1.5 py-0.5 border-2 border-foreground select-none">
                            {year}
                        </span>
                        {isHighlight && (
                            <span className="font-mono text-[9px] font-black tracking-wider uppercase bg-foreground text-background px-2 py-0.5 border-2 border-foreground select-none">
                                ACTIVE_SYS
                            </span>
                        )}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-black tracking-tight leading-snug whitespace-nowrap overflow-hidden text-ellipsis sm:overflow-visible">
                        {title}
                    </h3>

                    {/* Institution + Degree */}
                    {institution ? (
                        <div className="flex flex-col gap-1">
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href={institution.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="self-start text-foreground underline underline-offset-4 decoration-2 decoration-foreground font-black hover:bg-foreground hover:text-background px-1 transition-all"
                                    >
                                        {institution.name}
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent
                                    side="top"
                                    className="max-w-xs p-3 bg-card border-2 border-foreground text-foreground rounded-none shadow-[3px_3px_0px_0px_var(--foreground)]"
                                >
                                    <p className="text-xs font-semibold leading-relaxed mb-2">
                                        {institution.tooltipDescription}
                                    </p>
                                    <a
                                        href={institution.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground font-black text-xs flex items-center gap-1 hover:underline"
                                    >
                                        Visit Website &gt;
                                    </a>
                                </TooltipContent>
                            </Tooltip>
                            {degree && (
                                <p className="text-xs font-semibold text-muted-foreground mt-1">{degree}</p>
                            )}
                        </div>
                    ) : (
                        degree && (
                            <p className="text-xs font-semibold text-muted-foreground italic">{degree}</p>
                        )
                    )}

                    {/* Achievements - Redesigned into flat monochromatic tokens */}
                    {achievements && (
                        <div className="flex flex-wrap items-center gap-2 mt-1">
                            {/* Honors Chips */}
                            {achievements.honors?.map((honor, index) => (
                                <Tooltip key={index}>
                                    <TooltipTrigger asChild>
                                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-background border-2 border-foreground hover:bg-foreground hover:text-background transition-colors font-mono text-[10px] font-black cursor-help whitespace-nowrap">
                                            {honor.name}
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent
                                        side="top"
                                        className="max-w-xs p-3 bg-card border-2 border-foreground text-foreground rounded-none shadow-[3px_3px_0px_0px_var(--foreground)]"
                                    >
                                        <p className="text-[10px] font-bold text-muted-foreground mb-1">
                                            {honor.years}
                                        </p>
                                        <p className="text-xs leading-relaxed font-semibold">
                                            {honor.tooltipDescription}
                                        </p>
                                    </TooltipContent>
                                </Tooltip>
                            ))}
                        </div>
                    )}

                    {/* Short Description */}
                    <div className="w-full h-0.5 bg-foreground/10 my-1" />
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
