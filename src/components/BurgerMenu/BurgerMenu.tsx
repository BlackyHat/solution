import { FC } from 'react';
import Modal from '@components/ui/Modal/Modal';

import CloseIcon from '@assets/icons/icon-close.svg?react';
import ArrowIcon from '@assets/icons/icon-arrow.svg?react';
import FbIcon from '@assets/icons/icon-fb.svg?react';
import InstaIcon from '@assets/icons/icon-instagram.svg?react';

import scss from './BurgerMenu.module.scss';
import NAV from '@/libs/content/nav';

interface BurgerMenuProps {
  onClose: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div className={scss.wrapper}>
        <div>
          <button type="button" className={scss.closeBtn} onClick={onClose}>
            <CloseIcon className={scss.closeBtnIcon} />
            <span>close</span>
          </button>
          <ul className={scss.navList}>
            {NAV.length > 0 &&
              NAV.map(({ title, link }) => (
                <li>
                  <a href={`#${link}-section`} title={title} onClick={onClose}>
                    <span>{title}</span>
                    <ArrowIcon className={scss.arrowBtnIcon} />
                  </a>
                </li>
              ))}
          </ul>
        </div>
        <ul className={scss.socialList}>
          <li>
            <a href="" className={scss.socialLink}>
              <FbIcon className={scss.socialFB} />
            </a>
          </li>
          <li>
            <a href="" className={scss.socialLink}>
              <InstaIcon className={scss.socialInsta} />
            </a>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

export default BurgerMenu;
