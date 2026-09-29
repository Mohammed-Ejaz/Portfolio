import {
    ArrowDown,
} from "lucide-react";

import {
    motion,
    useScroll,
    useTransform,
} from "motion/react";

import {
    useRef,
} from "react";

import MagneticButton
    from "../components/MagneticButton";

import {
    portfolioData,
} from "../data/portfolioData";

function Hero() {
    const sectionRef = useRef(null);

    const {
        scrollYProgress,
    } = useScroll({
        target: sectionRef,

        offset: [
            "start start",
            "end start",
        ],
    });

    const orbY =
        useTransform(
            scrollYProgress,
            [0, 1],
            [0, 180]
        );

    const titleY =
        useTransform(
            scrollYProgress,
            [0, 1],
            [0, 90]
        );

    return (
        <section
            ref={sectionRef}
            id="top"
            className="
        relative
        flex
        min-h-screen
        items-end
        overflow-hidden
        px-5
        pb-16
        pt-32
        sm:px-8
        md:pb-20
      "
        >

            {/* BACKGROUND */}

            <div
                className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_70%_35%,rgba(124,58,237,0.17),transparent_25%),radial-gradient(circle_at_25%_70%,rgba(34,211,238,0.07),transparent_25%)]
        "
            />

            {/* PARALLAX ORB */}

            <motion.div
                style={{
                    y: orbY,
                }}
                className="
          absolute
          right-[8%]
          top-[18%]
          h-56
          w-56
          rounded-full
          bg-violet-500/15
          blur-3xl
          sm:h-80
          sm:w-80
        "
            />

            {/* BOTTOM LINE */}

            <div
                className="
          absolute
          inset-x-0
          bottom-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/10
          to-transparent
        "
            />

            <div
                className="
          relative
          mx-auto
          w-full
          max-w-7xl
        "
            >

                {/* EYEBROW */}

                <div
                    className="
            mb-8
            flex
            items-center
            gap-3
            text-xs
            font-semibold
            tracking-[0.28em]
            text-white/35
          "
                >
                    <span
                        className="
              h-px
              w-8
              bg-white/20
            "
                    />

                    {portfolioData.hero.eyebrow}
                </div>

                {/* TITLE */}

                <motion.div
                    style={{
                        y: titleY,
                    }}
                >
                    <h1
                        className="
              max-w-6xl
              text-[15vw]
              font-semibold
              leading-[0.78]
              tracking-[-0.075em]
              text-white
              sm:text-[11vw]
              md:text-[9.2vw]
            "
                    >
                        {portfolioData.hero.titleLines.map(
                            (line, index) => (
                                <motion.span
                                    key={line}
                                    initial={{
                                        opacity: 0,
                                        y: 70,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        delay:
                                            0.15 +
                                            index * 0.09,

                                        duration: 0.8,

                                        ease: [
                                            0.22,
                                            1,
                                            0.36,
                                            1,
                                        ],
                                    }}
                                    className="block"
                                >
                                    {line}
                                </motion.span>
                            )
                        )}
                    </h1>
                </motion.div>

                {/* DESCRIPTION + BUTTONS */}

                <div
                    className="
            mt-10
            flex
            flex-col
            justify-between
            gap-8
            md:flex-row
            md:items-end
          "
                >

                    <p
                        className="
              max-w-xl
              text-base
              leading-7
              text-white/50
              sm:text-lg
            "
                    >
                        {portfolioData.hero.description}
                    </p>

                    <div className="flex flex-wrap gap-3">

                        <MagneticButton href="#projects">
                            View my work
                        </MagneticButton>

                        <MagneticButton
                            href="#contact"
                            secondary
                        >
                            Let&apos;s connect
                        </MagneticButton>

                    </div>

                </div>

                {/* SCROLL */}

                <a
                    href="#about"
                    className="
            mt-16
            inline-flex
            items-center
            gap-3
            text-xs
            tracking-[0.25em]
            text-white/30
            transition
            hover:text-white/70
          "
                >
                    SCROLL TO EXPLORE

                    <ArrowDown size={14} />
                </a>

            </div>

        </section>
    );
}

export default Hero;