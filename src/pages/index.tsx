import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Experience from "@/components/Experience/Experience";
import Introduction from "@/components/Introduction/Introduction";

export default function Home() {
  return (
    <main className="bg-lightText text-primary min-h-screen">
      <Header />
      <Introduction />
      <Experience />
      {/* <Education /> */}
      <Footer />
    </main>
  );
}