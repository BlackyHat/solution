import { useState, useEffect } from 'react';
import ELECTRICITY_DATA from '@/libs/content/electricity';
import scss from './Elictricity.module.scss';

const Elictricity = () => {
  const [units, setUnits] = useState(ELECTRICITY_DATA.value);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUnits((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const getFormattedValue = () =>
    String(units).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <section className={scss.section} id="#electricity-section">
      <h2 className={scss.sectionTitle}>{ELECTRICITY_DATA.title}</h2>
      <div className={scss.separator}></div>
      <p className={scss.label}>
        {getFormattedValue()}
        <span className={scss.units}>{ELECTRICITY_DATA.units}</span>
      </p>
    </section>
  );
};

export default Elictricity;
