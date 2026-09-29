import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/portfolioData";

const linkClass = "text-white/60 transition hover:text-white";

function Projects() {
    const { projects } = portfolioData;

    return (
        <section
            id="projects"
            className="px-5 py-28 sm:px-8 md:py-40"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    kicker="SELECTED WORK"
                    title="Projects that turn ideas into usable products."
                />

                <div
                    className={`grid gap-5 ${projects.length > 1 ? "md:grid-cols-2" : ""
                        }`}
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.7,
                            }}
                            whileHover={{ y: -6 }}
                            className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-7 sm:p-10"
                        >
                            {/* GLOW */}
                            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl transition duration-700 group-hover:bg-violet-500/20" />

                            <div className="relative flex items-start justify-between">
                                <span className="text-xs tracking-[0.25em] text-white/30">
                                    {project.number}
                                </span>

                                <ArrowUpRight
                                    size={20}
                                    className="text-white/35 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                                />
                            </div>

                            <div className="relative mt-20 max-w-3xl">
                                <p className="text-xs font-semibold tracking-[0.18em] text-white/35">
                                    {project.category}
                                </p>

                                <h3 className="mt-3 text-4xl font-medium tracking-[-0.05em]">
                                    {project.title}
                                </h3>

                                <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
                                    {project.description}
                                </p>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    {project.technologies.map((technology) => (
                                        <span
                                            key={technology}
                                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/50"
                                        >
                                            {technology}
                                        </span>
                                    ))}
                                </div>

                                {(project.github || project.live) && (
                                    <div className="mt-8 flex gap-5 text-sm">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={linkClass}
                                            >
                                                GitHub ↗
                                            </a>
                                        )}

                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={linkClass}
                                            >
                                                Live demo ↗
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;