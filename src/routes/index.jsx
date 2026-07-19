import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight, Bot, Workflow, Sparkles, Users, BarChart3, Mail, Check, Plus, Minus, Star, Twitter, Linkedin, Github, Play, Zap, Shield, Rocket, Layers, Globe, Cpu, } from "lucide-react";
import { Nav } from "@/components/landing/Nav";
import { Ambient } from "@/components/landing/Ambient";
import heroBrain from "@/assets/hero-brain.jpg";
import cubes from "@/assets/cubes.jpg";
import sphere from "@/assets/sphere.jpg";
import hand from "@/assets/hand.jpg";
export const Route = createFileRoute("/")({
    head: () => ({
        meta: [
            { title: "Flowsync AI — Automate Everything. Scale Without Limits." },
            {
                name: "description",
                content: "Flowsync AI helps startups and enterprises automate workflows, eliminate repetitive tasks, and scale operations with cutting-edge artificial intelligence.",
            },
            { property: "og:title", content: "Flowsync AI — Automate Everything. Scale Without Limits." },
            {
                property: "og:description",
                content: "Flowsync AI helps startups and enterprises automate workflows, eliminate repetitive tasks, and scale operations with cutting-edge artificial intelligence.",
            },
            { property: "og:type", content: "website" },
            { name: "twitter:card", content: "summary_large_image" },
        ],
        links: [
            {
                rel: "stylesheet",
                href: "https://rsms.me/inter/inter.css",
            },
        ],
    }),
    component: Landing,
});
/* ---------- reusable ---------- */
function Reveal({ children, delay = 0, y = 24, className = "", }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });
    return (<motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>);
}
function SectionEyebrow({ children }) {
    return (<span className="eyebrow">
      <span className="h-1 w-1 rounded-full bg-white/60"/>
      {children}
    </span>);
}
function CountUp({ to, suffix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [val, setVal] = useState(0);
    useEffect(() => {
        if (!inView)
            return;
        const start = performance.now();
        const dur = 1800;
        let raf = 0;
        const tick = (t) => {
            const p = Math.min((t - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.floor(eased * to));
            if (p < 1)
                raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, to]);
    return (<span ref={ref}>
      {val}
      {suffix}
    </span>);
}
/* ---------- HERO ---------- */
function Hero() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 600], [0, -80]);
    const y2 = useTransform(scrollY, [0, 600], [0, 60]);
    const rot = useTransform(scrollY, [0, 600], [0, 8]);
    return (<section id="top" className="relative overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32">
      {/* grid + ambient */}
      <div aria-hidden className="grid-bg absolute inset-0"/>
      <div aria-hidden className="ambient-blob left-[-10%] top-[10%] h-[400px] w-[400px] bg-white/[0.04]"/>
      <div aria-hidden className="ambient-blob right-[-10%] top-[30%] h-[500px] w-[500px] bg-white/[0.03]"/>

      <div className="container-x relative z-10 grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <SectionEyebrow>Automation · Intelligence · Scale</SectionEyebrow>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[44px] font-medium leading-[1.02] tracking-[-0.03em] sm:text-6xl md:text-7xl lg:text-[86px]">
              <span className="text-gradient block">Transform your</span>
              <span className="block">business with</span>
              <span className="text-shine block italic font-light">intelligent</span>
              <span className="text-gradient block">AI automation.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-8 max-w-xl text-[15px] leading-relaxed text-white/60 md:text-base">
              We help startups and enterprises automate workflows, eliminate repetitive
              tasks, and scale operations using cutting-edge artificial intelligence — engineered
              with the craft of a design studio.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary group">
                Book a Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
              </a>
              <a href="#services" className="btn-ghost group">
                <Play className="h-3.5 w-3.5"/>
                Explore Services
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <div className="mt-14 flex items-center gap-8 border-t border-white/[0.06] pt-8">
              <div>
                <div className="text-2xl font-medium tracking-tight">
                  <CountUp to={500} suffix="+"/>
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/40">Workflows shipped</div>
              </div>
              <div className="h-10 w-px bg-white/10"/>
              <div>
                <div className="text-2xl font-medium tracking-tight">
                  <CountUp to={98} suffix="%"/>
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/40">Client satisfaction</div>
              </div>
              <div className="h-10 w-px bg-white/10"/>
              <div>
                <div className="text-2xl font-medium tracking-tight">
                  <CountUp to={24} suffix="/7"/>
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-white/40">Support</div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right visual */}
        <div className="relative">
          <motion.div style={{ y: y1, rotate: rot }} className="relative">
            <div className="relative aspect-square overflow-hidden rounded-[32px] border border-white/[0.08] bg-black">
              <img src={heroBrain} alt="Monochrome 3D AI brain sculpture" width={1280} height={1280} className="h-full w-full object-cover"/>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"/>
              <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-40 [background:radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_60%)]"/>
              {/* corner tag */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[11px] uppercase tracking-widest text-white/70 backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white"/>
                Neural core · live
              </div>
              {/* floating readouts */}
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="absolute right-5 top-16 w-[190px] rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
                <div className="text-[10px] uppercase tracking-widest text-white/40">Throughput</div>
                <div className="mt-1 text-2xl font-medium tracking-tight">128k/s</div>
                <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-3/4 bg-white/80"/>
                </div>
              </motion.div>
              <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="absolute bottom-6 left-5 w-[220px] rounded-2xl border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] uppercase tracking-widest text-white/40">Automations</div>
                  <span className="rounded-full bg-white/10 px-1.5 py-0.5 text-[9px] text-white/70">ACTIVE</span>
                </div>
                <div className="mt-2 flex items-end gap-1">
                  {[30, 55, 42, 78, 60, 92, 70].map((h, i) => (<div key={i} className="w-2 rounded-sm bg-gradient-to-t from-white/20 to-white" style={{ height: `${h * 0.3}px` }}/>))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.img style={{ y: y2 }} src={cubes} alt="" width={1024} height={1024} className="absolute -bottom-10 -left-10 h-40 w-40 rounded-2xl border border-white/10 object-cover shadow-2xl md:h-48 md:w-48"/>
        </div>
      </div>
    </section>);
}
/* ---------- TRUSTED ---------- */
const LOGOS = [
    "Google",
    "Microsoft",
    "Slack",
    "OpenAI",
    "Notion",
    "Shopify",
    "Stripe",
    "Vercel",
];
function Trusted() {
    return (<section className="relative border-y border-white/[0.06] bg-white/[0.01] py-14">
      <div className="container-x mb-8">
        <p className="text-center text-xs uppercase tracking-[0.24em] text-white/40">
          Trusted by teams building the next decade of software
        </p>
      </div>
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
        <div className="flex animate-marquee gap-16 whitespace-nowrap pr-16">
          {[...LOGOS, ...LOGOS, ...LOGOS].map((l, i) => (<span key={i} className="text-2xl font-semibold tracking-tight text-white/40 transition hover:text-white/90 md:text-3xl" style={{ fontFamily: "Inter" }}>
              {l}
            </span>))}
        </div>
      </div>
    </section>);
}
/* ---------- SERVICES ---------- */
const SERVICES = [
    { icon: Bot, title: "AI Chatbots", desc: "Human-like agents that resolve, book and convert 24/7." },
    { icon: Workflow, title: "Workflow Automation", desc: "Retire manual work. Connect every tool in your stack." },
    { icon: Users, title: "Lead Generation", desc: "Enriched, qualified pipeline delivered on autopilot." },
    { icon: Layers, title: "CRM Integration", desc: "Real-time sync across Salesforce, HubSpot, Notion & more." },
    { icon: BarChart3, title: "AI Analytics", desc: "Predictive dashboards that surface what matters next." },
    { icon: Mail, title: "Email Automation", desc: "Multi-channel outreach personalized at machine scale." },
];
function ServiceCard({ icon: Icon, title, desc, index, }) {
    const ref = useRef(null);
    const [pos, setPos] = useState({ x: 50, y: 50 });
    return (<Reveal delay={index * 0.05}>
      <div ref={ref} onMouseMove={(e) => {
            const r = ref.current.getBoundingClientRect();
            setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
        }} className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20">
        <div aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{
            background: `radial-gradient(400px circle at ${pos.x}% ${pos.y}%, rgba(255,255,255,0.08), transparent 40%)`,
        }}/>
        <div className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02]">
          <Icon className="h-5 w-5 text-white" strokeWidth={1.5}/>
        </div>
        <h3 className="relative mt-6 text-xl font-medium tracking-tight">{title}</h3>
        <p className="relative mt-3 text-sm leading-relaxed text-white/50">{desc}</p>
        <div className="relative mt-8 flex items-center justify-between border-t border-white/[0.06] pt-4 text-xs text-white/40">
          <span>0{index + 1} / 06</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/>
        </div>
      </div>
    </Reveal>);
}
function Services() {
    return (<section id="services" className="relative py-32">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Reveal><SectionEyebrow>Services</SectionEyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
                <span className="text-gradient">Automation, engineered</span><br />
                <span className="italic font-light text-white/60">like a product.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-sm leading-relaxed text-white/50">
              Six disciplines, one operating system for growth. Every engagement is
              scoped, designed and shipped by senior teams.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (<ServiceCard key={s.title} {...s} index={i}/>))}
        </div>
      </div>
    </section>);
}
/* ---------- PROCESS ---------- */
const STEPS = [
    { n: "01", t: "Discovery", d: "We audit every workflow, tool and bottleneck across your operation." },
    { n: "02", t: "Strategy", d: "A prioritised automation blueprint with clear ROI and timelines." },
    { n: "03", t: "Automation", d: "Senior engineers build, integrate and battle-test every system." },
    { n: "04", t: "Deployment", d: "Ship, monitor and iterate. Continuous optimisation, guaranteed." },
];
function Process() {
    return (<section id="process" className="relative py-32">
      <div aria-hidden className="ambient-blob left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.02]"/>
      <div className="container-x relative">
        <div className="text-center">
          <Reveal><SectionEyebrow>The process</SectionEyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-6 max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient">From ambition</span>{" "}
              <span className="italic font-light text-white/60">to autonomy,</span>
              <br /> in four movements.
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-20">
          {/* connecting line */}
          <div aria-hidden className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/20 to-transparent md:hidden"/>
          <div aria-hidden className="absolute left-0 right-0 top-[68px] hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block"/>

          <div className="grid gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => (<Reveal key={s.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-black text-sm font-medium tracking-widest">
                    <span className="absolute inset-0 rounded-full bg-white/5 blur-md"/>
                    <span className="relative">{s.n}</span>
                  </div>
                  <div className="mt-6 text-center">
                    <h3 className="text-xl font-medium tracking-tight">{s.t}</h3>
                    <p className="mx-auto mt-3 max-w-[240px] text-sm leading-relaxed text-white/50">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>))}
          </div>
        </div>
      </div>
    </section>);
}
/* ---------- DASHBOARD PREVIEW ---------- */
function Dashboard() {
    const bars = [40, 65, 48, 82, 70, 95, 78, 88, 60, 92, 74, 85];
    return (<section className="relative py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionEyebrow>The console</SectionEyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient">One surface.</span>{" "}
              <span className="italic font-light text-white/60">Every signal.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-white/50">
              A live command center for every automation, agent and integration in your business.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3}>
          <div className="relative mt-16">
            <div aria-hidden className="ambient-blob left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 bg-white/[0.05]"/>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0A0A0A] p-2 shadow-[0_60px_120px_-40px_rgba(0,0,0,0.8)]">
              {/* window chrome */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20"/>
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20"/>
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20"/>
                </div>
                <div className="rounded-md border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] text-white/50">
                  console.flowsync.ai
                </div>
                <div className="w-16"/>
              </div>

              <div className="grid gap-2 rounded-2xl border border-white/[0.06] bg-black p-4 lg:grid-cols-[220px_1fr_260px]">
                {/* sidebar */}
                <aside className="hidden flex-col gap-1 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 lg:flex">
                  {["Overview", "Workflows", "Agents", "Integrations", "Analytics", "Team", "Billing"].map((l, i) => (<div key={l} className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${i === 0 ? "bg-white/[0.06] text-white" : "text-white/50"}`}>
                        <span className="h-1 w-1 rounded-full bg-white/50"/>
                        {l}
                      </div>))}
                </aside>

                {/* main */}
                <div className="flex flex-col gap-2">
                  <div className="grid grid-cols-3 gap-2">
                    {[
            { l: "MRR", v: "$248.4k", d: "+18.2%" },
            { l: "Automations", v: "1,284", d: "+322" },
            { l: "Success rate", v: "99.4%", d: "+0.2%" },
        ].map((c) => (<div key={c.l} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <div className="text-[10px] uppercase tracking-widest text-white/40">{c.l}</div>
                        <div className="mt-2 text-xl font-medium tracking-tight">{c.v}</div>
                        <div className="mt-1 text-[11px] text-white/50">{c.d}</div>
                      </div>))}
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40">Revenue</div>
                        <div className="text-lg font-medium tracking-tight">Last 12 weeks</div>
                      </div>
                      <div className="flex gap-1 text-[10px] text-white/40">
                        {["1W", "1M", "3M", "1Y"].map((t, i) => (<span key={t} className={`rounded-md px-2 py-1 ${i === 2 ? "bg-white/10 text-white" : ""}`}>
                            {t}
                          </span>))}
                      </div>
                    </div>
                    <div className="mt-6 flex h-40 items-end gap-2">
                      {bars.map((h, i) => (<motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }} className="flex-1 rounded-t-md bg-gradient-to-t from-white/10 to-white/80"/>))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/40">Active workflows</div>
                    <div className="mt-3 space-y-3">
                      {[
            { n: "Lead enrichment → CRM", p: 92 },
            { n: "Onboarding email drip", p: 68 },
            { n: "Support triage agent", p: 84 },
            { n: "Invoice reconciliation", p: 47 },
        ].map((w) => (<div key={w.n}>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-white/80">{w.n}</span>
                            <span className="text-white/40">{w.p}%</span>
                          </div>
                          <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/5">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: `${w.p}%` }} viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} className="h-full bg-white"/>
                          </div>
                        </div>))}
                    </div>
                  </div>
                </div>

                {/* right */}
                <aside className="flex flex-col gap-2">
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/40">Health</div>
                    <div className="relative mt-3 flex h-32 items-center justify-center">
                      <svg viewBox="0 0 120 120" className="h-full">
                        <circle cx="60" cy="60" r="48" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="10"/>
                        <motion.circle cx="60" cy="60" r="48" fill="none" stroke="#fff" strokeWidth="10" strokeLinecap="round" strokeDasharray={2 * Math.PI * 48} initial={{ strokeDashoffset: 2 * Math.PI * 48 }} whileInView={{ strokeDashoffset: 2 * Math.PI * 48 * (1 - 0.87) }} viewport={{ once: true }} transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }} transform="rotate(-90 60 60)"/>
                      </svg>
                      <div className="absolute text-center">
                        <div className="text-2xl font-medium tracking-tight">87</div>
                        <div className="text-[10px] uppercase tracking-widest text-white/40">Score</div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                    <div className="text-[10px] uppercase tracking-widest text-white/40">Live tasks</div>
                    <div className="mt-3 space-y-3 text-xs">
                      {[
            { s: "success", t: "Sync HubSpot ↔ Notion" },
            { s: "running", t: "Enrich 128 leads" },
            { s: "success", t: "Draft weekly recap" },
            { s: "queued", t: "Ping Stripe balance" },
        ].map((t, i) => (<div key={i} className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className={`h-1.5 w-1.5 rounded-full ${t.s === "success"
                ? "bg-white"
                : t.s === "running"
                    ? "animate-pulse bg-white/70"
                    : "bg-white/30"}`}/>
                            <span className="text-white/80">{t.t}</span>
                          </div>
                          <span className="text-white/30">{t.s}</span>
                        </div>))}
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>);
}
/* ---------- WHY / FEATURES ---------- */
const WHY = [
    { icon: Zap, t: "Ship in weeks, not quarters", d: "Senior teams, opinionated systems, zero committee." },
    { icon: Shield, t: "Enterprise-grade security", d: "SOC 2 architecture. Audit trails on every workflow." },
    { icon: Rocket, t: "Built to compound", d: "Every automation makes the next one cheaper to ship." },
    { icon: Cpu, t: "State-of-the-art models", d: "Frontier LLMs, orchestrated with taste and precision." },
    { icon: Globe, t: "Integrates with everything", d: "300+ connectors, custom APIs, on-prem where required." },
    { icon: Sparkles, t: "Design-led craft", d: "Interfaces your team actually wants to use every day." },
];
function Why() {
    return (<section id="features" className="relative py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal><SectionEyebrow>Why Flowsync</SectionEyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient">The unfair advantage</span>{" "}
              <span className="italic font-light text-white/60">of a design-led</span>{" "}
              <span className="text-gradient">automation partner.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {WHY.map((f, i) => (<Reveal key={f.t} delay={i * 0.05}>
              <div className="group relative flex h-full flex-col gap-4 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition hover:border-white/15 hover:bg-white/[0.04]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] transition group-hover:animate-float-slow">
                  <f.icon className="h-4 w-4" strokeWidth={1.5}/>
                </div>
                <h3 className="text-lg font-medium tracking-tight">{f.t}</h3>
                <p className="text-sm leading-relaxed text-white/50">{f.d}</p>
              </div>
            </Reveal>))}
        </div>
      </div>
    </section>);
}
/* ---------- STATS ---------- */
function Stats() {
    const items = [
        { v: 500, s: "+", l: "Projects delivered" },
        { v: 98, s: "%", l: "Client satisfaction" },
        { v: 120, s: "+", l: "Companies scaled" },
        { v: 24, s: "/7", l: "Global support" },
    ];
    return (<section className="relative border-y border-white/[0.06] bg-white/[0.01] py-24">
      <div className="container-x grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        {items.map((s, i) => (<Reveal key={s.l} delay={i * 0.08}>
            <div className="border-l border-white/10 pl-6">
              <div className="text-5xl font-medium tracking-tight md:text-6xl">
                <CountUp to={s.v} suffix={s.s}/>
              </div>
              <div className="mt-3 text-xs uppercase tracking-[0.24em] text-white/40">{s.l}</div>
            </div>
          </Reveal>))}
      </div>
    </section>);
}
/* ---------- TESTIMONIALS ---------- */
const T = [
    {
        q: "Flowsync rebuilt our operations from the ground up. We now run 4× the pipeline with the same headcount.",
        n: "Isabelle Moreau",
        r: "COO, Northwind",
    },
    {
        q: "The team ships with the taste of a product studio and the rigor of a systems company. Extremely rare.",
        n: "Daniel Osei",
        r: "VP Engineering, Kortex",
    },
    {
        q: "We replaced three vendors and a dozen spreadsheets in a single quarter. It felt like moving from analog to digital.",
        n: "Anna Lindqvist",
        r: "Founder, Halo Labs",
    },
];
function Testimonials() {
    return (<section className="relative py-32">
      <div className="container-x">
        <div className="flex items-end justify-between">
          <div>
            <Reveal><SectionEyebrow>Client stories</SectionEyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
                <span className="text-gradient">Built with</span>{" "}
                <span className="italic font-light text-white/60">operators who ship.</span>
              </h2>
            </Reveal>
          </div>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {T.map((t, i) => (<Reveal key={i} delay={i * 0.08}>
              <figure className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition hover:-translate-y-1 hover:border-white/20">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, k) => (<Star key={k} className="h-3.5 w-3.5 fill-white text-white"/>))}
                </div>
                <blockquote className="mt-6 text-[17px] leading-relaxed text-white/85">
                  &ldquo;{t.q}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-white/[0.06] pt-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.02] text-sm">
                    {t.n[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.n}</div>
                    <div className="text-xs text-white/40">{t.r}</div>
                  </div>
                </figcaption>
              </figure>
            </Reveal>))}
        </div>
      </div>
    </section>);
}
/* ---------- PRICING ---------- */
const PLANS = [
    {
        n: "Starter",
        p: "$2,400",
        d: "For teams testing their first automation.",
        f: ["Up to 5 workflows", "1 AI agent", "Email + Slack support", "Weekly sync", "30-day rollout"],
    },
    {
        n: "Professional",
        p: "$6,800",
        d: "For scaling teams operationalising AI.",
        f: ["Unlimited workflows", "5 AI agents", "Priority support", "Dedicated strategist", "Custom integrations", "SOC 2 architecture"],
        highlight: true,
    },
    {
        n: "Enterprise",
        p: "Custom",
        d: "For orgs redesigning around AI.",
        f: ["Everything in Pro", "Unlimited agents", "On-prem / VPC", "Named SRE team", "Legal & security review", "Quarterly roadmap"],
    },
];
function Pricing() {
    return (<section id="pricing" className="relative py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal><SectionEyebrow>Pricing</SectionEyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
              <span className="text-gradient">Pricing that pays</span>{" "}
              <span className="italic font-light text-white/60">for itself.</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {PLANS.map((p, i) => (<Reveal key={p.n} delay={i * 0.08}>
              <div className={`relative flex h-full flex-col rounded-2xl p-8 transition hover:-translate-y-1 ${p.highlight
                ? "border border-white/25 bg-white/[0.05] shadow-[0_40px_80px_-30px_rgba(255,255,255,0.15)]"
                : "border border-white/[0.08] bg-white/[0.02]"}`}>
                {p.highlight && (<span className="absolute right-6 top-6 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-[10px] uppercase tracking-widest">
                    Most chosen
                  </span>)}
                <div className="text-sm text-white/60">{p.n}</div>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-5xl font-medium tracking-tight">{p.p}</span>
                  {p.p !== "Custom" && <span className="text-sm text-white/40">/mo</span>}
                </div>
                <p className="mt-3 text-sm text-white/50">{p.d}</p>
                <ul className="mt-8 space-y-3 text-sm">
                  {p.f.map((f) => (<li key={f} className="flex items-start gap-3 text-white/70">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-white" strokeWidth={2}/>
                      {f}
                    </li>))}
                </ul>
                <a href="#contact" className={`mt-10 inline-flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium transition ${p.highlight
                ? "bg-white text-black hover:opacity-90"
                : "border border-white/15 bg-white/[0.03] text-white hover:bg-white/[0.08]"}`}>
                  Get started <ArrowRight className="h-4 w-4"/>
                </a>
              </div>
            </Reveal>))}
        </div>
      </div>
    </section>);
}
/* ---------- FAQ ---------- */
const FAQS = [
    { q: "How fast can we go live?", a: "Most Starter engagements ship inside 30 days. Complex enterprise rollouts run 8–12 weeks." },
    { q: "Do you replace our existing tools?", a: "We augment your stack. We integrate, orchestrate, and only replace what genuinely no longer serves you." },
    { q: "Which models do you use?", a: "Frontier LLMs from OpenAI, Anthropic and open-source, selected per workflow for cost, quality and latency." },
    { q: "How is data handled?", a: "Zero data retention on model calls, SOC 2 aligned architecture, VPC and on-prem options for regulated industries." },
    { q: "What happens after launch?", a: "Every plan includes continuous optimisation, monitoring and a named strategist. Automations improve monthly." },
];
function FAQ() {
    const [open, setOpen] = useState(0);
    return (<section id="faq" className="relative py-32">
      <div className="container-x grid gap-16 md:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal><SectionEyebrow>FAQ</SectionEyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-4xl font-medium leading-[1.05] tracking-tight md:text-5xl">
              <span className="text-gradient">Questions,</span><br />
              <span className="italic font-light text-white/60">answered.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <img src={sphere} alt="" width={1024} height={1024} loading="lazy" className="mt-10 hidden w-56 rounded-2xl border border-white/10 md:block"/>
          </Reveal>
        </div>
        <div className="divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (<div key={i}>
                <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-6 py-6 text-left transition hover:opacity-80">
                  <span className="text-base font-medium md:text-lg">{f.q}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.03]">
                    {isOpen ? <Minus className="h-3.5 w-3.5"/> : <Plus className="h-3.5 w-3.5"/>}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }} className="overflow-hidden">
                      <p className="pb-6 pr-10 text-sm leading-relaxed text-white/55">{f.a}</p>
                    </motion.div>)}
                </AnimatePresence>
              </div>);
        })}
        </div>
      </div>
    </section>);
}
/* ---------- CONTACT ---------- */
function Contact() {
    return (<section id="contact" className="relative py-32">
      <div aria-hidden className="ambient-blob left-1/4 top-1/2 h-[500px] w-[500px] -translate-y-1/2 bg-white/[0.04]"/>
      <div className="container-x grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Reveal><SectionEyebrow>Let&apos;s talk</SectionEyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 text-5xl font-medium leading-[1] tracking-tight md:text-7xl">
              <span className="text-gradient">Build the</span><br />
              <span className="italic font-light text-white/70">quiet advantage.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-white/50">
              Tell us about your operation. We&apos;ll come back within one business day with
              an honest read on where AI moves the needle for you.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <img src={hand} alt="" width={1024} height={1280} loading="lazy" className="mt-10 hidden w-48 rounded-2xl border border-white/10 lg:block"/>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-xl md:p-10">
            <div className="grid gap-5">
              {[
            { l: "Name", ph: "Ada Lovelace", t: "text" },
            { l: "Email", ph: "ada@company.com", t: "email" },
            { l: "Company", ph: "Analytical Engines Inc.", t: "text" },
        ].map((f) => (<label key={f.l} className="block">
                  <span className="text-[11px] uppercase tracking-widest text-white/40">{f.l}</span>
                  <input type={f.t} placeholder={f.ph} className="mt-2 w-full border-0 border-b border-white/10 bg-transparent px-0 py-2 text-white placeholder:text-white/25 outline-none transition focus:border-white"/>
                </label>))}
              <label className="block">
                <span className="text-[11px] uppercase tracking-widest text-white/40">Message</span>
                <textarea rows={4} placeholder="What are you trying to automate?" className="mt-2 w-full resize-none border-0 border-b border-white/10 bg-transparent px-0 py-2 text-white placeholder:text-white/25 outline-none transition focus:border-white"/>
              </label>
              <button type="submit" className="btn-primary group mt-4 !py-3.5">
                Send inquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1"/>
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>);
}
/* ---------- FOOTER ---------- */
function Footer() {
    return (<footer className="relative border-t border-white/[0.06] pb-10 pt-20">
      <div className="container-x">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <div className="relative h-6 w-6">
                <div className="absolute inset-0 rounded-md bg-white"/>
                <div className="absolute inset-[3px] rounded-[3px] bg-black"/>
                <div className="absolute inset-[6px] rounded-[1px] bg-white"/>
              </div>
              <span className="text-sm font-semibold tracking-tight">Flowsync AI</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Automate everything. Scale without limits. A design-led AI automation studio.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex max-w-sm items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] p-1 pl-4">
              <input placeholder="you@company.com" className="flex-1 bg-transparent text-sm text-white placeholder:text-white/30 outline-none"/>
              <button className="rounded-full bg-white px-4 py-2 text-xs font-medium text-black">
                Subscribe
              </button>
            </form>
          </div>
          {[
            { h: "Product", l: ["Services", "Process", "Pricing", "Features"] },
            { h: "Company", l: ["About", "Careers", "Press", "Contact"] },
            { h: "Legal", l: ["Privacy", "Terms", "Security", "Cookies"] },
        ].map((c) => (<div key={c.h}>
              <div className="text-[11px] uppercase tracking-widest text-white/40">{c.h}</div>
              <ul className="mt-5 space-y-3 text-sm">
                {c.l.map((x) => (<li key={x}>
                    <a href="#" className="text-white/70 transition hover:text-white">{x}</a>
                  </li>))}
              </ul>
            </div>))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 text-xs text-white/40 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} Flowsync AI. All rights reserved.</div>
          <div className="flex items-center gap-3">
            {[Twitter, Linkedin, Github].map((I, i) => (<a key={i} href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] transition hover:border-white/25 hover:text-white">
                <I className="h-3.5 w-3.5"/>
              </a>))}
          </div>
        </div>

        {/* massive wordmark */}
        <div className="pointer-events-none mt-16 select-none overflow-hidden">
          <div className="whitespace-nowrap bg-gradient-to-b from-white/[0.06] to-transparent bg-clip-text text-center text-[22vw] font-semibold leading-none tracking-tighter text-transparent">
            FLOWSYNC
          </div>
        </div>
      </div>
    </footer>);
}
/* ---------- PAGE ---------- */
function Landing() {
    return (<div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
      <Ambient />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Trusted />
        <Services />
        <Process />
        <Dashboard />
        <Why />
        <Stats />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>);
}
