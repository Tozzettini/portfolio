import EducationCard from "../About/EducationCard";
import FadeIn from "../ui/FadeIn";

const educationJourney = [
    {
        year: "2022 — 2026",
        title: "Software Engineering",
        institution: {
            name: "Fontys Venlo University of Applied Sciences",
            link: "https://www.fontys.nl/en/Home.htm",
            tooltipDescription: "A leading Dutch university of applied sciences, with its Venlo campus focused on IT, engineering, and business."
        },
        degree: "Bachelor's Degree, Specializing in Data Science and Artificial Intelligence",
        description: "Specializing in data science and AI while shipping production applications for real companies along the way. Whilst working in Sales part-time.",
        isHighlight: true
    },
    {
        year: "2016 — 2021",
        title: "Electronics & Robotics",
        institution: {
            name: "ITT G. Chilesotti",
            link: "https://www.chilesotti.edu.it/",
            tooltipDescription: "Technical Technological Institute in Thiene, Italy, specializing in electronics, robotics, and industrial technology."
        },
        degree: "Technical Technological Institute Diploma",
        description: "Built a foundation in electronics and robotics before moving into software engineering. "
    }
];

const quickStats = [
    { value: "2+", label: "Years of Professional Experience", accent: "text-foreground" },
    { value: "6+", label: "Years coding", accent: "text-foreground" },
    { value: "5+", label: "Products shipped", accent: "text-foreground" },
];

export default function About() {
  return (
    <section id="about" className="md:py-16 py-8 w-full border-b-3 border-foreground">
      {/* About Me Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-foreground select-none uppercase font-mono">
              About Me
            </h2>
            <div className="w-10 h-1.5 bg-foreground mx-auto mt-2" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-stretch">
          <FadeIn direction="right" delay={0.2}>
            <div className="h-full flex flex-col gap-3 text-left text-foreground bg-card border-2 border-foreground p-3 sm:p-4 shadow-[4px_4px_0px_0px_var(--foreground)]">
              <p className="text-sm leading-relaxed font-medium">
                  Software Engineer specializing in <span className="underline underline-offset-4 decoration-2 decoration-foreground font-bold">AI and full-stack development</span>. I turn ideas into scalable, production-ready applications, from automated business pipelines to physical AI devices.
                </p>
                <p className="text-sm leading-relaxed font-medium">
                  Born in New York, raised on robotics and automation during high school in Italy, and trained as a software engineer in the Netherlands. I'm driven by solving problems and helping people get their time back, whether that's through code or a conversation. I love sales for the same reason: I get to sit with someone, understand what they actually need, and go build it.
                </p>

              {/* Quick Stats - Updated with Neubrutalist boxes */}
              <div className="grid grid-cols-3 gap-1.5 mt-2 pt-3 border-t-2 border-foreground">
                {quickStats.map((stat, i) => (
                  <div key={i} className="text-center bg-background border-2 border-foreground p-1.5 shadow-[2px_2px_0px_0px_var(--foreground)]">
                    <div className={`text-base sm:text-lg font-black ${stat.accent}`}>
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-tight text-muted-foreground mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <div className="h-full flex items-center justify-center">
              {/* Picture Frame Wrapper */}
              <div className="relative h-90 aspect-4/5 bg-card border-2 border-foreground shadow-[4px_4px_0px_0px_var(--foreground)] p-1.5 select-none">
                <div className="w-full h-full border-2 border-foreground overflow-hidden">
                  <img
                    src="/profile.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Education Journey Section */}
      <div className="max-w-4xl mx-auto mt-16 px-4 sm:px-6">
        <FadeIn>
          <div className="text-center mb-10">
            <span className="font-mono inline-block px-2 py-1 text-[10px] font-black tracking-wider uppercase bg-foreground text-background border-2 border-foreground mb-3 select-none">
              My Journey
            </span>
            <h2 className="text-3xl font-black text-foreground mb-3 uppercase">Education & Growth</h2>
            <div className="w-16 h-1 bg-foreground mx-auto mb-3" />
            <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto font-medium">
              From electronics and robotics in Italy to specializing in Data Science and AI in the Netherlands.
            </p>
          </div>
        </FadeIn>

        {/* Timeline (Refactored to be thick, solid, and left-aligned for maximum card width) */}
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-3 sm:left-5 top-0 bottom-0 w-0.5 bg-foreground" />

          <div className="space-y-6 md:space-y-8">
            {educationJourney.map((edu, index) => (
              <FadeIn
                key={index}
                delay={index * 0.2}
                direction="right"
              >
                <div className="relative flex items-start">
                  {/* Robust Black Circle Marker */}
                  <div className="absolute left-3 sm:left-5 w-4 h-4 rounded-full bg-background border-3 border-foreground transform -translate-x-1/2 mt-6 z-10 shadow-[2px_2px_0px_var(--foreground)]" />

                  <div className="w-full ml-7 sm:ml-10">
                    <EducationCard {...edu} />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
