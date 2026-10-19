import { Github, Linkedin, Send, Mail, Download } from "lucide-react";
import { useI18n } from "../i18n";
import { contact, skills, langLevels, extra } from "../data";
import Avatar from "./Avatar";
import Reveal from "./Reveal";

const Bar = ({ label, pct }) => (
  <div className="mb-3">
    <div className="flex justify-between text-xs text-muted mb-1"><span>{label}</span><span>{pct}%</span></div>
    <div className="h-1 rounded bg-line"><div className="bar h-1 rounded bg-accent" style={{ "--w": `${pct}%` }} /></div>
  </div>
);

const Row = ({ k, v, green }) => (
  <div className="flex justify-between items-center text-xs py-1">
    <span className="bg-accent text-white px-2 py-0.5 rounded-sm">{k}</span>
    <span className={green ? "text-emerald-500" : ""}>{v}</span>
  </div>
);

export default function Sidebar() {
  const { t, lang, setLang } = useI18n();
  const s = t.side;
  const socials = [[Github, contact.github], [Linkedin, contact.linkedin], [Send, contact.telegram], [Mail, `mailto:${contact.email}`]];

  return (
    <aside className="in-left w-full lg:w-72 shrink-0 bg-card rounded-2xl p-6 relative lg:sticky lg:top-6 lg:max-h-[calc(100vh-3rem)] overflow-y-auto no-scrollbar">
      <div className="absolute top-4 right-4 flex gap-1 text-[10px]">
        {["uz", "ru", "en"].map((l) => (
          <button key={l} onClick={() => setLang(l)} className={`px-1.5 py-0.5 rounded uppercase transition ${lang === l ? "bg-accent text-white" : "text-muted hover:text-accent"}`}>{l}</button>
        ))}
      </div>

      <div className="flex flex-col items-center text-center pt-4">
        <div className="relative">
          <Avatar className="w-24 h-24 text-3xl" />
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-card animate-ping" />
          <span className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-card" />
        </div>
        <h3 className="mt-4 font-semibold">Jo'rabek</h3>
        <p className="text-xs text-muted">{s.role}</p>
        <div className="mt-4 flex gap-2">
          {socials.map(([Icon, href], i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center hover:scale-125 hover:rotate-12 transition">
              <Icon size={14} />
            </a>
          ))}
        </div>
      </div>

      <div className="my-5 border-t border-line pt-4">
        <Row k={s.residence} v={s.place} />
        <Row k={s.freelance} v={s.free} green />
      </div>

      <Reveal className="border-t border-line pt-4">
        <h4 className="text-sm font-semibold mb-3">{s.langsTitle}</h4>
        {s.langs.map((n, i) => <Bar key={n} label={n} pct={langLevels[i]} />)}
      </Reveal>

      <Reveal className="border-t border-line pt-4 mt-3">
        <h4 className="text-sm font-semibold mb-3">{s.skillsTitle}</h4>
        {skills.map(([n, p]) => <Bar key={n} label={n} pct={p} />)}
      </Reveal>

      <div className="border-t border-line pt-4 mt-3">
        <h4 className="text-sm font-semibold mb-3">{s.extraTitle}</h4>
        <ul className="space-y-1.5 text-xs text-muted">
          {extra.map((e) => <li key={e} className="flex gap-2"><span className="text-accent">▹</span>{e}</li>)}
        </ul>
      </div>

      <a href="/cv.pdf" download className="group mt-6 flex items-center justify-center gap-2 bg-accent text-white text-xs font-semibold tracking-wide uppercase py-3 rounded-lg hover:shadow-lg hover:shadow-accent/40 transition">
        {s.cv} <Download size={14} className="group-hover:translate-y-0.5 transition" />
      </a>
    </aside>
  );
}
