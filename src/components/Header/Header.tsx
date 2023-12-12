import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BurgerMenu from '@components/BurgerMenu/BurgerMenu';
import Logo from '@components/Logo/Logo';
import ArrowIcon from '@assets/icons/icon-arrow.svg?react';

import scss from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };
  const onClose = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className={scss.header}>
        <Logo />
        <nav>
          <ul className={scss.navList}>
            <li>
              <button type="button" className={scss.btnMenu} onClick={onOpen} />
            </li>
            <li>
              <a href="#contact-us-section" className={scss.btnContact}>
                Get in touch
                <ArrowIcon className={scss.arrowIcon} aria-label="arrow down" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {isOpen && <BurgerMenu onClose={onClose} />}
      </AnimatePresence>
    </>
  );
};

export default Header;
