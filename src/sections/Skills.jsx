import { motion } from "motion/react";

import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/portfolioData";

const { skills } = portfolioData;

const groups = [
    ["FRONTEND", skills.frontend],
    ["BACKEND", skills.backend],
    ["TESTING", skills.testing],
    ["TOOLS", skills.tools],
    ["SOFT SKILLS", skills.soft],
];

function Skills() {
    return (
        <section
            id="skills"
            className="border-y border-white/5 bg-white/[0.015] px-5 py-28 sm:px-8 md:py-40"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    kicker="TOOLKIT"
                    title="The technologies I use to design, build and improve web applications."
                />

                <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
                    {groups.map(([title, items], index) => (
                        <motion.div
                            key={title}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`bg-[#0b0b0b] p-7 sm:p-9 ${index === groups.length - 1 ? "sm:col-span-2" : ""
                                }`}
                        >
                            <p className="text-xs font-semibold tracking-[0.2em] text-white/35">
                                {title}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/65 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;