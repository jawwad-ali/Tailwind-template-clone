import HeroSection from "./components/HeroSection/HeroSection";
import IndexNavbar from "./components/Navbars/IndexNavbar";
import Services from "./components/Services/Services";
import ServicesDetailsIndex from "./components/ServicesDetails/ServicesDetailsIndex"

function App() {
  return (
    <>
      <IndexNavbar />
      <HeroSection />
      <Services />
      <ServicesDetailsIndex />
    </>
  );
}

export default App;