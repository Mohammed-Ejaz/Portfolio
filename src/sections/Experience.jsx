import {
    motion,
} from "motion/react";

import SectionHeading
    from "../components/SectionHeading";

import {
    portfolioData,
} from "../data/portfolioData";

function Experience() {
    return (
        <section
            id="experience"
            className="
        border-y
        border-white/5
        bg-white/[0.015]
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
                    kicker="EXPERIENCE"
                    title="
            A focus on maintainable architecture,
            reliable interfaces and practical delivery.
          "
                />

                <div
                    className="
            ml-0
            border-l
            border-white/10
            md:ml-[170px]
          "
                >

                    {portfolioData.experience.map(
                        (item, index) => (
                            <motion.article
                                key={`${item.company}-${item.period}`}
                                initial={{
                                    opacity: 0,
                                    x: 35,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    x: 0,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                transition={{
                                    delay:
                                        index * 0.1,
                                    duration: 0.7,
                                }}
                                className="
                  relative
                  border-b
                  border-white/10
                  px-6
                  py-10
                  last:border-b-0
                  sm:px-10
                "
                            >

                                {/* TIMELINE DOT */}

                                <span
                                    className="
                    absolute
                    -left-[5px]
                    top-12
                    h-2
                    w-2
                    rounded-full
                    bg-white
                    shadow-[0_0_20px_rgba(255,255,255,0.65)]
                  "
                                />

                                <div
                                    className="
                    grid
                    gap-6
                    lg:grid-cols-[180px_1fr]
                  "
                                >

                                    {/* PERIOD */}

                                    <p
                                        className="
                      text-xs
                      tracking-[0.18em]
                      text-white/30
                    "
                                    >
                                        {item.period}
                                    </p>

                                    {/* CONTENT */}

                                    <div>

                                        <div
                                            className="
                        flex
                        flex-col
                        justify-between
                        gap-2
                        sm:flex-row
                        sm:items-start
                      "
                                        >

                                            <div>

                                                <h3
                                                    className="
                            text-2xl
                            font-medium
                            tracking-[-0.03em]
                          "
                                                >
                                                    {item.role}
                                                </h3>

                                                <p
                                                    className="
                            mt-1
                            text-white/45
                          "
                                                >
                                                    {item.company}
                                                </p>

                                            </div>

                                            <p
                                                className="
                          text-xs
                          tracking-[0.14em]
                          text-white/25
                        "
                                            >
                                                {item.location}
                                            </p>

                                        </div>

                                        {/* HIGHLIGHTS */}

                                        <ul
                                            className="
                        mt-7
                        space-y-3
                      "
                                        >

                                            {item.highlights.map(
                                                (highlight) => (
                                                    <li
                                                        key={highlight}
                                                        className="
                              flex
                              gap-3
                              text-sm
                              leading-7
                              text-white/50
                            "
                                                    >

                                                        <span
                                                            className="
                                mt-3
                                h-1
                                w-1
                                shrink-0
                                rounded-full
                                bg-white/30
                              "
                                                        />

                                                        {highlight}

                                                    </li>
                                                )
                                            )}

                                        </ul>

                                    </div>

                                </div>

                            </motion.article>
                        )
                    )}

                </div>

            </div>

        </section>
    );
}

export default Experience;