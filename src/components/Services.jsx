import { Code2, Server, Database, Cloud, Palette } from "lucide-react";
import { useI18n } from "../i18n";
import Section from "./Section";
import Reveal from "./Reveal";

const icons = [Code2, Server, Database, Cloud, Palette];

export default function Services() {
  const { t } = useI18n();
  const s = t.services;
  return (
    <Section id="services" title={s.title} sub={s.sub}>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {s.items.map((it, i) => {
          const Icon = icons[i];
          return (
            <Reveal key={i} delay={i * 80}>
              <div className="group h-full bg-card rounded-xl p-8 text-center border border-transparent hover:border-accent hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/10 transition">
                <Icon size={40} strokeWidth={1.3} className="mx-auto text-accent group-hover:scale-110 group-hover:-rotate-6 transition" />
                <h3 className="mt-5 text-sm font-semibold">{it.title}</h3>
                <p className="mt-1 text-xs text-muted">{it.desc}</p>
              </div>
            </Reveal>
          );
        })}
        <Reveal delay={400}>
          <div className="h-full bg-card rounded-xl p-8 text-center flex flex-col items-center justify-center">
            <h3 className="text-sm font-semibold">{s.ctaTitle}</h3>
            <p className="mt-2 text-xs text-muted">{s.ctaText}</p>
            <a href="#contact" className="mt-3 text-[11px] font-bold uppercase text-accent hover:tracking-widest transition-all">{s.ctaBtn} ›</a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
