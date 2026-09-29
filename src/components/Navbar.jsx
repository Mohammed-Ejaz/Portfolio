import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Contact", "#contact"],
];

function Navbar({ name }) {
    const [open, setOpen] = useState(false);

    const closeMenu = () => setOpen(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between px-5 sm:px-8">
                {/* LOGO */}
                <a
                    href="#top"
                    className="group rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-semibold tracking-[0.25em] backdrop-blur-xl"
                >
                    <span className="text-white">{name}</span>
                    <span className="ml-2 text-white/35">/</span>
                </a>

                {/* DESKTOP NAV */}
                <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-black/35 p-1 backdrop-blur-xl md:flex">
                    {links.map(([label, href]) => (
                        <a
                            key={href}
                            href={href}
                            className="rounded-full px-4 py-2 text-xs text-white/60 transition hover:bg-white/10 hover:text-white"
                        >
                            {label}
                        </a>
                    ))}
                </nav>

                {/* MOBILE BUTTON */}
                <button
                    type="button"
                    onClick={() => setOpen(!open)}
                    className="rounded-full border border-white/10 bg-black/35 p-3 backdrop-blur-xl md:hidden"
                    aria-label="Toggle navigation"
                    aria-expanded={open}
                >
                    {open ? <X size={18} /> : <Menu size={18} />}
                </button>
            </div>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {open && (
                    <motion.nav
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        className="mx-5 mt-3 rounded-3xl border border-white/10 bg-[#0c0c0c]/95 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
                    >
                        {links.map(([label, href]) => (
                            <a
                                key={href}
                                href={href}
                                onClick={closeMenu}
                                className="block rounded-2xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                            >
                                {label}
                            </a>
                        ))}
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}

export default Navbar;