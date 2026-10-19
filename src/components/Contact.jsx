import { useI18n } from "../i18n";
import { contact } from "../data";
import Section from "./Section";
import Reveal from "./Reveal";

const input = "w-full px-4 py-2.5 text-sm rounded-lg border border-line bg-transparent outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition";

export default function Contact() {
  const { t } = useI18n();

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const subject = encodeURIComponent(`Portfolio: ${f.get("name")}`);
    const body = encodeURIComponent(`${f.get("msg")}\n\n${f.get("email")}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    ["Email", contact.email, `mailto:${contact.email}`],
    ["Telegram", "@Egamberdiyev_J", contact.telegram],
    ["GitHub", "egamberd1yev", contact.github],
    ["LinkedIn", "Jorabek Egamberdiyev", contact.linkedin],
  ];

  return (
    <Section id="contact" title={t.contact.title} sub={t.contact.sub}>
      <div className="grid gap-6 md:grid-cols-2 bg-card rounded-2xl p-6 sm:p-8">
        <Reveal>
          {links.map(([name, text, href]) => (
            <a key={name} href={href} target="_blank" rel="noreferrer" className="flex justify-between py-4 text-sm border-b border-line hover:text-accent hover:pl-2 transition-all">
              <span className="font-medium">{name}</span>
              <span className="text-muted text-xs">{text}</span>
            </a>
          ))}
        </Reveal>
        <Reveal delay={150}>
          <form onSubmit={onSubmit} className="space-y-3">
            <input name="name" required placeholder={t.contact.name} className={input} />
            <input name="email" type="email" required placeholder={t.contact.email} className={input} />
            <textarea name="msg" required rows={4} placeholder={t.contact.msg} className={input} />
            <button className="px-6 py-2.5 rounded-lg bg-accent text-white text-sm font-semibold uppercase hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/40 transition">
              {t.contact.send}
            </button>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
