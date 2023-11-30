import scss from './Cases.module.scss';
import CasesSlider from './components/CasesSlider/CasesSlider';

const Cases = () => {
  return (
    <section className={scss.section} id="cases-section">
      <h2 className={scss.sectionTitle}>Successful cases of our company </h2>
      <CasesSlider />
    </section>
  );
};

export default Cases;
