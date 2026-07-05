import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-scroll";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <section id="home" className="h-screen flex items-center justify-center pt-16 px-4 md:px-8 overflow-hidden">
          <div className="max-w-xl w-full mx-auto">
            <AnimatePresence mode="wait">
            {!isOpen ? (
              <motion.button
                key="closed"
                onClick={() => setIsOpen(true)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="w-full flex items-center justify-center gap-2 border-2 border-full border-foreground bg-card text-foreground font-mono text-[10px] sm:text-xs uppercase tracking-wider px-4 py-8 shadow-[3px_3px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background transition-all cursor-pointer"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                Why you messing with my website? - click to relaunch
              </motion.button>
            ) : (
            <motion.div
              key="open"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-card border-2 border-foreground shadow-[5px_5px_0px_0px_var(--foreground)] text-foreground overflow-hidden rounded-none"
            >

              {/* Retro Window Header */}
              <div className="flex items-center justify-between bg-foreground text-background px-2.5 py-1.5 border-b-2 border-foreground select-none font-mono">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close window"
                    title="Close"
                    className="w-2 h-2 rounded-full border-2 border-background bg-background cursor-pointer hover:scale-125 transition-transform"
                  />
                  <span className="w-2 h-2 rounded-full border-2 border-background bg-background/50" />
                  <span className="w-2 h-2 rounded-full border-2 border-background bg-transparent" />
                </div>
                <span className="text-[9px] font-bold tracking-widest uppercase opacity-90">
                  ZICHE.EXE
                </span>
                <div className="text-[8px] font-bold border-2 border-background bg-background text-foreground px-1 py-0.5 select-none hidden sm:block">
                  SYS_INIT
                </div>
              </div>

              {/* Main Content */}
              <div className="p-2.5 sm:p-3 md:p-4 flex flex-col gap-2 md:gap-3 text-left">

                {/* Greeting Badge */}
                <div className="self-start inline-flex items-center gap-2 px-1.5 py-0.5 border-2 border-foreground bg-foreground/5 text-foreground font-mono text-[9px] sm:text-[10px] font-bold tracking-wider uppercase shadow-[2px_2px_0px_0px_var(--foreground)]">
                  Hi, my name is
                </div>

                {/* Name */}
                <div className="space-y-1">
                  <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl font-black tracking-tight select-none leading-none">
                    Leonardo Giuseppe Ziche<span className="text-foreground/30">.</span>
                  </h1>
                  <div className="w-12 sm:w-16 h-1.5 bg-foreground mt-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]" />
                </div>

                {/* Terminal Typing Prompt */}
                <div className="border-2 border-foreground bg-background p-1.5 shadow-[2px_2px_0px_0px_var(--foreground)] text-foreground font-mono">
                  <div className="flex items-center gap-2 text-foreground/40 text-[8px] sm:text-[9px] mb-1 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 animate-pulse" />
                    <span>terminal_status: active</span>
                  </div>
                  <div className="text-xs sm:text-sm md:text-base font-bold flex items-center min-h-5 leading-relaxed">
                    <span className="text-foreground mr-2 select-none">&gt;</span>
                    <TypeAnimation
                     sequence={[
                                'am not your average Software Engineer.', 2000,
                                'ship MVPs, then iterate fast.', 2000,
                                'turn business problems into software solutions.', 2000
                              ]}
                      speed={50}
                      style={{ display: 'inline' }}
                      repeat={Infinity}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-[11px] sm:text-xs md:text-sm leading-relaxed max-w-xl">
                  Italian-American Software Engineer with an edge in communication: a sales and customer-facing background that turns complex business problems into clear technical solutions for stakeholders and engineers alike. Specialized in AI and Data Science, with a track record shipping production applications and leading small agile teams.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 pt-1 w-full font-mono">
                  <Link
                    to="projects"
                    smooth={true}
                    duration={600}
                    offset={-64}
                    className="w-full sm:w-auto cursor-pointer border-2 border-foreground bg-card text-foreground text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-none shadow-[2px_2px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center"
                  >
                    View My Projects
                  </Link>

                  <a
                    href="/master_cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto cursor-pointer border-2 border-dashed border-foreground bg-card text-foreground text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-none shadow-[2px_2px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:border-solid hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center flex items-center justify-center gap-2"
                  >
                    <IoDocumentTextOutline className="size-3 shrink-0" />
                    View Resume
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex space-x-2 pt-1">
                  <a
                    href="https://github.com/Tozzettini"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-1.5 border-2 border-foreground bg-card text-foreground rounded-none shadow-[2px_2px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <AiFillGithub className="size-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/leonardo-giuseppe-ziche-754a27242"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-1.5 border-2 border-foreground bg-card text-foreground rounded-none shadow-[2px_2px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <FaLinkedin className="size-4" />
                  </a>
                  <a
                    href="mailto:lgziche@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Email Address"
                    className="p-1.5 border-2 border-foreground bg-card text-foreground rounded-none shadow-[2px_2px_0px_0px_var(--foreground)] hover:bg-foreground hover:text-background hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_var(--foreground)] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <MdEmail className="size-4" />
                  </a>
                </div>

              </div>
            </motion.div>
            )}
            </AnimatePresence>
          </div>
        </section>
    );
}
