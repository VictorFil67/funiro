import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ProductSection } from "./components/ProductSection/ProductSection";
import { TestimonialsSection } from "./components/TestimonialsSection/TestimonialsSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <ProductSection />
      <TestimonialsSection />
    </>
  );
}

export default App;
