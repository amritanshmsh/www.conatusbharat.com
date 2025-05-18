import Aboutus from "./components/Aboutus";
import FaqSection from "./components/Faqsection";
import FinalSection from "./components/10.FinalSection";
import ForSchool from "./components/ForSchool";
import Foundernote from "./components/Foundernote";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Storyline from "./components/Storyline";


export default function Home() {
  return (
    <>
      <div>
      
        <Hero />
        <Aboutus />
        <Products />
        <Foundernote />
{/* 
        <ForSchool /> */}
        <FaqSection />
        <FinalSection />
      </div>
    </>
  );
}