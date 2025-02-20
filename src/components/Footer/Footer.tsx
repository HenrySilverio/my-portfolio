import { useLanguage } from "@/context/LanguageContext";


const translations = {
  en: {
    contactMessage: "I'm open to new projects and opportunities. Get in touch with me!",
    contact: "Contact",
  },
  pt: {
    contactMessage: "Estou aberto para novos projetos e oportunidades. Entre em contato comigo!",
    contact: "Contato",
  },
};

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer id="contact" className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <p className="text-xl text-gray-300">{t.contactMessage}</p>
        <ul className="space-y-4">
          <li className="text-3xl font-bold">silveriohenriqueb@gmail.com</li>
          <li className="text-3xl font-bold">+55 34 9 8441-6591</li>
          <li>
            <a href="https://www.linkedin.com/in/henrique-b-silverio/" className="text-white text-xl hover:underline">
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/HenrySilverio" className="text-white text-xl hover:underline">
              GitHub
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center text-gray-500 text-sm mt-10">© {new Date().getFullYear()} Henrique Silverio - All rights reserved.</p>
    </footer>
  );
}