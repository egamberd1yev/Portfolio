import { useI18n } from "../i18n";
import { posts } from "../data";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Blog() {
  const { t } = useI18n();
  return (
    <Section id="blog" title={t.blog.title} sub={t.blog.sub}>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={i} delay={i * 100}>
            <a href={p.url} className="block h-full p-6 rounded-xl bg-card border border-transparent hover:border-accent hover:-translate-y-1.5 hover:shadow-xl hover:shadow-accent/10 transition">
              <span className="text-[11px] text-muted">{t.blog.posts[i].date}</span>
              <h3 className="mt-1 font-semibold">{t.blog.posts[i].title}</h3>
              <p className="mt-2 text-xs text-muted">{t.blog.posts[i].desc}</p>
              <span className="mt-4 inline-block text-xs font-semibold text-accent">{t.blog.read}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
