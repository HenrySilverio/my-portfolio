import ReactMarkdown from "react-markdown";
import translations from "./translations";
import { useLanguage } from "@/context/LanguageContext";

export default function Experience() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="experience" className="max-w-[1200px] mx-auto py-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-[100px] mt-10">
        <div>
          <h2 className="break-all text-[8rem] font-extrabold uppercase text-customGray-500 leading-[1] tracking-tight max-w-[4ch]">
            {t.title}
          </h2>
        </div>

        <div>
          <div className="mb-10 text-darkText">
            <ReactMarkdown>{t.description}</ReactMarkdown>
          </div>

          <div className="space-y-8">
            {t.jobs.map((job, index) => (
              <div
                key={index}
                className="relative bg-[#f5f5f5] p-5 rounded shadow-lg grid grid-cols-[80px_1fr] gap-4 
                  before:content-[''] before:block before:w-[4px] before:h-[20px] 
                  before:bg-gradient-to-b before:from-[#b6f829] before:to-[#67dd0a] 
                  before:absolute before:top-[20px] before:left-[-4px]"
              >
                <span className="absolute top-[22px] left-[-100px] w-[80px] text-right text-[#525252] text-sm hidden md:block">
                  {job.year}
                </span>

                <h3 className="col-span-2 text-lg font-bold leading-[1.1] text-black">
                  {job.company}
                </h3>

                <span className="col-span-2 text-gray-600 text-sm font-semibold">
                  {job.role}
                </span>

                <p className="col-span-2 text-[1.3rem] leading-[1.33] max-w-[50ch] mb-6 text-[#525252]">
                  {job.description}
                </p>

                <ul className="col-span-2 flex flex-wrap gap-[10px]">
                  {job.skills.map((skill, idx) => (
                    <li
                      key={idx}
                      className="text-sm leading-[1.4] rounded bg-white py-[5px] px-[10px] shadow border border-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}