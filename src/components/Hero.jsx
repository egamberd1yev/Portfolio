import { ArrowRight } from "lucide-react";
import { useI18n } from "../i18n";
import Avatar from "./Avatar";

const shapes = [
  ["w-3 h-3 rounded-full border-2 border-accent", "top-6 left-[8%]", "0s"],
  ["w-4 h-4 rounded-full border-2 border-sky-400", "top-10 left-[45%]", "1s"],
  ["w-3.5 h-3.5 border-2 border-accent", "top-[55%] left-[42%]", "2s"],
  ["w-3 h-3 rounded-full border-2 border-emerald-400", "bottom-8 left-[6%]", "1.5s"],
  ["w-3.5 h-3.5 border-2 border-sky-400", "top-8 right-[8%]", ".5s"],
  ["w-3 h-3 rounded-full border-2 border-amber-400", "bottom-10 right-[30%]", "2.5s"],
];

export default function Hero() {
  const { t } = useI18n();
  const h = t.hero;
  return (
    <section id="home" className="scroll-mt-6 relative overflow-hidden rounded-2xl bg-card px-8 sm:px-12 py-12 min-h-85 flex items-center">
      {shapes.map(([c, pos, d], i) => (
        <span key={i} className={`float absolute ${c} ${pos}`} style={{ animationDelay: d }} />
      ))}
      <div className="absolute -right-16 -top-16 w-72 h-72 rounded-full bg-accent/20 blur-3xl float" />

      <div className="relative z-10 flex-1">
        <h1 className="in-up text-4xl sm:text-5xl font-extrabold leading-tight" style={{ animationDelay: ".2s" }}>
          {h.hi} Jo'rabek
          <br />
          <span className="shimmer bg-linear-to-r from-accent via-sky-400 to-accent bg-clip-text text-transparent">{h.accent}</span> {h.rest}
        </h1>
        <p className="in-up mt-5 max-w-md text-sm text-muted leading-relaxed" style={{ animationDelay: ".4s" }}>{h.sub}</p>
        <a href="#contact" className="in-up group mt-7 inline-flex items-center gap-2 bg-accent text-white text-sm font-semibold uppercase px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-accent/40 hover:-translate-y-0.5 transition" style={{ animationDelay: ".6s" }}>
          {h.hire} <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
        </a>
      </div>

      <div className="in-right relative z-10 hidden md:block" style={{ animationDelay: ".5s" }}>
        <div className="float rounded-full p-1.5 bg-linear-to-br from-accent to-sky-400">
          <Avatar className="w-52 h-52 text-7xl border-4 border-card" />
        </div>
      </div>
    </section>
  );
}
