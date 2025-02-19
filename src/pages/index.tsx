import Header from "../components/Header/Header";
// import Introduction from "../components/Introduction/Introduction";
// import Experience from "../components/Experience/Experience";
// import Education from "../components/Education/Education";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-primary text-lightText min-h-screen">
      <Header />
      {/* <Introduction />
      <Experience />
      <Education /> */}
      <Footer />
    </main>
  );
}