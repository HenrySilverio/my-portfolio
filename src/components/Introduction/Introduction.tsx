import Image from "next/image";
import translations from "./translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Introduction() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 items-center">
      <Image
        src="/perfil.png"
        alt="Henrique"
        width={450}
        height={450}
        className="rounded-lg shadow-lg rotate-3"
      />
      <div
        className="relative bg-black p-3 rounded-lg cursor-pointer text-white
          before:content-[''] before:absolute before:inset-0 before:left-[-5px] before:mx-auto before:w-[calc(100%+10px)] before:h-[calc(100%+10px)] before:rounded-[10px] before:bg-[linear-gradient(-45deg,_#e81cff_0%,_#40c9ff_100%)] before:z-[-10] before:pointer-events-none before:transition-all before:duration-600 before:ease-[cubic-bezier(0.175,0.885,0.32,1.275)]
          after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(-45deg,_#fc00ff_0%,_#00dbde_100%)] after:z-[-1] after:scale-95 after:filter after:blur-[20px]"
      >
        <h1 className="text-5xl font-bold leading-tight relative">
          {t.role}
        </h1>
        <p className="mt-4 text-lg font-bold text-gray-500">{t.location}</p>
      </div>
    </section>
  );
}