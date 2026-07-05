interface SkillCardProps {
    name: string;
    Icon?: React.ComponentType<{className?: string}>;
    svgPath?: string;
}

export default function SkillCard({ name, Icon, svgPath }: SkillCardProps) {
    return (
        <div className="group relative select-none w-full md:w-auto">
            {/* Neubrutalist Skill Block */}
            <div className="flex flex-row items-center gap-2 px-3 py-2 bg-card text-foreground border-2 border-foreground rounded-none shadow-[2px_2px_0px_var(--foreground)] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:shadow-[4px_4px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_var(--foreground)] transition-all duration-200">
                {Icon ? (
                    <Icon className="size-4 md:size-5 shrink-0 text-foreground transition-transform duration-300 group-hover:rotate-6" />
                ) : svgPath ? (
                    <img
                        src={svgPath}
                        alt={name}
                        className="size-4 md:size-5 shrink-0 object-contain transition-transform duration-300 group-hover:rotate-6 dark:invert-0"
                    />
                ) : null}
                <span className="font-mono text-xs font-bold tracking-tight text-foreground truncate">{name}</span>
            </div>
        </div>
    )
}
