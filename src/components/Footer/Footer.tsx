import Logo from '@components/Logo/Logo';

import ArrowIcon from '@assets/icons/icon-arrow.svg?react';
import scss from './Footer.module.scss';
import SocialLinks from '../ui/SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <footer className={scss.footer}>
      <Logo />
      <a href="#main-section" className={scss.arrowUp}>
        <ArrowIcon />
      </a>
      <SocialLinks />
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
