import LogoIcon from '@assets/logo-icon.svg?react';
import LogoLabel from '@assets/logo-label.svg?react';
import LogoBadge from '@assets/logo-badge.svg?react';
import scss from './Logo.module.scss';

const Logo = () => {
  return (
    <ul className={scss.wrapper}>
      <li>
        <LogoIcon className={scss.logo} aria-label="Eco Solution Logo" />
      </li>
      <li>
        <LogoLabel className={scss.label} aria-label="Eco Solution" />
      </li>
      <li>
        <LogoBadge className={scss.badge} aria-label="Green Energy for life" />
      </li>
    </ul>
  );
};

export default Logo;