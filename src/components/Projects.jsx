import { useI18n } from "../i18n";
import { projects } from "../data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Projects() {
  const { t } = useI18n();
  return (
    <Section id="projects" title={t.projects.title} sub={t.projects.sub}>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            <div className="h-full p-6 rounded-xl bg-card border border-transparent hover:border-accent hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/10 transition">
              <h3 className="font-semibold">{t.projects.items[i].title}</h3>
              <p className="mt-2 text-xs text-muted leading-relaxed">{t.projects.items[i].desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-accent/10 text-accent">{tag}</span>)}
              </div>
              <div className="mt-5 flex gap-4 text-xs font-semibold text-accent">
                <a href={p.demo} target="_blank" rel="noreferrer" className="hover:underline">{t.projects.demo}</a>
                <a href={p.repo} target="_blank" rel="noreferrer" className="hover:underline">GitHub</a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
