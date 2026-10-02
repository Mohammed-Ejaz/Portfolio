import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

function CustomCursor() {
    const [enabled, setEnabled] = useState(false);

    // Motion values update outside React's render cycle, so tracking the
    // mouse no longer triggers a re-render on every pixel of movement.
    // That re-render was competing with scroll for the main thread, which
    // is what made scrolling feel janky.
    const x = useMotionValue(-100);
    const y = useMotionValue(-100);

    const springX = useSpring(x, { stiffness: 600, damping: 35, mass: 0.15 });
    const springY = useSpring(y, { stiffness: 600, damping: 35, mass: 0.15 });

    const frame = useRef(null);

    useEffect(() => {
        const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
        if (isTouchDevice) return;

        setEnabled(true);

        const handleMouseMove = (event) => {
            // Batch into rAF so we never set more than once per frame.
            if (frame.current) return;

            frame.current = requestAnimationFrame(() => {
                x.set(event.clientX - 6);
                y.set(event.clientY - 6);
                frame.current = null;
            });
        };

        window.addEventListener("mousemove", handleMouseMove, { passive: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (frame.current) cancelAnimationFrame(frame.current);
        };
    }, [x, y]);

    if (!enabled) return null;

    return (
        <motion.div
            aria-hidden="true"
            style={{ x: springX, y: springY, willChange: "transform" }}
            className="pointer-events-none fixed left-0 top-0 z-[100] hidden h-3 w-3 rounded-full border border-white/60 mix-blend-difference md:block"
        />
    );
}

export default CustomCursor;