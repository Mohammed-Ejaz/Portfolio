import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

import { portfolioData } from "../data/portfolioData";

const { email, phone, whatsapp } = portfolioData.personal;

const whatsappLink = `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    "Hi Ejaz, I saw your portfolio and would like to talk."
)}`;

function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden px-5 py-28 sm:px-8 md:py-40"
        >
            {/* BACKGROUND GLOW */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-white/[0.025] px-6 py-16 text-center sm:px-12 md:py-24">
                <p className="text-xs font-semibold tracking-[0.3em] text-white/30">
                    GET IN TOUCH
                </p>

                <motion.h2
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto mt-7 max-w-5xl text-[13vw] font-medium leading-[0.82] tracking-[-0.07em] sm:text-[9vw] md:text-[7vw]"
                >
                    LET&apos;S BUILD
                    <br />
                    SOMETHING GREAT.
                </motion.h2>

                <p className="mx-auto mt-8 max-w-xl text-base leading-7 text-white/40">
                    Have a project, opportunity or idea worth discussing?
                    Send me a message.
                </p>

                <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                    {/* EMAIL */}
                    <a
                        href={`mailto:${email}`}
                        className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-neutral-950 transition hover:bg-white/90"
                    >
                        <Mail size={17} />
                        {email}
                        <ArrowUpRight
                            size={16}
                            className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>

                    {/* WHATSAPP */}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Chat with Ejaz on WhatsApp at ${phone}`}
                        className="group inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-400/10 px-6 py-4 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-400/20 hover:text-emerald-200"
                    >
                        <MessageCircle size={17} />
                        {phone}
                        <ArrowUpRight
                            size={16}
                            className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;