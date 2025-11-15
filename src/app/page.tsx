import Aboutus from "./components/Aboutus";
import FaqSection from "./components/Faqsection";
import FinalSection from "./components/10.FinalSection";
import ForSchool from "./components/ForSchool";
import Foundernote from "./components/Foundernote";
import Products from "./components/Products";
import Storyline from "./components/Storyline";
import Homepage from "./components/Homepage";
import WhySchools from "./components/WhySchools";


export default function Home() {
  return (
    <>
      <div>
      
        <Homepage />
        <Aboutus />
        <Products />
        <WhySchools />
        <Foundernote />
{/* 
        <ForSchool /> */}
        <FaqSection />
        <FinalSection />
      </div>
    </>
  );
}