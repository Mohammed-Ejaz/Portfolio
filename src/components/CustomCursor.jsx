import {
    useEffect,
    useState,
} from "react";

import {
    motion,
} from "motion/react";

function CustomCursor() {
    const [enabled, setEnabled] =
        useState(false);

    const [position, setPosition] =
        useState({
            x: 0,
            y: 0,
        });

    useEffect(() => {
        const isTouchDevice =
            window.matchMedia(
                "(pointer: coarse)"
            ).matches;

        if (isTouchDevice) {
            return;
        }

        setEnabled(true);

        const handleMouseMove = (event) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        window.addEventListener(
            "mousemove",
            handleMouseMove
        );

        return () => {
            window.removeEventListener(
                "mousemove",
                handleMouseMove
            );
        };
    }, []);

    if (!enabled) {
        return null;
    }

    return (
        <motion.div
            aria-hidden="true"
            className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[100]
        hidden
        h-3
        w-3
        rounded-full
        border
        border-white/60
        mix-blend-difference
        md:block
      "
            animate={{
                x: position.x - 6,
                y: position.y - 6,
            }}
            transition={{
                type: "spring",
                stiffness: 600,
                damping: 35,
                mass: 0.15,
            }}
        />
    );
}

export default CustomCursor;