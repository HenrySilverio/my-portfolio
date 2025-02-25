import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";


const translations = {
  en: { experience: "Experience", education: "Education", contact: "Contact" },
  pt: { experience: "Experiência", education: "Formação", contact: "Contato" },
};

export default function Header() {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center">
      <h1 className="text-5xl font-bold text-secondary">Henrique Silverio</h1>
      <nav>
        <ul className="flex gap-6 text-lg font-bold text-lightText">
          <li><Link href="#experience">{t.experience}</Link></li>
          <li><Link href="#education">{t.education}</Link></li>
          <li><Link href="#contact">{t.contact}</Link></li>
        </ul>
      </nav>
      <div className="relative inline-flex items-center justify-center gap-4 group">
        <div className="absolute inset-0 duration-1000 opacity-60 transition-all bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-400 rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
        <select
          className="group relative inline-flex items-center justify-center text-base rounded-xl bg-gray-900 px-8 py-3 font-semibold text-white transition-all duration-200 hover:bg-gray-800 hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-600/30 focus:outline-none"
          value={language}
          onChange={(e) => setLanguage(e.target.value as "en" | "pt")}
        >
          <option value="en">EN 🇺🇸</option>
          <option value="pt">PT 🇧🇷</option>
        </select>
      </div>
    </header>
  );
}