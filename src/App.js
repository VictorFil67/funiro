import "./App.css";
import GlobalStyles from "./styles/GlobalStyles";
import { Header } from "./components/Header/Header";
import { HeroSection } from "./components/HeroSection/HeroSection";
import { ProductSection } from "./components/ProductSection/ProductSection";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <HeroSection />
      <ProductSection />
    </>
  );
}

export default App;
