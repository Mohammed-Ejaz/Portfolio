import { ArrowUpRight } from "lucide-react";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

function MagneticButton({ href, children, secondary = false }) {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 350, damping: 20 });
    const springY = useSpring(y, { stiffness: 350, damping: 20 });

    const handleMove = (event) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        x.set((event.clientX - (rect.left + rect.width / 2)) * 0.15);
        y.set((event.clientY - (rect.top + rect.height / 2)) * 0.15);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.a
            ref={ref}
            href={href}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ x: springX, y: springY }}
            className={[
                "group inline-flex items-center gap-3 rounded-full border px-5 py-3 text-sm transition",
                secondary
                    ? "border-white/15 bg-white/5 font-medium text-white/80 hover:bg-white/10 hover:text-white"
                    : "border-white bg-white font-semibold text-neutral-950 hover:bg-white/90",
            ].join(" ")}
        >
            {children}

            <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
        </motion.a>
    );
}

export default MagneticButton;