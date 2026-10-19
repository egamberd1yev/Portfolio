import { useI18n } from "./i18n";
import Sidebar from "./components/Sidebar";
import Rail from "./components/Rail";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

export default function App() {
  const { t } = useI18n();
  return (
    <div className="min-h-screen text-ink transition-colors">
      <div className="max-w-7xl mx-auto p-3 lg:p-6 lg:flex lg:gap-6 items-start">
        <Sidebar />
        <main className="flex-1 min-w-0 pb-24 lg:pb-0 mt-3 lg:mt-0">
          <Hero />
          <Services />
          <Projects />
          <Blog />
          <Contact />
          <p className="py-8 text-center text-xs text-muted">© {new Date().getFullYear()} Jo'rabek. {t.footer}</p>
        </main>
        <Rail />
      </div>
    </div>
  );
}