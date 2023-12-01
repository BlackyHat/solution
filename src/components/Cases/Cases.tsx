import CasesSlider from './components/CasesSlider/CasesSlider';
import scss from './Cases.module.scss';

const Cases = () => {
  return (
    <section className={scss.section} id="cases-section">
      <CasesSlider />
    </section>
  );
};

export default Cases;
