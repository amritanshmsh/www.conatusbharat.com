import Aboutus from './components/Aboutus';
import FaqSection from './components/Faqsection';
import FinalSection from './components/10.FinalSection';
import Foundernote from './components/Foundernote';
import Homepage from './components/Homepage';
import Marquee from './components/Marquee';
import Pillars from './components/Pillars';
import Products from './components/Products';

export default function Home() {
  return (
    <>
      <Homepage />

      <Marquee
        items={[
          'See the student',
          'Adapt to them',
          'Lift the teacher',
          'Build belief',
          'Race ko choro',
          'Wonder',
        ]}
        tone="ink"
      />

      <Aboutus />
      <Products />

      <Marquee
        items={[
          'NEP 2020',
          'Grades 3 — 12',
          'NCERT-aligned',
          'CBSE',
          'Made in India',
          'For every child',
        ]}
        tone="paper"
        reverse
      />

      <Pillars />
      <Foundernote />
      <FaqSection />
      <FinalSection />
    </>
  );
}
