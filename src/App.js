import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ProductSection } from "./components/ProductSection/ProductSection";
import { TestimonialsSection } from "./components/TestimonialsSection/TestimonialsSection";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <ProductSection />
      <TestimonialsSection />
      <Footer />
    </>
  );
}

export default App;
