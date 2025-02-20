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
      <h1 className="text-5xl font-bold text-black">Henrique Silverio</h1>
      <nav>
        <ul className="flex gap-6 text-lg font-bold text-gray-700">
          <li><Link href="#experience">{t.experience}</Link></li>
          <li><Link href="#education">{t.education}</Link></li>
          <li><Link href="#contact">{t.contact}</Link></li>
        </ul>
      </nav>
      <select
        className="bg-gray-200 text-gray-800 p-3 rounded font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-300 focus:outline-none shadow border border-gray-300"
        value={language}
        onChange={(e) => setLanguage(e.target.value as "en" | "pt")}
      >
        <option value="en">EN 🇺🇸</option>
        <option value="pt">PT 🇧🇷</option>
      </select>
    </header>
  );
}