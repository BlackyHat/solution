import { useState, useEffect } from 'react';
import scss from './Elictricity.module.scss';

const UNITS = 1134147814;

const Elictricity = () => {
  const [units, setUnits] = useState(UNITS);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setUnits((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  const getFormattedValue = () =>
    String(units).replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  return (
    <section className={scss.section}>
      <h2 className={scss.sectionTitle}>
        Electricity we produced for all time
      </h2>
      <div className={scss.separator}></div>
      <p className={scss.label}>
        {getFormattedValue()}
        <span className={scss.units}>kWh</span>
      </p>
    </section>
  );
};

export default Elictricity;
