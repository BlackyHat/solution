import CasesSlider from './components/CasesSlider/CasesSlider';
import CASES from '@/libs/content/cases';
import scss from './Cases.module.scss';

const Cases = () => {
  return (
    <section className={scss.section} id="cases-section">
      <h2 className={scss.sectionTitle}>{CASES.title}</h2>
      <CasesSlider />
    </section>
  );
};

export default Cases;
