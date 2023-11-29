import ResponsiveImg from '../ui/ResponsiveImg';
import Separator from '../ui/Separator/Separator';
import scss from './Main.module.scss';

const Main = () => {
  return (
    <section className={scss.section} id="main-section">
      <h1 className={scss.mainTitle}>RENEWABLE ENERGY For any task</h1>
      <p className={scss.mainInfo}>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </p>
      <button type="button" className={scss.btnMore}>
        Learn more
        <span className={scss.arrowIcon} aria-label="Arrow right" />
      </button>
      <Separator />
      <ul className={scss.valuesList}>
        <li>
          <span className={scss.address}>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </span>
        </li>
        <li>
          <span className={scss.email}>office@ecosolution.com</span>
        </li>
        <li>
          <span className={scss.rights}>ecosolution © 2023</span>
        </li>
      </ul>
      <ResponsiveImg name="hero" />
    </section>
  );
};

export default Main;
