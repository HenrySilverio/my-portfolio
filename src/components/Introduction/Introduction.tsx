import Image from "next/image";

import translations from "./translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Introduction() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-center">
      <Image
        src="/profile.png"
        alt="Henrique"
        width={250}
        height={250}
        className="rounded-lg shadow-lg rotate-3"
      />
      <div>
        <h1 className="text-5xl font-bold leading-tight relative">
          {t.role}
          <span className="block w-32 h-6 bg-green-500 absolute top-[-10px] left-[-10px] z-[-1]"></span>
        </h1>
        <p className="mt-4 text-lg text-gray-500">{t.location}</p>

      </div>
    </section>
  );
}