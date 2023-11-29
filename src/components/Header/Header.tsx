import Logo from '../Logo/Logo';
import scss from './Header.module.scss';

const Header = () => {
  return (
    <div className={scss.header}>
      <Logo />
      <nav>
        <ul className={scss.navList}>
          <li>
            <button className={scss.btnMenu} />
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
  );
};

export default Header;
