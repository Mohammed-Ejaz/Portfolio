import {
    motion,
} from "motion/react";

import SectionHeading
    from "../components/SectionHeading";

import {
    portfolioData,
} from "../data/portfolioData";

function About() {
    return (
        <section
            id="about"
            className="
        relative
        px-5
        py-28
        sm:px-8
        md:py-40
      "
        >

            <div
                className="
          mx-auto
          max-w-7xl
        "
            >

                <SectionHeading
                    kicker={
                        portfolioData.about.kicker
                    }
                    title={
                        portfolioData.about.title
                    }
                />

                <div
                    className="
            grid
            gap-12
            md:grid-cols-[160px_1fr]
            md:gap-10
          "
                >

                    <div />

                    <div>

                        <p
                            className="
                max-w-3xl
                text-lg
                leading-8
                text-white/55
                sm:text-xl
              "
                        >
                            {
                                portfolioData.about
                                    .description
                            }
                        </p>

                        {/* METRICS */}

                        <div
                            className="
                mt-16
                grid
                gap-px
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/10
                sm:grid-cols-3
              "
                        >

                            {portfolioData.metrics.map(
                                (metric, index) => (
                                    <motion.div
                                        key={metric.label}
                                        initial={{
                                            opacity: 0,
                                            y: 30,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.25,
                                        }}
                                        transition={{
                                            delay:
                                                index * 0.1,
                                            duration: 0.6,
                                        }}
                                        className="
                      bg-[#0b0b0b]
                      p-7
                      sm:p-8
                    "
                                    >

                                        <div
                                            className="
                        text-4xl
                        font-medium
                        tracking-[-0.05em]
                        sm:text-5xl
                      "
                                        >
                                            {metric.value}
                                        </div>

                                        <div
                                            className="
                        mt-4
                        text-xs
                        font-semibold
                        tracking-[0.18em]
                        text-white/45
                      "
                                        >
                                            {metric.label}
                                        </div>

                                        <p
                                            className="
                        mt-3
                        text-sm
                        leading-6
                        text-white/35
                      "
                                        >
                                            {metric.description}
                                        </p>

                                    </motion.div>
                                )
                            )}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;