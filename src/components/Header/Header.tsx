import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Logo from '../Logo/Logo';
import scss from './Header.module.scss';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <>
      <div className={scss.header}>
        <Logo />
        <nav>
          <ul className={scss.navList}>
            <li>
              <button className={scss.btnMenu} onClick={onOpen} />
            </li>
            <li>
              <button type="button" className={scss.btnContact}>
                Get in touch
                <span className={scss.arrowIcon} aria-label="Arrow down" />
              </button>
            </li>
          </ul>
        </nav>
      </div>
      {isOpen && <BurgerMenu onClose={onClose} />}
    </>
  );
};

export default Header;
