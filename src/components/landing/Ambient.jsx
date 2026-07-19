import { useEffect, useRef } from "react";
export function Ambient() {
    const ref = useRef(null);
    useEffect(() => {
        const el = ref.current;
        if (!el)
            return;
        const onMove = (e) => {
            el.style.setProperty("--mx", `${e.clientX}px`);
            el.style.setProperty("--my", `${e.clientY}px`);
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
    }, []);
    return (<div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0" style={{
            background: "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.04), transparent 60%)",
        }}/>);
}
