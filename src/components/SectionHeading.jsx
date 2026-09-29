import {
    motion,
} from "motion/react";

function SectionHeading({
    kicker,
    title,
}) {
    return (
        <div
            className="
        mb-14
        grid
        gap-5
        md:grid-cols-[160px_1fr]
        md:gap-10
      "
        >

            <p
                className="
          text-xs
          font-semibold
          tracking-[0.28em]
          text-white/35
        "
            >
                {kicker}
            </p>

            <motion.h2
                initial={{
                    opacity: 0,
                    y: 25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                viewport={{
                    once: true,
                    amount: 0.35,
                }}
                transition={{
                    duration: 0.7,
                    ease: "easeOut",
                }}
                className="
          max-w-4xl
          text-3xl
          font-medium
          leading-tight
          tracking-[-0.04em]
          text-white
          sm:text-4xl
          md:text-6xl
        "
            >
                {title}
            </motion.h2>

        </div>
    );
}

export default SectionHeading;