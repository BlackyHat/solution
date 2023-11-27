import css from './Header.module.css';
import Logo from '../../assets/logo.svg?react';

const Header = () => {
  return (
    <div className={css.header}>
      <Logo className={css.headerLogo} aria-label="Eco Solution Logo" />
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li>
            <button></button>
          </li>
          <li>
            <button type="button">Get in touch</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
