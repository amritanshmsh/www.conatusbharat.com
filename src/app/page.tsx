import ForSchool from "./components/ForSchool";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Storyline from "./components/Storyline";


export default function Home() {
  return (
    <>
      <div>
      
        <Hero />
        <Storyline />
        <Products />
        <ForSchool />
      </div>
    </>
  );
}