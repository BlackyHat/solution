import ResponsiveImg from '@components/ui/ResponsiveImg';
import Separator from '@components/ui/Separator/Separator';
import ArrowIcon from '@assets/icons/icon-arrow.svg?react';

import HERO_CONTENT from '@/libs/content/hero';
import CONTACTS from '@/libs/content/contacts';

import scss from './Main.module.scss';

const Main = () => {
  return (
    <section className={scss.section} id="main-section">
      <h1 className={scss.mainTitle}> {HERO_CONTENT.title}</h1>
      <p className={scss.mainInfo}>{HERO_CONTENT.description}</p>
      <button type="button" className={scss.btnMore}>
        Learn more
        <ArrowIcon className={scss.arrowIcon} aria-label="arrow down" />
        {/* <span className={scss.arrowIcon} aria-label="Arrow right" /> */}
      </button>
      <Separator />
      <ul className={scss.valuesList}>
        <li>
          <span className={scss.address}>{CONTACTS.address}</span>
        </li>
        <li>
          <span className={scss.email}>{CONTACTS.email}</span>
        </li>
        <li>
          <span className={scss.rights}>{CONTACTS.rights}</span>
        </li>
      </ul>
      <ResponsiveImg name="hero" />
    </section>
  );
};

export default Main;
