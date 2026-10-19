import Reveal from "./Reveal";

export default function Section({ id, title, sub, children }) {
  return (
    <section id={id} className="scroll-mt-6 py-14">
      <Reveal className="text-center mb-10">
        <h2 className="text-3xl font-bold">{title}</h2>
        {sub && <p className="mt-2 text-sm text-muted max-w-md mx-auto">{sub}</p>}
      </Reveal>
      {children}
    </section>
  );
}
