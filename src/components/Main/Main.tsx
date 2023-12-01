import ResponsiveImg from '@/components/ui/ResponsiveImg/ResponsiveImg';
import Separator from '@components/ui/Separator/Separator';
import ArrowIcon from '@assets/icons/icon-arrow.svg?react';
import CONTACTS_DATA from '@/libs/content/contacts';
import HERO_CONTENT from '@/libs/content/hero';
import CONTACTS from '@/libs/content/contacts';

import scss from './Main.module.scss';

const Main = () => {
  return (
    <section className={scss.section} id="main-section">
      <div className={scss.titleWrapper}>
        <h1 className={scss.mainTitle}> {HERO_CONTENT.title}</h1>
        <p className={scss.mainInfo}>{HERO_CONTENT.description}</p>
        <a href="#cases-section" className={scss.btnMore}>
          Learn more
          <ArrowIcon className={scss.arrowIcon} aria-label="arrow down" />
        </a>
      </div>
      <Separator />
      <ul className={scss.contactList}>
        <li>
          <a
            href={`http://maps.google.com/?q=:${CONTACTS_DATA.address}`}
            target="_blank"
            rel="noreferrer"
          >
            {CONTACTS_DATA.address}
          </a>
        </li>
        <li>
          <a href={`mailto:${CONTACTS_DATA.email}`}> {CONTACTS_DATA.email}</a>
        </li>
        <li>
          <span className={scss.rights}>{CONTACTS.rights}</span>
        </li>
      </ul>
      <ResponsiveImg name="hero" alt="wind-turbine-clean-energy" />
    </section>
  );
};

export default Main;
