import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Typewriter, TerminalWindow } from "../Terminal";
import { MatrixRain } from "../MatrixRain";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JADYALICIA_ // Portfolio" },
      {
        name: "description",
        content:
          "Portfólio inspirado em Mr. Robot — projetos de dados, engenharia e programação.",
      },
      { property: "og:title", content: "JADYALICIA_ // Portfolio" },
      {
        property: "og:description",
        content: "Projetos de dados e programação. Hello, friend.",
      },
    ],
  }),
  component: Index,
});

// ─────────────────────────────────────────────────────────────
// EDITE AQUI seus dados pessoais
// ─────────────────────────────────────────────────────────────
const PROFILE = {
  alias: "jady_alicia",
  role: "Data Analyst / Developer",
  location: "Brasil — node:remote",
  mission: "automatizar o caos. organizar dados. construir ferramentas que resolvem problemas reais",
  bio: "Desenvolvo soluções entre dados e programação: dashboards, automações e sistemas internos voltados para operações e inteligência de negócio. Curiosa por sistemas, processos e tudo que pode ser otimizado.",
  email: "jady.alicia@hotmail.com",
  github: "https://github.com/jadyalicia",
  githubLabel: "@jadyalicia",
  linkedin: "https://br.linkedin.com/in/jady-alicia-santos-53536934b",
  linkedinLabel: "/in/jady-alicia-santos-53536934b",
};

const EXPERIENCE = [
  {
    company: "Dona Rita Embalagens",
    role: "Data Analyst Jr.",
    period: "2024 — presente",
    bullets: [
     "Power BI dashboards, KPIs e modelagem analítica",
     "Automação corporativa com Power Apps + Power Automate",
     "UX/UI e prototipação de interfaces no Figma",
     "Relatórios analíticos e suporte data-driven à operação",
]
  },

];

const PROJECTS = [
  {
  id: "001",
  name: "controle_frete.sys",
  stack: ["Java", "JavaFX", "MySQL"],
  desc: "Aplicação desktop para gestão de fretes e operações logísticas, com persistência em banco relacional, automação de cálculos e controle operacional.",
  status: "PROD",
  link: "https://github.com/jadyalicia/sistema-controle-frete",
  },

  {
  id: "002",
  name: "controle_horas.sys",
  stack: ["Python","HTML"],
  desc: "Sistema corporativo para gestão de horas extras, cálculo de jornadas e controle operacional de equipes.",
  status: "PROD",
  link: "https://github.com/jadyalicia/controle-horas-extras",
  }

];

const SKILLS = [
  {
    cat: "linguagens",
    items: [
      "Java",
      "SQL",
      "Python",
      "JavaFX",
      "TypeScript",
    ],
  },

  {
    cat: "dados & analytics",
    items: [
      "Power BI",
      "Modelagem de Dados",
      "KPIs",
      "Dashboards Gerenciais",
      "Relatórios Analíticos",
      "Tabelas Dinâmicas",
      "Data Visualization",
    ],
  },

  {
    cat: "automação & low-code",
    items: [
      "Power Apps",
      "Power Automate",
      "Automação de Processos",
      "Fluxos Operacionais",
      "Integrações Microsoft",
    ],
  },

  {
    cat: "frontend & ux",
    items: [
      "Figma",
      "UX/UI",
      "Scene Builder",
      "Prototipação",
      "Layouts Responsivos",
    ],
  },

  {
    cat: "banco de dados",
    items: [
      "Oracle SQL Developer",
      "MySQL",
      "Modelagem Relacional",
      "Consultas SQL",
      "Procedures",
    ],
  },

  {
    cat: "ferramentas",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "IntelliJ IDEA",
    ],
  },
];
// ─────────────────────────────────────────────────────────────

function Index() {
  const [booted, setBooted] = useState(false);
  useEffect(() => { const t = setTimeout(() => setBooted(true), 2400); return () => clearTimeout(t); }, []);

  return (
    <div className="relative min-h-screen text-foreground crt-flicker">
      <MatrixRain opacity={0.12} />

      <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 md:px-8 h-12 flex items-center justify-between text-[11px] uppercase tracking-[0.25em]">
          <div className="flex items-center gap-2 text-terminal text-glow">
            <span className="size-2 rounded-full bg-terminal animate-pulse" />
            fsociety.dat
          </div>
          <nav className="hidden md:flex gap-6 text-muted-foreground">
            <a href="#whoami" className="hover:text-terminal transition-colors">./whoami</a>
            <a href="#experience" className="hover:text-terminal transition-colors">./experience</a>
            <a href="#projects" className="hover:text-terminal transition-colors">./projects</a>
            <a href="#skills" className="hover:text-terminal transition-colors">./skills</a>
            <a href="#contact" className="hover:text-terminal transition-colors">./contact</a>
          </nav>
          <div className="text-muted-foreground hidden sm:block">SECURE_CONN · 256-AES</div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 md:px-8 py-12 md:py-20 space-y-24">
        {/* HERO */}
        <section className="relative">
          <div className="ascii-grid absolute inset-0 -z-10 opacity-40" />
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-7 space-y-6">
              <p className="text-xs uppercase tracking-[0.4em] text-terminal-dim">// transmission_intercepted —— 05:09</p>
              <h1 className="font-mono text-5xl md:text-7xl font-bold leading-[0.95] text-terminal text-glow glitch">
                HELLO,
                <br />
                FRIEND_
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                {PROFILE.bio}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a href="#projects" className="group inline-flex items-center gap-2 px-4 py-2 border border-terminal text-terminal hover:bg-terminal hover:text-primary-foreground transition-all text-sm uppercase tracking-widest">
                  <span>›</span> ver arquivos
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 border border-border text-muted-foreground hover:text-terminal hover:border-terminal transition-all text-sm uppercase tracking-widest">
                  iniciar conexão
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <TerminalWindow title="root@fsociety:~/boot">
                <Typewriter
                  lines={[
                    `ssh ${PROFILE.alias}@fsociety.local`,
                    "decrypting identity...",
                    "access: GRANTED",
                    "loading portfolio.dat",
                    booted ? "system ready ✓" : "...",
                  ]}
                />
              </TerminalWindow>
            </div>
          </div>
        </section>

        {/* WHOAMI */}
        <section id="whoami" className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionLabel n="01" title="whoami" />
          </div>
          <div className="md:col-span-8">
            <TerminalWindow>
              <div className="space-y-3 text-sm md:text-base">
                <Line k="alias" v={PROFILE.alias} />
                <Line k="role" v={PROFILE.role} />
                <Line k="location" v={PROFILE.location} />
                <Line k="mission" v={PROFILE.mission} />
                <Line k="status" v={<span className="text-terminal text-glow">● online</span>} />
                <div className="pt-4 border-t border-border text-muted-foreground leading-relaxed">
                  {PROFILE.bio}
                </div>
              </div>
            </TerminalWindow>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionLabel n="02" title="experience.log" />
            <p className="text-sm text-muted-foreground mt-3">
              Histórico de operações — registros desencriptados em ordem cronológica reversa.
            </p>
          </div>
          <div className="md:col-span-8 space-y-4">
            {EXPERIENCE.map((e, i) => (
              <article key={i} className="relative border border-border bg-card/40 p-5 md:p-6 hover:border-terminal transition-all">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl text-terminal text-glow">{e.role}</h3>
                    <div className="text-sm text-muted-foreground">@ {e.company}</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-widest text-terminal-dim border border-border px-2 py-0.5">
                    {e.period}
                  </div>
                </div>
                <ul className="mt-4 space-y-1.5 text-sm md:text-base">
                  {e.bullets.map((b, j) => (
                    <li key={j} className="text-muted-foreground flex gap-2">
                      <span className="text-terminal shrink-0">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionLabel n="03" title="projects.log" />
            <p className="text-sm text-muted-foreground mt-3">
              Arquivos descriptografados. Mais materiais classificados disponíveis sob demanda.
            </p>
          </div>
          <div className="md:col-span-8 space-y-4">
            {PROJECTS.map((p) => (
              <a key={p.id} href={p.link} target="_blank" rel="noreferrer"
                 className="group block border border-border bg-card/50 hover:border-terminal transition-all p-5 md:p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 px-3 py-1 text-[10px] uppercase tracking-widest bg-terminal/10 text-terminal border-l border-b border-border">
                  {p.status}
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="text-terminal-dim text-xs">#{p.id}</span>
                  <h3 className="text-xl md:text-2xl text-terminal group-hover:text-glow transition-all">
                    {p.name}<span className="blink">_</span>
                  </h3>
                </div>
                <p className="mt-3 text-muted-foreground leading-relaxed text-sm md:text-base">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[11px] uppercase tracking-wider px-2 py-0.5 border border-border text-terminal-dim">{s}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionLabel n="04" title="stack.sys" />
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-4">
            {SKILLS.map((s) => (
              <div key={s.cat} className="border border-border bg-card/40 p-5">
                <div className="text-[11px] uppercase tracking-[0.3em] text-terminal mb-3">/{s.cat}</div>
                <ul className="space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="text-muted-foreground hover:text-terminal transition-colors text-sm">
                      <span className="text-terminal-dim">›</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <SectionLabel n="05" title="open_channel" />
          </div>
          <div className="md:col-span-8">
            <TerminalWindow title="root@fsociety:~/contact">
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Conexões abertas. Mensagens curtas e diretas, por favor.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                  <ContactRow label="email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
                  <ContactRow label="github" value={PROFILE.githubLabel} href={PROFILE.github} />
                  <ContactRow label="linkedin" value={PROFILE.linkedinLabel} href={PROFILE.linkedin} />
                  <ContactRow label="secure_channel" value="signal accepted" href="#"
  />
                </div>
                <div className="pt-4 border-t border-border text-xs text-terminal-dim">
                  <span className="text-terminal">$</span> sudo make_contact --secure<span className="blink">█</span>
                </div>
              </div>
            </TerminalWindow>
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-20">
        <div className="mx-auto max-w-6xl px-4 md:px-8 py-6 flex flex-wrap items-center justify-between gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
          <div>© {new Date().getFullYear()} · {PROFILE.alias}</div>
          <div className="text-terminal-dim">"finding bugs is a talent."</div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="md:sticky md:top-20">
      <div className="text-[11px] uppercase tracking-[0.4em] text-terminal-dim">section /{n}</div>
      <h2 className="text-3xl md:text-4xl mt-2 text-terminal text-glow">{title}</h2>
      <div className="mt-3 h-px w-16 bg-terminal/60" />
    </div>
  );
}

function Line({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-terminal-dim w-24 shrink-0">{k}</span>
      <span className="text-terminal">›</span>
      <span className="text-foreground flex-1">{v}</span>
    </div>
  );
}

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="group flex items-center justify-between border border-border p-3 hover:border-terminal hover:bg-terminal/5 transition-all">
      <span className="text-[11px] uppercase tracking-widest text-terminal-dim">/{label}</span>
      <span className="text-sm text-foreground group-hover:text-terminal group-hover:text-glow truncate ml-2">{value} ›</span>
    </a>
  );
}
