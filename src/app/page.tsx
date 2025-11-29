import Aboutus from "./components/Aboutus";
import FaqSection from "./components/Faqsection";
import FinalSection from "./components/10.FinalSection";
import Foundernote from "./components/Foundernote";
import Products from "./components/Products";
import Storyline from "./components/Storyline";
import Homepage from "./components/Homepage";


export default function Home() {
  return (
    <>
      <div>
      
        <Homepage />
        <Aboutus />
        <Products />
        <Foundernote />
        <FaqSection />
        <FinalSection />
      </div>
    </>
  );
}