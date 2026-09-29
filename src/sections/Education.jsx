import { motion } from "motion/react";

import SectionHeading from "../components/SectionHeading";
import { portfolioData } from "../data/portfolioData";

function Education() {
    return (
        <section
            id="education"
            className="px-5 py-28 sm:px-8 md:py-40"
        >
            <div className="mx-auto max-w-7xl">
                <SectionHeading
                    kicker="EDUCATION"
                    title="A foundation in software development, computer science and full-stack engineering."
                />

                <div className="space-y-4 md:ml-[170px]">
                    {portfolioData.education.map((item, index) => (
                        <motion.article
                            key={`${item.title}-${item.period}`}
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.25 }}
                            transition={{ delay: index * 0.1 }}
                            className="grid gap-5 rounded-3xl border border-white/10 bg-white/[0.025] p-7 sm:grid-cols-[180px_1fr] sm:p-9"
                        >
                            <p className="text-xs tracking-[0.18em] text-white/35">
                                {item.period}
                            </p>

                            <div>
                                <h3 className="text-xl font-medium">
                                    {item.title}
                                </h3>

                                <p className="mt-1 text-white/50">
                                    {item.institution}
                                    <span className="text-white/25">
                                        {" "}
                                        · {item.location}
                                    </span>
                                </p>

                                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
                                    {item.description}
                                </p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Education;