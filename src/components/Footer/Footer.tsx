import Logo from '@components/Logo/Logo';

import ArrowIcon from '@assets/icons/icon-arrow.svg?react';
import FbIcon from '@assets/icons/icon-fb.svg?react';
import InstaIcon from '@assets/icons/icon-instagram.svg?react';

import scss from './Footer.module.scss';

const Footer = () => {
  const smoothScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <footer className={scss.footer}>
      <div className={scss.logoWrapper}>
        <Logo />
        <a
          href="#main-section"
          onClick={() => smoothScrollTo('main-section')}
          className={scss.arrowUp}
        >
          <ArrowIcon />
        </a>
      </div>
      <ul className={scss.socialList}>
        <li>
          <a href="" className={scss.socialLink}>
            <FbIcon />
          </a>
        </li>
        <li>
          <a href="" className={scss.socialLink}>
            <InstaIcon />
          </a>
        </li>
      </ul>
      <ul className={scss.addressList}>
        <li>
          <p>79005, Ukraine, Lvivstreet. Shota Rustaveli, 7</p>
        </li>
        <li>
          <p>office@ecosolution.com</p>
        </li>
        <li>
          <p>ecosolution © 2023</p>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
