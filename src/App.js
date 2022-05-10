import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import IndexNavbar from "./components/Navbars/IndexNavbar";
import Pages from "./components/Pages/Pages";
import Services from "./components/Services/Services";
import ServicesDetailsIndex from "./components/ServicesDetails/ServicesDetailsIndex"

function App() {
  return (
    <>
      <IndexNavbar />
      <HeroSection />
      <Services />
      <ServicesDetailsIndex />
      <Pages />
      <Footer />
    </>
  );
}

export default App;