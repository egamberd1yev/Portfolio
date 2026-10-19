import { useEffect, useState } from "react";
import { Home, Briefcase, FolderGit2, PenLine, MessageSquare, Moon, Sun } from "lucide-react";
import { useI18n } from "../i18n";

const items = [["home", Home], ["services", Briefcase], ["projects", FolderGit2], ["blog", PenLine], ["contact", MessageSquare]];

export default function Rail() {
  const { t } = useI18n();
  const [dark, setDark] = useState(() => localStorage.getItem("theme") === "dark");
  const [active, setActive] = useState("home");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -50% 0px" }
    );
    items.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el); });
    return () => io.disconnect();
  }, []);

  return (
    <nav className="in-right fixed bottom-3 inset-x-3 z-30 lg:static lg:inset-auto lg:sticky lg:top-6 lg:w-14 lg:shrink-0 bg-card rounded-2xl p-2 shadow-lg lg:shadow-none flex lg:flex-col items-center justify-around lg:justify-start gap-2">
      <button onClick={() => setDark(!dark)} aria-label="Theme" className="w-10 h-10 rounded-full flex items-center justify-center hover:text-accent hover:rotate-180 transition duration-500">
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      {items.map(([id, Icon]) => (
        <a key={id} href={`#${id}`} className="group relative w-10 h-10 rounded-full flex items-center justify-center transition">
          <span className={`absolute inset-0 rounded-full transition ${active === id ? "bg-accent scale-100" : "bg-line scale-90 group-hover:scale-100"}`} />
          <Icon size={18} className={`relative ${active === id ? "text-white" : "text-muted group-hover:text-accent"}`} />
          <span className="hidden lg:block pointer-events-none absolute right-full mr-2 px-2 py-1 rounded bg-ink text-bg text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition">{t.nav[id]}</span>
        </a>
      ))}
    </nav>
  );
}
