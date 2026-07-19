import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const links = [
    { href: "#services", label: "Services" },
    { href: "#process", label: "Process" },
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
];
export function Nav() {
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return (<motion.header initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <nav className={`flex items-center gap-8 rounded-full px-4 py-2 transition-all duration-500 ${scrolled
            ? "glass-strong shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]"
            : "border border-white/[0.06] bg-white/[0.02] backdrop-blur-xl"}`}>
        <a href="#top" className="flex items-center gap-2 pl-2">
          <div className="relative h-6 w-6">
            <div className="absolute inset-0 rounded-md bg-white"/>
            <div className="absolute inset-[3px] rounded-[3px] bg-black"/>
            <div className="absolute inset-[6px] rounded-[1px] bg-white"/>
          </div>
          <span className="text-sm font-semibold tracking-tight">Flowsync</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (<li key={l.href}>
              <a href={l.href} className="group relative rounded-full px-3 py-1.5 text-sm text-white/70 transition hover:text-white">
                <span>{l.label}</span>
                <span className="absolute inset-x-3 -bottom-0.5 h-px scale-x-0 bg-white/40 transition-transform duration-300 group-hover:scale-x-100"/>
              </a>
            </li>))}
        </ul>
        <a href="#contact" className="btn-primary !py-2 !px-4 !text-[13px]">
          Book a Demo
        </a>
      </nav>
    </motion.header>);
}
