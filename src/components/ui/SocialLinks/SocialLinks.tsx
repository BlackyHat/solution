import { FC } from 'react';
import FbIcon from '@assets/icons/icon-fb.svg?react';
import InstaIcon from '@assets/icons/icon-instagram.svg?react';
import scss from './SocialLinks.module.scss';

interface SocialLinksProps {
  color?: 'primary' | 'white';
  linkStyle?: { [x: string]: string };
}

const SocialLinks: FC<SocialLinksProps> = ({
  color = 'primary',
  linkStyle,
}) => {
  return (
    <ul className={scss.socialList}>
      <li>
        <a
          href="#"
          className={`${scss.socialLink} ${scss[color] || ''}`}
          style={Object.assign({}, linkStyle && linkStyle)}
          rel="noreferrer"
        >
          <FbIcon className={scss.socialFB} aria-label="facebook" />
        </a>
      </li>
      <li>
        <a
          href="#"
          className={`${scss.socialLink} ${scss[color] || ''}`}
          style={Object.assign({}, linkStyle && linkStyle)}
          rel="noreferrer"
        >
          <InstaIcon className={scss.socialInsta} aria-label="instagram" />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
