import Logo from '../Logo/Logo';
import ArrowIcon from '@assets/arrow2.svg?react';

import FbIcon from '@assets/facebook-icon.svg?react';
import InstaIcon from '@assets/instagram-icon.svg?react';

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
