import React, { useEffect, useState } from "react";

export function Typewriter({ lines, speed = 22, startDelay = 0 }: { lines: string[]; speed?: number; startDelay?: number }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (idx >= lines.length) { setDone(true); return; }
    const current = lines[idx];
    if (text.length < current.length) {
      const t = setTimeout(() => setText(current.slice(0, text.length + 1)), speed);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => { setIdx(idx + 1); setText(""); }, 220);
    return () => clearTimeout(t);
  }, [text, idx, lines, speed]);

  return (
    <div className="font-mono text-sm md:text-base leading-relaxed" style={{ animationDelay: `${startDelay}ms` }}>
      {lines.slice(0, idx).map((l, i) => (
        <div key={i} className="text-terminal-dim">
          <span className="text-terminal">$</span> {l}
        </div>
      ))}
      {!done && (
        <div className="text-terminal-dim">
          <span className="text-terminal">$</span> {text}
          <span className="blink text-terminal">█</span>
        </div>
      )}
    </div>
  );
}

export function TerminalWindow({ title = "root@fsociety:~#", children }: { title?: string; children: React.ReactNode }) {
  return (
    <div className="relative border border-border bg-popover/80 backdrop-blur-sm rounded-sm overflow-hidden shadow-[0_0_40px_oklch(0.82_0.22_142/0.08)]">
      <div className="flex items-center gap-2 px-3 py-1.5 border-b border-border bg-secondary/60">
        <span className="size-2.5 rounded-full bg-destructive/80" />
        <span className="size-2.5 rounded-full bg-warn/80" />
        <span className="size-2.5 rounded-full bg-terminal/80" />
        <span className="ml-3 text-[11px] uppercase tracking-widest text-muted-foreground">{title}</span>
      </div>
      <div className="relative p-5 md:p-7 scanlines">{children}</div>
    </div>
  );
}
