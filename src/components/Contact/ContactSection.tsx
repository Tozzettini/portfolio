import { useState } from 'react';
import { FaLinkedin, FaTerminal, FaGithub, FaCheck } from "react-icons/fa";
import { MdEmail, MdContentCopy } from "react-icons/md";
import FadeIn from "@/components/ui/FadeIn";

export default function Contact() {
    const [copied, setCopied] = useState(false);
    const email = "lgziche@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="min-h-screen py-14 w-full relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center mb-10">
                        <span className="font-mono inline-block px-2 py-1 text-[10px] font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-3 select-none">
                            Get In Touch
                        </span>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground select-none uppercase font-mono mb-3">Contact Me</h2>
                        <div className="w-14 h-1 bg-foreground mx-auto mb-3" />
                        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-medium">
                            I'm currently looking for new opportunities. Whether you have a question, a project to discuss, or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </div>
                </FadeIn>

                <div className="grid md:grid-cols-2 gap-6 items-stretch">

                    {/* Left Card: Send Email Block */}
                    <FadeIn delay={0.2} direction="right">
                        <div className="bg-card text-foreground p-5 h-full rounded-none border-3 border-foreground shadow-[4px_4px_0px_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_var(--foreground)] transition-all duration-300 flex flex-col justify-center items-center text-center">
                            <div className="bg-foreground/5 p-3 border-2 border-foreground rounded-none mb-4">
                                <MdEmail className="size-7 text-foreground" />
                            </div>
                            <h3 className="text-xl font-black mb-2">Send me an email</h3>
                            <p className="text-muted-foreground font-medium text-xs leading-relaxed mb-5 max-w-sm">
                                The best way to reach me. I typically respond within 24 hours.
                            </p>
                            <a
                                href={`mailto:${email}`}
                                className="w-full sm:w-auto cursor-pointer border-2 border-foreground bg-card text-foreground font-mono text-xs sm:text-sm font-bold uppercase tracking-wider px-5 py-2.5 rounded-none shadow-[3px_3px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[5px_5px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center gap-2"
                            >
                                Say Hello &gt;
                            </a>
                        </div>
                    </FadeIn>

                    {/* Right Card: Interactive Command Console Terminal Block */}
                    <FadeIn delay={0.4} direction="left">
                        <div className="bg-card text-foreground p-5 h-full rounded-none border-3 border-foreground shadow-[4px_4px_0px_var(--foreground)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[7px_7px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-[4px_4px_0px_var(--foreground)] transition-all duration-300 flex flex-col justify-center">

                            {/* Retro Console Header */}
                            <div className="flex items-center gap-2 mb-4 text-foreground font-mono text-[10px] border-b-2 border-foreground pb-3 select-none">
                                <FaTerminal size={12} className="animate-pulse" />
                                <span className="font-bold uppercase tracking-wider">sh_terminal</span>
                            </div>

                            <div className="space-y-4 font-mono">
                                <div className="text-foreground/90 font-bold text-xs select-none">
                                    <span className="text-foreground/60 mr-2">➜</span><span className="text-foreground/80">~</span> git clone contact-info
                                </div>

                                {/* Copy Box Command Target */}
                                <div className="bg-foreground/5 p-3 border-2 border-foreground flex items-center justify-between hover:bg-foreground/10 transition-colors">
                                    <code className="text-foreground font-bold text-[11px] sm:text-xs break-all">
                                        {email}
                                    </code>
                                    <button
                                        onClick={handleCopy}
                                        className="p-1.5 border-2 border-foreground bg-card text-foreground shadow-[2px_2px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer relative flex items-center justify-center"
                                        title="Copy Email"
                                    >
                                        {copied ? <FaCheck size={12} className="text-foreground" /> : <MdContentCopy size={12} />}

                                        <span className={`absolute -top-9 left-1/2 -translate-x-1/2 bg-foreground text-background font-mono text-[10px] font-black px-1.5 py-1 border-2 border-foreground opacity-0 transition-opacity whitespace-nowrap select-none ${copied ? 'opacity-100' : ''}`}>
                                            Copied!
                                        </span>
                                    </button>
                                </div>

                                {/* External profile handles */}
                                <div className="flex flex-wrap gap-3 pt-3 mt-2 border-t-2 border-dashed border-foreground/15">
                                    <a
                                        href="https://github.com/Tozzettini"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground font-black underline underline-offset-4 decoration-2 hover:bg-foreground hover:text-background px-1 transition-all flex items-center gap-2 text-[11px]"
                                    >
                                        <FaGithub size={14} />
                                        <span>github.com/Tozzettini</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/leonardo-giuseppe-ziche-754a27242"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-foreground font-black underline underline-offset-4 decoration-2 hover:bg-foreground hover:text-background px-1 transition-all flex items-center gap-2 text-[11px]"
                                    >
                                        <FaLinkedin size={14} />
                                        <span>linkedin.com/in/leonardo-ziche</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Footer Section */}
                <footer className="mt-14 text-center font-mono text-[10px] sm:text-xs font-black border-t-3 border-foreground pt-5 select-none text-muted-foreground uppercase tracking-wider">
                    <p>Copyright © 2026 Leonardo Ziche. All rights reserved.</p>
                </footer>
            </div>
        </section>
    );
}
