import { useEffect, useRef } from "react";

export function MatrixRain({ opacity = 0.18 }: { opacity?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const fontSize = 14;
    let columns = Math.floor(w / fontSize);
    let drops: number[] = Array(columns).fill(1);
    const chars = "アァイィウエカキクケコサシスセソタチツテトナニヌネノ01<>/$#%*[]{}=ELLIOTfsocietyEVILCORP";

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
      columns = Math.floor(w / fontSize);
      drops = Array(columns).fill(1);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const draw = () => {
      ctx.fillStyle = "rgba(8, 14, 10, 0.08)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = `rgba(120, 230, 140, ${opacity})`;
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;
      for (let i = 0; i < drops.length; i++) {
        const t = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(t, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onResize); };
  }, [opacity]);

  return <canvas ref={ref} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden />;
}
