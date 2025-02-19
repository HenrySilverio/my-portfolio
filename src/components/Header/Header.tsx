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
      <h1 className="text-3xl font-bold text-black">Henrique Silverio</h1>
      <nav>
        <ul className="flex gap-6 text-gray-700">
          <li><Link href="#experience">{t.experience}</Link></li>
          <li><Link href="#education">{t.education}</Link></li>
          <li><Link href="#contact">{t.contact}</Link></li>
        </ul>
      </nav>
      <select className="bg-gray-200 p-2 rounded" value={language} onChange={(e) => setLanguage(e.target.value as "en" | "pt")}>
        <option value="en">EN</option>
        <option value="pt">PT</option>
      </select>
    </header>
  );
}