import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Experience from "@/components/Experience/Experience";
import Introduction from "@/components/Introduction/Introduction";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-lightText bg-gradient-to-r from-[#2e193e] via-[#0d082a] to-[#0a2628]">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 w-full">
        <Header />
        <Introduction />
        <Experience />
        {/* <Education /> */}
        <Footer />
      </div>
    </main>
  );
}