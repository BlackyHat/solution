import Logo from '@components/Logo/Logo';

import ArrowIcon from '@assets/icons/icon-arrow.svg?react';
import CONTACTS_DATA from '@/libs/content/contacts';

import scss from './Footer.module.scss';
import SocialLinks from '../ui/SocialLinks/SocialLinks';

const Footer = () => {
  return (
    <div className={scss.container}>
      <footer className={scss.footer}>
        <Logo />
        <a href="#main-section" className={scss.arrowUp}>
          <ArrowIcon aria-label="arrow up" />
        </a>
        <SocialLinks />
        <ul className={scss.addressList}>
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
            <p>ecosolution © 2023</p>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Footer;
